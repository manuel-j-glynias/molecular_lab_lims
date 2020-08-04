import * as React from 'react';
import {useUserContentState} from "../../../context/UserContentContext"
import {
    OntologicalDiseaseAddNameMutationVariables,
    useOntologicalDiseaseAddNameMutation
} from "../../../generated/graphql";
import {
    get_date_as_hyphenated_string,
    get_unique_graph_id
} from "../../common/Helpers/EditableStatementHelper";
import {useEffect} from "react";
import {preflight, parse_description,preflightResult} from "../../common/Helpers/Ref_helpers"

interface Props {
    statement: string;
    set_editing: (b:boolean) => void;
    id: string,
    es_ID: string;
    es_field: string;
    ref_array: string[];
    refetch: () => void;
}

const className = 'OntologicalDisease';

const NameEditableStatementEditor : React.FC<Props> = ({statement,set_editing,es_ID, es_field,id,ref_array,refetch}) => {

    const [statement_value, set_statement_value] = React.useState(statement);
    const statement_string = React.useRef(statement);
    const [pmid_list, set_pmid_list] = React.useState('');

    const [addNameMutation, { loading: mutationLoading, error: mutationError, data:mutationData }] = useOntologicalDiseaseAddNameMutation({variables:{id:'', old_es_id:'',
            date: '', es_field: '', es_statement:'', es_id: '', user_id: '', ref_aray:[]}})


    const {
        UserContentState: {userID}
    } = useUserContentState();

    const user_ID : string = userID;


    const get_ontological_disease_mutation_object = (id:string, oldESID:string, esField:string, description:string, userID:string, refs_array:Array<string>): OntologicalDiseaseAddNameMutationVariables=> {
        const  variables :OntologicalDiseaseAddNameMutationVariables = {
            id: id,
            old_es_id:oldESID,
            date: get_date_as_hyphenated_string(),
            es_field: esField,
            es_statement:description,
            es_id: get_unique_graph_id('es_' ),
            user_id: userID,
            ref_aray:refs_array
        }
        return variables;
    }

    async function call_mutation(pmids: Array<string>) {
        const mutation_object = get_ontological_disease_mutation_object(id, es_ID, es_field, statement_string.current, user_ID, pmids)
        await addNameMutation({variables: mutation_object})
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
        statement_string.current = targetValue
        set_statement_value(targetValue)
     }


    return ( <div className="form-group">
        <textarea className={`${className}__ShortTextarea`} name="statement" placeholder="Name" value={get_statement_value()} onChange={(e) => {handle_change(e.target.value)}}/>
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

export default NameEditableStatementEditor;