import React from 'react'
import {useEditableImmunePhenotypeQuery} from '../../../generated/graphql'
import ImmunePhenotypeHistory from './ImmunePhenotypeHistory'


export interface Props {
    field: string
}

const ImmunePhenotypeHistoryContainer = ({field}:Props) => {

    const {data, error, loading } = useEditableImmunePhenotypeQuery(
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

    return <ImmunePhenotypeHistory data={data}  />;
}

export default ImmunePhenotypeHistoryContainer;