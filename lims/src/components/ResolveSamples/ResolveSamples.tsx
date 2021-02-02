import React, {Fragment, useState} from 'react'
import {
    AcceptedStatus,
    Maybe,
    ResolveSamplesListQuery,
    Sample,
    Sample_Rejection_Reason_Fields,
    useResolveSampleMutation
} from "../../generated/graphql"
import './styles.css'
import client from "../../index";
import {get_unique_graph_id, now_as_string} from "../common/utils/utils";
import AcceptedOrdersSelectContainer from "../common/AcceptedOrdersSelect";
import DatePicker from "react-modern-calendar-datepicker";
import TimePicker from "react-time-picker";
import PhysicianSelectContainer from "../common/PhysicianSelect";
import SampleTypeSelectContainer from "../common/SampleTypeSelect";
import SampleRejectionReasonFieldsSelect from "../NewSamples/SampleRejectionReasonFieldsSelect";


interface Props {
    data: ResolveSamplesListQuery;
    filter_term: string;
    set_filter_term: (b: string) => void;
    keyPressed: (event: React.KeyboardEvent<HTMLDivElement>) => void;
    handleNameFilter: () => void;
    handleReset: () => void;
    user_name: string;
    user_graph_id: string;
    refetch: () => void;
}

const className = 'ResolveSamples';


const ResolveSamples: React.FC<Props> = ({data,filter_term,set_filter_term,keyPressed,handleNameFilter,
                                     handleReset,user_name,user_graph_id,refetch}) => {
    const [selected_sample, set_selected_sample] = useState('');
    const [selected_sample_obj, set_selected_sample_obj] = useState<Maybe<Sample>>(null);
    const [selected_sample_graph_id, set_selected_sample_graph_id] = useState('');
    const [selected_sample_status_graph_id, set_selected_sample_status_graph_id] = useState('');

    const [resolveSampleMutation,{data:rej_data, loading:rej_loading, error:rej_error}] =
        useResolveSampleMutation({variables:{
                rejected_by:'',id:'',old_status_graph_id:'',status_date:'',status_graph_id:'',
                comments:'',rejected_reason:Sample_Rejection_Reason_Fields.None
            }});

    function handleSample_select(sample_id: string, sample_graph_id: string,status_id:string) {
        set_selected_sample(sample_id);
        if (data != null && data.Sample != null && data.Sample.length > 0) {
            let index: number;
            for (index = 0; index < data.Sample.length; index++) {
                 let sample = data.Sample[index];
                if (sample != null && sample.id === sample_graph_id) {
                    // @ts-ignore
                    set_selected_sample_obj(sample);
                    set_selected_sample_graph_id(sample.id);
                    set_selected_sample_status_graph_id(sample.status.id)
                }
            }
        }
    }
    const handleResolveSample = async () => {
             console.log('reject');
            if (selected_sample_obj != null) {
                let rejected_date = now_as_string();
                let user_id = user_graph_id;
                let status_graph_id = get_unique_graph_id('status_')
                await resolveSampleMutation(
                    {variables:{
                            rejected_by:user_id,
                            id:selected_sample_graph_id,
                            old_status_graph_id:selected_sample_status_graph_id,
                            status_date:rejected_date,
                            status_graph_id:status_graph_id,
                            comments: "",
                            rejected_reason:Sample_Rejection_Reason_Fields.Other
                        }
                    }
                )
                set_selected_sample('')
                set_selected_sample_graph_id('')
                await client.resetStore();
                refetch();
            }
    }
    const contact_ordering = () => {
        if (selected_sample_obj != null){
            let badge_id = selected_sample_obj.ordered_by.badge_id;
            let url_string = 'https://i2proxy.roswellpark.org/people/listing/' + badge_id
            window.open(url_string);
        }
    }
    function getOrderedBy() {
        let ordered = ''
        if (selected_sample_obj != null){
            ordered = selected_sample_obj.ordered_by.first_name + ' ' + selected_sample_obj.ordered_by.last_name + ' ' + selected_sample_obj.ordered_by.degrees;
        }
        return ordered;
    }
    return (
        <Fragment>
            <div className={className}></div>
            <div className={`${className}__Panel_Wrapper`}>
                <div className={`${className}__Samples_Panel`}>

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
                            !!sample && sample.status.status===AcceptedStatus.Rejected && (
                                <div key={i} className={`${className}__Row`}
                                     onClick={() => handleSample_select(sample.sample_id,sample.id,sample.status.id)}>
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
                            <div className={`${className}__DetailsCellLeft`}>MRN:</div>
                            <div className={`${className}__DetailsCellRight`}>{ (selected_sample_obj.mrn )}</div>

                            <div className={`${className}__DetailsCellLeft`}>Collection Date:</div>
                            <div className={`${className}__DetailsCellRight`}>{selected_sample_obj.collected_date}</div>
                        </div>


                        <div className={`${className}__DetailsRow`}>
                            <div className={`${className}__DetailsCellLeft`}>Ordered By:</div>
                            <div className={`${className}__DetailsCellRight`}>{getOrderedBy()}
                                <button className={'btn btn-primary'} onClick={contact_ordering}>Contact</button>
                            </div>

                            <div className={`${className}__DetailsCellLeft`}>Sample ID:</div>
                            <div className={`${className}__DetailsCellRight`}>{ selected_sample_obj.sample_id}</div>
                        </div>


                        <div className={`${className}__DetailsRow`}>
                            <div className={`${className}__DetailsCellLeft`}>Received Order ID:</div>
                            <div className={`${className}__DetailsCellRight`}>{selected_sample_obj.received_order_id }</div>

                            <div className={`${className}__DetailsCellLeft`}>Sample Type:</div>
                            <div className={`${className}__DetailsCellRight`}>{selected_sample_obj.sample_type.name }</div>
                        </div>
                        <div className={`${className}__DetailsRow`}>
                            <div className={`${className}__DetailsCellLeft`}>Sample Location:</div>
                            <div className={`${className}__DetailsCellRight`}>{ selected_sample_obj.sample_location }

                            </div>
                            <div className={'Orders__DetailsCellLeft'}>Sample Rejection Reason:</div>
                            <div className={'Orders__DetailsCellRight'}>{selected_sample_obj.status.rejected_reason}</div>
                        </div>

                    </div>

                    <div className={`${className}__Comments_Panel`}><h3>Comments:</h3>
                        {selected_sample_obj.comments}
                    </div>

                    <div className={`${className}__Button_Panel`}>
                <button className={'Orders__btn btn-primary'} onClick={handleResolveSample}>Sample Resolved</button>
            </div>
                </div>: <div></div>}

        </Fragment>
    )


}

export default ResolveSamples;
