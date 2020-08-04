import * as React from 'react';
import {useUserContentState} from "../../../context/UserContentContext"
import {useMarkerProfileAddNameMutation} from "../../../generated/graphql";
import {get_msi_mutation_object} from "../../common/Helpers/EditableStatementHelper";
import {useEffect} from "react";
import BaseNameEditor from "../../common/BaseNameEditor/BaseNameEditor";

interface Props {
    statement: string;
    set_editing: (b:boolean) => void;
    marker_id: string,
    es_ID: string;
    es_field: string;
    ref_array: string[];
    refetch: () => void;
}

const className = 'MarkerProfileEditor';

const NameEditableStatementEditor : React.FC<Props> = ({statement,set_editing,es_ID, es_field,marker_id,ref_array,refetch}) => {

    const statement_string = React.useRef(statement);

    const [addNameMutation, { loading: mutationLoading, error: mutationError, data:mutationData }] = useMarkerProfileAddNameMutation({variables:{marker_id:'', old_es_id:'',
            date: '', es_field: '', es_statement:'', es_id: '', user_id: '', ref_aray:[]}})


    const {
        UserContentState: {userID}
    } = useUserContentState();

    const user_ID : string = userID;


    async function call_mutation(pmids: Array<string>) {
        const mutation_object = get_msi_mutation_object(marker_id, es_ID, es_field, statement_string.current, user_ID, pmids)
        await addNameMutation({variables: mutation_object})
    }


    const post_save = () => {

        if (mutationData!=null){
            refetch()
            set_editing(false)
        }
    }
    useEffect(post_save,[mutationData])



    return ( <div className="form-group">
            <BaseNameEditor statement={statement} set_editing={set_editing} call_mutation={call_mutation}
                            statement_string={statement_string} ref_array={ref_array}/>
            <div>
                {mutationLoading && <p>Loading...</p>}
                {mutationError && <p>Error :( Please try again</p>}
                {mutationData && <p>Data</p>}
            </div>

        </div>
    )
};

export default NameEditableStatementEditor;