import * as React from 'react';
import {useAppendedContentState} from "../../../context/AppendedContentContext"
import {useUserContentState} from "../../../context/UserContentContext"
import {
    OntologicalDiseaseAddSynonymsMutationVariables,
    useOntologicalDiseaseAddSynonymsMutation

} from "../../../generated/graphql";
import {useEffect} from "react";
import {get_date_as_hyphenated_string, get_unique_graph_id} from "../../common/Helpers/EditableStatementHelper";
import './styles.css'
interface Props {
    synonym_string: string;
    set_editing: (b: boolean) => void;
    ontologicaldisease_ID: string,
    es_ID: string;
    es_field: string;
    refetch: () => void;
}

const className = 'OntologicalDisease';

const SynonymEditor: React.FC<Props> = ({synonym_string, set_editing, es_ID, es_field,ontologicaldisease_ID,refetch}) => {

    const [synonym_string_value, set_synonym_string_value] = React.useState(synonym_string);
    const create_synonym_array = (syn_string: string): string[] => {
        let s_array: string[] = []
        if (syn_string.length > 0) {
            s_array = syn_string.split(',')
        }
        return s_array;
    }
    const synonym_array = React.useRef(create_synonym_array(synonym_string));


    const [addSynonymStringMutation, { loading: mutationLoading, error: mutationError, data:mutationData }] = useOntologicalDiseaseAddSynonymsMutation({variables:{id:'', old_esyn_id:'',
            date: '', esyn_field: '', esyn_list:[], esyn_id: '', user_id: ''}})

    const {
        AppendedContentState: {synonymToAppend}
    } = useAppendedContentState();

    const {
        UserContentState: {userID}
    } = useUserContentState();

    const user_ID : string = userID;

    const get_synonym_mutation_object = (id:string, oldESID:string, esField:string, synonyms:string[], userID:string): OntologicalDiseaseAddSynonymsMutationVariables=> {
        const  variables :OntologicalDiseaseAddSynonymsMutationVariables = {
            id:id,
            old_esyn_id:oldESID,
            date: get_date_as_hyphenated_string(),
            esyn_field: esField,
            esyn_list:synonyms,
            esyn_id: get_unique_graph_id('esl_' ),
            user_id: userID
        }
        return variables;
    }

    const delete_synonym = async (index: number) => {
        // console.log('delete_synonym:' + index)
        synonym_array.current.splice(index, 1);
        set_synonym_string_value(synonym_array.current.join(','))
    }

    const [synonynm_value, set_synonynm_value] = React.useState('');
    const add_synonym = async () => {
        let synonyms = synonynm_value.split(',')
        for (let syn of synonyms){
            synonym_array.current = synonym_array.current.concat(syn.trim());
        }
        set_synonym_string_value(synonym_array.current.join(','))
        // synonym_array.current = synonym_array.current.concat(synonynm_value);
        // set_synonym_string_value(synonym_array.current.join(','))
    }

    const save = async () => {
        const synonyms = synonym_array.current;
        const mutation_object = get_synonym_mutation_object(ontologicaldisease_ID,es_ID,es_field,synonyms,user_ID);
        // console.log(JSON.stringify(mutation_object))
        await addSynonymStringMutation({variables:mutation_object})
        // refetch()
        // set_editing(false)

    };
    const post_save = () => {
        if (mutationData!=null){
            refetch()
            set_editing(false)
        }
    }
    useEffect(post_save,[mutationData])

    const cancelEdit = async () => {
        console.log('cancelEdit')
        set_editing(false)
    };


    const get_synonym_array_length = (): number => {
        if (synonymToAppend != null && synonymToAppend.length > 0) {
            if (synonym_array.current.indexOf(synonymToAppend) === -1) {
                synonym_array.current = synonym_array.current.concat(synonymToAppend)
            }
        }
        // console.log('length=' + synonym_array.current.length)
        return synonym_array.current.length
    }


    return (<div className="form-group">
            {get_synonym_array_length() > 0 ?
                <div>{synonym_array.current.map((item, index) => (
                    <div className={`${className}__Synonym_Wrapper`} key={index}>
                        <div>{item}</div>
                        <div>

                            <button className={`${className}__small-btn`}
                                    onClick={() => delete_synonym(index)}>Delete
                            </button>

                        </div>
                    </div>
                ))}</div>
                : <div>None</div>}
            <div>
                <div className="form-group">
                    <input type="text" placeholder="Synonym to Add" value={synonynm_value} onChange={e => set_synonynm_value(e.target.value )} required/>
                    <button value="Add" className="btn btn-primary my-1"
                            onClick={() => add_synonym()}>Add
                    </button>
                </div>
            </div>
            <button value="Save" className="btn btn-primary my-1" onClick={() => {
                save()
            }}>Save
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
}

export default SynonymEditor;

