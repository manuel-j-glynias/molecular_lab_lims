import * as React from 'react'
import Select, {ValueType} from 'react-select';
import {useEffect} from "react";

import {AcceptedOrdersListQuery, AcceptedStatus} from '../../../generated/graphql';
import './styles.css'

interface Props  {
    data: AcceptedOrdersListQuery;
    set_name_str: (s:string) => void;
    set_mrn_str: (s:string) => void;
    set_ordering_physician: (s:string) => void;
    set_ordering_physician_graph_id: (s:string) => void;
    set_received_order_id_str: (s:string) => void;
    set_test_str: (s:string) => void;
}

const className = 'AcceptedOrdersSelect';



const AcceptedOrdersSelect: React.FC<Props> = ({data,set_name_str, set_mrn_str, set_ordering_physician,
                                          set_ordering_physician_graph_id, set_received_order_id_str,set_test_str}) => {
    const [selected_physician, set_selected_physician] = React.useState('');
    const handlePhysician_select =  (id:string)  => {
        set_selected_physician(id)
    }
    interface ISelectState {
        value: string; label: string;
    }
    interface ISelectData {
        graph_id: string;
        name: string;
        mrn: string;
        ordering_physician:string;
        ordering_physician_graph_id:string;
        received_order_id: string;
        test_str: string;
    }

    // @ts-ignore
    var options: [ISelectState] = [
    ];
    // @ts-ignore
    let selectData:[ISelectData] = [];

    const state  = {
        selectedOption: { value: '', label: '' },
    };
    const init_select = () => {
        if (data && data.Order) {
            data.Order.map(
                (order, i: string | number ) =>
                {
                    if (order && order.status.status==AcceptedStatus.Accepted){
                        const name = order.patient_name+ ' ' + order.mrn +' ' + order.received_order_id +' ' + order.test_ordered.name;
                        const select_option :ISelectState = {value:order.id,label:name}
                        options.push(select_option);
                        let physician = order.ordered_by
                        const data_obj :ISelectData = {graph_id:order.id,name:order.patient_name, mrn:order.mrn,
                            ordering_physician:physician.first_name+ ' ' + physician.last_name +' ' + physician.degrees,
                            ordering_physician_graph_id:physician.id, received_order_id:order.received_order_id,test_str:order.test_ordered.name};
                        selectData.push(data_obj);
                    }
                }
            )}
    }

    useEffect(init_select,[])

    const getSelectDataByID = (id:string) : ISelectData => {
        let data_obj : ISelectData = {graph_id:'',name:'',mrn:'',ordering_physician:'',ordering_physician_graph_id:'',received_order_id:'',test_str:''}
        let index : number = 0;
        for (index = 0; index < selectData.length; index++){
            let d = selectData[index];
            if (d!=null && d.graph_id==id){
                data_obj = d;
                break;
            }
        }
        return data_obj;
    }

    const handleChange = async (option:ValueType<ISelectState, any>) => {
        // @ts-ignore
        state.selectedOption.value = option.value;
        // @ts-ignore
        state.selectedOption.label = option.label;
        if (state.selectedOption.value != null){
            const data_obj : ISelectData = getSelectDataByID(state.selectedOption.value);
            set_name_str(data_obj.name);
            set_mrn_str(data_obj.mrn);
            set_ordering_physician(data_obj.ordering_physician);
            set_ordering_physician_graph_id(data_obj.ordering_physician_graph_id);
            set_received_order_id_str(data_obj.received_order_id);
            set_test_str(data_obj.test_str);
        }

    }
    return (<Select className={`${className}__select`}  options = {options} onChange={option => handleChange(option)}
                           value={state.selectedOption}
        />
    )
}

export default React.memo(AcceptedOrdersSelect);