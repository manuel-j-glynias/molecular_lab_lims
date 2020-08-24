import React from 'react'
import {useEditableIntQuery} from '../../../generated/graphql'
import EditableIntHistory from './EditableIntHistory'


export interface Props {
    field: string
}

const EditableIntHistoryHistoryContainer = ({field}:Props) => {

    const {data, error, loading } = useEditableIntQuery(
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

    return <EditableIntHistory data={data}  />;
}

export default EditableIntHistoryHistoryContainer;