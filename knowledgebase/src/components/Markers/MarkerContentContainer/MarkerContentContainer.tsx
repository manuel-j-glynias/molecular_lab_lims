import React, {Fragment} from 'react';
import GenomicMarkerContentContainerContainer from "../GenomicMarkerContentContainer";
import MarkerPicker from "../MarkerPicker/MarkerPicker";
import {MarkerComponent} from "../../../generated/graphql";
import NewMarker from "../NewMarker/NewMarker";


interface Props {
    variant_id: string;
    set_variant_id: (newId: string) => void;
    editing_description: boolean;
    editing_protein_effect: boolean;
    editing_components: boolean;
    set_editing_components: (newEditionDescription: boolean) => void;
    set_selected_component:(selected:MarkerComponent | null) => void;
    markerType:string;
    set_markerType: (newId: string) => void;
    set_query_string: (query: string) => void;
    set_marker_id: (newId: string) => void;
    selected_gene_label: string;
    set_selected_gene_label: (newLabel: string) => void;
    set_gene_id: (newId: string) => void;

}

const MarkerContentContainer : React.FC<Props> = ({markerType,variant_id,set_variant_id,editing_description,editing_protein_effect,editing_components,set_editing_components,
                                                      // selected_component,
                                                      set_selected_component,set_markerType,set_query_string,set_marker_id,selected_gene_label,set_selected_gene_label,set_gene_id}) => {
    return (<Fragment>
        { (markerType==="GenomicVariantMarker") && <GenomicMarkerContentContainerContainer variant_id={variant_id}
                                                                                           editing_protein_effect={editing_protein_effect}
                                                                                           editing_description={editing_description} selected_gene_label={selected_gene_label}/> }
        { (markerType=="MarkerProfile") && <MarkerPicker editing_components={editing_components} set_selected_component={set_selected_component}/>}
        { (markerType=="NewMarker") && <NewMarker set_markerType={set_markerType} set_query_string={set_query_string} set_marker_id={set_marker_id} set_gene_id={set_gene_id} set_selected_gene_label={set_selected_gene_label} set_variant_id={set_variant_id}/>}
            </Fragment>)

}

export default MarkerContentContainer;