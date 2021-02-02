import React, {Fragment, useState} from 'react'
import {
    AcceptedStatus,
    Maybe,
    Qc_Acceptance_Value,
    ReadyForQcSamplesListQuery,
    Sample,
    Sample_Rejection_Reason_Fields,
    useQc_AcceptSampleMutation,
    useQc_RejectSampleMutation
} from "../../generated/graphql"
import './styles.css'
import {useAlert} from 'react-alert'
import client from "../../index";


interface Props {
    data: ReadyForQcSamplesListQuery;
    filter_term: string;
    set_filter_term: (b: string) => void;
    keyPressed: (event: React.KeyboardEvent<HTMLDivElement>) => void;
    handleNameFilter: () => void;
    handleReset: () => void;
    user_name: string;
    user_graph_id: string;
    refetch: () => void;

}

const className = 'SlideQC';


const SlideQC: React.FC<Props> = ({
                                      data, filter_term, set_filter_term, keyPressed, handleNameFilter,
                                      handleReset, user_name, user_graph_id, refetch
                                  }) => {
    const [selected_sample, set_selected_sample] = useState('');
    const [selected_sample_graph_id, set_selected_sample_graph_id] = useState('');
    const [selected_sample_obj, set_selected_sample_obj] = useState<Maybe<Sample>>(null);
    const [editing, set_editing] = React.useState(false);

    const [percent_neoplastic_str, set_percent_neoplastic_str] = useState('');
    const [percent_neoplastic, set_percent_neoplastic] = useState(0);

    const [sample_size_str, set_sample_size_str] = useState('');
    const [sample_size, set_sample_size] = useState(0);
    const [diagnosis, set_diagnosis] = useState('');

    const [requires_macrodissection, set_requires_macrodissection] = React.useState(false);
    const [comment_str, set_comment_str] = React.useState('');

    const alert = useAlert();


    const [Qc_AcceptSampleMutation,{data:acc_data, loading:acc_loading, error:acc_error}] = useQc_AcceptSampleMutation({
        variables:{accepted_by:'',diagnosis:'',macro_dissection_required:false,old_status_graph_id:'',percent_neoplastic_cells:0.0,qc_acceptance_value:Qc_Acceptance_Value.Accepted,
        qc_date:'',qc_graph_id:'',sample_graph_id:'',sample_size_mm2:0.0,status:AcceptedStatus.Accepted,status_date:'',status_graph_id:''}})

    const [Qc_RejectSampleMutation,{data:rej_data, loading:rej_loading, error:rej_error}] = useQc_RejectSampleMutation({
        variables:{accepted_by:'',diagnosis:'',macro_dissection_required:false,old_status_graph_id:'',percent_neoplastic_cells:0.0,qc_acceptance_value:Qc_Acceptance_Value.Accepted,
            qc_date:'',qc_graph_id:'',sample_graph_id:'',sample_size_mm2:0.0,status:AcceptedStatus.Accepted,status_date:'',status_graph_id:'',
        comments:'',rejected_reason:Sample_Rejection_Reason_Fields.FailedQc}})

    function handleSample_select(sample_id: string, sample_graph_id: string) {
        set_selected_sample(sample_id);
        set_selected_sample_graph_id(sample_graph_id);

        if (data != null && data.Sample != null && data.Sample.length > 0) {
            let index: number;
            for (index = 0; index < data.Sample.length; index++) {
                let sample = data.Sample[index];
                if (sample != null && sample.id === sample_graph_id) {
                    // @ts-ignore
                    set_selected_sample_obj(sample);
                }
            }
        }
    }

    const handle_sample_size_change = async (targetValue: string) => {
        let valid = (targetValue.match(/^-?\d*(\.\d+)?$/));
        if (valid) {
            let num: number = parseFloat(targetValue)
            console.log(num)
            let s: string = num.toFixed(2);
            console.log(s)
            set_sample_size_str(s)
        } else {
            set_sample_size_str('0')
        }

    }
    function handle_percent_neoplastic_fail() {
        let s = comment_str
        if (s!==''){
            s = s + ' '
        }
        s = s + "The Percent Neoplastic cells (" + percent_neoplastic_str +
            "%) is below the QC cut-off (20%)."
        set_comment_str(s);
    }

    const ss_cutoff_str = '5 mm' + '\u00B2'
    const ss_cutoff_label = 'QC cut-off = 5 mm' + '\u00B2'

    function handle_sample_size_str_fail() {
        let s = comment_str
        if (s!==''){
            s = s + ' '
        }
        s = s + "The Sample Size (" + sample_size_str + ' mm' + '\u00B2' +
            ") is below the QC cut-off (" + ss_cutoff_str + ').'
        set_comment_str(s);

    }

    function handle_diagnosis() {

    }

    function requires_macrodissection_yes() {
        set_requires_macrodissection(true);
    }

    function requires_macrodissection_no() {
        set_requires_macrodissection(false)
    }
    const now_as_string = (): string => {
        let date_ob = new Date();
        let date = ("0" + date_ob.getDate()).slice(-2);
        let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
        let year = date_ob.getFullYear();
        let pm = 'AM'
        let h = date_ob.getHours()
        if (h > 12) {
            h = h - 12;
            pm = 'PM'
        }
        let hour = ("0" + (h)).slice(-2);
        let minutes = ("0" + (date_ob.getMinutes() + 1)).slice(-2);

        let n_str = month + '-' + date + '-' + year + ' ' + hour + ':' + minutes + ' ' + pm
        return n_str;
    }
    const get_number_as_two_digit_string = (n: Number): string => {
        let s: string = n.toString()
        if (s.length === 1) {
            s = '0' + s
        }
        return s
    }
    const get_unique_graph_id = (tag:string): string => {
        const now: Date = new Date();
        // getMonth is zero based so add 1!
        let dateTimeString: string = now.getFullYear().toString() +  get_number_as_two_digit_string(1+now.getMonth()) +
            get_number_as_two_digit_string(now.getDate()) + get_number_as_two_digit_string(now.getHours()) +
            get_number_as_two_digit_string(now.getMinutes()) + get_number_as_two_digit_string(now.getSeconds()) + get_number_as_two_digit_string(now.getMilliseconds());
        let graph_id = tag + dateTimeString;
        return graph_id
    }

    const handleAccept = async () => {
        let valid = (sample_size_str.match(/^-?\d*(\.\d+)?$/));
        if (valid && sample_size_str!='') {
            let ss: number = parseFloat(sample_size_str);
            set_sample_size(ss);
            valid = (percent_neoplastic_str.match(/^-?\d*(\.\d+)?$/));
            if (valid && percent_neoplastic_str!='') {
                let neo: number = parseFloat(percent_neoplastic_str);
                set_percent_neoplastic(neo);
                if (diagnosis!='' && selected_sample_obj!=null){
                    let accepted_date = now_as_string();
                    let user_id = user_graph_id;
                    let status_graph_id = get_unique_graph_id('status_')
                    let qc_graph_id = get_unique_graph_id('slide_qa_')
                    await Qc_AcceptSampleMutation({
                        variables:{accepted_by:user_id,diagnosis:diagnosis,macro_dissection_required:requires_macrodissection,
                            old_status_graph_id:selected_sample_obj.status.id,percent_neoplastic_cells:percent_neoplastic,
                            qc_acceptance_value:Qc_Acceptance_Value.Accepted,
                            qc_date:accepted_date,qc_graph_id:qc_graph_id,sample_graph_id:selected_sample_graph_id,sample_size_mm2:sample_size,
                            status:AcceptedStatus.Accepted,status_date:accepted_date,status_graph_id:status_graph_id}})
                    set_selected_sample('');
                    set_selected_sample_graph_id('');
                    set_selected_sample_obj(null);
                    await client.resetStore();
                    refetch();

                }
                else {
                    alert.show("Please supply Diagnosis")
                }
            }
            else {
                alert.show("Percent Neoplastic is invalid!")
            }
        }
        else {
            alert.show("Sample size is invalid!")
        }
    }

    // function handleRejectSample() {
    //
    // }
    const handleRejectSample = async () => {
        let valid = (sample_size_str.match(/^-?\d*(\.\d+)?$/));
        if (valid && sample_size_str!='') {
            let ss: number = parseFloat(sample_size_str);
            set_sample_size(ss);
            valid = (percent_neoplastic_str.match(/^-?\d*(\.\d+)?$/));
            if (valid && percent_neoplastic_str!='') {
                let neo: number = parseFloat(percent_neoplastic_str);
                set_percent_neoplastic(neo);
                if (diagnosis!='' && selected_sample_obj!=null){
                    let accepted_date = now_as_string();
                    let user_id = user_graph_id;
                    let status_graph_id = get_unique_graph_id('status_')
                    let qc_graph_id = get_unique_graph_id('slide_qa_')
                    await Qc_RejectSampleMutation({
                        variables:{accepted_by:user_id,diagnosis:diagnosis,macro_dissection_required:requires_macrodissection,
                            old_status_graph_id:selected_sample_obj.status.id,percent_neoplastic_cells:percent_neoplastic,
                            qc_acceptance_value:Qc_Acceptance_Value.Rejected,
                            qc_date:accepted_date,qc_graph_id:qc_graph_id,sample_graph_id:selected_sample_graph_id,sample_size_mm2:sample_size,
                            status:AcceptedStatus.Rejected,status_date:accepted_date,status_graph_id:status_graph_id,
                        rejected_reason:Sample_Rejection_Reason_Fields.FailedQc,comments:comment_str}})
                    set_selected_sample('');
                    set_selected_sample_graph_id('');
                    set_selected_sample_obj(null);
                    await client.resetStore();
                    refetch();

                }
                else {
                    alert.show("Please supply Diagnosis")
                }
            }
            else {
                alert.show("Percent Neoplastic is invalid!")
            }
        }
        else {
            alert.show("Sample size is invalid!")
        }
    }
    return (
        <Fragment>
            <div className={className}></div>
            <div className={`${className}__Panel_Wrapper`}>
                <div className={`${className}__Panel`}>
                    <span className={`${className}__Filter`}>
                            <span>Search: </span>
                            <input className={`${className}__filter_text_input`} type="text"
                                   placeholder="Order contains..."
                                   name="subString" value={filter_term}
                                   onChange={e => set_filter_term(e.target.value)}
                                   onKeyPress={keyPressed}
                            />

                            <button className={'btn btn-primary'} onClick={handleNameFilter}>Filter</button>
                            <button className={'btn btn-primary'} onClick={handleReset}>Reset</button>
                        </span>
                </div>

                <div className={'Vertical_Spacer_10'}></div>
                <div className={`${className}__Table`}>
                    <div className={`${className}__Header_Row`}>
                        <div className={`${className}__Table_Cell_Medium`}>Patient Name</div>
                        <div className={`${className}__Table_Cell_Small`}>MRN</div>
                        <div className={`${className}__Table_Cell_Small`}>Sample ID</div>
                        <div className={`${className}__Table_Cell_Large`}>Ordered By</div>
                        <div className={`${className}__Table_Cell_Medium`}>Received Order ID</div>
                        <div className={`${className}__Table_Cell_Medium`}>Date Received</div>
                        <div className={`${className}__Table_Cell_Medium`}>Sample Type</div>
                    </div>
                </div>

                <div className={`${className}__Table_Container`}>

                    <div className={`${className}__Table`}>
                        {!!data.Sample && data.Sample.map((sample, i: number) =>
                            !!sample && sample.status.status==AcceptedStatus.ReadyForQc &&(
                                <div key={i} className={`${className}__Row`}
                                     onClick={() => handleSample_select(sample.sample_id, sample.id)}>
                                    <div
                                        className={sample.sample_id === selected_sample ? `${className}__Table_Cell_Medium_selected` : `${className}__Table_Cell_Medium`}
                                    >{sample.patient_name}</div>
                                    <div
                                        className={sample.sample_id === selected_sample ? `${className}__Table_Cell_Small_selected` : `${className}__Table_Cell_Small`}
                                    >{sample.mrn}</div>
                                    <div
                                        className={sample.sample_id === selected_sample ? `${className}__Table_Cell_Small_selected` : `${className}__Table_Cell_Small`}
                                    >{sample.sample_id} </div>
                                    <div
                                        className={sample.sample_id === selected_sample ? `${className}__Table_Cell_Large_selected` : `${className}__Table_Cell_Large`}
                                    >{sample.ordered_by.first_name} {sample.ordered_by.last_name} {sample.ordered_by.degrees} </div>
                                    <div
                                        className={sample.sample_id === selected_sample ? `${className}__Table_Cell_Medium_selected` : `${className}__Table_Cell_Medium`}
                                    >{sample.received_order_id} </div>
                                    <div
                                        className={sample.sample_id === selected_sample ? `${className}__Table_Cell_Medium_selected` : `${className}__Table_Cell_Medium`}
                                    >{sample.received_date} </div>
                                    <div
                                        className={sample.sample_id === selected_sample ? `${className}__Table_Cell_Medium_selected` : `${className}__Table_Cell_Medium`}
                                    >{sample.sample_type.name} </div>

                                </div>)
                        )
                        }
                    </div>
                </div>
            </div>
            {(selected_sample !== '' && selected_sample_obj) ?
                <div className={`${className}__Details_Panel`}><h3>Sample Details:</h3>

                    <div className={`${className}__DetailsTable`}>
                        <div className={`${className}__DetailsRow`}>

                            <div className={`${className}__DetailsCellLeft`}>Percent Neoplastic Cells:</div>
                            <div className={`${className}__DetailsCellRight`}>
                                <span><textarea className={`${className}__ShortTextarea`} name="percent_neoplastic"
                                                placeholder="QC cut-off = 20%" value={percent_neoplastic_str}
                                                onChange={(e) => {
                                                    set_percent_neoplastic_str(e.target.value)
                                                }}/></span></div>

                            <div className={`${className}__DetailsCellLeft`}>
                                <button value="percent_neoplastic" className="SlideQC__btn btn-primary"
                                        onClick={() => handle_percent_neoplastic_fail()}>Fail
                                </button>
                            </div>

                        </div>
                        <div className={`${className}__DetailsRow`}>

                            <div className={`${className}__DetailsCellLeft`}>Sample Size (mm&sup2;):</div>
                            <div className={`${className}__DetailsCellRight`}>
                                <span><textarea className={`${className}__ShortTextarea`} name="sample_size"
                                                placeholder={ss_cutoff_label}  value={sample_size_str}
                                                onChange={(e) => {
                                                    set_sample_size_str(e.target.value)
                                                }}/></span></div>

                            <div className={`${className}__DetailsCellLeft`}>
                                <button value="sample_size" className="SlideQC__btn btn-primary"
                                        onClick={() => handle_sample_size_str_fail()}>Fail
                                </button>
                            </div>

                        </div>
                        <div className={`${className}__DetailsRow`}>

                            <div className={`${className}__DetailsCellLeft`}>Diagnosis:</div>
                            <div className={`${className}__DetailsCellRight`}>
                                <span><textarea className={`${className}__ShortTextarea`} name="diagnosis"
                                                placeholder="Diagnosis..." value={diagnosis} onChange={(e) => {
                                    set_diagnosis(e.target.value)
                                }}/></span></div>

                            <div className={`${className}__DetailsCellLeft`}>
                                <button value="diagnosis" className="SlideQC__btn btn-primary"
                                        onClick={() => handle_diagnosis()}>OncoTree...
                                </button>
                            </div>

                        </div>
                        <div className={`${className}__DetailsRow`}>

                            <div className={`${className}__DetailsCellLeft`}>Macro-dissection required:</div>
                            <div className={`${className}__DetailsCellRight`}>
                                <span>

                              <label className={`${className}__radio_choice`}>
                                <input
                                    type="radio"
                                    name="yes"
                                    value="yes"
                                    className="form-check-input"
                                    checked={requires_macrodissection}
                                    onChange={requires_macrodissection_yes}
                                />
                                Yes
                              </label>

                              <label className={`${className}__radio_choice`}>
                                <input
                                    type="radio"
                                    name="no"
                                    value="no"
                                    checked={!requires_macrodissection}
                                    className="form-check-input"
                                    onChange={requires_macrodissection_no}
                                />
                                No
                              </label>

                                </span></div>

                            <div className={`${className}__DetailsCellLeft`}>
                            </div>

                        </div>

                    </div>
                    <div className={`${className}__Comments_Panel`}><h3>Comments:</h3>
                        {/*{editing ?*/}

                        <div>
                            <textarea className={`${className}__Textarea`} name="statement" placeholder="Comments..."
                                      value={comment_str} onChange={(e) => {
                                set_comment_str(e.target.value)
                            }}/>
                        </div>
                        {/*: <div>{selected_sample_obj.comments}</div> }*/}
                    </div>
                    <div className={`${className}__Button_Panel`}>

                                    <span>
                            <button className={'Orders__btn btn-primary'}
                                    onClick={handleAccept}>Accept Sample</button>
                            <button className={'Orders__btn btn-primary'}
                                    onClick={handleRejectSample}>Resolve Sample</button>
                                </span>

                    </div>
                </div> : <div></div>}


        </Fragment>
    )
}

export default SlideQC;
