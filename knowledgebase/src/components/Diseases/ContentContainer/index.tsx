import * as React from 'react';
import ContentContainer from './ContentContainer'
import {useOntologicalDiseaseComponentsQuery} from "../../../generated/graphql";

interface Props {
    id: string;
    editing_description: boolean;
    editing_synonyms: boolean;
}

const ContentContainerContainer = ({ id, editing_synonyms,editing_description }: Props) => {
    const { data, error, loading, refetch } = useOntologicalDiseaseComponentsQuery(
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
        return <div>Please select a gene from the panel</div>;
    }

    return <ContentContainer data={data} editing_description={editing_description}  editing_synonyms={editing_synonyms} />;
};

export default ContentContainerContainer;
