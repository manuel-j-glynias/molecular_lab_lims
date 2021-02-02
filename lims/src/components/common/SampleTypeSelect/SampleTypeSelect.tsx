import * as React from 'react'
import Select, {ValueType} from 'react-select';
import {useEffect} from "react";
import { SampleTypeListQuery } from '../../../generated/graphql';
import './styles.css'

interface Props  {
    data: SampleTypeListQuery;
    sampleTypeString:string;
    set_sampleTypeString: (s:string) => void;
    sampleType_graph_id:string;
    set_sampleType_graph_id: (id:string) => void;

}

const className = 'SampleTypeSelect';


const SampleTypeSelectSelect: React.FC<Props> = ({data,
                                                     sampleTypeString, set_sampleTypeString,sampleType_graph_id,set_sampleType_graph_id}) => {

    interface ISelectState {
        value: string; label: string;
    }
    // @ts-ignore
    var options: [ISelectState] = [
    ];
    const state  = {
        selectedOption: { value: sampleType_graph_id, label: sampleTypeString },
    };
    const init_select = () => {
        if (data && data.Sample_Type) {
            data.Sample_Type.map(
                (sampleType, i: string | number ) =>
                {
                    if (sampleType){
                        const name = sampleType.name;
                        const select_option :ISelectState = {value:sampleType.id,label:name}
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
        set_sampleTypeString(state.selectedOption.label );
        set_sampleType_graph_id(state.selectedOption.value)
    }
    return (<span> <Select   className={`${className}__select`}  options = {options} onChange={handleChange}
                             value={state.selectedOption}
        /></span>
    )
}

export default React.memo(SampleTypeSelectSelect);