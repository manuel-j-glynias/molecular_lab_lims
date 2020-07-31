import React, {Fragment} from 'react';
import {useProteinExpression_MarkersQuery} from '../../../generated/graphql'
import ProteinExpressionMarkersList from "./ProteinExpressionMarkersList"
import './styles.css'


export interface Props {
    marker_id: string;
    handleMarkerIdChange: (newId: string) => void;
    query_string:string
}
const className = 'ProteinExpressionMarkersList';
const ProteinExpressionMarkersListContainer: ({handleMarkerIdChange, marker_id,query_string}: Props) => any = ({handleMarkerIdChange, marker_id,query_string}: Props) => {

    const {data, error, loading} = useProteinExpression_MarkersQuery(
        {variables: {query_string:query_string}});


    return (


        data ?
            <Fragment>
                {/*<h1>{query_string}</h1>*/}
            <ProteinExpressionMarkersList marker_id={marker_id} handleMarkerIdChange={handleMarkerIdChange} data={data} />
            </Fragment>
            : <span></span>

    )
}

export default ProteinExpressionMarkersListContainer;


