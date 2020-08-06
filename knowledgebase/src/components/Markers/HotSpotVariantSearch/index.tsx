import * as React from 'react';
import {useHotSpotVariantByGeneQuery} from "../../../generated/graphql";
import HotSpotVariantSearch from './HotSpotVariantSearch'

interface Props {
    gene_name: string;
    variant_id:string;
    refetch_parent: () => void;
}
const HotSpotVariantSearchContainer = ({gene_name,variant_id,refetch_parent}:Props) => {
    const { data, error, loading, refetch } = useHotSpotVariantByGeneQuery(
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
    return <HotSpotVariantSearch data={data} variant_id={variant_id} refetch_parent={refetch_parent}/>;
}
export default HotSpotVariantSearchContainer;