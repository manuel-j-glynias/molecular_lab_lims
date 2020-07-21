import React from 'react'
import {useEditableFloatQuery} from '../../../generated/graphql'
import EditableFloatHistory from './EditableFloatHistory'


export interface Props {
    field: string
}

const EditableFloatHistoryHistoryContainer = ({field}:Props) => {

    const {data, error, loading } = useEditableFloatQuery(
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

    return <EditableFloatHistory data={data}  />;
}

export default EditableFloatHistoryHistoryContainer;