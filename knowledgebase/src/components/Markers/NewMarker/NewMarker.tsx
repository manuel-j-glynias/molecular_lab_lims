import * as React from "react";
import {useEffect, useState} from "react";
import Select from "react-select";
import './styles.css'
import { useAlert } from 'react-alert'
import {
    useCreateMarkerProfileMutation,
    CreateMarkerProfileMutationVariables, MarkerComponent
} from '../../../generated/graphql'
import {useUserContentState} from "../../../context/UserContentContext";
import {get_date_as_hyphenated_string, get_unique_graph_id} from "../../common/Helpers/EditableStatementHelper";


const className = 'NewMarker';

interface Props {
    set_markerType: (newId: string) => void;
    set_query_string: (query: string) => void;
}

const NewMarker: React.FC<Props> = ({set_markerType,set_query_string}) => {
    const [markerName, set_markerName] = useState('Protein Expression Markers')
    const [new_markerType, set_new_markerType] = useState('ProteinExpressionMarker')
    const [new_marker_name, set_new_marker_name] = useState('');
    const alert = useAlert()

    const {
        UserContentState: {userID}
    } = useUserContentState();

    const user_ID : string = userID;

    const [createMarkerProfile, { loading: markerProfileMutationLoading, error: markerProfileMutationError, data:markerProfileMutationData }] = useCreateMarkerProfileMutation({variables:{marker_id:'', conjuction_field:'',components_id:'',
            components_field:'',conjunction_id:'', date:'', empty_string:'', method_field:'', method_id:'', name:'', name_id:'',name_field:'',result_string_id:'',result_string_field:'',user_id: '',ref_array:[]}})




    const get_CreateMarkerProfileMutationVariables_object = ():CreateMarkerProfileMutationVariables => {
        const variables : CreateMarkerProfileMutationVariables= {
            marker_id: get_unique_graph_id('marker_profile_'),
            date: get_date_as_hyphenated_string(),
            user_id: user_ID,
            ref_array: [],
            empty_string:'',
            name_id: get_unique_graph_id('es_'),
            name: new_marker_name,
            name_field: get_unique_graph_id("marker_profile_name_field_"),
            components_id:get_unique_graph_id('es_'),
            components_field:get_unique_graph_id("marker_profile_components_field_"),
            conjunction_id: get_unique_graph_id('es_'),
            conjuction_field: get_unique_graph_id('marker_profile_conjunction_field_'),
            method_id: get_unique_graph_id('es_'),
            method_field: get_unique_graph_id('marker_profile_method_field_'),
            result_string_id: get_unique_graph_id('es_'),
            result_string_field: get_unique_graph_id('marker_profile_result_string_field_'),
        }
        return variables;
    }

    const post_CreateMarkerProfileMutation = () => {

        if (markerProfileMutationData!=null){
            set_query_string(new_marker_name)
            set_markerType('MarkerProfile')

        }
    }
    useEffect(post_CreateMarkerProfileMutation,[markerProfileMutationData])

    const options = [
        { value: 'ProteinExpressionMarker', label: 'Protein Expression Markers' },
        { value: 'VariantSNVIndel', label: 'GenomicVariantMarker--SNVIndel' },
        { value: 'VariantRegion', label: 'Genomic Variant Markers--Region' },
        { value: 'VariantCNV', label: 'Genomic Variant Markers--CNV' },
        { value: 'VariantFusion', label: 'Genomic Variant Markers--Fusion' },
        { value: 'MSIMarker', label: 'MSI Markers' },
        { value: 'TMBMarker', label: 'TMB Markers' },
        { value: 'MarkerProfile', label: 'Marker Profiles' },

    ];
    const state  = {
        selectedOption: { value: new_markerType, label: markerName },
    };

    const handleChange = async (event:any) => {
        const label : string = event.label
        const value : string = event.value as string;
        set_markerName(label)
        set_new_markerType(value)
        state.selectedOption.value = new_markerType
        state.selectedOption.label = markerName
    }
    const handleCreateMarker = async () => {
        if (new_marker_name===""){
            alert.error("Please Name the Marker!")
        }
        else {
            switch(new_markerType){
                case "ProteinExpressionMarker": {
                    console.log("ProteinExpressionMarker")
                    break;
                }
                case "VariantSNVIndel": {
                    console.log("VariantSNVIndel")
                    break;
                }
                case "VariantRegion": {
                    console.log("VariantRegion")
                    break;
                }
                case "VariantCNV": {
                    console.log("VariantCNV")
                    break;
                }
                case "VariantFusion": {
                    console.log("VariantFusion")
                    break;
                }
                case "MSIMarker": {
                    console.log("MSIMarker")
                    break;
                }
                case "TMBMarker": {
                    console.log("TMBMarker")
                    break;
                }
                case "MarkerProfile": {
                    console.log("MarkerProfile")
                    const mutation_object = get_CreateMarkerProfileMutationVariables_object();
                    await createMarkerProfile({variables:mutation_object})
                    break;
                }
            }
        }
    }
    const keyPressed = async (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "Enter") {
            handleCreateMarker()
        }
    }
    return (
        <div className={`${className}__Container`}>
         <h3>New Marker</h3>
            <div className={`${className}__Wrapper`}>
                <div>New Marker Name</div>
                <div className={`${className}__Filter`}>
                    <input className={'filter_text_input'} type="text"
                                                   placeholder="Name"
                                                   name="subString" value={new_marker_name}
                                                   onChange={e => set_new_marker_name(e.target.value)}
                                                   onKeyPress={keyPressed}
                                            />
                </div>

                <div>Select Marker Type:</div>
                <div><Select className={`${className}__Select`}  options = {options} onChange={handleChange}
                    value={state.selectedOption}/> </div>

                <div></div>
                <div><button className={'btn btn-primary'} onClick={handleCreateMarker}>Create Marker</button></div>
            </div>
        </div>
    )

}

export default NewMarker;

