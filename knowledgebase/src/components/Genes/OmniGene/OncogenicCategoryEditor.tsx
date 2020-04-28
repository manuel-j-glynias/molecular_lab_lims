import * as React from 'react';
import Select from 'react-select';
import {useUserContentState} from "../../../context/UserContentContext"
import {useAddOmniGeneOncogenicCategoryMutation, useAddSynonymStringMutation} from "../../../generated/graphql";
import {get_category_mutation_object} from "./EditableStatementHelper"
import {useEffect} from "react";


interface Props {
    category_string: string;
    set_editing: (b:boolean) => void;
    omnigene_ID: string,
    es_ID: string;
    es_field: string;
    refetch: () => void;
}

const className = 'OmniGene';

const OncogenicCategoryEditor : React.FC<Props> = ({category_string, set_editing, es_ID, es_field,omnigene_ID,refetch}) => {

    interface IOncogenicCategoryState {
         value: string; label: string;
    }


    const {
        UserContentState: {userID}
    } = useUserContentState();

    const user_ID : string = userID;

    const [addCategoryMutation, { loading: mutationLoading, error: mutationError, data:mutationData }] = useAddOmniGeneOncogenicCategoryMutation({variables:{gene_id:'', old_es_id:'',
            date: '', es_field: '', es_statement:'', es_id: '', user_id: ''}})

    const save = async () => {
        // console.log('save:')
        // console.log("selectedOption:" + state.selectedOption.value)
        const mutation_object = get_category_mutation_object(omnigene_ID,es_ID,es_field,state.selectedOption.value,user_ID);
        // console.log(JSON.stringify(mutation_object));
        await addCategoryMutation({variables: mutation_object})
        // refetch();
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
        // console.log('cancelEdit')
        set_editing(false)
    };

    const options = [
        { value: 'Oncogene', label: 'Oncogene' },
        { value: 'Tumor Suppressor', label: 'Tumor Suppressor' },
        { value: 'Both', label: 'Both' },
        { value: 'Neither', label: 'Neither' },

    ];
    const state  = {
        selectedOption: { value: category_string, label: category_string },
    };

    const handleChange = async (event:any) => {
        const value : string = event.value as string;

        state.selectedOption.value = value
        state.selectedOption.label = value
     }

    return ( <div className="form-group">
            <Select className={`${className}__select`}  options = {options} onChange={handleChange}
                value={state.selectedOption}
            />
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
}

export default OncogenicCategoryEditor;