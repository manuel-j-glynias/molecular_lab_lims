import * as React from 'react';
import {useDoDiseaseQuery} from '../../../generated/graphql';
//import DODisease  from "./DODisease";
import OntologicalDisease from "../OntologicalDisease/OntologicalDisease";
import DODisease from "./DODisease";

interface Props {
    id: string;
    editing_description: boolean;
    editing_synonyms: boolean;
}

const DODiseaseContainer = ({ id, editing_description, editing_synonyms}: Props) => {
    const { data, error, loading, refetch } = useDoDiseaseQuery(
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

    return <DODisease data={data} editing_description={editing_description} editing_synonyms={editing_synonyms}/>;
};
export default DODiseaseContainer;
