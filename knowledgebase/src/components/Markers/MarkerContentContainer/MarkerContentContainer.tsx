import React, {Fragment} from 'react';
import GenomicMarkerContentContainerContainer from "../GenomicMarkerContentContainer";


interface Props {
    variant_id: string;
    editing_description: boolean;
    editing_protein_effect: boolean;
    markerType:string;
}

const MarkerContentContainer : React.FC<Props> = ({markerType,variant_id,editing_description,editing_protein_effect}) => {
    return (<Fragment>
        { (markerType==="GenomicVariantMarker") && <GenomicMarkerContentContainerContainer variant_id={variant_id}
                                                                                           editing_protein_effect={editing_protein_effect}
                                                                                           editing_description={editing_description}/>}

            </Fragment>)

}

export default MarkerContentContainer;