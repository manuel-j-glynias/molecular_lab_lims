import React, {useState} from 'react';
import {Redirect} from "react-router-dom";
import MarkerListContainter from "../MarkerList";
import './styles.css'
import GenomicMarkerEditorContainer from "../GenomicMarkerEditor";
import GenomicMarkerContentContainerContainer from "../GenomicMarkerContentContainer";

interface Props {
    logged_in: boolean;
}

// DNAMarker ProteinExpressionMarker Variant Marker
const className = 'Markers';
const MarkersContainer: React.FC<Props> = ({logged_in}) => {
    const [marker_id, set_marker_id] = React.useState("");
    const [markerType, set_markerType] = useState('GenomicVariantMarker')
    const [variant_id, set_variant_id] = React.useState("");
    const [variant_type_name, set_variant_type_name] = React.useState("");

    if (!logged_in) {
        return <Redirect to="/" />
    }
    return (
        <div className='MarkersContainer'>
            <React.Fragment>
                <MarkerListContainter logged_in={logged_in} set_variant_id={set_variant_id} marker_id={marker_id} markerType={markerType}
                    set_markerType={set_markerType} set_marker_id={set_marker_id} variant_type_name={variant_type_name} set_variant_type_name={set_variant_type_name}/>
                <GenomicMarkerEditorContainer marker_id={marker_id} variant_type_name={variant_type_name} variant_id={variant_id}/>
                <GenomicMarkerContentContainerContainer variant_id={variant_id} />
            </React.Fragment>

         </div>

    )
}

export default MarkersContainer;