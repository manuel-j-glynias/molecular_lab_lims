import * as React from 'react';
import {OntologicalDiseaseQuery} from '../../../generated/graphql';
import './styles.css';
import NameEditableStatementEditor from "./NameEditableStatementEditor";
import HistoryContainer from "../../common/History";
import LiteratureReferenceContainer from "../../common/LiteratureReference";
import {get_ref_array, humanify_date} from "../../common/Helpers/Ref_helpers";



interface Props {
    data: OntologicalDiseaseQuery;
    editing_description: boolean;
    set_editing_description: (newEditionDescription: boolean) => void;
    editing_synonyms: boolean;
    set_editing_synonyms: (newEditionDescription: boolean) => void;
    refetch: () => void;

}

const className = 'OntologicalDisease';

const OntologicalDisease: React.FC<Props> = ({data,editing_description,set_editing_description,editing_synonyms,set_editing_synonyms,refetch}) => {
    const [editing_name, set_editing_name]  = React.useState(false);
    const [showing_name_references, set_showing_name_references] = React.useState(false);
    const [show_name_history, set_name_history] = React.useState(false);


    if (!data.OntologicalDisease) {
        return <div>No Selected OntologicalDisease</div>;
    }
    if (!data.OntologicalDisease[0]) {
        return <div></div>;

    }
    return (
        <div className={className}>
            <h1 className={`${className}__title`}>{data.OntologicalDisease[0].name.statement}</h1>
            <div className={`${className}__Wrapper`}>
                <div>Name</div>
                {/*<div>{data.OntologicalDisease[0].name.statement}</div>*/}
                <div>
                    {editing_name ? (
                            <NameEditableStatementEditor statement={data.OntologicalDisease[0].name.statement} set_editing={set_editing_name} id={data.OntologicalDisease[0].id} es_ID={data.OntologicalDisease[0].name.id} es_field={data.OntologicalDisease[0].name.field} ref_array={get_ref_array(data.OntologicalDisease[0].name.references)} refetch={refetch} />
                        )
                        :
                        <div>{data.OntologicalDisease[0].name.statement}</div>
                    }
                    {!editing_name ?
                        (<div className={`${className}__FormGroup`}>
                                <button className="btn btn-primary my-1" onClick={() => set_editing_name(true)}>Edit Name</button>
                                <button className="btn btn-primary my-1"
                                        onClick={() => set_name_history(!show_name_history)}>
                                    {show_name_history ? <span>Hide History</span> : <span>Show History</span>}
                                </button>
                                <button className="btn btn-primary my-1" onClick={() => set_showing_name_references(!showing_name_references)}>
                                    {showing_name_references ? <span>Hide References</span> : <span>Show References</span>}
                                </button>
                            </div>
                        )
                        : (<span></span>)
                    }
                    {show_name_history ?
                        <div>
                            <HistoryContainer field={data.OntologicalDisease[0].name.field}  />
                        </div>
                        : <span></span>
                    }
                    {
                        showing_name_references ?
                            <div><h3>References</h3>
                                <div>{data.OntologicalDisease[0].name.references.length > 0 ?
                                    data.OntologicalDisease[0].name.references.map((item, index) => (
                                        // @ts-ignore
                                        <div key={index}> {item ? <LiteratureReferenceContainer id={item.id}/> : ''}</div>

                                    )) : <span>None</span>}</div>
                            </div> : (<span></span>)
                    }
                    <div><strong>Last Editor: </strong>{data.OntologicalDisease[0].name.editor.name}</div>
                    <div><strong>Last Edit Date: </strong>{humanify_date(data.OntologicalDisease[0].name.editDate)}</div>

                </div>


                 <div>Description</div>
                <div>{data.OntologicalDisease[0].description.statement}</div>


                <div>Synonyms</div>
                {/*{<div>{data.OntologicalDisease[0].synonyms.stringList.join(',') }</div>}*/}
                <div>Blank for now</div>

                <div>OmniMaps--Disease Path</div>

                {<div>{data.OntologicalDisease[0].omniMaps &&
                data.OntologicalDisease[0].omniMaps.list[0] &&
                data.OntologicalDisease[0].omniMaps.list[0].mCodes[0] &&
                data.OntologicalDisease[0].omniMaps.list[0].mCodes[0].diseasePath.statement }</div>}


            </div>

        </div>


    );
};

export default OntologicalDisease;