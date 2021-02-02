import * as React from 'react'
import Select, {ValueType} from 'react-select';

import './styles.css'

interface Props  {
    sexString:string;
    set_sexString: (id:string) => void;
}

const className = 'SexSelect';



const SexSelect: React.FC<Props> = ({sexString,set_sexString}) => {

    interface ISelectState {
        value: string; label: string;
    }
    // @ts-ignore
    var options: [ISelectState] = [
        { value: 'Male', label: 'Male' },
        { value: 'Female', label: 'Female' },
    ];
    const state  = {
        selectedOption: { value: sexString, label: sexString },
    };

    const handleChange = async (option:ValueType<ISelectState, any>) => {
        // @ts-ignore
        state.selectedOption.value = option.value;
        // @ts-ignore
        state.selectedOption.label = option.label;
        set_sexString(state.selectedOption.label);
    }
    return (<span> <Select className={`${className}__select`}  options = {options} onChange={option => handleChange(option)}
                           value={state.selectedOption}
        /></span>
    )
}

export default React.memo(SexSelect);