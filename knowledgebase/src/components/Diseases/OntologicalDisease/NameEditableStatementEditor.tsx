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
import BaseNameEditor from "../../common/BaseNameEditor/BaseNameEditor";
import {preflight, preflightResult} from "../../common/Helpers/Ref_helpers";

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

    const statement_string = React.useRef(statement);

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


    const post_save = () => {

        if (mutationData!=null){
            refetch()
            set_editing(false)
        }
    }
    useEffect(post_save,[mutationData])


    return ( <div className="form-group">
            <BaseNameEditor statement={statement} set_editing={set_editing} call_mutation={call_mutation}
                             statement_string={statement_string} ref_array={ref_array} shouldAllowPmids={true}/>
            <div>
                {mutationLoading && <p>Loading...</p>}
                {mutationError && <p>Error :( Please try again</p>}
                {mutationData && <p>Data</p>}
            </div>

        </div>
    )
};

export default NameEditableStatementEditor;