import * as React from 'react';
import {useClinVarVariantByGeneQuery} from "../../../generated/graphql";
import ClinVarVariantSearch from './ClinVarVariantSearch'

interface Props {
    gene_name: string;
    variant_id:string;
    refetch_parent: () => void;
}
const ClinVarVariantSearchContainer = ({gene_name,variant_id,refetch_parent}:Props) => {
    const { data, error, loading, refetch } = useClinVarVariantByGeneQuery(
        {variables:{gene_name:gene_name}})
    React.useEffect(() => {
        refetch();
    }, [gene_name, refetch]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>ERROR</div>;
    }

    if (!data) {
        return <div>No Jax Variant</div>;
    }
    return <ClinVarVariantSearch data={data} variant_id={variant_id} refetch_parent={refetch_parent}/>;
}
export default ClinVarVariantSearchContainer;