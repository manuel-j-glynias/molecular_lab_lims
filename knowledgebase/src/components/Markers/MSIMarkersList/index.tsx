import * as React from "react";
import {useMsi_MarkersQuery} from '../../../generated/graphql'
import MSIMarkersList from "./MSIMarkersList"
import './styles.css'


export interface Props {
    marker_id: string;
    handleMarkerIdChange: (newId: string) => void;
}
const className = 'MSIMarkersList';
const MSIMarkersListContainer: ({handleMarkerIdChange, marker_id}: Props) => any = ({handleMarkerIdChange, marker_id}: Props) => {

    const {data, error, loading} = useMsi_MarkersQuery();


    return (


        data ?
            <MSIMarkersList marker_id={marker_id} handleMarkerIdChange={handleMarkerIdChange}  data={data} />

            : <span></span>

    )
}

export default MSIMarkersListContainer;


