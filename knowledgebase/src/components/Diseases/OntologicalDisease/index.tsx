import * as React from 'react';
import { useOntologicalDiseaseQuery } from '../../../generated/graphql';
import OntologicalDisease from './OntologicalDisease'

interface Props {
    id: string;
    editing_description: boolean;
    set_editing_description: (newEditionDescription: boolean) => void;
    editing_synonyms: boolean;
    set_editing_synonyms: (newEditionDescription: boolean) => void;

}

const OntologicalDiseaseContainer = ({ id, editing_description, set_editing_description,editing_synonyms,set_editing_synonyms }: Props) => {
    const { data, error, loading, refetch } = useOntologicalDiseaseQuery(
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
        return <div>Select a disease from the panel</div>;
    }

    return <OntologicalDisease data={data} editing_description={editing_description} set_editing_description={set_editing_description}
                                editing_synonyms={editing_synonyms} set_editing_synonyms={set_editing_synonyms}
                               refetch={refetch}/>;
};

export default OntologicalDiseaseContainer;
