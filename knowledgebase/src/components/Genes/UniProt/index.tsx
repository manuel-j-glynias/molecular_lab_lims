import * as React from 'react';
import { useUniprotQuery } from '../../../generated/graphql';
import UniProt from './UniProt'

interface OwnProps {
    id: string;
    editing_description: boolean;
}

const UniProtContainer = ({ id, editing_description }: OwnProps) => {
    const { data, error, loading, refetch } = useUniprotQuery(
        { variables: { id: id } });
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
        return <div>No MyGeneInfo</div>;
    }

    return <UniProt data={data} editing_description={editing_description}/>;
};

export default UniProtContainer;
