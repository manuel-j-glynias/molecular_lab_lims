import * as React from "react";
import {useTmb_MarkersQuery} from '../../../generated/graphql'
import TMBMarkersList from "./TMBMarkersList"
import './styles.css'


export interface Props {
    marker_id: string;
    handleMarkerIdChange: (newId: string) => void;
}
const className = 'TMBMarkersList';
const TMBMarkersListContainer: ({handleMarkerIdChange, marker_id}: Props) => any = ({handleMarkerIdChange, marker_id}: Props) => {

    const {data, error, loading} = useTmb_MarkersQuery();


    return (


        data ?
            <TMBMarkersList marker_id={marker_id} handleMarkerIdChange={handleMarkerIdChange} data={data} />

            : <span></span>

    )
}

export default TMBMarkersListContainer;


