import React from 'react'
import {useEditableMarkerComponentListQuery} from '../../../generated/graphql'
import EditableMarkerComponentListHistory from './EditableMarkerComponentListHistory'


export interface Props {
    field: string
}

const EditableMarkerComponentListHistoryContainer = ({field}:Props) => {

    const {data, error, loading } = useEditableMarkerComponentListQuery(
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

    return <EditableMarkerComponentListHistory data={data}  />;
}

export default EditableMarkerComponentListHistoryContainer;