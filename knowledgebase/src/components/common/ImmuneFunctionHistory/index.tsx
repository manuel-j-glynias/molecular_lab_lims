import React from 'react'
import {useEditableImmuneFunctionQuery} from '../../../generated/graphql'
import ImmuneFunctionHistory from './ImmuneFunctionHistory'


export interface Props {
    field: string
}

const ImmuneFunctionHistoryContainer = ({field}:Props) => {

    const {data, error, loading } = useEditableImmuneFunctionQuery(
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

    return <ImmuneFunctionHistory data={data}  />;
}

export default ImmuneFunctionHistoryContainer;