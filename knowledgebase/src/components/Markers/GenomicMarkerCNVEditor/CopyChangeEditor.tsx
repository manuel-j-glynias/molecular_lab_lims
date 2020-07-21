import * as React from 'react';
import Select, {OptionTypeBase} from 'react-select';
import {useUserContentState} from "../../../context/UserContentContext"
import {CnvType, useVariantCnvAddCopyChangeMutation} from "../../../generated/graphql";
import {get_editable_CopyChangeMutation_object} from "../../common/Helpers/EditableStatementHelper"
import {useEffect} from "react";
import './styles.css';
import {preflight,preflightResult} from "../../common/Helpers/Ref_helpers"


interface Props {
    copyChange: CnvType;
    set_editing: (b:boolean) => void;
    variant_ID: string,
    id: string;
    field: string;
    ref_array: string[];
    refetch: () => void;
}

const className = 'GenomicMarkerFusionEditor';

const CopyChangeEditor : React.FC<Props> = ({copyChange, set_editing, id, field,variant_ID,ref_array,refetch}) => {

    const [pmid_list, set_pmid_list] = React.useState('');
    const [url_list, set_url_list] = React.useState('');

    const {
        UserContentState: {userID}
    } = useUserContentState();

    const user_ID : string = userID;

    const [addCopyChangeMutation, { loading: mutationLoading, error: mutationError, data:mutationData }] = useVariantCnvAddCopyChangeMutation({variables:{variant_id:'', old_id:'',
            date: '', field: '', copy_change:CnvType.Unknown, id: '', user_id: '', ref_aray:[]}})

    async function extracted(refs: string[]) {
        // @ts-ignore
        const copyChange: CnvType  = state.selectedOption.value
        const mutation_object = get_editable_CopyChangeMutation_object(variant_ID, id, field, copyChange, user_ID, refs);
        await addCopyChangeMutation({variables: mutation_object})
    }

    const save = async () => {
        // console.log('save:')
        // console.log('pmid_list:' + pmid_list)
        // console.log('url_list:' + url_list)
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
        if (pmids.length>0){
            const preflight_input = pmids.join(',')

            // await extracted(refs);
            preflight(preflight_input).then( (response:preflightResult) => {
                extracted(response.refs)
            })

        }
        else {
            extracted([])
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
        // console.log('cancelEdit')
        set_editing(false)
    };
    //    GainOfFunction
    //     GainOfFunctionPredicted
    //     LossOfFunction
    //     LossOfFunctionPredicted
    //     NoEffect
    //     Unknown
    interface ICopyChangeOptions extends OptionTypeBase {
        value: CnvType; label: string;
    }
    const options: ICopyChangeOptions[] = [
        { value: CnvType.Gain, label: 'Gain' },
        { value: CnvType.Loss, label: 'Loss' },
        { value: CnvType.Indeterminate, label: 'Indeterminate' },
         { value: CnvType.Unknown, label: 'Unknown' },
    ];
    const get_label_for_value = (val:CnvType):string => {
        let label: string = 'dumb'
        switch(val) {
            case CnvType.Gain: {
                label = 'Gain'
                break;
            }
             case CnvType.Loss: {
                label = 'Loss'
                break;
            }
            case CnvType.Indeterminate: {
                label = 'Indeterminate'
                break;
            }
            case CnvType.Unknown: {
                label = 'Unknown'
                break;
            }
            default: {
                label = 'Unknown'
                break;
            }
        }
        return label
    }


    const state  = {
        selectedOption: { value: copyChange, label: get_label_for_value(copyChange) },
    };

    const handleChange = async (event:any) => {
        const value : CnvType = event.value;
        state.selectedOption.value = value
        state.selectedOption.label = get_label_for_value(value)
      }

    function getSelectedOption() {
         return state.selectedOption;
    }

    return ( <div className="form-group">
            <Select className={`${className}__select`}  options = {options} onChange={handleChange}
                value={getSelectedOption()}
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

export default CopyChangeEditor;