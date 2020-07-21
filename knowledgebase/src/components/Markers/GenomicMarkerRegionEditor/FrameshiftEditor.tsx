import * as React from 'react';
import Select, {OptionTypeBase} from 'react-select';
import {useUserContentState} from "../../../context/UserContentContext"
import {EditableBoolean,ExtendedBoolean,useVariantRegionAddIsFrameshiftMutation} from "../../../generated/graphql";
import {get_editable_boolean_mutation_object} from "../../common/Helpers/EditableStatementHelper"
import {useEffect} from "react";
import './styles.css';
import {preflight,preflightResult} from "../../common/Helpers/Ref_helpers"


interface Props {
    isFrameshift: ExtendedBoolean;
    id: string;
    field: string;
    variant_ID: string;
    ref_array: string[];
    set_editing: (b:boolean) => void;
    refetch: () => void;
}

const className = 'GenomicMarkerRegionEditor';

const FrameshiftEditor : React.FC<Props> = ({isFrameshift, id,field,variant_ID,ref_array,set_editing,refetch}) => {

    const [pmid_list, set_pmid_list] = React.useState('');

    const {
        UserContentState: {userID}
    } = useUserContentState();

    const [addIsFrameshiftMutation, { loading: mutationLoading, error: mutationError, data:mutationData }] = useVariantRegionAddIsFrameshiftMutation({variables:{variant_id:'',  old_eb_id:'',
            date: '', eb_field: '', eb_vpe:ExtendedBoolean.Unknown, eb_id: '', user_id: '', ref_aray:[]}})

    async function extracted(refs: string[]) {
        const vpe: ExtendedBoolean  = state.selectedOption.value
        const mutation_object = get_editable_boolean_mutation_object(variant_ID, id, field, vpe, userID, refs);
        await addIsFrameshiftMutation({variables: mutation_object})
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
     interface IExtendedBooleanOptions extends OptionTypeBase {
        value: ExtendedBoolean; label: string;
    }
    const options: IExtendedBooleanOptions[] = [
        { value: ExtendedBoolean.True, label: 'True' },
        { value: ExtendedBoolean.False, label: 'False' },
        { value: ExtendedBoolean.Any, label: 'Any' },
        { value: ExtendedBoolean.Unknown, label: 'Unknown' },
    ];
    const get_label_for_value = (val:ExtendedBoolean):string => {
        let label: string = 'dumb'
        switch(val) {
            case ExtendedBoolean.True: {
                label = 'True'
                break;
            }
            case ExtendedBoolean.False: {
                label = 'False'
                break;
            }
            case ExtendedBoolean.Any: {
                label = 'Any'
                break;
            }
            case ExtendedBoolean.Unknown: {
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
        selectedOption: { value: isFrameshift, label: get_label_for_value(isFrameshift) },
    };

    const handleChange = async (event:any) => {
        const value : ExtendedBoolean = event.value;
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

export default FrameshiftEditor;