import React from 'react'
import {useEditableOmniGeneReferenceQuery} from '../../../generated/graphql'
import EditableOmniGeneReferenceHistory from './EditableOmniGeneReferenceHistory'


export interface Props {
    field: string
}

const EditableOmniGeneReferenceContainer = ({field}:Props) => {

    const {data, error, loading } = useEditableOmniGeneReferenceQuery(
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

    return <EditableOmniGeneReferenceHistory data={data}  />;
}

export default EditableOmniGeneReferenceContainer;