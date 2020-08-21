import React from 'react'
import {useEditableXRefListQuery} from '../../../generated/graphql'
import XRefHistory from "./XRefHistory";


export interface Props {
    field: string
}

// need to force to refetch
const XRefHistoryContainer = ({field}:Props) => {

    const {data, error, loading } = useEditableXRefListQuery(
        { variables: { field: field } }
    );

    if (loading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>Error!</div>
    }

    if (!data) {
        return <div>No data for Protein</div>;
    }

    return <XRefHistory data={data}  />;
}

export default XRefHistoryContainer;