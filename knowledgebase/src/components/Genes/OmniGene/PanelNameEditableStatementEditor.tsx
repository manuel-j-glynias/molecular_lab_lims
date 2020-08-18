import * as React from 'react';
import {useUserContentState} from "../../../context/UserContentContext"
import {useAddOmniGenePanelNameMutation} from "../../../generated/graphql";
import {useEffect} from "react";
import BaseNameEditor from "../../common/BaseNameEditor/BaseNameEditor";
import {get_description_mutation_object} from "./EditableStatementHelper";

interface Props {
    statement: string;
    set_editing: (b:boolean) => void;
    omnigene_ID: string,
    es_ID: string;
    es_field: string;
    refetch: () => void;
    ref_array: string[];
    update_names:() => void;
}

const className = 'OmniGene';

const PanelNameEditableStatementEditor : React.FC<Props> = ({statement,set_editing,es_ID, es_field,omnigene_ID,ref_array,refetch,update_names}) => {

    const statement_string = React.useRef(statement);

    const [addPanelNameMutation, { loading: mutationLoading, error: mutationError, data:mutationData }] = useAddOmniGenePanelNameMutation({variables:{gene_id:'', old_es_id:'',
            date: '', es_field: '', es_statement:'', es_id: '', user_id: '', ref_aray:[]}})


    const {
        UserContentState: {userID}
    } = useUserContentState();

    const user_ID : string = userID;


    async function call_mutation(pmids: Array<string>) {
        const mutation_object = get_description_mutation_object(omnigene_ID, es_ID, es_field, statement_string.current, user_ID, pmids)
        await addPanelNameMutation({variables: mutation_object})
    }


    const post_save = () => {

        if (mutationData!=null){
            refetch()
            update_names()
            set_editing(false)
        }
    }
    useEffect(post_save,[mutationData])



    return ( <div className="form-group">
            <BaseNameEditor statement={statement} set_editing={set_editing} call_mutation={call_mutation}
                            statement_string={statement_string} ref_array={ref_array} shouldAllowPmids={false}/>
            <div>
                {mutationLoading && <p>Loading...</p>}
                {mutationError && <p>Error :( Please try again</p>}
                {mutationData && <p>Data</p>}
            </div>

        </div>
    )
};

export default PanelNameEditableStatementEditor;