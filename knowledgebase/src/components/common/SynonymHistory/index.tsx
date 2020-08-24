import React from 'react'
import {useEditableStringListQuery} from '../../../generated/graphql'
import SynonymHistory from './SynonymHistory'



export interface Props {
    field: string
}

const SynonymHistoryContainer = ({field}:Props) => {

    const {data, error, loading } = useEditableStringListQuery(
        { variables: { field: field },fetchPolicy:"network-only" }
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

    return <SynonymHistory data={data}  />;
}

export default SynonymHistoryContainer;