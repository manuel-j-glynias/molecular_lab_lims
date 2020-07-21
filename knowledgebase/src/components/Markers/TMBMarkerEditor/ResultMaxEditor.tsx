import * as React from 'react';
import {useUserContentState} from "../../../context/UserContentContext"
import {Scalars, useTmbMarkerAddResultMaxMutation} from "../../../generated/graphql";
import {get_editable_float_mutation_object} from "../../common/Helpers/EditableStatementHelper";
import {useEffect} from "react";
import {preflight, parse_description,preflightResult} from "../../common/Helpers/Ref_helpers"

interface Props {
    maxResult: number;
    set_editing: (b:boolean) => void;
    marker_id: string,
    es_ID: string;
    es_field: string;
    ref_array: string[];
    refetch: () => void;
}

const className = 'TMBMarkerEditor';

const ResultMinEditor : React.FC<Props> = ({maxResult,set_editing,es_ID, es_field,marker_id,ref_array,refetch}) => {

    const [statement_value, set_statement_value] = React.useState(maxResult);
    const statement_string = React.useRef(maxResult.toString());
    const [pmid_list, set_pmid_list] = React.useState('');

    const [addResultMinMutation, { loading: mutationLoading, error: mutationError, data:mutationData }] = useTmbMarkerAddResultMaxMutation(
        {variables:
                    {marker_id:'',
                    old_es_id:'',
                    date: '',
                    es_field:'',
                    ef_float:0,
                    es_id:'',
                    user_id: '',
                    ref_aray:[]}})


    const {
        UserContentState: {userID}
    } = useUserContentState();

    const user_ID : string = userID;



    function getResultMin() {
        let number = -1;
        if (statement_string.current != ''){
            number = parseFloat(statement_string.current);
        }
        return number;
    }

    async function call_mutation(pmids: Array<string>) {
        const mutation_object = get_editable_float_mutation_object(marker_id, es_ID, es_field, getResultMin(), user_ID, pmids)
        await addResultMinMutation({variables: mutation_object})
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

    const post_save = () => {

        if (mutationData!=null){
            refetch()
            set_editing(false)
        }
    }
    useEffect(post_save,[mutationData])

    const cancelEdit = async () => {
        set_editing(false)
    };

    const get_statement_value = (): string => {
        return statement_string.current
    }

    const handle_change = async (targetValue:string) => {
        if (!isNaN(Number(targetValue))){
            statement_string.current = targetValue
            set_statement_value(Number(targetValue))
        }
    }


    return ( <div className="form-group">
            <textarea className={`${className}__ShortTextarea`} name="statement" placeholder="Max Value(float)" value={get_statement_value()} onChange={(e) => {handle_change(e.target.value)}}/>
            <div className="form-group">
                <div><input type="text" placeholder="PMIDs" value={pmid_list} onChange={e => set_pmid_list(e.target.value )} required/></div>
                {/*<div><input type="text" placeholder="URLs" value={url_list} onChange={e => set_url_list(e.target.value )} required/></div>*/}
            </div>
            <button value="Save" className="btn btn-primary my-1" onClick={() => save()}>Save
            </button>
            <button value="Cancel" className="btn btn-primary my-1"
                    onClick={() => cancelEdit()}>Cancel
            </button>
            <div>
                {mutationLoading && <p>Loading...</p>}
                {mutationError && <p>Error :( Please try again</p>}
                {mutationData && <p>Data</p>}
            </div>

        </div>
    )
};

export default ResultMinEditor;