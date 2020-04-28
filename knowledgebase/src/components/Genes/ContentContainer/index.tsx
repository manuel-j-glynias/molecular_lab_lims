import * as React from 'react';
import { useOmniGeneComponentsQuery } from '../../../generated/graphql';
import ContentContainer from './ContentContainer'

interface OwnProps {
    id: string;
    editing_description: boolean;
    editing_category: boolean;
    editing_synonyms: boolean;
}

const ContentContainerContainer = ({ id, editing_synonyms, editing_category,editing_description }: OwnProps) => {
    const { data, error, loading, refetch } = useOmniGeneComponentsQuery(
        { variables: { gene_id: id } });
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
        return <div>Please select a gene from the panel</div>;
    }

    return <ContentContainer data={data} editing_description={editing_description} editing_category={editing_category} editing_synonyms={editing_synonyms} />;
};

export default ContentContainerContainer;
