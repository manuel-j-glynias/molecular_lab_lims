import * as React from 'react';
import {useGoVariantQuery, useJaxVariantQuery} from "../../../generated/graphql";
import GoVariant from "./GOVariant";

interface Props {
    id: string;
    variant_id: string;
    refetch_parent: () => void;
}

const GOVariantContainer = ({id,variant_id,refetch_parent}:Props) => {
    const { data, error, loading, refetch } = useGoVariantQuery(
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
        return <div>No GO Variant</div>;
    }
    return <GoVariant data={data} variant_id={variant_id} refetch_parent={refetch_parent}/>
}
export default GOVariantContainer;