import React, {Fragment} from 'react';
import GenomicMarkerContentContainerContainer from "../GenomicMarkerContentContainer";
import MarkerPicker from "../MarkerPicker/MarkerPicker";
import {MarkerComponent} from "../../../generated/graphql";
import NewMarker from "../NewMarker/NewMarker";


interface Props {
    variant_id: string;
    editing_description: boolean;
    editing_protein_effect: boolean;
    editing_components: boolean;
    set_editing_components: (newEditionDescription: boolean) => void;
    set_selected_component:(selected:MarkerComponent | null) => void;
    markerType:string;
}

const MarkerContentContainer : React.FC<Props> = ({markerType,variant_id,editing_description,editing_protein_effect,editing_components,set_editing_components,
                                                      // selected_component,
                                                      set_selected_component}) => {
    return (<Fragment>
        { (markerType==="GenomicVariantMarker") && <GenomicMarkerContentContainerContainer variant_id={variant_id}
                                                                                           editing_protein_effect={editing_protein_effect}
                                                                                           editing_description={editing_description}/>}
        { (markerType=="MarkerProfile") && <MarkerPicker editing_components={editing_components} set_selected_component={set_selected_component}/>}
        { (markerType=="NewMarker") && <NewMarker/>}
            </Fragment>)

}

export default MarkerContentContainer;