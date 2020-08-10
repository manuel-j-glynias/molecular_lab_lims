import React, {Fragment, useEffect, useState} from 'react';
import {Redirect} from "react-router-dom";
import './styles.css'
import Select from "react-select";
import RNASeqSignatureMarkers from '../RNASeqSignatureMarkers/RNASeqSignatureMarkers'
import ProteinExpressionMarkers from '../ProteinExpressionMarkers/ProteinExpressionMarkers'
import DNAMarkers from "../DNAMarkers/DNAMarkers";
import GenomicVariantMarkers from "../GenomicVariantMarkers/GenomicVariantMarkers";
import GenomicVariantMarkersListContainer from "../GenomicVariantMarkersList/index";
import MarkerProfiles from "../MarkerProfiles/MarkerProfiles";
import TMBMarkers from "../TMBMarkers/TMBMarkers";
import MSIMarkers from "../MSIMarkers/MSIMarkers";
import MSIMarkersListContainer from "../MSIMarkersList";
import TMBMarkersListContainer from "../TMBMarkersList";
import ProteinExpressionMarkersListContainer from "../ProteinExpressionMarkersList/index"
import MarkerProfilesListContainer from "../MarkerProfilesList";
import {AssayComparator} from "../../../generated/graphql";
import {useUserContentState} from "../../../context/UserContentContext";
import {useEditorContentState} from "../../../context/EditorContentContext";

const className = 'MarkerList';

interface Props {
    logged_in: boolean;
    set_marker_id: (newId: string) => void;
    set_variant_id: (newId: string) => void;
    set_variant_type_name: (newId: string) => void;
    variant_type_name: string;
    marker_id:string;
    markerType:string;
    set_markerType: (newId: string) => void;
    handleAddMarker:() => void;
    query_string:string;
    set_query_string: (query: string) => void;
    selected_gene_label: string;
    set_selected_gene_label:(label: string) => void;
    gene_id:string;
    set_gene_id: (newId: string) => void;
}

const MarkerListContainter: React.FC<Props> = ({set_variant_id,set_variant_type_name,set_marker_id,
                                                   variant_type_name,marker_id,markerType,set_markerType,gene_id,set_gene_id,
                                                   logged_in,handleAddMarker,query_string,set_query_string,selected_gene_label,set_selected_gene_label}) => {
    const [markerName, set_markerName] = useState('Genomic Variant Markers')

    const handleMarkerIdChange = React.useCallback(newId => {
        set_marker_id(newId);
        console.log('handleMarkerIdChange newId=' + newId)
    }, []);

    const handle_marker_type_change = () => {
        console.log("handle_marker_type_change",markerType)
        let name = ''
        switch(markerType) {
            case 'DNAMarker': {
                name = 'DNA Markers'
                break;
            }
            case 'ProteinExpressionMarker': {
                name = 'Protein Expression Markers'
                break;
            }
            case 'RNASeqSignatureMarker': {
                name = 'RNASeq Signature Marker'
                break;
            }
            case 'GenomicVariantMarker': {
                name = 'Genomic Variant Markers'
                break;
            }
            case 'MSIMarker': {
                name = 'MSI Markers'
                break;
            }
            case 'TMBMarker': {
                name = 'TMB Markers'
                break;
            }

            case 'MarkerProfile': {
                name = 'Marker Profiles'
                break;
            }
        }
        set_markerName(name)
        state.selectedOption.value = markerType
        state.selectedOption.label = markerName

    }
    useEffect(handle_marker_type_change,[markerType])


    const options = [
        { value: 'DNAMarker', label: 'DNA Markers' },
        { value: 'ProteinExpressionMarker', label: 'Protein Expression Markers' },
        { value: 'RNASeqSignatureMarker', label: 'RNASeq Signature Marker' },
        { value: 'GenomicVariantMarker', label: 'Genomic Variant Markers' },
        { value: 'MSIMarker', label: 'MSI Markers' },
        { value: 'TMBMarker', label: 'TMB Markers' },
        { value: 'MarkerProfile', label: 'Marker Profiles' },

    ];
    const state  = {
        selectedOption: { value: markerType, label: markerName },
    };
    const {
        EditorContentState: {isEditor}
    } = useEditorContentState();

    const canEdit : boolean = isEditor;

    const handleChange = async (event:any) => {
        const value : string = event.value as string;
        set_markerType(value)
        // const label : string = event.label
        // const value : string = event.value as string;
        // set_markerName(label)
        // set_markerType(value)
        // state.selectedOption.value = markerType
        // state.selectedOption.label = markerName
    }

    if (!logged_in) {
        return <Redirect to="/"/>
    }
    return (
        <Fragment>
        <div className={`${className}__Container`}>
            <div className={`${className}__Panel_Wrapper`}>
                <div className={`${className}__Panel`}>
                    <div className={`${className}__Title`}>Markers</div>
                    <div className={`${className}__Buttons`}>
                        {canEdit && <button className={'btn btn-primary'} onClick={handleAddMarker}>Add Marker</button> }
                    </div>                    <div className={`${className}__Buttons`}>
                        <Select className={`${className}__Select`}  options = {options} onChange={handleChange}
                                value={state.selectedOption}
                        />
                        { (markerType==="DNAMarker") && <DNAMarkers/>}
                        { (markerType==="ProteinExpressionMarker") && <ProteinExpressionMarkers set_query_string={set_query_string}/>}
                        { (markerType==="RNASeqSignatureMarker") && <RNASeqSignatureMarkers />}
                        { (markerType==="GenomicVariantMarker") && <GenomicVariantMarkers gene_id={gene_id} handleGeneIdChange={set_gene_id} set_query_string={set_query_string} selected_gene_label={selected_gene_label} set_selected_gene_label={set_selected_gene_label}/>}
                        { (markerType==="MSIMarker") && <MSIMarkers/>}
                        { (markerType==="TMBMarker") && <TMBMarkers/>}
                        { (markerType==="MarkerProfile") && <MarkerProfiles set_query_string={set_query_string}/>}
                    </div>
                </div>
            </div>
            { (markerType==="GenomicVariantMarker") && <GenomicVariantMarkersListContainer gene_id={gene_id} handleMarkerIdChange={handleMarkerIdChange} marker_id={marker_id}
                                                                                           set_variant_type_name={set_variant_type_name} set_variant_id={set_variant_id} query_string={query_string}/>}
            { (markerType=="MSIMarker") && <MSIMarkersListContainer marker_id={marker_id} handleMarkerIdChange={handleMarkerIdChange}/>}
            { (markerType=="TMBMarker") && <TMBMarkersListContainer marker_id={marker_id} handleMarkerIdChange={handleMarkerIdChange}/>}
            { (markerType=="ProteinExpressionMarker") && <ProteinExpressionMarkersListContainer marker_id={marker_id} handleMarkerIdChange={handleMarkerIdChange} query_string={query_string}/>}
            { (markerType=="MarkerProfile") && <MarkerProfilesListContainer marker_id={marker_id} handleMarkerIdChange={handleMarkerIdChange}  query_string={query_string}/>}


        </div>
        </Fragment>
    )
}

export default MarkerListContainter;