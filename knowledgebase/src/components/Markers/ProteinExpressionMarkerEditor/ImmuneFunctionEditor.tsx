import * as React from 'react';
import Select, {OptionTypeBase} from 'react-select';
import {useUserContentState} from "../../../context/UserContentContext"
import {
    ImmuneFunction,
    useProteinExpressionMarkerAddImmuneFunctionMutation,
    ProteinExpressionMarkerAddImmuneFunctionMutationVariables} from "../../../generated/graphql";
import {useEffect} from "react";
import './styles.css';
import {preflight,preflightResult} from "../../common/Helpers/Ref_helpers"
import {get_date_as_hyphenated_string,get_unique_graph_id} from "../../common/Helpers/EditableStatementHelper"


interface Props {
    immuneFunction: ImmuneFunction;
    set_editing: (b:boolean) => void;
    marker_id: string,
    id: string;
    field: string;
    ref_array: string[];
    refetch: () => void;
}

const className = 'ImmuneFunctionEditor';

const ImmuneFunctionEditor : React.FC<Props> = ({immuneFunction, set_editing, id, field,marker_id,ref_array,refetch}) => {

    const [pmid_list, set_pmid_list] = React.useState('');
    const [url_list, set_url_list] = React.useState('');

    const {
        UserContentState: {userID}
    } = useUserContentState();

    const user_ID : string = userID;

    const [addFunctionMutation, { loading: mutationLoading, error: mutationError, data:mutationData }] = useProteinExpressionMarkerAddImmuneFunctionMutation({variables:{marker_id:'', old_id:'',
            date: '', field: '', immuneFunction:ImmuneFunction.Unknown, id: '', user_id: '', ref_array:[]}})


    const get_ImmuneFunctionMutation_object = (immuneFunction:ImmuneFunction, refs:Array<string>):ProteinExpressionMarkerAddImmuneFunctionMutationVariables => {
        const variables : ProteinExpressionMarkerAddImmuneFunctionMutationVariables= {
            marker_id: marker_id,
            old_id: id,
            date: get_date_as_hyphenated_string(),
            field: field,
            immuneFunction: immuneFunction,
            id: get_unique_graph_id('es_' ),
            user_id: user_ID,
            ref_array: refs
        }
        return variables;
    }

    async function doSave(refs: string[]) {
        // @ts-ignore
        const immuneFunction: ImmuneFunction  = state.selectedOption.value
        const mutation_object = get_ImmuneFunctionMutation_object(immuneFunction, refs);
        await addFunctionMutation({variables: mutation_object})
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
                doSave(response.refs)
            })

        }
        else {
            doSave([])
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

      //    AntiInflammatory
    //     AntiTumorEffector
    //     BCells
    //     CoInhibitory
    //     CoStimulatory
    //     CytotoxicTCellsTRegs
    //     Immunostimulatory
    //     Immunosuppressive
    //     NKCells
    //     ProInflammatory
    //     Unknown
      interface IImmuneFunctionOptions extends OptionTypeBase {
        value: ImmuneFunction; label: string;
    }
    const options: IImmuneFunctionOptions[] = [
        { value: ImmuneFunction.AntiInflammatory, label: 'AntiInflammatory' },
        { value: ImmuneFunction.AntiTumorEffector, label: 'AntiTumorEffector' },
        { value: ImmuneFunction.BCells, label: 'BCells' },
         { value: ImmuneFunction.CoInhibitory, label: 'CoInhibitory' },
        { value: ImmuneFunction.CoStimulatory, label: 'CoStimulatory' },
        { value: ImmuneFunction.CytotoxicTCellsTRegs, label: 'CytotoxicTCellsTRegs' },
        { value: ImmuneFunction.Immunostimulatory, label: 'Immunostimulatory' },
        { value: ImmuneFunction.Immunosuppressive, label: 'Immunosuppressive' },
        { value: ImmuneFunction.NkCells, label: 'NkCells' },
        { value: ImmuneFunction.ProInflammatory, label: 'ProInflammatory' },
        { value: ImmuneFunction.Unknown, label: 'Unknown' },
    ];
    const get_label_for_value = (val:ImmuneFunction):string => {
        let label: string = 'dumb'
        switch(val) {
            case ImmuneFunction.AntiInflammatory: {
                label = 'AntiInflammatory'
                break;
            }
             case ImmuneFunction.AntiTumorEffector: {
                label = 'AntiTumorEffector'
                break;
            }
            case ImmuneFunction.BCells: {
                label = 'BCells'
                break;
            }
            case ImmuneFunction.CoInhibitory: {
                label = 'CoInhibitory'
                break;
            }
            case ImmuneFunction.CoStimulatory: {
                label = 'CoStimulatory'
                break;
            }
            case ImmuneFunction.CytotoxicTCellsTRegs: {
                label = 'CytotoxicTCellsTRegs'
                break;
            }
            case ImmuneFunction.Immunostimulatory: {
                label = 'Immunostimulatory'
                break;
            }
            case ImmuneFunction.Immunosuppressive: {
                label = 'Immunosuppressive'
                break;
            }
            case ImmuneFunction.NkCells: {
                label = 'NkCells'
                break;
            }
            case ImmuneFunction.ProInflammatory: {
                label = 'ProInflammatory'
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
        selectedOption: { value: immuneFunction, label: get_label_for_value(immuneFunction) },
    };

    const handleChange = async (event:any) => {
        const value : ImmuneFunction = event.value;
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

export default ImmuneFunctionEditor;