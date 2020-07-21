import * as React from 'react';
import Select, {OptionTypeBase} from 'react-select';
import {useUserContentState} from "../../../context/UserContentContext"
import {VariantProteinEffect,useVariantRegionAddProteinEffectMutation} from "../../../generated/graphql";
import {get_protein_effect_mutation_object} from "../../common/Helpers/EditableStatementHelper"
import {useEffect} from "react";
import {useAppendedContentState} from "../../../context/AppendedContentContext"
import './styles.css';
import {preflight,preflightResult} from "../../common/Helpers/Ref_helpers"


interface Props {
    protein_effect: VariantProteinEffect;
    set_editing: (b:boolean) => void;
    variant_ID: string,
    epe_ID: string;
    epe_field: string;
    ref_array: string[];
    refetch: () => void;
}

const className = 'GenomicMarkerRegionEditor';

const ProteinEffectEditor : React.FC<Props> = ({protein_effect, set_editing, epe_ID, epe_field,variant_ID,ref_array,refetch}) => {

    const [pmid_list, set_pmid_list] = React.useState('');
    const [url_list, set_url_list] = React.useState('');

    const {
        UserContentState: {userID}
    } = useUserContentState();

    const user_ID : string = userID;

    const [addProteinEffectMutation, { loading: mutationLoading, error: mutationError, data:mutationData }] = useVariantRegionAddProteinEffectMutation({variables:{variant_id:'', old_epe_id:'',
            date: '', epe_field: '', epe_vpe:VariantProteinEffect.Unknown, epe_id: '', user_id: '', ref_aray:[]}})

    async function extracted(refs: string[]) {
        // @ts-ignore
        const vpe: VariantProteinEffect  = state.selectedOption.value
        const mutation_object = get_protein_effect_mutation_object(variant_ID, epe_ID, epe_field, vpe, user_ID, refs);
        await addProteinEffectMutation({variables: mutation_object})
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
    interface IProteinEffectOptions extends OptionTypeBase {
        value: VariantProteinEffect; label: string;
    }
    const options: IProteinEffectOptions[] = [
        { value: VariantProteinEffect.GainOfFunction, label: 'Gain Of Function' },
        { value: VariantProteinEffect.GainOfFunctionPredicted, label: 'Gain Of Function Predicted' },
        { value: VariantProteinEffect.LossOfFunction, label: 'Loss Of Function' },
        { value: VariantProteinEffect.LossOfFunctionPredicted, label: 'Loss Of Function Predicted' },
        { value: VariantProteinEffect.NoEffect, label: 'No Effect' },
        { value: VariantProteinEffect.Unknown, label: 'Unknown' },
    ];
    const get_label_for_value = (val:VariantProteinEffect):string => {
        let label: string = 'dumb'
        switch(val) {
            case VariantProteinEffect.GainOfFunction: {
                label = 'Gain Of Function'
                break;
            }
            case VariantProteinEffect.GainOfFunctionPredicted: {
                label = 'Gain Of Function Predicted'
                break;
            }
            case VariantProteinEffect.LossOfFunction: {
                label = 'Loss Of Function'
                break;
            }
            case VariantProteinEffect.LossOfFunctionPredicted: {
                label = 'Loss Of Function Predicted'
                break;
            }
            case VariantProteinEffect.NoEffect: {
                label = 'No Effect'
                break;
            }
            default: {
                label = 'Unknown'
                break;
            }
        }
        return label
    }
    const {
        AppendedContentState: {proteinEffectToAppend}
    } = useAppendedContentState();

    const state  = {
        selectedOption: { value: protein_effect, label: get_label_for_value(protein_effect) },
    };

    const handleChange = async (event:any) => {
        const value : VariantProteinEffect = event.value;
        state.selectedOption.value = value
        state.selectedOption.label = get_label_for_value(value)
      }

    function getSelectedOption() {
        if (proteinEffectToAppend != state.selectedOption.value){
            state.selectedOption.value = proteinEffectToAppend
            state.selectedOption.label = get_label_for_value(proteinEffectToAppend)
        }
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

export default ProteinEffectEditor;