import * as React from "react";
import {Fragment, useState} from "react";



export interface Props {
    set_query_string: (queryString: string) => void;
}
const className = 'ProteinExpressionMarkers';


const ProteinExpressionMarkers: React.FC<Props> = ({set_query_string}) => {
    const [filter_term, set_filter_term] = useState('');

    const handleNameFilter = () => {
        set_query_string(filter_term)
    }
    const keyPressed = async (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "Enter") {
            handleNameFilter()
        }
    }
    const handleReset = () => {
        set_query_string('')
        set_filter_term('')
    }


    return (<Fragment>
        <h5>Protein Expression Markers</h5>
    <div className={`${className}__Filter`}>
        <input className={'filter_text_input'} type="text"
               placeholder="Name contains..."
               name="subString" value={filter_term}
               onChange={e => set_filter_term(e.target.value)}
               onKeyPress={keyPressed}
        />
        <button className={'btn btn-primary'} onClick={handleNameFilter}>Filter</button>
        <button className={'btn btn-primary'} onClick={handleReset}>Reset</button>

    </div>
    </Fragment>)
}

export default ProteinExpressionMarkers;