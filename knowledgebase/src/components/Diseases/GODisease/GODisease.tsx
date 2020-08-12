import * as React from 'react';
import {EditableStatement, GoDiseaseQuery, Maybe} from '../../../generated/graphql';
import './styles.css';
import {AppendedContentActionTypes, useAppendedContentState} from "../../../context/AppendedContentContext";
import NameEditableStatementEditor from "../OntologicalDisease/NameEditableStatementEditor";
import HistoryContainer from "../../common/History";
import LiteratureReferenceContainer from "../../common/LiteratureReference";
import {humanify_date} from "../../common/Helpers/Ref_helpers";
import DescriptionEditor from "../OntologicalDisease/DescriptionEditor";
import SynonymEditor from "../OntologicalDisease/SynonymEditor";
import SynonymHistoryContainer from "../../common/SynonymHistory";

interface Props {
    data: GoDiseaseQuery;
    editing_description: boolean;
}
const className = 'GODisease';


const GODisease: React.FC<Props> = ({data,editing_description}) => {
    const [editing_name, set_editing_name]  = React.useState(false);
    if (!data.GODisease) {
        return <div>No Selected OntologicalDisease</div>;
    }
    if (!data.GODisease[0]) {
        return <div></div>;

    }
    return (
        <div className={className}>
            <h1 className={`${className}__title`}>{data.GODisease[0].name.statement}</h1> </div>)

}

export default GODisease