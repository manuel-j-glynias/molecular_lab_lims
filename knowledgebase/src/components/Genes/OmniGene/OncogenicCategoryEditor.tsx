import * as React from 'react';
import Select from 'react-select';
import {useUserContentState} from "../../../context/UserContentContext"
import {useAddOmniGeneOncogenicCategoryMutation} from "../../../generated/graphql";
import {get_category_mutation_object} from "./EditableStatementHelper"
import {useEffect} from "react";
import apiClient from "../../../axios/Axios";


interface Props {
    category_string: string;
    set_editing: (b:boolean) => void;
    omnigene_ID: string,
    es_ID: string;
    es_field: string;
    ref_array: string[];
    refetch: () => void;
}

const className = 'OmniGene';

const OncogenicCategoryEditor : React.FC<Props> = ({category_string, set_editing, es_ID, es_field,omnigene_ID,ref_array,refetch}) => {

    interface IOncogenicCategoryState {
         value: string; label: string;
    }
    const [pmid_list, set_pmid_list] = React.useState('');
    const [url_list, set_url_list] = React.useState('');

    const {
        UserContentState: {userID}
    } = useUserContentState();

    const user_ID : string = userID;

    const [addCategoryMutation, { loading: mutationLoading, error: mutationError, data:mutationData }] = useAddOmniGeneOncogenicCategoryMutation({variables:{gene_id:'', old_es_id:'',
            date: '', es_field: '', es_statement:'', es_id: '', user_id: '', ref_aray:[]}})

    async function extracted(refs: string[]) {
        const mutation_object = get_category_mutation_object(omnigene_ID, es_ID, es_field, state.selectedOption.value, user_ID, refs);
        await addCategoryMutation({variables: mutation_object})
    }
    type preflightResult = {
        result: string;
        refs: string[]
    }

    const preflight = async (pmids:string ) => {
        try {
            // @ts-ignore
            const response = await apiClient.get<preflightResult>("/reference_preflight/" + pmids);
            const preflightResult = response.data;
            return preflightResult;
        } catch (err) {
            if (err && err.response) {
                // const axiosError = err as AxiosError<ServerError>
                return err.response;
            }

            throw err;
        }
    };
    const preflight_IR = async (urls:string ) => {
        try {
            // @ts-ignore
            const response = await apiClient.get<preflightResult>("/internet_reference_preflight/" + urls);
            const preflightResult = response.data;
            return preflightResult;
        } catch (err) {
            if (err && err.response) {
                // const axiosError = err as AxiosError<ServerError>
                return err.response;
            }

            throw err;
        }
    };
    const save = async () => {
        // console.log('save:')
        // console.log('pmid_list:' + pmid_list)
        // console.log('url_list:' + url_list)
        let pmids:Array<string> = ref_array
        let pmidstringarray = pmid_list.split(',')
        for (let pmid of pmidstringarray){
            if (pmid.includes(':')){
                pmid = pmid.split(':')[1].trim()
            }
            if (!pmids.includes(pmid)){
                pmids.push(pmid)
            }
            console.log('pmid:' + pmid)
        }
        const preflight_input = pmids.join(',')

        // await extracted(refs);
        preflight(preflight_input).then( (response:preflightResult) => {
            extracted(response.refs)
        })

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
}

export default OncogenicCategoryEditor;