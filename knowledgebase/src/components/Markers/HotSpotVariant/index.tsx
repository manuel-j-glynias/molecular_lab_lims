import * as React from 'react';
import {useHotSpotVariantQuery} from "../../../generated/graphql";
import HotSpotVariant from './HotSpotVariant'

interface Props {
    id: string;
    variant_id: string;
    refetch_parent: () => void;
}
const HotSpotVariantContainer = ({id,variant_id,refetch_parent}:Props) => {
    const { data, error, loading, refetch } = useHotSpotVariantQuery(
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
    return <HotSpotVariant data={data} variant_id={variant_id} refetch_parent={refetch_parent}/>;
}
export default HotSpotVariantContainer;