import * as React from "react";
import {useMarkerProfilesQuery} from '../../../generated/graphql'
import MarkerProfilesList from "./MarkerProfilesList"
import './styles.css'


export interface Props {
    marker_id: string;
    handleMarkerIdChange: (newId: string) => void;
    query_string:string
}
const className = 'MarkerProfilesList';
const MarkerProfilesListContainer: ({handleMarkerIdChange, marker_id,query_string}: Props) => any = ({handleMarkerIdChange, marker_id,query_string}: Props) => {

    const {data, error, loading} = useMarkerProfilesQuery(
        {variables: {query_string:query_string}});


    return (


        data ?
            <MarkerProfilesList marker_id={marker_id} handleMarkerIdChange={handleMarkerIdChange} data={data} />

            : <span></span>

    )
}

export default MarkerProfilesListContainer;


