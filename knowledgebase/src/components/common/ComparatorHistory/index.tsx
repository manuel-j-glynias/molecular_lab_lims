import React from 'react'
import {useEditableAssayComparatorQuery} from '../../../generated/graphql'
import ComparatorHistory from './ComparatorHistory'


export interface Props {
    field: string
}

const ComparatorHistoryContainer = ({field}:Props) => {

    const {data, error, loading } = useEditableAssayComparatorQuery(
        { variables: { field: field } ,fetchPolicy:"network-only"}
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

    return <ComparatorHistory data={data}  />;
}

export default ComparatorHistoryContainer;