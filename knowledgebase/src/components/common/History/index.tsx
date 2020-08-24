import React from 'react'
import {useEditableStatementQuery} from '../../../generated/graphql'
import History from './History'



export interface Props {
    field: string
}

const HistoryContainer = ({field}:Props) => {

    const {data, error, loading, refetch } = useEditableStatementQuery(
        { variables: { field: field },fetchPolicy:"network-only"}
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

    return <History data={data}  />;
}

export default HistoryContainer;