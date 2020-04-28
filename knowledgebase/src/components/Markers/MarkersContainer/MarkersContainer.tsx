import React, {useState} from 'react';
import {Redirect} from "react-router-dom";
import MarkerListContainter from "../MarkerList";


interface Props {
    logged_in: boolean;
}

// DNAMarker ProteinExpressionMarker Variant Marker
const className = 'Markers';
const MarkersContainer: React.FC<Props> = ({logged_in}) => {
    const [dna, set_dna] = useState(true)

    if (!logged_in) {
        return <Redirect to="/" />
    }
    return (
        <div className='MarkersContainer'>
            <React.Fragment>
                <MarkerListContainter logged_in={logged_in} />
            </React.Fragment>
         </div>
    )
}

export default MarkersContainer;