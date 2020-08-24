import React from 'react'
import {useEditableOmniConjunctionQuery} from '../../../generated/graphql'
import ConjuctionHistory from './ConjuctionHistory'


export interface Props {
    field: string
}

const ConjuctionHistoryContainer = ({field}:Props) => {

    const {data, error, loading } = useEditableOmniConjunctionQuery(
        { variables: { field: field },fetchPolicy:"network-only" }
    );

    if (loading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>Error!</div>
    }

    if (!data) {
        return <div>No history</div>;
    }

    return <ConjuctionHistory data={data}  />;
}

export default ConjuctionHistoryContainer;