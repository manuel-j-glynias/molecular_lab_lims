import * as React from 'react'
import Select, {ValueType} from 'react-select';
import {useEffect} from "react";

import { PhysicianListQuery } from '../../../generated/graphql';
import './styles.css'

interface Props  {
    data: PhysicianListQuery;
    physician_graph_id:string;
    physicianString:string;
    set_physicianString: (id:string) => void;
    set_physician_graph_id: (id:string) => void;
}

const className = 'PhysicianSelect';



const PhysicianSelect: React.FC<Props> = ({data,set_physicianString,physician_graph_id,physicianString,set_physician_graph_id}) => {
    const [selected_physician, set_selected_physician] = React.useState('');
    const handlePhysician_select =  (id:string)  => {
        set_selected_physician(id)
    }
    interface ISelectState {
        value: string; label: string;
    }
    // @ts-ignore
    var options: [ISelectState] = [
    ];
    const state  = {
        selectedOption: { value: physician_graph_id, label: physicianString },
    };
    const init_select = () => {
        if (data && data.Physician) {
            data.Physician.map(
                        (physician, i: string | number ) =>
                        {
                            if (physician){
                                const name = physician.first_name+ ' ' + physician.last_name +' ' + physician.degrees;
                                const select_option :ISelectState = {value:physician.id,label:name}
                                options.push(select_option);
                            }
                        }
            )}
        }

    useEffect(init_select,[state])
    const handleChange = async (option:ValueType<ISelectState, any>) => {
        // @ts-ignore
        state.selectedOption.value = option.value;
        // @ts-ignore
        state.selectedOption.label = option.label;
        set_physicianString(state.selectedOption.label);
        set_physician_graph_id(state.selectedOption.value);
    }
    return (<span> <Select className={`${className}__select`}  options = {options} onChange={option => handleChange(option)}
                           value={state.selectedOption}
        /></span>
  )
}

export default React.memo(PhysicianSelect);