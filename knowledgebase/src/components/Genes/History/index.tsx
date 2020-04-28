import React from 'react'
import {useEditableStatementQuery} from '../../../generated/graphql'
import History from './History'



export interface Props {
    field: string
}

const HistoryContainer = ({field}:Props) => {

    const {data, error, loading } = useEditableStatementQuery(
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

    return <History data={data}  />;
}

export default HistoryContainer;