import * as React from 'react';
import Select, {OptionTypeBase} from 'react-select';
import {useUserContentState} from "../../../context/UserContentContext"
import {
    MarkerProfileAddConjuctionMutationVariables,
    OmniConjunction,
    Scalars,
    useMarkerProfileAddConjuctionMutation
} from "../../../generated/graphql";
import {useEffect} from "react";
import './styles.css';
import {preflight,preflightResult} from "../../common/Helpers/Ref_helpers"
import {get_date_as_hyphenated_string,get_unique_graph_id} from "../../common/Helpers/EditableStatementHelper"


interface Props {
    conjunction: OmniConjunction;
    set_editing: (b:boolean) => void;
    marker_id: string,
    id: string;
    field: string;
    ref_array: string[];
    refetch: () => void;
}

const className = 'MarkerProfileEditor';

const ConjuctionEditor : React.FC<Props> = ({conjunction, set_editing, id, field,marker_id,ref_array,refetch}) => {

    const [pmid_list, set_pmid_list] = React.useState('');
    const [url_list, set_url_list] = React.useState('');

    const {
        UserContentState: {userID}
    } = useUserContentState();

    const user_ID : string = userID;

    const [addConjuctionMutation, { loading: mutationLoading, error: mutationError, data:mutationData }] = useMarkerProfileAddConjuctionMutation({variables:{marker_id:'', old_id:'',
            date: '', field: '', conjunction:OmniConjunction.All, id: '', user_id: '', ref_array:[]}})


    const get_MarkerProfileAddConjuctionMutationVariables_object = (conjunction:OmniConjunction, refs:Array<string>):MarkerProfileAddConjuctionMutationVariables => {
        const variables : MarkerProfileAddConjuctionMutationVariables= {
            marker_id: marker_id,
            old_id: id,
            date: get_date_as_hyphenated_string(),
            field: field,
            conjunction: conjunction,
            id: get_unique_graph_id('es_' ),
            user_id: user_ID,
            ref_array: refs
        }
        return variables;
    }

    async function doSave(refs: string[]) {
        // @ts-ignore
        const mutation_object = get_MarkerProfileAddConjuctionMutationVariables_object(state.selectedOption.value, refs);
        await addConjuctionMutation({variables: mutation_object})
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

     //enum OmniConjunction {
    //     Any
    //     All
    //     None
    // }

     interface IOmniConjunctionOptions extends OptionTypeBase {
        value: OmniConjunction; label: string;
    }
    const options: IOmniConjunctionOptions[] = [
        { value: OmniConjunction.Any, label: 'Any' },
        { value: OmniConjunction.All, label: 'All' },
        { value: OmniConjunction.None, label: 'None' },
     ];
    const get_label_for_value = (val:OmniConjunction):string => {
        let label: string = 'dumb'
        switch(val) {
            case OmniConjunction.Any: {
                label = 'Any'
                break;
            }
             case OmniConjunction.All: {
                label = 'All'
                break;
            }
            case OmniConjunction.None: {
                label = 'None'
                break;
            }
         }
        return label
    }


    const state  = {
        selectedOption: { value: conjunction, label: get_label_for_value(conjunction) },
    };

    const handleChange = async (event:any) => {
        const value : OmniConjunction = event.value;
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

export default ConjuctionEditor;