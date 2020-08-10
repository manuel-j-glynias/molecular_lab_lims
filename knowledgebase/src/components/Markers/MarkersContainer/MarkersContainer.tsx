import React, {useState} from 'react';
import {Redirect} from "react-router-dom";
import MarkerListContainter from "../MarkerList";
import MarkerEditor from "../MarkerEditor/MarkerEditor"
import './styles.css'
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
    const [gene_id, set_gene_Id] = React.useState("");

    const [editing_description, set_editing_description] = React.useState(false);
    const [editing_protein_effect, set_editing_protein_effect] = React.useState(false);
    const [editing_components, set_editing_components] = React.useState(false);
    const [selected_component, set_selected_component] = React.useState();

    const [query_string,set_query_string]= React.useState("");
    const [selected_gene_label, set_selected_gene_label] = useState('Select Gene')


    const handleAddMarker = () => {
        set_markerType("NewMarker")
    }

    if (!logged_in) {
        return <Redirect to="/"/>
    }
    return (
        <div className='MarkersContainer'>
            <AppendedContentProvider>
                <React.Fragment>
                    <MarkerListContainter logged_in={logged_in} set_variant_id={set_variant_id} marker_id={marker_id}
                                          markerType={markerType} set_gene_id={set_gene_Id} gene_id={gene_id}
                                          set_markerType={set_markerType} set_marker_id={set_marker_id}
                                          variant_type_name={variant_type_name}
                                          set_variant_type_name={set_variant_type_name}
                                        handleAddMarker={handleAddMarker} query_string={query_string} set_query_string={set_query_string}
                    selected_gene_label={selected_gene_label} set_selected_gene_label={set_selected_gene_label}/>
                    <MarkerEditor markerType={markerType} marker_id={marker_id} variant_type_name={variant_type_name}
                                                  variant_id={variant_id} editing_description={editing_description}
                                                  set_editing_description={set_editing_description}
                                                  editing_protein_effect={editing_protein_effect}
                                                  set_editing_protein_effect={set_editing_protein_effect}
                                  editing_components={editing_components}
                                  set_editing_components={set_editing_components}
                                selected_component={selected_component} set_selected_component={set_selected_component}
                    />


                    <MarkerContentContainer markerType={markerType} variant_id={variant_id} set_variant_id={set_variant_id}
                                                            editing_protein_effect={editing_protein_effect}
                                                            editing_description={editing_description}
                                            editing_components={editing_components}
                                            set_editing_components={set_editing_components}
                                            set_selected_component={set_selected_component}
                                            set_markerType={set_markerType} set_query_string={set_query_string} set_marker_id={set_marker_id}
                                            selected_gene_label={selected_gene_label} set_selected_gene_label={set_selected_gene_label}
                                            set_gene_id={set_gene_Id}
                    />
                </React.Fragment>
            </AppendedContentProvider>
        </div>

    )
}

export default MarkersContainer;