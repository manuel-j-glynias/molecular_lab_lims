import * as React from 'react';
import Select, {OptionTypeBase} from 'react-select';
import {useUserContentState} from "../../../context/UserContentContext"
import {
    ImmunePhenotype,
    useProteinExpressionMarkerAddImmunePhenotypeMutation,
    ProteinExpressionMarkerAddImmunePhenotypeMutationVariables} from "../../../generated/graphql";
import {useEffect} from "react";
import './styles.css';
import {preflight,preflightResult} from "../../common/Helpers/Ref_helpers"
import {get_date_as_hyphenated_string,get_unique_graph_id} from "../../common/Helpers/EditableStatementHelper"


interface Props {
    phenotype: ImmunePhenotype;
    set_editing: (b:boolean) => void;
    marker_id: string,
    id: string;
    field: string;
    ref_array: string[];
    refetch: () => void;
}

const className = 'ImmunePhenotypeEditor';

const ImmunePhenotypeEditor : React.FC<Props> = ({phenotype, set_editing, id, field,marker_id,ref_array,refetch}) => {

    const [pmid_list, set_pmid_list] = React.useState('');
    const [url_list, set_url_list] = React.useState('');

    const {
        UserContentState: {userID}
    } = useUserContentState();

    const user_ID : string = userID;

    const [addPhenotypeMutation, { loading: mutationLoading, error: mutationError, data:mutationData }] = useProteinExpressionMarkerAddImmunePhenotypeMutation({variables:{marker_id:'', old_id:'',
            date: '', field: '', phenotype:ImmunePhenotype.Unknown, id: '', user_id: '', ref_array:[]}})


    const get_ImmunePhenotypeMutation_object = (phenotype:ImmunePhenotype, refs:Array<string>):ProteinExpressionMarkerAddImmunePhenotypeMutationVariables => {
        const variables : ProteinExpressionMarkerAddImmunePhenotypeMutationVariables= {
            marker_id: marker_id,
            old_id: id,
            date: get_date_as_hyphenated_string(),
            field: field,
            phenotype: phenotype,
            id: get_unique_graph_id('es_' ),
            user_id: user_ID,
            ref_array: refs
        }
        return variables;
    }

    async function doSave(refs: string[]) {
        // @ts-ignore
        const phenotype: ImmunePhenotype  = state.selectedOption.value
        const mutation_object = get_ImmunePhenotypeMutation_object(phenotype, refs);
        await addPhenotypeMutation({variables: mutation_object})
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

     //    AntiInflammatoryResponse
    //     CancerTestisAntigen
    //     CheckpointBlockadePD1CTLA4
    //     CheckpointBlockadeOther
    //     MetabolicImmuneEscape
    //     MyeloidSuppression
    //     OtherImmunotherapyMarkers
    //     ProInflammatoryResponse
    //     TCellPrimed
    //     TumorInfiltratingLymphocytes
    //     Unknown
     interface IImmunePhenotypeOptions extends OptionTypeBase {
        value: ImmunePhenotype; label: string;
    }
    const options: IImmunePhenotypeOptions[] = [
        { value: ImmunePhenotype.AntiInflammatoryResponse, label: 'AntiInflammatoryResponse' },
        { value: ImmunePhenotype.CancerTestisAntigen, label: 'CancerTestisAntigen' },
        { value: ImmunePhenotype.CheckpointBlockadePd1Ctla4, label: 'CheckpointBlockadePd1Ctla4' },
         { value: ImmunePhenotype.CheckpointBlockadeOther, label: 'CheckpointBlockadeOther' },
        { value: ImmunePhenotype.MetabolicImmuneEscape, label: 'MetabolicImmuneEscape' },
        { value: ImmunePhenotype.MyeloidSuppression, label: 'MyeloidSuppression' },
        { value: ImmunePhenotype.OtherImmunotherapyMarkers, label: 'OtherImmunotherapyMarkers' },
        { value: ImmunePhenotype.ProInflammatoryResponse, label: 'ProInflammatoryResponse' },
        { value: ImmunePhenotype.TCellPrimed, label: 'TCellPrimed' },
        { value: ImmunePhenotype.TumorInfiltratingLymphocytes, label: 'TumorInfiltratingLymphocytes' },
        { value: ImmunePhenotype.Unknown, label: 'Unknown' },
    ];
    const get_label_for_value = (val:ImmunePhenotype):string => {
        let label: string = 'dumb'
        switch(val) {
            case ImmunePhenotype.AntiInflammatoryResponse: {
                label = 'AntiInflammatoryResponse'
                break;
            }
             case ImmunePhenotype.CancerTestisAntigen: {
                label = 'CancerTestisAntigen'
                break;
            }
            case ImmunePhenotype.CheckpointBlockadePd1Ctla4: {
                label = 'CheckpointBlockadePd1Ctla4'
                break;
            }
            case ImmunePhenotype.CheckpointBlockadeOther: {
                label = 'CheckpointBlockadeOther'
                break;
            }
            case ImmunePhenotype.MetabolicImmuneEscape: {
                label = 'MetabolicImmuneEscape'
                break;
            }
            case ImmunePhenotype.MyeloidSuppression: {
                label = 'MyeloidSuppression'
                break;
            }
            case ImmunePhenotype.OtherImmunotherapyMarkers: {
                label = 'OtherImmunotherapyMarkers'
                break;
            }
            case ImmunePhenotype.ProInflammatoryResponse: {
                label = 'ProInflammatoryResponse'
                break;
            }
            case ImmunePhenotype.TCellPrimed: {
                label = 'TCellPrimed'
                break;
            }
            case ImmunePhenotype.TumorInfiltratingLymphocytes: {
                label = 'TumorInfiltratingLymphocytes'
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
        selectedOption: { value: phenotype, label: get_label_for_value(phenotype) },
    };

    const handleChange = async (event:any) => {
        const value : ImmunePhenotype = event.value;
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

export default ImmunePhenotypeEditor;