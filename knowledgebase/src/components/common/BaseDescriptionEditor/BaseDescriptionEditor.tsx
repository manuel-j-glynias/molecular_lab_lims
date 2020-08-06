import * as React from 'react';
import {MutableRefObject} from "react";
import {preflight, preflightResult} from "../Helpers/Ref_helpers";
import './styles.css';


interface Props {
    statement: string;
    set_editing: (b:boolean) => void;
    call_mutation: ([]) => void;
    statement_string:MutableRefObject<string>;
    ref_array: string[];

}

const className = 'BaseDescriptionEditor';

const BaseDescriptionEditor : React.FC<Props> = ({statement,set_editing,statement_string,ref_array,call_mutation}) => {

    const [statement_value, set_statement_value] = React.useState(statement);
    const [pmid_list, set_pmid_list] = React.useState('');

    const get_statement_value = (): string => {
        return statement_string.current
    }
    const handle_change = async (targetValue:string) => {
        statement_string.current = targetValue
        set_statement_value(targetValue)
    }
    const save = async () => {
        let pmids:Array<string> = []
        if (ref_array.length>0 && ref_array[0] != "") {
            pmids = ref_array
        }

        let pmidstringarray = pmid_list.split(',')
        for (let pmid of pmidstringarray){
            if (pmid.includes(':')){
                pmid = pmid.split(':')[1].trim()
            }
            if (pmid!="" && !pmids.includes(pmid)){
                pmids.push(pmid)
            }
        }
        if (pmids.length>0) {
            const preflight_input = pmids.join(',')
            preflight(preflight_input).then((response: preflightResult) => {
                call_mutation(response.refs)
            })
        }
        else {
            call_mutation([])
        }
    };

    const cancelEdit = async () => {
        set_editing(false)
    };


    return ( <div className="form-group">
            <textarea className={`${className}__ShortTextarea`} name="statement" placeholder="Name" value={get_statement_value()} onChange={(e) => {handle_change(e.target.value)}}/>
            <div className="form-group">
                <div><input type="text" placeholder="PMIDs" value={pmid_list} onChange={e => set_pmid_list(e.target.value )} required/></div>
            </div>
            <button value="Save" className="btn btn-primary my-1" onClick={() => save()}>Save
            </button>
            <button value="Cancel" className="btn btn-primary my-1"
                    onClick={() => cancelEdit()}>Cancel
            </button>

        </div>
    )
};

export default BaseDescriptionEditor;