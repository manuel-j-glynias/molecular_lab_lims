import React from 'react';
import {Redirect} from "react-router-dom";


interface Props {
    logged_in: boolean;
}

const DrugsContainer: React.FC<Props> = ({logged_in}) => {
    if (!logged_in) {
        return <Redirect to="/" />
    }
    return (
        <div className="DrugsContainer">
            <h3>Drugs</h3>
        </div>
    )
}

export default DrugsContainer;