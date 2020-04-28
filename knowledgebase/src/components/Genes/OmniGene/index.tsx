import * as React from 'react';
import { useOmniGeneQuery } from '../../../generated/graphql';
import OmniGene from './OmniGene'

interface OwnProps {
    id: string;
    editing_description: boolean;
    set_editing_description: (newEditionDescription: boolean) => void;
    editing_category: boolean;
    set_editing_category: (newEditionDescription: boolean) => void;
    editing_synonyms: boolean;
    set_editing_synonyms: (newEditionDescription: boolean) => void;

}

const OmniGeneContainer = ({ id, editing_description, set_editing_description, editing_category,set_editing_category,editing_synonyms,set_editing_synonyms }: OwnProps) => {
    const { data, error, loading, refetch } = useOmniGeneQuery(
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
        return <div>Select a gene from the panel</div>;
    }

    return <OmniGene data={data} editing_description={editing_description} set_editing_description={set_editing_description}
                editing_category={editing_category} set_editing_category={set_editing_category} editing_synonyms={editing_synonyms} set_editing_synonyms={set_editing_synonyms}
    refetch={refetch}/>;
};

export default OmniGeneContainer;
