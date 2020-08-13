import * as React from 'react';
import {useJaxVariantQuery} from "../../../generated/graphql";
import JaxVariant from './JaxVariant'

interface Props {
    id: string;
    editing_description: boolean;
    editing_protein_effect: boolean;
    variant_id: string;
    refetch_parent: () => void;
}

const JaxVariantContainer = ({id,editing_description,editing_protein_effect,variant_id,refetch_parent}:Props) => {
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
    return <JaxVariant data={data} editing_description={editing_description} editing_protein_effect={editing_protein_effect}variant_id={variant_id} refetch_parent={refetch_parent}/>;
}

export default JaxVariantContainer;