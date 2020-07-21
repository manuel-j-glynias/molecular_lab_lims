import * as React from 'react';
import {useUserContentState} from "../../../context/UserContentContext"
import {useVariantFusionAddGene5PrimeMutation} from "../../../generated/graphql";
import {get_gene_mutation_object} from "../../common/Helpers/EditableStatementHelper";
import {useEffect} from "react";
import {preflight, parse_description,preflightResult} from "../../common/Helpers/Ref_helpers"
import GeneList from "../../Genes/GeneList/GeneList";
import {useGeneListQuery} from '../../../generated/graphql'
import './styles.css';


interface Props {
    gene5_id: string;
    set_editing: (b:boolean) => void;
    variant_ID: string,
    es_ID: string;
    es_field: string;
    ref_array: string[];
    refetch: () => void;
}

const className = 'GenomicMarkerFusionEditor';

const Gene5Editor : React.FC<Props> = ({gene5_id,set_editing,es_ID, es_field,variant_ID,ref_array,refetch}) => {

    const [pmid_list, set_pmid_list] = React.useState('');
    const [gene_id_value, set_gene_id_value] = React.useState(gene5_id);
    const [gene_query_string, set_gene_query_string] = React.useState("");


    const get_query_string = () => {
        let q = gene_query_string
        // if (all_caps) {
        //     q = query_str.toUpperCase()
        // }
        // console.log('q='+q)
        return q
    }

    const {data, error, loading} = useGeneListQuery(
        {variables: {str: get_query_string()}}
    );

    const [addGene5Mutation, { loading: mutationLoading, error: mutationError, data:mutationData }] = useVariantFusionAddGene5PrimeMutation({variables:{variant_id:'', old_id:'',
            date: '', field: '', gene:'', id: '', user_id: '', ref_aray:[]}})


    const {
        UserContentState: {userID}
    } = useUserContentState();

    const user_ID : string = userID;


    async function call_mutation(pmids: Array<string>) {
        const mutation_object = get_gene_mutation_object(variant_ID, es_ID, es_field,gene_id_value , user_ID, pmids)
        await addGene5Mutation({variables: mutation_object})
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
    const handleGeneIdChange = async (targetValue:string) => {
        console.log(targetValue)
        set_gene_id_value(targetValue)
     }

    if (loading) {
        return <div>Loading...</div>
    }
    if (error || !data) {
        return <div>ERROR in GeneList</div>
    }
    return ( <div className="form-group">
            <div className="form-group">
                <div className={`${className}__GeneListWrapper`}>
                    <GeneList data={data} query_str={gene_query_string} gene_id={gene_id_value}
                              handleGeneIdChange={handleGeneIdChange} set_gene_query_string={set_gene_query_string}/>
                </div>
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

export default Gene5Editor;