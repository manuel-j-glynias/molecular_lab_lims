import * as React from 'react';
import {useUserContentState} from "../../../context/UserContentContext"
import {Scalars, useVariantFusionAddExon5PrimeMutation} from "../../../generated/graphql";
import {get_exon5_mutation_object} from "../../common/Helpers/EditableStatementHelper";
import {useEffect} from "react";
import {preflight, parse_description,preflightResult} from "../../common/Helpers/Ref_helpers"

interface Props {
    exon5: number;
    set_editing: (b:boolean) => void;
    variant_ID: string,
    es_ID: string;
    es_field: string;
    ref_array: string[];
    refetch: () => void;
}

const className = 'GenomicMarkerFusionEditor';

const Exon5Editor : React.FC<Props> = ({exon5,set_editing,es_ID, es_field,variant_ID,ref_array,refetch}) => {

    const [statement_value, set_statement_value] = React.useState(exon5);
    const statement_string = React.useRef(exon5==-1 ? '' : exon5.toString());
    const [pmid_list, set_pmid_list] = React.useState('');

    const [addExon5Mutation, { loading: mutationLoading, error: mutationError, data:mutationData }] = useVariantFusionAddExon5PrimeMutation({variables:{variant_id:'', old_id:'',
            date: '', field: '', exon5:-1, id: '', user_id: '', ref_aray:[]}})


    const {
        UserContentState: {userID}
    } = useUserContentState();

    const user_ID : string = userID;

    function getExon5() {
        let number = -1;
        if (statement_string.current != ''){
            number = parseInt(statement_string.current);
        }
        return number;
    }
    async function call_mutation(pmids: Array<string>) {
        const mutation_object = get_exon5_mutation_object(variant_ID, es_ID, es_field, getExon5(), user_ID, pmids)
        await addExon5Mutation({variables: mutation_object})
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
        statement_string.current = targetValue.replace(/\D/g,'');
        set_statement_value(parseInt(targetValue))
     }


    return ( <div className="form-group">
        <textarea className={`${className}__ShortTextarea`} name="statement" placeholder="Exon Number (int)" value={get_statement_value()} onChange={(e) => {handle_change(e.target.value)}}/>
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

export default Exon5Editor;