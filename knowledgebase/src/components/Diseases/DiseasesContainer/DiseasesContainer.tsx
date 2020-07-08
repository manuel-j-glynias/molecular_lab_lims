import React from 'react';
import {Redirect} from "react-router-dom";


interface Props {
    logged_in: boolean;
}

const DiseasesContainer: React.FC<Props> = ({logged_in}) => {
    if (!logged_in) {
        return <Redirect to="/" />
    }
    return (
        <div className="DiseasesContainer">
            <h3>Diseases</h3>
        </div>
    )
}

export default DiseasesContainer;