import React, {Fragment, useState} from 'react';
import {Redirect} from "react-router-dom";
import './styles.css'
import Select from "react-select";
import RNASeqSignatureMarkers from '../RNASeqSignatureMarkers/RNASeqSignatureMarkers'
import ProteinExpressionMarkers from '../ProteinExpressionMarkers/ProteinExpressionMarkers'
import DNAMarkers from "../DNAMarkers/DNAMarkers";
import GenomicVariantMarkers from "../GenomicVariantMarkers/GenomicVariantMarkers";
import GenomicVariantMarkersListContainer from "../GenomicVariantMarkersList/index";
import CompositeMarkers from "../CompositeMarkers/CompositeMarkers";
import TMBMarkers from "../TMBMarkers/TMBMarkers";
import MSIMarkers from "../MSIMarkers/MSIMarkers";
import MSIMarkersListContainer from "../MSIMarkersList";
import TMBMarkersListContainer from "../TMBMarkersList";

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
}

const MarkerListContainter: React.FC<Props> = ({set_variant_id,set_variant_type_name,set_marker_id,
                                                   variant_type_name,marker_id,markerType,set_markerType,
                                                   logged_in}) => {
    const [markerName, set_markerName] = useState('Genomic Variant Markers')
    const [gene_id, set_gene_Id] = React.useState("");
    const [query_string,set_query_string]= React.useState("");

    // const handleGeneIdChange = React.useCallback(newId => {
    //      set_gene_Id(newId);
    //      console.log('handleGeneIdChange newId=' + newId)
    // }, []);

    const handleMarkerIdChange = React.useCallback(newId => {
        set_marker_id(newId);
        console.log('handleMarkerIdChange newId=' + newId)
    }, []);



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

    const handleChange = async (event:any) => {
        const label : string = event.label
        const value : string = event.value as string;
        set_markerName(label)
        set_markerType(value)
        state.selectedOption.value = markerType
        state.selectedOption.label = markerName
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
                        <Select className={`${className}__Select`}  options = {options} onChange={handleChange}
                                value={state.selectedOption}
                        />
                        { (markerType==="DNAMarker") && <DNAMarkers/>}
                        { (markerType==="ProteinExpressionMarker") && <ProteinExpressionMarkers/>}
                        { (markerType==="RNASeqSignatureMarker") && <RNASeqSignatureMarkers />}
                        { (markerType==="GenomicVariantMarker") && <GenomicVariantMarkers gene_id={gene_id} handleGeneIdChange={set_gene_Id} set_query_string={set_query_string}/>}
                        { (markerType==="MSIMarker") && <MSIMarkers/>}
                        { (markerType==="TMBMarker") && <TMBMarkers/>}
                        { (markerType==="MarkerProfile") && <CompositeMarkers/>}
                    </div>
                </div>
            </div>
            { (markerType==="GenomicVariantMarker") && <GenomicVariantMarkersListContainer gene_id={gene_id} handleMarkerIdChange={handleMarkerIdChange} marker_id={marker_id}
                                                                                           set_variant_type_name={set_variant_type_name} set_variant_id={set_variant_id} query_string={query_string}/>}
            { (markerType=="MSIMarker") && <MSIMarkersListContainer marker_id={marker_id} handleMarkerIdChange={handleMarkerIdChange}/>}
            { (markerType=="TMBMarker") && <TMBMarkersListContainer marker_id={marker_id} handleMarkerIdChange={handleMarkerIdChange}/>}
        </div>
        </Fragment>
    )
}

export default MarkerListContainter;