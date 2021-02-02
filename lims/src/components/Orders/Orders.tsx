import React, {Fragment, useEffect, useState} from 'react'
import {
    AcceptedStatus,
    Order_Information_Request,
    Order_Information_Request_Fields,
    OrdersListQuery,
    useAddOrder_Information_RequestMutation,
    useCreateOrderMutation,
    useUpdateOrder_Information_RequestMutation,
    useUpdateOrderMutation,
    useAcceptOrderMutation,
    useRejectOrderMutation
} from '../../generated/graphql';
import PhysicianSelectContainer from '../common/PhysicianSelect/index'
import TestSelectContainer from "../common/TestSelect";
import './styles.css'
import InformationRequestFieldSelect from "./InformationRequestFieldSelect";
import useClippy from 'use-clippy';
import SexSelect from "../common/SexSelect/SexSelect";
import client from "../../index";
import {useAlert} from 'react-alert'
import DatePicker, { DayValue, DayRange, Day } from 'react-modern-calendar-datepicker'
import 'react-modern-calendar-datepicker/lib/DatePicker.css'
import AuthorizedDiagnosisSelectContainer from "../common/AuthorizedDiagonosisSelect";


interface Props {
    data: OrdersListQuery;
    filter_term: string;
    set_filter_term: (b: string) => void;
    keyPressed: (event: React.KeyboardEvent<HTMLDivElement>) => void;
    handleNameFilter: () => void;
    handleReset: () => void;
    use_ir_filter: string;
    set_use_ir_filter: (s:string) => void;
    user_name: string;
    user_graph_id: string;
    refetch: () => void;
    user_can_edit_orders: boolean;
}

const className = 'Orders';


const Orders: React.FC<Props> = ({data, filter_term, set_filter_term, keyPressed, handleNameFilter, handleReset,use_ir_filter,set_use_ir_filter,user_name,user_graph_id,refetch,user_can_edit_orders}) => {
    const [selected_order, set_selected_order] = useState('');
    const [selected_order_graph_id, set_selected_order_graph_id] = useState('');
    const [selected_order_status_graph_id, set_selected_order_status_graph_id] = useState('');
    const [name_str, set_name_str] = React.useState('');
    const [dob_str, set_dob_str] = React.useState('');
    const [mrn_str, set_mrn_str] = React.useState('');
    const [sex_str, set_sex_str] = React.useState('');
    const [diagnosis_str, set_diagnosis_str] = React.useState('');
    const [ordering_physician, set_ordering_physician] = React.useState('');
    const [ordering_physician_graph_id, set_ordering_physician_graph_id] = React.useState('');
    const [attending_physician, set_attending_physician] = React.useState('');
    const [attending_physician_graph_id, set_attending_physician_graph_id] = React.useState('');
    const [test_str, set_test_str] = React.useState('');
    const [test_graph_id, set_test_graph_id] = React.useState('');
    const [date_received_str, set_date_received_str] = React.useState('');
    const [order_date_str, set_order_date_str] = React.useState('');
    const [received_order_id_str, set_received_order_id_str] = React.useState('');
    const alert = useAlert();
    const [day, setDay] = React.useState<DayValue>(null);


    const [comment_str, set_comment_str] = React.useState('');

    const [editing, set_editing] = React.useState(false);

    const [info_requests, set_info_requests] = React.useState<string[][]>([[]])
    const [info_request_field, set_info_request_field]= React.useState(Order_Information_Request_Fields.None);

    const [ clipboard, setClipboard ] = useClippy();

    const [updateOrderInformationRequestMutation, { loading: mutationLoading, error: mutationError, data:mutationData }] =
        useUpdateOrder_Information_RequestMutation({variables:{field:Order_Information_Request_Fields.Other, id:'',
            requested_date: '', resolved_date:'', resolved_by:''}})

    const [addOrderInformationRequestMutation, { data:addir_data, loading:addir_loading, error:addir_error }] =
        useAddOrder_Information_RequestMutation({
        variables: {
            field: Order_Information_Request_Fields.Other,// value for 'field'
            id: '',// value for 'id'
            requested_date: '',// value for 'requested_date'
            requested_by:'', // value for 'requested_by'
            order_id: ''// value for 'order_id'
               },
         });
    const [updateOrderMutation,{data:up_data, loading:up_loading, error:up_error}] =
        useUpdateOrderMutation({variables:{
            comments:'',date_of_birth:'',diagnosis:'',id:'',ml_order_id:'',mrn:'',order_date:'',patient_name:'',received_date:'',received_order_id:'',
                rejected_once:false,search_string_lower:'',sex:'',ordered_by_id:'',attending_physician_id:'',test_id:'',
            }});
    const [createOrderMutation,{data:cr_data, loading:cr_loading, error:cr_error}] =
        useCreateOrderMutation({variables:{
                comments:'',date_of_birth:'',diagnosis:'',id:'',ml_order_id:'',mrn:'',order_date:'',patient_name:'',received_date:'',received_order_id:'',
                rejected_once:false,search_string_lower:'',sex:'',ordered_by_id:'',attending_physician_id:'',test_id:'',status_date:'',status_graph_id:'',created_by:''
            }});

    const [acceptOrderMutation,{data:acc_data, loading:acc_loading, error:acc_error}] =
        useAcceptOrderMutation({variables:{
                accepted_by:'',id:'',old_status_graph_id:'',status_date:'',status_graph_id:''
            }});
    const [rejectOrderMutation,{data:rej_data, loading:rej_loading, error:rej_error}] =
        useRejectOrderMutation({variables:{
                rejected_by:'',id:'',old_status_graph_id:'',status_date:'',status_graph_id:''
            }});



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
    const now_date_as_string = (): string => {
        let date_ob = new Date();
        let date = ("0" + date_ob.getDate()).slice(-2);
        let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
        let year = date_ob.getFullYear();

        let n_str = month + '-' + date + '-' + year
        return n_str;
    }
    // const onDateChange = (val:SetStateAction<Date>) => {
    //
    // }

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

    const get_order_id_and_graph_id = () : [string,string] =>
    {
        const now: Date = new Date();
        let order_id : string = 'ML_' + now.getFullYear().toString().substr(-2) +  get_number_as_two_digit_string(1+now.getMonth()) +
        get_number_as_two_digit_string(now.getDate()) + get_number_as_two_digit_string(now.getHours()) +
        get_number_as_two_digit_string(now.getMinutes()) + get_number_as_two_digit_string(now.getSeconds()) ;
        let graph_id : string  = 'order_' + now.getFullYear().toString() +  get_number_as_two_digit_string(1+now.getMonth()) +
            get_number_as_two_digit_string(now.getDate()) + get_number_as_two_digit_string(now.getHours()) +
            get_number_as_two_digit_string(now.getMinutes()) + get_number_as_two_digit_string(now.getSeconds()) + get_number_as_two_digit_string(now.getMilliseconds());
        return [order_id,graph_id]
    }
    const NEW_ORDER_GRAPH_ID = 'new';

    const handleAdd = () => {
        if (user_can_edit_orders){
            set_name_str("");
            set_mrn_str("");
            set_sex_str("")
            set_diagnosis_str("");

            set_dob_str("");
            setDay(null);

            set_ordering_physician("");
            set_ordering_physician_graph_id('');
            set_attending_physician("");
            set_attending_physician_graph_id('');
            set_test_str("");
            // set_order_date_str("");
            set_date_received_str(now_as_string());
            set_order_date_str(now_date_as_string());
            set_comment_str('');
            set_info_requests([]);
            set_selected_order("new")
            set_selected_order_graph_id(NEW_ORDER_GRAPH_ID);
            set_editing(true);
            set_received_order_id_str("")

        }
        else {
            alert.show("You do not have permission to edit Orders")

        }
    }

    const handleOrder_select = async (order_id:string,id: string,status_id:string) => {
        set_comment_str(getComments(order_id));
        set_info_requests(getInformationRequests(order_id));
        set_selected_order(order_id);
        set_selected_order_graph_id(id);
        set_selected_order_status_graph_id(status_id);
    }
    const get_tests_as_string = (i: number): string => {
        let test = ''
        if (data != null && data.Order != null && data.Order.length > 0) {
            let order = data.Order[i]
            if (order != null) {
                // @ts-ignore
                if (order.test_ordered != null) {
                    test = order.test_ordered.name;
                }
            }
        }
        return test
    }
    const get_information_requested_as_string = (i: number): string => {
        let info = ''
        if (data != null && data.Order != null && data.Order.length > 0) {
            let order = data.Order[i]
            if (order != null) {
                // @ts-ignore
                order.information_request.forEach((element) => {
                    if (element != null) {
                        if (info !== '') {
                            info += ', '
                        }
                        if (element.resolved_by !=null){
                            info += element.field + ' Resolved'
                        }
                        else {
                            info += element.requested_date + ' (' + element.field + ')';
                        }
                    }

                });
            }

        }
        if (info === '') {
            info = 'NO'
        }
        return info
    }

    const can_cancel_selected_order = (): boolean => {
        let can = false
        if (data != null && data.Order != null && data.Order.length > 0) {
            let index: number;
            for (index = 0; index < data.Order.length; index++) {
                let order = data.Order[index];
                if (order != null && order.ml_order_id === selected_order) {
                    if (order.information_request.length > 0) {
                        can = true;
                        break
                    }
                }
            }
        }
        return can;
    }
    const can_request_info_selected_order = (): boolean => {
        let can = true
        if (data != null && data.Order != null && data.Order.length > 0) {
            let index: number;
            for (index = 0; index < data.Order.length; index++) {
                let order = data.Order[index];
                if (order != null && order.ml_order_id === selected_order) {
                    if (order.information_request.length > 0) {
                        can = false;
                        break
                    }
                }
            }
        }
        return can;
    }
    const getComments = (id: string) => {
        let comments = '';
        if (data != null && data.Order != null && data.Order.length > 0) {
            let index: number;
            for (index = 0; index < data.Order.length; index++) {
                let order = data.Order[index];
                if (order != null && order.ml_order_id === id) {
                    comments = order.comments
                }
            }
        }
        return comments;
    }
    const getPatientName = () => {
        let value = '';
        if (data != null && data.Order != null && data.Order.length > 0) {
            let index: number;
            for (index = 0; index < data.Order.length; index++) {
                let order = data.Order[index];
                if (order != null && order.ml_order_id === selected_order) {
                    value = order.patient_name
                }
            }
        }
        return value;
    }
    const getPatientMRN = () => {
        let value = '';
        if (data != null && data.Order != null && data.Order.length > 0) {
            let index: number;
            for (index = 0; index < data.Order.length; index++) {
                let order = data.Order[index];
                if (order != null && order.ml_order_id === selected_order) {
                    value = order.mrn
                }
            }
        }
        return value;
    }
    const getPatientDOB = () => {
        let value = '';
        if (data != null && data.Order != null && data.Order.length > 0) {
            let index: number;
            for (index = 0; index < data.Order.length; index++) {
                let order = data.Order[index];
                if (order != null && order.ml_order_id === selected_order) {
                    value = order.date_of_birth
                }
            }
        }
        return value;
    }
    const getPatientDiagnosis = () => {
        let value = '';
        if (data != null && data.Order != null && data.Order.length > 0) {
            let index: number;
            for (index = 0; index < data.Order.length; index++) {
                let order = data.Order[index];
                if (order != null && order.ml_order_id === selected_order) {
                    value = order.diagnosis
                }
            }
        }
        return value;
    }
    function getPatientSex() {
        let value = '';
        if (data != null && data.Order != null && data.Order.length > 0) {
            let index: number;
            for (index = 0; index < data.Order.length; index++) {
                let order = data.Order[index];
                if (order != null && order.ml_order_id === selected_order) {
                    value = order.sex;
                }
            }
        }
        return value;
    }
    function getOrderDateString() {
        let value = '';
        if (data != null && data.Order != null && data.Order.length > 0) {
            let index: number;
            for (index = 0; index < data.Order.length; index++) {
                let order = data.Order[index];
                if (order != null && order.ml_order_id === selected_order) {
                    value = order.order_date;
                }
            }
        }
        return value;
    }
    function getReceivedOrderID() {
        let value = '';
        if (data != null && data.Order != null && data.Order.length > 0) {
            let index: number;
            for (index = 0; index < data.Order.length; index++) {
                let order = data.Order[index];
                if (order != null && order.ml_order_id === selected_order) {
                    value = order.received_order_id;
                }
            }
        }
        return value;
    }
    const getDateReceived = () => {
        let value = '';
        if (data != null && data.Order != null && data.Order.length > 0) {
            let index: number;
            for (index = 0; index < data.Order.length; index++) {
                let order = data.Order[index];
                if (order != null && order.ml_order_id === selected_order) {
                    value = order.received_date
                }
            }
        }
        return value;
    }

    const getAttendingPhysician = () => {
        let value = '';
        if (data != null && data.Order != null && data.Order.length > 0) {
            let index: number;
            for (index = 0; index < data.Order.length; index++) {
                let order = data.Order[index];
                if (order != null && order.ml_order_id === selected_order) {
                    value = order.attending_physician.first_name + ' ' + order.attending_physician.last_name + ' ' + order.attending_physician.degrees
                }
            }
        }
        return value;
    }
    const getAttendingPhysician_graph_id = () => {
        let value = '';
        if (data != null && data.Order != null && data.Order.length > 0) {
            let index: number;
            for (index = 0; index < data.Order.length; index++) {
                let order = data.Order[index];
                if (order != null && order.ml_order_id === selected_order) {
                    value = order.attending_physician.id;
                }
            }
        }
        return value;
    }
    const getOrderingPhysician = () => {
        let value = '';
        if (data != null && data.Order != null && data.Order.length > 0) {
            let index: number;
            for (index = 0; index < data.Order.length; index++) {
                let order = data.Order[index];
                if (order != null && order.ml_order_id === selected_order) {
                    value = order.ordered_by.first_name + ' ' + order.ordered_by.last_name + ' ' + order.ordered_by.degrees
                }
            }
        }
        return value;
    }
    const getOrderingPhysician_graph_id = () => {
        let value = '';
        if (data != null && data.Order != null && data.Order.length > 0) {
            let index: number;
            for (index = 0; index < data.Order.length; index++) {
                let order = data.Order[index];
                if (order != null && order.ml_order_id === selected_order) {
                    value = order.ordered_by.id;
                }
            }
        }
        return value;
    }
    const getOrderingPhysicianBadgeID = () => {
        let badge = '';
        if (data != null && data.Order != null && data.Order.length > 0) {
            let index: number;
            for (index = 0; index < data.Order.length; index++) {
                let order = data.Order[index];
                if (order != null && order.ml_order_id === selected_order) {
                    badge = order.ordered_by.badge_id;
                }
            }
        }
        return badge;
    }
    const getTestOrdered = () => {
        let value = '';
        if (data != null && data.Order != null && data.Order.length > 0) {
            let index: number;
            for (index = 0; index < data.Order.length; index++) {
                let order = data.Order[index];
                if (order != null && order.ml_order_id === selected_order) {
                    if (order.test_ordered!=null){
                        value += order.test_ordered.name
                    }
                }
            }
        }
        return value;
    }
    const getTestsOrderedGraphID= () => {
        let value = '';
        if (data != null && data.Order != null && data.Order.length > 0) {
            let index: number;
            for (index = 0; index < data.Order.length; index++) {
                let order = data.Order[index];
                if (order != null && order.ml_order_id === selected_order) {
                    if (order.test_ordered!=null){
                        value += order.test_ordered.id
                    }

                }
            }
        }
        return value;
    }
    const getInformationRequests = (id: string) => {
        // @ts-ignore
        let information_requests: string[][] = [];
        if (data != null && data.Order != null && data.Order.length > 0) {
            let index: number;
            for (index = 0; index < data.Order.length; index++) {
                let order = data.Order[index];
                if (order != null && order.ml_order_id === id) {
                    let r: number;
                    for (r = 0; r < order.information_request.length; r++) {
                        // @ts-ignore
                        let row: string[] = [order.information_request[r].field, order.information_request[r].requested_date, order.information_request[r].requested_by.user_name, order.information_request[r].resolved_date, order.information_request[r].resolved_by==null ? '' : order.information_request[r].resolved_by.user_name, order.information_request[r].id]
                        information_requests.push(row)
                    }
                    break;
                }
            }
        }
        // @ts-ignore
        return information_requests;
    }
    const getInformationRequest_by_id = (order_id:string,ir_id:string) : Order_Information_Request => {
        let information_request : Order_Information_Request;
        if (data != null && data.Order != null && data.Order.length > 0) {
            let index: number;
            for (index = 0; index < data.Order.length; index++) {
                let order = data.Order[index];
                if (order != null && order.ml_order_id === order_id) {
                    let r: number;
                    for (r = 0; r < order.information_request.length; r++) {
                        // @ts-ignore
                        if (order.information_request[r].id===ir_id)
                        {
                            // @ts-ignore
                            information_request = order.information_request[r]
                            break;
                        }
                    }
                }
            }
        }

        // @ts-ignore
        return information_request;
    }
    const get_statement_value = (): string => {
        return comment_str
    }
    const handleCommentsChange = (s: string) => {
        set_comment_str(s)
    }

    useEffect(() => {
        const dob = day;
        if (dob!=null){
            let m = get_number_as_two_digit_string(dob.month);
            let d = get_number_as_two_digit_string(dob.day);
            let y = dob.year.toString();
            let bd = m + '-' + d + '-' + y;
            set_dob_str(bd);
        }
    },[day]);

    // const setEditValues = () => {
    //     set_name_str(getPatientName());
    //     set_mrn_str(getPatientMRN());
    //     set_sex_str(getPatientSex());
    //     set_order_date_str(getOrderDateString())
    //     set_received_order_id_str(getReceivedOrderID());
    //     set_diagnosis_str(getPatientDiagnosis());
    //     let dob_s = getPatientDOB()
    //     set_dob_str(dob_s);
    //     // console.log(dob_s);
    //     let toks = dob_s.split('-')
    //     // console.log(toks);
    //     const dob = {
    //         year: parseInt(toks[2]),
    //         month: parseInt(toks[0]),
    //         day: parseInt(toks[1]),
    //     };
    //     // console.log(dob);
    //     setDay(dob);
    //     set_ordering_physician(getOrderingPhysician());
    //     set_ordering_physician_graph_id(getOrderingPhysician_graph_id);
    //     set_attending_physician(getAttendingPhysician());
    //     set_attending_physician_graph_id(getAttendingPhysician_graph_id);
    //     set_test_str(getTestOrdered());
    //     set_test_graph_id(getTestsOrderedGraphID());
    //     set_date_received_str(getDateReceived())
    // }


    const handleEdit = () => {
        if (user_can_edit_orders) {
            set_name_str(getPatientName());
            set_mrn_str(getPatientMRN());
            set_sex_str(getPatientSex());
            set_order_date_str(getOrderDateString())
            set_received_order_id_str(getReceivedOrderID());
            set_diagnosis_str(getPatientDiagnosis());

            let dob_s = getPatientDOB()
            set_dob_str(dob_s);
            let toks = dob_s.split('-')
            const dob = {
                year: parseInt(toks[2]),
                month: parseInt(toks[0]),
                day: parseInt(toks[1]),
            };
            setDay(dob);

            set_ordering_physician(getOrderingPhysician());
            set_ordering_physician_graph_id(getOrderingPhysician_graph_id);
            set_attending_physician(getAttendingPhysician());
            set_attending_physician_graph_id(getAttendingPhysician_graph_id);
            set_test_str(getTestOrdered());
            set_test_graph_id(getTestsOrderedGraphID());
            set_date_received_str(getDateReceived())
            set_editing(true);
        }
        else {
            alert.show("You do not have permission to edit Orders")

        }
    }
    const get_search_string_lower_str = ():string => {
        let ssl:string = name_str.toLowerCase() + ' ' + mrn_str.toLowerCase() + ' ' +
            getAttendingPhysician().toLowerCase() + ' ' + getOrderingPhysician().toLowerCase()+ ' ' + getTestOrdered()
//        search_string_lower = patient_name.lower() + ' ' + mrn.lower()+ ' ' + attending.lower() + ' ' + ordering.lower() + ' ' + test_name.lower()

        return ssl;
    }

    const saveOrderInfo = async () => {
        let ssl:string = get_search_string_lower_str();

        if (selected_order_graph_id===NEW_ORDER_GRAPH_ID){
            let tup = get_order_id_and_graph_id()
            let ml_order_id = tup[0];
            let graph_id = tup[1];
            let status_graph_id = get_unique_graph_id('status_')
            let user_id = user_graph_id;

            await createOrderMutation({
                variables:{
                    comments:comment_str,date_of_birth:dob_str,diagnosis:diagnosis_str,id:graph_id,
                    ml_order_id:ml_order_id,mrn:mrn_str,order_date:order_date_str,patient_name:name_str,received_date:date_received_str,received_order_id:received_order_id_str,
                    rejected_once:false,search_string_lower:ssl,sex:sex_str,attending_physician_id:attending_physician_graph_id,ordered_by_id:ordering_physician_graph_id,test_id:test_graph_id,
                    status_graph_id:status_graph_id, status_date:now_as_string(),created_by:user_id
                }
            });
        }
        else {
            await updateOrderMutation({
                variables:{
                    comments:comment_str,date_of_birth:dob_str,diagnosis:diagnosis_str,id:selected_order_graph_id,
                    ml_order_id:selected_order,mrn:mrn_str,order_date:order_date_str,patient_name:name_str,received_date:date_received_str,received_order_id:received_order_id_str,
                    rejected_once:false,search_string_lower:ssl,sex:sex_str,attending_physician_id:attending_physician_graph_id,ordered_by_id:ordering_physician_graph_id,test_id:test_graph_id,
                }
            });
        }
        set_editing(false);
        set_selected_order('')

        refetch();
    }
    const handleAccept = async () => {
        let accepted_date = now_as_string();
        let user_id = user_graph_id;
        let status_graph_id = get_unique_graph_id('status_')

        await acceptOrderMutation({
            variables:{
                accepted_by:user_id,id:selected_order_graph_id,old_status_graph_id:selected_order_status_graph_id,status_date:accepted_date,status_graph_id:status_graph_id
            }
        });
        await client.resetStore();
        await refetch();
        set_editing(false);
        set_selected_order('')
    }

    const handleCancelOrder = async () => {
        if (comment_str==='')
        {
            alert.show('Please create a comment explaining the reason for canceling this order.')
        }
        else {
            let rejected_date = now_date_as_string();
            let user_id = user_graph_id;
            let status_graph_id = get_unique_graph_id('status_')

            await rejectOrderMutation({
                variables:{
                    rejected_by:user_id,id:selected_order_graph_id,old_status_graph_id:selected_order_status_graph_id,status_date:rejected_date,status_graph_id:status_graph_id
                }
            });
            await client.resetStore();
            await refetch();
            set_editing(false);
            set_selected_order('')
        }
    }

    const cancelEdit = () => {
        set_comment_str(getComments(selected_order));
        set_editing(false);
    }
    //
    const handleResolved = async (info_req_id: string) => {
        let user_id = user_graph_id;
        let ir: Order_Information_Request  = getInformationRequest_by_id(selected_order,info_req_id)
        let graph_id = ir.id;
        let f: Order_Information_Request_Fields = ir.field;
        let req_date = ir.requested_date;
        let res_date = now_as_string();
        await updateOrderInformationRequestMutation({
            variables: {
                field: f,
                id: graph_id,
                requested_date: req_date,
                resolved_date: res_date,
                resolved_by:user_id
            }
        })
        let ssl:string = get_search_string_lower_str();

        await updateOrderMutation({
            variables:{
                comments:comment_str,date_of_birth:dob_str,diagnosis:diagnosis_str,id:selected_order_graph_id,
                ml_order_id:selected_order,mrn:mrn_str,order_date:order_date_str,patient_name:name_str,received_date:date_received_str,received_order_id:received_order_id_str,
                rejected_once:false,search_string_lower:ssl,sex:sex_str,attending_physician_id:attending_physician_graph_id,ordered_by_id:ordering_physician_graph_id,test_id:test_graph_id,
            }
        });
        await refetch();
        set_editing(false);
        set_selected_order('')

        refetch();
    }

    const handle_information_request = async (field: Order_Information_Request_Fields, field_string: string) => {
        let req_date = now_as_string();
        let user_id = user_graph_id;
        let graph_id = get_unique_graph_id('order_info_req_')
        await addOrderInformationRequestMutation({
            variables: {
                field: field,
                id: graph_id,
                requested_date: req_date,
                requested_by: user_id,
                order_id: selected_order_graph_id
            }
        })
         let ssl:string = get_search_string_lower_str();

        await updateOrderMutation({
            variables:{
                comments:comment_str,date_of_birth:dob_str,diagnosis:diagnosis_str,id:selected_order_graph_id,
                ml_order_id:selected_order,mrn:mrn_str,order_date:order_date_str,patient_name:name_str,received_date:date_received_str,received_order_id:received_order_id_str,
                rejected_once:false,search_string_lower:ssl,sex:sex_str,attending_physician_id:attending_physician_graph_id,ordered_by_id:ordering_physician_graph_id,test_id:test_graph_id,
            }
        });
        await refetch();

        set_editing(false);
        set_selected_order('')

        if (field_string.toLowerCase() === 'other') {
            field_string = comment_str
        }
        let paste_string = "Please contact the Molecular Lab at 716-845-1300 x4212.  More information (" + field_string + ") is needed for your recent order of " +
            getTestOrdered() + ' for ' + getPatientName() + ' (' + getPatientMRN() + ").  Thanks."
        let badge_id = getOrderingPhysicianBadgeID();
        let url_string = 'https://i2proxy.roswellpark.org/people/listing/' + badge_id
        setClipboard(paste_string);
        window.open(url_string);
    }

    const handleIRCheck = (event:React.ChangeEvent<HTMLInputElement>) => {
        if (use_ir_filter===''){
            set_use_ir_filter('xxx');
        }
        else {
            set_use_ir_filter('');
        }
    }

    function not_resolved(info_req_id: string):boolean {
        let ir: Order_Information_Request  = getInformationRequest_by_id(selected_order,info_req_id)
        return ir.resolved_by===null;
    }
    //(value, event) => alert('New date is: ', value)
    // @ts-ignore
    function onDateChange(value, event) {
        alert.show('New date is: ', value)
    }


    return (
        <Fragment>
            <div className={className}></div>
            {!editing && <div className={`${className}__Panel_Wrapper`}>
                <div className={`${className}__Panel`}>

                        <span className={`${className}__Buttons`}>

                            <button className={'Orders__btn btn-primary'} onClick={handleAdd}>Add Order</button>
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
                        <div className={`${className}__Table_Cell_Large`}>Patient Name</div>
                        <div className={`${className}__Table_Cell_Small`}>MRN</div>
                        <div className={`${className}__Table_Cell_Large`}>Ordered By</div>
                        <div className={`${className}__Table_Cell_Medium`}>ML Order ID</div>
                        <div className={`${className}__Table_Cell_Medium`}>Date Received</div>
                        <div className={`${className}__Table_Cell_Medium`}>Tests Ordered</div>
                        <div className={`${className}__Table_Cell_Large`}>
                            <input
                                name="isGoing"
                                type="checkbox"
                                checked={use_ir_filter==='xxx'}
                                onChange={handleIRCheck} /> &nbsp;
                            Information Requested?</div>
                    </div>
                </div>

                <div className={`${className}__Table_Container`}>

                    <div className={`${className}__Table`}>
                        {!!data.Order && data.Order.map((order, i: number) =>
                            !!order && (
                                <div key={i} className={`${className}__Row`}
                                     onClick={() => handleOrder_select(order.ml_order_id,order.id,order.status.id)}>
                                    <div
                                        className={order.ml_order_id === selected_order ? `${className}__Table_Cell_Large_selected` : `${className}__Table_Cell_Large`}
                                    >{order.patient_name}</div>
                                    <div
                                        className={order.ml_order_id === selected_order ? `${className}__Table_Cell_Small_selected` : `${className}__Table_Cell_Small`}
                                    >{order.mrn}</div>
                                    <div
                                        className={order.ml_order_id === selected_order ? `${className}__Table_Cell_Large_selected` : `${className}__Table_Cell_Large`}
                                    >{order.ordered_by.first_name} {order.ordered_by.last_name} {order.ordered_by.degrees}</div>
                                    <div
                                        className={order.ml_order_id === selected_order ? `${className}__Table_Cell_Medium_selected` : `${className}__Table_Cell_Medium`}
                                    >{order.ml_order_id} </div>
                                    <div
                                        className={order.ml_order_id === selected_order ? `${className}__Table_Cell_Medium_selected` : `${className}__Table_Cell_Medium`}
                                    >{order.received_date} </div>
                                    <div
                                        className={order.ml_order_id === selected_order ? `${className}__Table_Cell_Medium_selected` : `${className}__Table_Cell_Medium`}
                                    >{get_tests_as_string(i)} </div>
                                    <div
                                        className={order.ml_order_id === selected_order ? `${className}__Table_Cell_Large_selected` : `${className}__Table_Cell_Large`}
                                    >{get_information_requested_as_string(i)} </div>
                                </div>)
                        )
                        }
                    </div>
                </div>
            </div>}
            {selected_order !== '' ? <div>
                <div className={editing ?'Orders__Details_Panel_Select':'Orders__Details_Panel'}><h3>Order Details:</h3>

                    <div className={'Orders__DetailsTable'}>
                        <div className={'Orders__DetailsRow'}>
                            <div className={'Orders__DetailsCellLeft'}>Name:</div>
                            <div className={'Orders__DetailsCellRight'}>{editing ?
                                <span><textarea className={`${className}__ShortTextarea`} name="name"
                                                placeholder="Name..." value={name_str} onChange={(e) => {
                                    set_name_str(e.target.value)
                                }}/></span> : getPatientName()}</div>
                            <div className={'Orders__DetailsCellLeft'}>Attending Physician:</div>
                            <div className={'Orders__DetailsCellRight'}>{editing ?
                                <PhysicianSelectContainer physicianString={attending_physician} physician_graph_id={attending_physician_graph_id}
                                                          set_physicianString={set_attending_physician} set_physician_graph_id={set_attending_physician_graph_id}/> : getAttendingPhysician()}</div>
                        </div>
                        <div className={'Orders__DetailsRow'}>
                            <div className={'Orders__DetailsCellLeft'}>Date of Birth:</div>
                            <div className={'Orders__DetailsCellRight'}>{editing ?<DatePicker value={day} onChange={setDay}  formatInputText={() => dob_str}/> : getPatientDOB()}</div>
                            <div className={'Orders__DetailsCellLeft'}>Ordered By:</div>
                            <div className={'Orders__DetailsCellRight'}>{editing ?
                                <PhysicianSelectContainer physicianString={ordering_physician} physician_graph_id={ordering_physician_graph_id}
                                                          set_physicianString={set_ordering_physician} set_physician_graph_id={set_ordering_physician_graph_id}/> : getOrderingPhysician()}</div>
                        </div>
                        <div className={'Orders__DetailsRow'}>
                            <div className={'Orders__DetailsCellLeft'}>MRN:</div>
                            <div className={'Orders__DetailsCellRight'}>{editing ?
                                <span><textarea className={`${className}__ShortTextarea`} name="mrn"
                                                placeholder="MRN..." value={mrn_str} onChange={(e) => {
                                    set_mrn_str(e.target.value)
                                }}/></span> : getPatientMRN()}</div>
                            <div className={'Orders__DetailsCellLeft'}>Test Ordered:</div>
                            <div className={'Orders__DetailsCellRight'}>{editing ?
                                <TestSelectContainer set_testString={set_test_str} set_test_graph_id={set_test_graph_id} test_graph_id={test_graph_id}
                                                     testString={test_str}/> : getTestOrdered()}</div>
                        </div>
                        <div className={'Orders__DetailsRow'}>
                            <div className={'Orders__DetailsCellLeft'}>Sex:</div>
                            <div className={'Orders__DetailsCellRight'}>{editing ?
                                <SexSelect sexString={sex_str} set_sexString={set_sex_str} />
                                // <span><textarea className={`${className}__ShortTextarea`} name="sex" placeholder="Sex..." value={sex_str} onChange={(e) => {set_sex_str(e.target.value)}}/></span>
                                : getPatientSex()}</div>
                            <div className={'Orders__DetailsCellLeft'}>Date Ordered:</div>
                            <div className={'Orders__DetailsCellRight'}> {editing ? order_date_str :getOrderDateString()}</div>
                        </div>
                        <div className={'Orders__DetailsRow'}>
                            <div className={'Orders__DetailsCellLeft'}>Diagnosis:</div>
                            <div className={'Orders__DetailsCellRight'}>{editing ?
                                <span><textarea className={`${className}__ShortTextarea`} name="diagnosis"
                                                placeholder="Diagnosis..." value={diagnosis_str} onChange={(e) => {
                                    set_diagnosis_str(e.target.value)
                                }}/></span> : getPatientDiagnosis()}</div>
                            <div className={'Orders__DetailsCellLeft'}>Received Order ID:</div>
                            <div
                                className={'Orders__DetailsCellRight'}>{editing ? received_order_id_str : getReceivedOrderID()}</div>
                        </div>
                        {editing && <div className={'Orders__DetailsRow'}>
                            <div className={'Orders__DetailsCellLeft'}>
                                Authorized Diagnoses:
                            </div>
                            <div className={'Orders__DetailsCellRight'}>
                                <AuthorizedDiagnosisSelectContainer authorized_diagnosisString={diagnosis_str} set_authorized_diagnosisString={set_diagnosis_str} test_graph_id={test_graph_id} />
                            </div>
                        </div> }
                    </div>
                </div>
                <div className="Vertical_SpacerWithBorder_10"></div>
                    {/*{editing && <div>*/}
                    {/*    <AuthorizedDiagnosisSelectContainer authorized_diagnosisString={diagnosis_str} set_authorized_diagnosisString={set_diagnosis_str} test_graph_id={test_graph_id} />*/}
                    {/*</div>}*/}

                <div className={'Orders__Notes_Panel'}><h3>Information Requests: {editing && can_request_info_selected_order() &&
                   <InformationRequestFieldSelect selected_order={selected_order} info_request_field={info_request_field} set_info_request_field={set_info_request_field} handle_information_request={handle_information_request}/>

                }</h3>
                    <div className={'Vertical_Spacer_10'}></div>
                    {((editing && !can_request_info_selected_order()) || !editing) &&
                    <div className={`${className}__Notes_Table_Container`}>
                        <div className={`${className}__Notes_Table`}>
                            <div className={`${className}__Header_Row`}>
                                <div className={`${className}__Notes_Table_Cell_Small`}>Field</div>
                                <div className={`${className}__Notes_Table_Cell_Large`}>Requested Date</div>
                                <div className={`${className}__Notes_Table_Cell_Large`}>Requested By</div>
                                <div className={`${className}__Notes_Table_Cell_Large`}>Resolved Date</div>
                                <div className={`${className}__Notes_Table_Cell_Large`}>Resolved By</div>
                            </div>
                        </div>
                        <div className={`${className}__Notes_Table`}>
                            {
                                info_requests.map((s_a, i: number) => (
                                    <div key={i} className={`${className}__Row`}>
                                        <div className={`${className}__Notes_Table_Cell_Small`}>{s_a[0]}</div>
                                         <div className={`${className}__Notes_Table_Cell_Large`}>{s_a[1]}</div>
                                        <div className={`${className}__Notes_Table_Cell_Large`}>{s_a[2]}</div>
                                        <div className={`${className}__Notes_Table_Cell_Large`}>{s_a[3]}</div>
                                        <div className={`${className}__Notes_Table_Cell_Large`}>
                                            {(editing && not_resolved(s_a[5])) ? <button className={'btn btn-primary'}
                                                               onClick={() => handleResolved(s_a[5])}>Resolve</button> : s_a[4]}
                                        </div>

                                    </div>
                                ))
                            }
                        </div>
                    </div> }

                </div>


                <div className={'Orders__Comments_Panel'}><h3>Comments:</h3>
                    {editing ?
                    <div >
                        <textarea className={`${className}__Textarea`} name="statement" placeholder="Comments..." value={comment_str} onChange={(e) => {set_comment_str(e.target.value)}}/>
                    </div> : <div>{get_statement_value()}</div> }
                </div>

                <div className={'Orders__Button_Panel'}>
                    {editing ? <span>
                    <button value="Save" className="Orders__btn btn-primary"
                            onClick={() => saveOrderInfo()}>Save</button>
                    <button value="Cancel" className="Orders__btn btn-primary"
                            onClick={() => cancelEdit()}>Cancel</button>
                        </span> :
                        <span>
                            <button value="Edit" className="Orders__btn btn-primary"
                                    onClick={() => handleEdit()}>Edit</button>
                            <button className={'Orders__btn btn-primary'} onClick={handleAccept}>Accept</button>
                             {can_cancel_selected_order() &&
                            <button className={'Orders__btn btn-primary'} onClick={handleCancelOrder}>Cancel
                                Order</button>
                            }
                       </span>
                    }

                </div>
                <div>

                </div>
            </div> : <div></div>}
        </Fragment>
    )
}

export default Orders;

