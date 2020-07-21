import React, {useState} from 'react';
import {Redirect} from "react-router-dom";
import MarkerListContainter from "../MarkerList";
import MarkerEditor from "../MarkerEditor/MarkerEditor"
import './styles.css'
import GenomicMarkerEditorContainer from "../GenomicMarkerEditor";
import GenomicMarkerContentContainerContainer from "../GenomicMarkerContentContainer";
import {AppendedContentProvider} from "../../../context/AppendedContentContext";
import MarkerContentContainer from "../MarkerContentContainer/MarkerContentContainer";

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

    const [editing_description, set_editing_description] = React.useState(false);
    const [editing_protein_effect, set_editing_protein_effect] = React.useState(false);


    if (!logged_in) {
        return <Redirect to="/"/>
    }
    return (
        <div className='MarkersContainer'>
            <AppendedContentProvider>
                <React.Fragment>
                    <MarkerListContainter logged_in={logged_in} set_variant_id={set_variant_id} marker_id={marker_id}
                                          markerType={markerType}
                                          set_markerType={set_markerType} set_marker_id={set_marker_id}
                                          variant_type_name={variant_type_name}
                                          set_variant_type_name={set_variant_type_name}/>
                    <MarkerEditor markerType={markerType} marker_id={marker_id} variant_type_name={variant_type_name}
                                                  variant_id={variant_id} editing_description={editing_description}
                                                  set_editing_description={set_editing_description}
                                                  editing_protein_effect={editing_protein_effect}
                                                  set_editing_protein_effect={set_editing_protein_effect}/>

                    {/*<GenomicMarkerEditorContainer marker_id={marker_id} variant_type_name={variant_type_name}*/}
                    {/*                              variant_id={variant_id} editing_description={editing_description}*/}
                    {/*                              set_editing_description={set_editing_description}*/}
                    {/*                              editing_protein_effect={editing_protein_effect}*/}
                    {/*                              set_editing_protein_effect={set_editing_protein_effect}/>*/}

                    <MarkerContentContainer markerType={markerType} variant_id={variant_id}
                                                            editing_protein_effect={editing_protein_effect}
                                                            editing_description={editing_description}/>
                </React.Fragment>
            </AppendedContentProvider>
        </div>

    )
}

export default MarkersContainer;