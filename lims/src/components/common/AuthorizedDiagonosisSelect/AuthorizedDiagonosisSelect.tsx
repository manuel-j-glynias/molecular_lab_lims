import * as React from 'react'
import Select, {ValueType} from 'react-select';
import {useEffect} from "react";
import { TestByIdQuery } from '../../../generated/graphql';
import './styles.css'

interface Props  {
    data: TestByIdQuery;
    authorized_diagnosisString: string;
    set_authorized_diagnosisString: (s:string) => void;
}

const className = 'AuthorizedDiagnosisSelect';



const AuthorizedDiagnosisSelect: React.FC<Props> = ({data,authorized_diagnosisString,
                                         set_authorized_diagnosisString}) => {

    interface ISelectState {
        value: string; label: string;
    }
    // @ts-ignore
    var options: [ISelectState] = [
    ];
    const state  = {
        selectedOption: { value: authorized_diagnosisString, label: authorized_diagnosisString },
    };
    const init_select = () => {
        if (data && data.Molecular_Lab_Test && data.Molecular_Lab_Test[0] && data.Molecular_Lab_Test[0].authorized_diagnoses) {
            data.Molecular_Lab_Test[0].authorized_diagnoses.map(
                (diag, i: string | number ) =>
                {
                    if (diag){
                        const name = diag;
                        const select_option :ISelectState = {value:name,label:name}
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
        set_authorized_diagnosisString(state.selectedOption.label );
    }
    return (<span> <Select   className={`${className}__select`}  options = {options} onChange={handleChange}
                             value={state.selectedOption}
        /></span>
    )
}

export default React.memo(AuthorizedDiagnosisSelect);