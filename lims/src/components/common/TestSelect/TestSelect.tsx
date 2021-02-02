import * as React from 'react'
import Select, {ValueType} from 'react-select';
import {useEffect} from "react";
import { TestsListQuery } from '../../../generated/graphql';
import './styles.css'

interface Props  {
    data: TestsListQuery;
    testString:string;
    set_testString: (s:string) => void;
    test_graph_id:string;
    set_test_graph_id: (id:string) => void;

}

const className = 'TestSelect';



const TestSelect: React.FC<Props> = ({data,testString,
                                         set_testString,test_graph_id,set_test_graph_id}) => {

    interface ISelectState {
        value: string; label: string;
    }
    // @ts-ignore
    var options: [ISelectState] = [
    ];
    const state  = {
        selectedOption: { value: test_graph_id, label: testString },
    };
    const init_select = () => {
        if (data && data.Molecular_Lab_Test) {
            data.Molecular_Lab_Test.map(
                (test, i: string | number ) =>
                {
                    if (test){
                        const name = test.name;
                        const select_option :ISelectState = {value:test.id,label:name}
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
        set_testString(state.selectedOption.label );
        set_test_graph_id(state.selectedOption.value)
    }
    return (<span> <Select   className={`${className}__select`}  options = {options} onChange={handleChange}
                           value={state.selectedOption}
        /></span>
    )
}

export default React.memo(TestSelect);