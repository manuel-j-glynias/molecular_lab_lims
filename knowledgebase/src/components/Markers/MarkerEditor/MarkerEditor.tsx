import React, {Fragment} from 'react';
import GenomicMarkerEditorContainer from "../GenomicMarkerEditor";
import MSIMarkerEditorContainer from "../MSIMarkerEditor";
import TMBMarkerEditorContainer from "../TMBMarkerEditor";

interface Props {
    marker_id: string
    variant_type_name:string;
    variant_id:string;
    editing_description: boolean;
    set_editing_description: (newEditionDescription: boolean) => void;
    editing_protein_effect: boolean;
    set_editing_protein_effect: (newEditionDescription: boolean) => void;
    markerType:string;
}

const MarkerEditor : React.FC<Props> = ({markerType,variant_type_name, marker_id,variant_id,editing_description,set_editing_description,editing_protein_effect,set_editing_protein_effect}) => {
    return (
        <Fragment>
            { (markerType==="GenomicVariantMarker") && <GenomicMarkerEditorContainer marker_id={marker_id} variant_type_name={variant_type_name}
                                          variant_id={variant_id} editing_description={editing_description}
                                          set_editing_description={set_editing_description}
                                          editing_protein_effect={editing_protein_effect}
                                          set_editing_protein_effect={set_editing_protein_effect}/> }

            { (markerType=="MSIMarker") && <MSIMarkerEditorContainer marker_id={marker_id} editing_description={editing_description}
                                                            set_editing_description={set_editing_description}/>}
            { (markerType=="TMBMarker") && <TMBMarkerEditorContainer marker_id={marker_id} editing_description={editing_description}
                                                             set_editing_description={set_editing_description}/>}
        </Fragment>
    )
}

export default MarkerEditor;