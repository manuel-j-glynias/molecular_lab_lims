import * as React from 'react';
import {useAppendedContentState, AppendedContentActionTypes} from "../../../context/AppendedContentContext"
import {useUserContentState} from "../../../context/UserContentContext"
import {useVariantFusionAddDescriptionMutation} from "../../../generated/graphql";
import {get_description_mutation_object} from "../../common/Helpers/EditableStatementHelper";
import {useEffect} from "react";
import {preflight, parse_description,preflightResult} from "../../common/Helpers/Ref_helpers"

interface Props {
    description: string;
    set_editing: (b:boolean) => void;
    variant_ID: string,
    es_ID: string;
    es_field: string;
    refetch: () => void;
}

const className = 'GenomicMarkerSNVEditor';

const DescriptionEditor : React.FC<Props> = ({description,set_editing,es_ID, es_field,variant_ID,refetch}) => {

    const [description_value, set_description_value] = React.useState(description);

    const description_string = React.useRef(description);
    const copied_string = React.useRef('');

    const [addDescriptionMutation, { loading: mutationLoading, error: mutationError, data:mutationData }] = useVariantFusionAddDescriptionMutation({variables:{variant_id:'', old_es_id:'',
            date: '', es_field: '', es_statement:'', es_id: '', user_id: '', ref_aray:[]}})


    const {
        UserContentState: {userID}
    } = useUserContentState();

    const user_ID : string = userID;


    async function call_mutation(pmids: Array<string>) {
        const mutation_object = get_description_mutation_object(variant_ID, es_ID, es_field, description_string.current, user_ID, pmids)
        await addDescriptionMutation({variables: mutation_object})
    }


    const save = async () => {
         let pmids:Array<string> = parse_description(description_string.current)
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

     const {
        AppendedContentState: { textToAppend },
        setAppendedContentState
    } = useAppendedContentState();

    const delete_appended = () => {
        setAppendedContentState({type: AppendedContentActionTypes.appendToDescription, nextText: ''})
    }
    useEffect(delete_appended,[textToAppend])

    const get_description_value = (): string => {
        //        if (copied_string.current !==textToAppend && textToAppend != null && textToAppend.length>0){
        if (textToAppend != null && textToAppend.length>0){
            description_string.current += textToAppend;
            copied_string.current = textToAppend;
        }
        return description_string.current
     }
    const handle_change = async (targetValue:string) => {
        description_string.current = targetValue
        set_description_value(targetValue)
     }


    return ( <div className="form-group">
        <textarea className={`${className}__Textarea`} name="description" placeholder="Notes"
                  value={get_description_value()}
                  onChange={(e) => {handle_change(e.target.value)}}
        ></textarea>

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

export default DescriptionEditor;