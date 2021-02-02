import React, {Fragment, useState} from 'react'
import AcceptedOrdersContainer from "./AcceptedOrders";
import AcceptedSamplesContainer from "./AcceptedSamples";
import {useAlert} from 'react-alert';
import {AcceptedStatus, useCreateCaseMutation, useCreateOneStatusUpdateMutation} from '../../generated/graphql';
 

import './styles.css'
import client from "../../index";

interface Props {
    logged_in: boolean;
    user_name: string;
    user_graph_id: string;
}
const className = 'CaseCreate';

const CaseCreateWrapper = ({ logged_in,user_name,user_graph_id }: Props) => {
    const [selected_order_graph_id, set_selected_order_graph_id] = useState('');
    const [selected_order_status_graph_id, set_selected_order_status_graph_id] = useState('');

    const [selected_sample_graph_id, set_selected_sample_graph_id] = useState('');
    const [selected_sample_status_graph_id, set_selected_sample_status_graph_id] = useState('');
    const [selected_order_received_order_id,set_selected_order_received_order_id]= useState('');
    const alert = useAlert();

    const [createCaseMutation, {loading:loading, error:error,data:data}] =
        useCreateCaseMutation({variables:{id:'',created_by:'',created_date:'',order_graph_id:'',sample_graph_id:'',order_status_graph_id:'',sample_status_graph_id:''}});

    const [createOneStatusUpdate,{}] = useCreateOneStatusUpdateMutation({variables:{
        status:AcceptedStatus.Accepted,status_date:'',created_by:'',status_graph_id:'',old_status_graph_id:''
        }})
    const now_date_as_string = (): string => {
        let date_ob = new Date();
        let date = ("0" + date_ob.getDate()).slice(-2);
        let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
        let year = date_ob.getFullYear();

        let n_str = month + '-' + date + '-' + year
        return n_str;
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
const handleCreateCase = async () => {
        if (selected_order_graph_id==''){
            alert.show('Please select an accepted order.')
        } else if (selected_sample_graph_id===''){
            alert.show('Please select an accepted sample.')
        }
        else {
            console.log('create case')
            let user_id = user_graph_id;
            let d = now_as_string();
            let order_status_graph_id = get_unique_graph_id('status_')
            await createOneStatusUpdate({
                variables:{status:AcceptedStatus.CaseCreated,status_date:d,created_by:user_id,status_graph_id:order_status_graph_id,old_status_graph_id:selected_order_status_graph_id}})

            let sample_status_graph_id = get_unique_graph_id('status_')
            await createOneStatusUpdate({
                variables:{status:AcceptedStatus.CaseCreated,status_date:d,created_by:user_id,status_graph_id:sample_status_graph_id,old_status_graph_id:selected_sample_status_graph_id}})

            let case_graph_id = get_unique_graph_id('case_')
            await createCaseMutation({
                variables:{id:case_graph_id, created_by:user_id, created_date:d, order_graph_id:selected_order_graph_id, sample_graph_id:selected_sample_graph_id,
                    order_status_graph_id:order_status_graph_id,sample_status_graph_id:sample_status_graph_id}
            })
            await client.resetStore();
            // await refetch();
            // set_editing(false);
            set_selected_order_graph_id('')

        }
    }

    return (
        <Fragment>
            <h2>Create Cases</h2>
            <AcceptedOrdersContainer logged_in={logged_in} user_name={user_name} user_graph_id={user_graph_id}
                                     selected_order_graph_id={selected_order_graph_id} set_selected_order_graph_id={set_selected_order_graph_id}
                                     set_selected_order_received_order_id={set_selected_order_received_order_id} set_selected_order_status_graph_id={set_selected_order_status_graph_id}/>
            <AcceptedSamplesContainer logged_in={logged_in} user_name={user_name} user_graph_id={user_graph_id} selected_sample_graph_id={selected_sample_graph_id}
                                      set_selected_sample_graph_id={set_selected_sample_graph_id} received_order_id={selected_order_received_order_id} set_selected_sample_status_graph_id={set_selected_sample_status_graph_id}/>
            <div className={`${className}__Button_Panel`}>
                <button value="Save" className="CaseCreate__btn btn-primary"
                        onClick={() => handleCreateCase()}>Create Case</button>
            </div>
        </Fragment>
    )
}

export default CaseCreateWrapper;