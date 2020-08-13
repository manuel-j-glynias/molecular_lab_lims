import * as React from 'react';
import {useClinVarVariantQuery, useJaxVariantQuery} from "../../../generated/graphql";
import ClinVarVariant from './ClinVarVariant'

interface Props {
    id: string;
    variant_id: string;
    refetch_parent: () => void;
}
const ClinVarVariantContainer = ({id,variant_id,refetch_parent}:Props) => {
    const { data, error, loading, refetch } = useClinVarVariantQuery(
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
    return <ClinVarVariant data={data} variant_id={variant_id} refetch_parent={refetch_parent}/>;
}
export default ClinVarVariantContainer;