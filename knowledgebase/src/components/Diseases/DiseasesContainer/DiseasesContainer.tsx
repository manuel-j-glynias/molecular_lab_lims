import React from 'react';
import {Redirect} from "react-router-dom";
import ContentContainerContainer from "../ContentContainer";
import OntologicalDiseaseListContainer from "../OntologicalDiseaseList";
import OntologicalDiseaseContainer from "../OntologicalDisease";
import './styles.css'


interface Props {
    logged_in: boolean;
}
const className = 'DiseasesContainer';

const DiseasesContainer: React.FC<Props> = ({logged_in}) => {
    const [ontological_disease_id, set_ontological_disease_id] = React.useState("");
    const [query_str, set_query_str] = React.useState("");
    const [editing_description, set_editing_description] = React.useState(false);
    const [editing_synonyms, set_editing_synonyms] = React.useState(false);

    const handle_ontological_disease_id_Change = React.useCallback(newId => {
        console.log('handle_ontological_disease_id_Change newId=' + newId)
        set_editing_description(false)
        set_editing_synonyms(false)
        set_ontological_disease_id(newId);
    }, []);

    if (!logged_in) {
        return <Redirect to="/" />
    }
    return (
        <div className="DiseasesContainer">
            <React.Fragment>
                <OntologicalDiseaseListContainer query_str={query_str} set_query_string={set_query_str}
                                                 handle_ontological_disease_id_Change={handle_ontological_disease_id_Change} ontological_disease_id={ontological_disease_id}/>
                <OntologicalDiseaseContainer id={ontological_disease_id} editing_description={editing_description} set_editing_description={set_editing_description} editing_synonyms={editing_synonyms} set_editing_synonyms={set_editing_synonyms}/>
                <ContentContainerContainer id={ontological_disease_id} editing_description={editing_description} editing_synonyms={editing_synonyms} />
            </React.Fragment>
        </div>
    )
}

export default DiseasesContainer;