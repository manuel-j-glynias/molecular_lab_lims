import * as React from 'react';
import {useGoVariantQuery, useJaxVariantQuery} from "../../../generated/graphql";
import GoVariant from "./GOVariant";

interface Props {
    id: string;
}

const GOVariantContainer = ({id}:Props) => {
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
    return <GoVariant data={data}/>
}
export default GOVariantContainer;