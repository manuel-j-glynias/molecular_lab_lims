import * as React from 'react';
import {useAppendedContentState, AppendedContentActionTypes} from "../../../context/AppendedContentContext"
import {useUserContentState} from "../../../context/UserContentContext"
import {useAddOmniGeneGeneDescriptionMutation} from "../../../generated/graphql";
import {get_description_mutation_object} from "./EditableStatementHelper";
import {useEffect} from "react";
import apiClient from "../../../axios/Axios"

interface Props {
    description: string;
    set_editing: (b:boolean) => void;
    omnigene_ID: string,
    es_ID: string;
    es_field: string;
    refetch: () => void;
}

const className = 'OmniGene';

const DescriptionEditor : React.FC<Props> = ({description,set_editing,es_ID, es_field,omnigene_ID,refetch}) => {

    const [description_value, set_description_value] = React.useState(description);

    const description_string = React.useRef(description);
    const copied_string = React.useRef('');

    const [addOmniGeneGeneDescriptionMutation, { loading: mutationLoading, error: mutationError, data:mutationData }] = useAddOmniGeneGeneDescriptionMutation({variables:{gene_id:'', old_es_id:'',
            date: '', es_field: '', es_statement:'', es_id: '', user_id: '', ref_aray:[]}})


    const {
        UserContentState: {userID}
    } = useUserContentState();

    const user_ID : string = userID;

    const parse_description =  (description:string): Array<string> => {
        let pmids: Array<string> = extract_pmids_from_description(description)
        let pubmeds: Array<string> = extract_pubmeds_from_description(description)
        for (var j=0;j<pubmeds.length;j++){
            let pubmed = pubmeds[j]
            if (!pmids.includes(pubmed)){
                pmids.push(pubmed)
            }
        }
        return pmids;
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

    async function extracted(pmids: Array<string>) {
        const mutation_object = get_description_mutation_object(omnigene_ID, es_ID, es_field, description_string.current, user_ID, pmids)
        await addOmniGeneGeneDescriptionMutation({variables: mutation_object})
    }

    const save = async () => {
         let pmids:Array<string> = parse_description(description_string.current)

        const preflight_input = pmids.join(',')
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



    const extract_pmids_from_description =  (description:string) : Array<string> => {
        let pmids: Array<string> = []
        const regex = /PMID:\s+\d{7,}/g;
        const found = description.match(regex);
        if (found!=null){
            for (var i=0;i<found.length;i++){
                const toks = found[i].split(" ")
                if (toks.length>0){
                    const pmid = toks[1]
                    if (!pmids.includes(pmid)){
                        pmids.push(pmid)
                     }
                }

            }
        }
        return pmids
    }
    const extract_pubmeds_from_description =  (description:string) : Array<string> => {
        let pmids: Array<string> = []
        //    pattern = r'PubMed:\d{8}'
        const regex = /PubMed:\d{7,}/g;
        const found = description.match(regex);
        if (found!=null){
            for (var i=0;i<found.length;i++){
                const toks = found[i].split(":")
                if (toks.length>0){
                    const pmid = toks[1]
                    if (!pmids.includes(pmid)){
                        pmids.push(pmid)
                    }
                }

            }
        }
        return pmids
    }


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
        // console.log("description_string.current=" + description_string.current)
        // console.log("description_value=" + description_value)
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