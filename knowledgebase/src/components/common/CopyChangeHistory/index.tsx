import React from 'react'
import {useEditableCopyChangeQuery} from '../../../generated/graphql'
import CopyChangeHistory from './CopyChangeHistory'


export interface Props {
    field: string
}

const CopyChangeHistoryContainer = ({field}:Props) => {

    const {data, error, loading } = useEditableCopyChangeQuery(
        { variables: { field: field } }
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

    return <CopyChangeHistory data={data}  />;
}

export default CopyChangeHistoryContainer;