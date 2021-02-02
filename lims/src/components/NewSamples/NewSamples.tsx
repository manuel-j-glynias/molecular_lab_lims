import React, {Fragment, useEffect, useState} from 'react'
import {
    AcceptedStatus,
    Maybe,
    Sample,
    Sample_Rejection_Reason_Fields,
    SamplesListQuery,
    useAcceptSampleMutation,
    useCreateSampleMutation,
    useRejectSampleMutation,
    useUpdateSampleMutation
} from "../../generated/graphql"
import {useAlert} from 'react-alert'

import './styles.css'
import PhysicianSelectContainer from "../common/PhysicianSelect";
import SampleRejectionReasonFieldsSelect from "./SampleRejectionReasonFieldsSelect";
import SampleTypeSelectContainer from "../common/SampleTypeSelect";
import DatePicker, {DayValue} from 'react-modern-calendar-datepicker'
import TimePicker, {TimePickerValue} from 'react-time-picker';
import AcceptedOrdersSelectContainer from "../common/AcceptedOrdersSelect";
import client from "../../index";
import TestSelectContainer from "../common/TestSelect";
import {now_as_string, now_date_as_string,get_unique_graph_id} from "../common/utils/utils";


interface Props {
    data: SamplesListQuery;
    filter_term: string;
    set_filter_term: (b: string) => void;
    keyPressed: (event: React.KeyboardEvent<HTMLDivElement>) => void;
    handleNameFilter: () => void;
    handleReset: () => void;
    user_name: string;
    user_graph_id: string;
    refetch: () => void;
    user_can_edit_orders: boolean;
}

const className = 'NewSamples';


const NewSamples: React.FC<Props> = ({
                                         data, filter_term, set_filter_term, keyPressed, handleNameFilter,
                                         handleReset, user_name, user_graph_id, refetch,user_can_edit_orders
                                     }) => {
    const [selected_sample, set_selected_sample] = useState('');
    const [selected_sample_graph_id, set_selected_sample_graph_id] = useState('');
    const [selected_sample_status_graph_id, set_selected_sample_status_graph_id] = useState('');
    const [selected_sample_obj, set_selected_sample_obj] = useState<Maybe<Sample>>(null);
    const [editing, set_editing] = React.useState(false);

    const [name_str, set_name_str] = React.useState('');
    const [mrn_str, set_mrn_str] = React.useState('');
    const [ordering_physician, set_ordering_physician] = React.useState('');
    const [ordering_physician_graph_id, set_ordering_physician_graph_id] = React.useState('');
    const [date_collected_str, set_date_collected_str] = React.useState('');
    const [day_collected, setDay_collected] = React.useState<DayValue>(null);

    const [date_received_str, set_date_received_str] = React.useState('');
    const [day_received, setDay_received] = React.useState<DayValue>(null);
    const [received_order_id_str, set_received_order_id_str] = React.useState('');
    const [time_received_value, set_time_received_value] = useState<TimePickerValue>('10:00');

    const [sample_id_str, set_sample_id_str] = React.useState('');
    const [sample_type_str, set_sample_type_str] = React.useState('');
    const [sample_type_graph_id, set_sample_type_graph_id] = React.useState('');
    const [sample_location_str, set_sample_location_str] = React.useState('');
    const [comment_str, set_comment_str] = React.useState('');

    const [sample_rejection_reason_field,set_sample_rejection_reason_field]= React.useState(Sample_Rejection_Reason_Fields.None);
    const [sample_rejection_reason_field_label,set_sample_rejection_reason_field_label]= React.useState("None");

    const [test_str, set_test_str] = React.useState('');


    const alert = useAlert();

    const [updateSampleMutation, {data:up_data,loading:up_loading,error:up_error}] =
        useUpdateSampleMutation({variables:{
                collected_date:'',comments:'',id:'',mrn:'',patient_name:'',received_date:'',received_order_id:'',
                sample_id:"",sample_location:"",search_string_lower:'',ordered_by_id:'',sample_type_id:''
            }});
    const [createSampleMutation, {data:cr_data,loading:cr_loading,error:cr_error}] =
        useCreateSampleMutation({variables:{
                collected_date:'',comments:'',id:'',mrn:'',patient_name:'',received_date:'',received_order_id:'',
                sample_id:"",sample_location:"",search_string_lower:'',ordered_by_id:'',sample_type_id:'',status_date:'',status_graph_id:'',created_by:''
            }});

    const [acceptSampleMutation,{data:acc_data, loading:acc_loading, error:acc_error}] =
        useAcceptSampleMutation({variables:{
                status:AcceptedStatus.NotReady,accepted_by:'',id:'',old_status_graph_id:'',status_date:'',status_graph_id:''
            }});
    const [rejectSampleMutation,{data:rej_data, loading:rej_loading, error:rej_error}] =
        useRejectSampleMutation({variables:{
                rejected_by:'',id:'',old_status_graph_id:'',status_date:'',status_graph_id:'',
                comments:'',rejected_reason:Sample_Rejection_Reason_Fields.None
            }});

    function handleSample_select(sample_id: string, sample_graph_id: string,status_id:string) {
        set_selected_sample(sample_id);
        set_selected_sample_graph_id(sample_graph_id);
        set_selected_sample_status_graph_id(status_id);

        if (data != null && data.Sample != null && data.Sample.length > 0) {
            let index: number;
            for (index = 0; index < data.Sample.length; index++) {
                let sample = data.Sample[index];
                if (sample != null && sample.id === sample_graph_id) {
                    // @ts-ignore
                    set_selected_sample_obj(sample);
                    copy_values()
                    // set_sample_rejection_reason_field(Sample_Rejection_Reason_Fields.None);
                    // set_sample_rejection_reason_field_label('None');
                }
            }
        }
    }
    const get_number_as_two_digit_string = (n: Number): string => {
        let s: string = n.toString()
        if (s.length === 1) {
            s = '0' + s
        }
        return s
    }
    useEffect(() => {
        const dob = day_collected;
        if (dob!=null){
            let m = get_number_as_two_digit_string(dob.month);
            let d = get_number_as_two_digit_string(dob.day);
            let y = dob.year.toString();
            let bd = m + '-' + d + '-' + y;
            set_date_collected_str(bd);
        }
    },[day_collected]);

    useEffect(() => {
        const dob = day_received;
        const t = time_received_value;
        if (dob!=null && t!=null){
            let m = get_number_as_two_digit_string(dob.month);
            let d = get_number_as_two_digit_string(dob.day);
            let y = dob.year.toString();
            let bd = m + '-' + d + '-' + y + ' ' + t;
            // console.log(bd);
            set_date_received_str(bd);
        }
    },[day_received,time_received_value]);

    function copy_values() {
        if (selected_sample_obj != null) {
            set_name_str(selected_sample_obj.patient_name);
            set_mrn_str(selected_sample_obj.mrn);
            set_received_order_id_str(selected_sample_obj.received_order_id);
            set_sample_id_str(selected_sample_obj.sample_id);
            set_ordering_physician(getOrderedBy());
            set_ordering_physician_graph_id(selected_sample_obj.ordered_by.id);
            set_test_str('')

            let dr_s = selected_sample_obj.received_date
            set_date_received_str(dr_s);
            let toks = dr_s.split('-')
            let y_toks = toks[2].split(' ');
            let time_str = y_toks[1] + ' ' + y_toks[2]
            const dr = {
                year: parseInt(y_toks[0]),
                month: parseInt(toks[0]),
                day: parseInt(toks[1]),
            };
            setDay_received(dr);
            set_time_received_value(time_str);
            console.log('copy time_received_value=',time_str);

            set_comment_str(selected_sample_obj.comments);

            set_date_collected_str(selected_sample_obj.collected_date);
            let dc_s = selected_sample_obj.collected_date
            set_date_collected_str(dc_s);
            toks = dc_s.split('-')
            const dc = {
                year: parseInt(toks[2]),
                month: parseInt(toks[0]),
                day: parseInt(toks[1]),
            };
            setDay_collected(dc);

            set_sample_type_str(selected_sample_obj.sample_type.name);
            set_sample_type_graph_id(selected_sample_obj.sample_type.id);
            set_sample_location_str(selected_sample_obj.sample_location);

        }
    }

    const handleEdit = () => {
        if (user_can_edit_orders){
            copy_values();
            set_editing(true);
        }
        else {
            alert.show("You do not have permission to edit Samples")
        }
    }
    function getOrderedBy() {
        let ordered = ''
        if (selected_sample_obj != null){
            ordered = selected_sample_obj.ordered_by.first_name + ' ' + selected_sample_obj.ordered_by.last_name + ' ' + selected_sample_obj.ordered_by.degrees;
        }
        return ordered;
    }

    const NEW_SAMPLE_GRAPH_ID = 'new';

    const handleAdd=  () =>  {
        if (user_can_edit_orders){
            set_selected_sample_obj(null);
            set_selected_sample_graph_id(NEW_SAMPLE_GRAPH_ID);
            set_sample_rejection_reason_field(Sample_Rejection_Reason_Fields.None);
            set_sample_rejection_reason_field_label('None');

            set_name_str('');
            set_mrn_str('');
            set_received_order_id_str('');
            set_sample_id_str('');
            set_ordering_physician('');
            set_ordering_physician_graph_id('');
            set_test_str('')


            let dr_s = now_as_string()
            set_date_received_str(dr_s);
            let toks = dr_s.split('-')
            let y_toks = toks[2].split(' ');
            let time_str = y_toks[1] + ' ' + y_toks[2]
            time_str = time_str.trim()
            const dr = {
                year: parseInt(y_toks[0]),
                month: parseInt(toks[0]),
                day: parseInt(toks[1]),
            };
            setDay_received(dr);
            console.log('time_received_value=',time_str);
            set_time_received_value(time_str);

            let dc_s = now_date_as_string();
            set_date_collected_str(dc_s);
            toks = dc_s.split('-')
            const dc = {
                year: parseInt(toks[2]),
                month: parseInt(toks[0]),
                day: parseInt(toks[1]),
            };
            setDay_collected(dc);

            set_comment_str('');
            set_sample_type_str('');
            set_sample_type_graph_id('');
            set_sample_location_str('');
            set_editing(true);        }
        else {
            alert.show("You do not have permission to edit Samples")
        }


    }
    const isNew = () : boolean => {
        return selected_sample_graph_id===NEW_SAMPLE_GRAPH_ID;
    }
    const data_is_valid = () :boolean => {
        let b = false;
        if (name_str===''){
            alert.show("Please provide a Name.")
        }
        else if (mrn_str===''){
            alert.show("Please provide an MRN.")
        }
        else if (ordering_physician===''){
            alert.show("Please select an Ordered By.")
        }
        else if (sample_id_str===''){
            alert.show("Please provide a Sample ID.")
        }
        else if (received_order_id_str===''){
            alert.show("Please provide a Received Order ID.")
        }
        else if (sample_type_str===''){
            alert.show("Please select a Sample Type.")
        }
        else {
            b = true;
        }
        return b
    }
    const saveSampleInfo = async () => {
        if (data_is_valid()) {
            let ssl: string = get_search_string_lower_str();
            if (isNew()) {
                let status_graph_id = get_unique_graph_id('status_')
                await createSampleMutation(
                    {
                        variables: {
                            collected_date: date_collected_str,
                            comments: comment_str,
                            id: get_unique_graph_id('sample_'),
                            mrn: mrn_str,
                            patient_name: name_str,
                            received_date: date_received_str,
                            received_order_id: received_order_id_str,
                            sample_id: sample_id_str,
                            sample_location: sample_location_str,
                            search_string_lower: ssl,
                            sample_type_id: sample_type_graph_id,
                            ordered_by_id: ordering_physician_graph_id,
                            created_by:user_graph_id,
                            status_date:now_as_string(),
                            status_graph_id:status_graph_id
                        }
                    }
                )
            } else {
                await updateSampleMutation(
                    {
                        variables: {
                            collected_date: date_collected_str,
                            comments: comment_str,
                            id: selected_sample_graph_id,
                            mrn: mrn_str,
                            patient_name: name_str,
                            received_date: date_received_str,
                            received_order_id: received_order_id_str,
                            sample_id: sample_id_str,
                            sample_location: sample_location_str,
                            search_string_lower: ssl,
                            sample_type_id: sample_type_graph_id,
                            ordered_by_id: ordering_physician_graph_id
                        }
                    }
                )
            }
            set_editing(false);
            set_selected_sample('')
            set_selected_sample_obj(null)
            set_selected_sample_graph_id('')
            await client.resetStore();
            refetch();
        }

    }

    const cancelEdit= async () =>  {
        set_editing(false);
    }

    const get_search_string_lower_str = ():string => {
        let ssl:string = ''
        // search_string_lower = patient_name.lower() + ' ' + mrn.lower()+ ' ' + sample_id.lower() + ' ' + received_order_id.lower() + ' ' + order_by_last_name.lower()
        if (selected_sample_obj!=null){
            ssl = selected_sample_obj.patient_name.toLowerCase() + ' ' + selected_sample_obj.mrn.toLowerCase() + ' ' +
                selected_sample_obj.sample_id.toLowerCase() + ' ' + selected_sample_obj.ordered_by.last_name.toLowerCase() + ' ' +
                selected_sample_obj.received_order_id.toLowerCase() + ' ' + selected_sample_obj.sample_type.name.toLowerCase()
        }
        else {
            ssl = name_str.toLowerCase() + ' ' + mrn_str.toLowerCase() + ' ' + sample_id_str.toLowerCase() + ' ' + received_order_id_str.toLowerCase() + ' ' +
                ordering_physician.toLowerCase() + ' ' + sample_type_str.toLowerCase();
        }
        return ssl;
    }

    const handleAccept = async () => {
        let accepted_date = now_as_string();
        let user_id = user_graph_id;
        let status: AcceptedStatus = AcceptedStatus.Accepted;
        let status_graph_id = get_unique_graph_id('status_')

        if (selected_sample_obj != null) {
            if (selected_sample_obj.sample_type.requires_pathologist_qc) {
                status = AcceptedStatus.ReadyForQc;
            }
            if (selected_sample_obj.sample_location=='') {
                alert.show('Please provide a sample location.')
            } else {
                await acceptSampleMutation(
                    {
                        variables: {
                            status:status,accepted_by:user_id,id:selected_sample_graph_id,old_status_graph_id:selected_sample_status_graph_id,status_date:accepted_date,status_graph_id:status_graph_id

                        }
                    }
                )
                set_editing(false);
                set_selected_sample('')
                set_selected_sample_obj(null)
                set_selected_sample_graph_id('')
                await client.resetStore();
                refetch();
            }
        }
    }
    const needsQC = () : boolean => {
        let b = false;
        if (selected_sample_obj!=null){
            b = selected_sample_obj.sample_type.requires_pathologist_qc
        }
        return b;
    }
    const handleSendToQC = async () => {
        handleAccept();
    }
    const handleRejectSample = async () => {
        if (sample_rejection_reason_field===Sample_Rejection_Reason_Fields.None){
            alert.show('Please select a rejection reason.')
        }
        else if(sample_rejection_reason_field===Sample_Rejection_Reason_Fields.Other && comment_str===''){
            alert.show('Please provide a rejection reason in the comments.')

        }
        else {
            console.log('reject');
            if (selected_sample_obj != null) {
                let rejected_date = now_as_string();
                let user_id = user_graph_id;
                let status_graph_id = get_unique_graph_id('status_')
                await rejectSampleMutation(
                    {variables:{
                        rejected_by:user_id,
                        id:selected_sample_graph_id,
                        old_status_graph_id:selected_sample_status_graph_id,
                        status_date:rejected_date,
                        status_graph_id:status_graph_id,
                             comments: selected_sample_obj.comments,
                            rejected_reason:sample_rejection_reason_field
                        }
                    }
                )
                set_editing(false);
                set_selected_sample('')
                set_selected_sample_graph_id('')
                await client.resetStore();
                refetch();
            }
        }

    }

    const handle_sample_rejection_reason= async (field:Sample_Rejection_Reason_Fields,s: string) => {
        set_sample_rejection_reason_field(field);
        set_sample_rejection_reason_field_label(s);
    }


    return (
        <Fragment>
            <div className={className}></div>
            {!editing && <div className={`${className}__Panel_Wrapper`}>
                <div className={`${className}__Panel`}>
                    <span className={`${className}__Buttons`}>

                            <button className={editing ? 'NewSamples__btn disabled' :'NewSamples__btn btn-primary'} onClick={handleAdd}>Add Sample</button>
                        </span>

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
                            !!sample && (
                                <div key={i} className={`${className}__Row`}
                                     onClick={() => handleSample_select(sample.sample_id, sample.id,sample.status.id)}>
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
                }

                {((selected_sample !== '' && selected_sample_obj) || selected_sample_graph_id===NEW_SAMPLE_GRAPH_ID) ?
                    <div className={editing ?'NewSamples__Details_Panel_Select':'NewSamples__Details_Panel'}><h3>Sample Details:</h3>
                        {isNew() && <span>
                            <AcceptedOrdersSelectContainer set_name_str={set_name_str} set_mrn_str={set_mrn_str} set_ordering_physician={set_ordering_physician}
                                set_ordering_physician_graph_id={set_ordering_physician_graph_id} set_received_order_id_str={set_received_order_id_str} set_test_str={set_test_str}/>
                        </span>}

                        <div className={`${className}__DetailsTable`}>
                            <div className={`${className}__DetailsRow`}>

                                <div className={`${className}__DetailsCellLeft`}>Name:</div>
                                <div className={`${className}__DetailsCellRight`}>{editing ?
                                    <span><textarea className={`${className}__ShortTextarea`} name="name"
                                                    placeholder="Name..." value={name_str} onChange={(e) => {
                                        set_name_str(e.target.value)
                                    }}/></span> : (selected_sample_obj!=null ? selected_sample_obj.patient_name : name_str)}</div>

                                <div className={`${className}__DetailsCellLeft`}>Received Date:</div>
                                <div className={`${className}__DetailsCellRight`}> {editing ?
                                    <span>
                                        <DatePicker value={day_received} onChange={setDay_received}  formatInputText={() => date_received_str}/>
                                        <TimePicker value={time_received_value} onChange={set_time_received_value}/>
                                    </span>:  (selected_sample_obj!=null ? selected_sample_obj.received_date : date_received_str)}
                                </div>

                            </div>


                                <div className={`${className}__DetailsRow`}>
                                <div className={`${className}__DetailsCellLeft`}>MRN:</div>
                                <div className={`${className}__DetailsCellRight`}>{editing ?
                                    <span><textarea className={`${className}__ShortTextarea`} name="mrn"
                                                    placeholder="MRN..." value={mrn_str} onChange={(e) => {
                                        set_mrn_str(e.target.value)
                                    }}/></span> : (selected_sample_obj!=null ? selected_sample_obj.mrn :mrn_str)}</div>

                                     <div className={`${className}__DetailsCellLeft`}>Collection Date:</div>
                                    <div className={`${className}__DetailsCellRight`}>{editing ?<DatePicker value={day_collected} onChange={setDay_collected}  formatInputText={() => date_collected_str}/> :
                                        (selected_sample_obj!=null ? selected_sample_obj.collected_date :date_collected_str)}</div>
                                </div>


                            <div className={`${className}__DetailsRow`}>
                                <div className={`${className}__DetailsCellLeft`}>Ordered By:</div>
                                <div className={`${className}__DetailsCellRight`}>{editing ?
                                    <PhysicianSelectContainer physicianString={ordering_physician} physician_graph_id={ordering_physician_graph_id}
                                                              set_physicianString={set_ordering_physician} set_physician_graph_id={set_ordering_physician_graph_id}/> :
                                    getOrderedBy()}</div>

                                <div className={`${className}__DetailsCellLeft`}>Sample ID:</div>
                                <div className={`${className}__DetailsCellRight`}>{editing ?
                                    <span><textarea className={`${className}__ShortTextarea`} name="sampleID"
                                                    placeholder="Sample ID..." value={sample_id_str} onChange={(e) => {
                                        set_sample_id_str(e.target.value)
                                    }}/></span> : (selected_sample_obj!=null ? selected_sample_obj.sample_id :sample_id_str)}</div>
                            </div>


                            <div className={`${className}__DetailsRow`}>
                                <div className={`${className}__DetailsCellLeft`}>Received Order ID:</div>
                                <div className={`${className}__DetailsCellRight`}>{editing ?
                                    <span><textarea className={`${className}__ShortTextarea`} name="rec_ordered_id"
                                                    placeholder="Order ID..." value={received_order_id_str} onChange={(e) => {
                                        set_received_order_id_str(e.target.value)
                                    }}/></span> : (selected_sample_obj!=null ? selected_sample_obj.received_order_id :received_order_id_str)}</div>

                                <div className={`${className}__DetailsCellLeft`}>Sample Type:</div>
                                <div className={`${className}__DetailsCellRight`}>{editing ?
                                    <SampleTypeSelectContainer sampleTypeString={sample_type_str} set_sampleTypeString={set_sample_type_str} sampleType_graph_id={sample_type_graph_id} set_sampleType_graph_id={set_sample_type_graph_id}/>
                                    :(selected_sample_obj!=null ? selected_sample_obj.sample_type.name :sample_type_str)}</div>
                            </div>
                            <div className={`${className}__DetailsRow`}>
                                <div className={`${className}__DetailsCellLeft`}>Sample Location:</div>
                                <div className={`${className}__DetailsCellRight`}>{editing ?
                                    <span><textarea className={`${className}__Textarea`} name="location" placeholder="Location..." value={sample_location_str}
                                                    onChange={(e) => {set_sample_location_str(e.target.value)}}/>
                                    </span>
                                    : (selected_sample_obj!=null ? selected_sample_obj.sample_location : sample_location_str)}

                            </div>
                                <div className={'Orders__DetailsCellLeft'}>Test Ordered:</div>
                                <div className={'Orders__DetailsCellRight'}>{test_str}</div>
                            </div>

                        </div>
                        <div className="Vertical_Spacer_10"></div>

                        <div className="Vertical_SpacerWithBorder_10"></div>
                        <div className={`${className}__Notes_Panel`}>
                            <h3>Sample Rejection Reason:
                                {/*{editing ?*/}
                                <SampleRejectionReasonFieldsSelect handle_sample_rejection_reason={handle_sample_rejection_reason} sample_rejection_reason_field={sample_rejection_reason_field}sample_rejection_reason_field_label={sample_rejection_reason_field_label} />
                                {/*: sample_rejection_reason_field_label}*/}
                            </h3>
                            </div>
                        <div className={'Vertical_Spacer_10'}></div>
                        <div className={`${className}__Comments_Panel`}><h3>Comments:</h3>
                            {/*{editing ?*/}

                                <div >
                                    <textarea className={`${className}__Textarea`} name="statement" placeholder="Comments..." value={comment_str} onChange={(e) => {set_comment_str(e.target.value)}}/>
                                </div>
                            {/*: <div>{selected_sample_obj.comments}</div> }*/}
                        </div>

                        <div className={`${className}__Button_Panel`}>
                            {editing ?
                        <span>
                            <button value="Save" className="Orders__btn btn-primary" onClick={() => saveSampleInfo()}>Save</button>
                            <button value="Cancel" className="Orders__btn btn-primary" onClick={() => cancelEdit()}>Cancel</button>
                        </span> :
                        <span>
                            {selected_sample_obj!=null ?
                                <span>
                            <button value="Edit" className="Orders__btn btn-primary" onClick={() => handleEdit()}>Edit</button>
                                    {needsQC() ? <button className={'Orders__btn btn-primary'} onClick={handleSendToQC}>Send to QC</button>
                                        :  <button className={'Orders__btn btn-primary'} onClick={handleAccept}>Accept Sample</button>
                                    }


                           <button className={'Orders__btn btn-primary'} onClick={handleRejectSample}>Resolve Sample</button>
                                </span> : <span></span>
                            }

                       </span>
                            }

                        </div>
                    </div>:<span></span>}

</Fragment>
)

}

export default NewSamples;
