import React from 'react';
import GeneListContainer from "../GeneList";
import OmniGeneContainer from "../OmniGene";
import ContentContainerContainer from "../ContentContainer";
import {AppendedContentProvider} from "../../../context/AppendedContentContext"
// import {UserContentProvider} from "../../../context/UserContentContext"
import './styles.css';
import {GetUserQuery} from "../../../generated/graphql";
import {Redirect} from "react-router-dom";

interface Props {
    logged_in: boolean;
}

const GenesContainer: React.FC<Props> = ({logged_in}) => {
    const [gene_id, set_gene_Id] = React.useState("");
    const [gene_query_string, set_gene_query_string] = React.useState("");

    const [editing_description, set_editing_description] = React.useState(false);
    const [editing_category, set_editing_category] = React.useState(false);
    const [editing_synonyms, set_editing_synonyms] = React.useState(false);

    const handleGeneIdChange = React.useCallback(newId => {
        set_editing_description(false)
        set_editing_category(false)
        set_editing_synonyms(false)
        set_gene_Id(newId);
    }, []);
    if (!logged_in) {
        return <Redirect to="/"/>
    }

    return (
        <div className="GenesContainer">
            <AppendedContentProvider>
                <React.Fragment>
                    <GeneListContainer gene_id={gene_id} handleGeneIdChange={handleGeneIdChange}
                                       query_str={gene_query_string}
                                       set_gene_query_string={set_gene_query_string}/>
                    <OmniGeneContainer id={gene_id} editing_description={editing_description}
                                       set_editing_description={set_editing_description}
                                       editing_category={editing_category} set_editing_category={set_editing_category}
                                       editing_synonyms={editing_synonyms} set_editing_synonyms={set_editing_synonyms}/>
                    <ContentContainerContainer id={gene_id} editing_description={editing_description}
                                               editing_category={editing_category} editing_synonyms={editing_synonyms}
                    />
                </React.Fragment>
            </AppendedContentProvider>

        </div>
    );
}

export default GenesContainer;
