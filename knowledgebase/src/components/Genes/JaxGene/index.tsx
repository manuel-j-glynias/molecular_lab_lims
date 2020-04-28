import * as React from 'react';
import { useJaxGeneQuery } from '../../../generated/graphql';
import JaxGene from './JaxGene'

interface OwnProps {
    id: string;
    editing_description: boolean;
    editing_synonyms: boolean;
}

const JaxGeneContainer = ({ id,editing_description,editing_synonyms }: OwnProps) => {
    const { data, error, loading, refetch } = useJaxGeneQuery(
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

    return <JaxGene data={data} editing_description={editing_description}editing_synonyms={editing_synonyms}/>;
};

export default JaxGeneContainer;
