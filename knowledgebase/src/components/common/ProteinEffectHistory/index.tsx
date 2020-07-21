import React from 'react'
import {useEditableProteinEffectQuery} from '../../../generated/graphql'
import ProteinEffectHistory from './ProteinEffectHistory'



export interface Props {
    field: string
}

const ProteinEffectHistoryContainer = ({field}:Props) => {

    const {data, error, loading } = useEditableProteinEffectQuery(
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

    return <ProteinEffectHistory data={data}  />;
}

export default ProteinEffectHistoryContainer;