import * as React from 'react';
import {useJaxVariantQuery} from "../../../generated/graphql";
import JaxVariant from './JaxVariant'

interface Props {
    id: string;
}

const JaxVariantContainer = ({id}:Props) => {
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
    return <JaxVariant data={data}/>;
}

export default JaxVariantContainer;