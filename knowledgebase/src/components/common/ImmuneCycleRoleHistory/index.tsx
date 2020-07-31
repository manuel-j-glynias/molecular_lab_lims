import React from 'react'
import {useEditableImmuneCycleRoleQuery} from '../../../generated/graphql'
import ImmuneCycleRoleHistory from './ImmuneCycleRoleHistory'


export interface Props {
    field: string
}

const ImmuneCycleRoleHistoryContainer = ({field}:Props) => {

    const {data, error, loading } = useEditableImmuneCycleRoleQuery(
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

    return <ImmuneCycleRoleHistory data={data}  />;
}

export default ImmuneCycleRoleHistoryContainer;