import * as React from 'react';
import {useJaxVariantQuery} from "../../../generated/graphql";
import JaxVariant from './JaxVariant'

interface Props {
    id: string;
    editing_description: boolean;
    editing_protein_effect: boolean;
}

const JaxVariantContainer = ({id,editing_description,editing_protein_effect}:Props) => {
    const { data, error, loading, refetch } = useJaxVariantQuery(
        {variables:{id:id}})
    React.useEffect(() => {
        refetch();
    }, [id, refetch]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>ERROR</div>;
    }

    if (!data) {
        return <div>No Jax Variant</div>;
    }
    return <JaxVariant data={data} editing_description={editing_description} editing_protein_effect={editing_protein_effect}/>;
}

export default JaxVariantContainer;