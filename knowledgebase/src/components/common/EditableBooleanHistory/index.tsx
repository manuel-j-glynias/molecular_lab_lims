import React from 'react'
import {useEditableBooleanQuery} from '../../../generated/graphql'
import EditableBooleanHistory from './EditableBooleanHistory'


export interface Props {
    field: string
}

const EditableBooleanHistoryContainer = ({field}:Props) => {

    const {data, error, loading } = useEditableBooleanQuery(
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

    return <EditableBooleanHistory data={data}  />;
}

export default EditableBooleanHistoryContainer;