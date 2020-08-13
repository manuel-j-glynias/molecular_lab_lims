import * as React from 'react';
import {OntologicalDiseaseQuery} from '../../../generated/graphql';
import './styles.css';
import NameEditableStatementEditor from "./NameEditableStatementEditor";
import DescriptionEditor from "./DescriptionEditor";
import HistoryContainer from "../../common/History";
import LiteratureReferenceContainer from "../../common/LiteratureReference";
import {get_ref_array, humanify_date} from "../../common/Helpers/Ref_helpers";
import SynonymEditor from "./SynonymEditor";
import SynonymHistoryContainer from "../../common/SynonymHistory";
import XRefContainer from "../XRef";
import {AppendedContentActionTypes, useAppendedContentState} from "../../../context/AppendedContentContext";



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
    const [showing_references, set_showing_references] = React.useState(false);
    const [showing_xrefs, set_showing_xrefs] = React.useState(false);

    // const [editing_description, set_editing_description]  = React.useState(false);
    const [showing_description_references, set_showing_description_references] = React.useState(false);
    const [show_description_history, set_description_history] = React.useState(false);
    const edit_description = async () => {
        setAppendedContentState({type: AppendedContentActionTypes.appendToDescription, nextText: ''})
        set_editing_description(true)
    };

    const show_references = async () => {
        set_showing_references(!showing_references)
    }


    const get_ref_array = (references: any) : string[] => {
        let refs : string[] = []
        for (let r of references) {
            console.log(r)
            if (r.__typename== "LiteratureReference"){
                console.log(r.PMID)
                refs.push(r.PMID)
            }
        }

        return refs
    }
    const [show_synonyms_history, set_synonyms_history] = React.useState(false);
    const {
        AppendedContentState: {},
        setAppendedContentState
    } = useAppendedContentState();
    const edit_synonyms = async () => {
        setAppendedContentState({type: AppendedContentActionTypes.appendToSynonyms, nextSynonym: ''})
        set_editing_synonyms(true)
    }


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
                            <NameEditableStatementEditor statement={data.OntologicalDisease[0].name.statement} set_editing={set_editing_name} id={data.OntologicalDisease[0].id} es_ID={data.OntologicalDisease[0].name.id} es_field={data.OntologicalDisease[0].name.field} ref_array={[]} refetch={refetch} />
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
                <div>
                    <div className="form-group">
                        {editing_description ? (

                                <DescriptionEditor description={data.OntologicalDisease[0].description.statement} set_editing={set_editing_description} es_ID={data.OntologicalDisease[0].description.id}
                                                   es_field={data.OntologicalDisease[0].description.field} ontodisease_ID={data.OntologicalDisease[0].id}  refetch={refetch}/>
                            ) :
                            (
                                <div>
                                    {data.OntologicalDisease[0].description.statement}
                                </div>
                            )}
                    </div>
                    <div></div>
                    {editing_description ?
                        (
                            <span></span>

                        ) :

                        (<div className="form-group">
                                <button className="btn btn-primary my-1" onClick={() => edit_description()}>Edit Description</button>
                                <button className="btn btn-primary my-1" onClick={() => set_description_history(!show_description_history)}>
                                    {show_description_history ? <span>Hide History</span> : <span>Show History</span>}
                                </button>
                                <button className="btn btn-primary my-1" onClick={() => show_references()}>
                                    {showing_references ? <span>Hide References</span> : <span>Show References</span>}
                                </button>
                            </div>
                        )
                    }
                    {show_description_history ?
                        <div>
                            <HistoryContainer field={data.OntologicalDisease[0].description.field}  />
                        </div>
                        : <span></span>
                    }
                    {
                        showing_references ?
                            <div><h3>References</h3>
                                {data.OntologicalDisease[0].description.references.map((item, index) => (
                                    <div key={index}> {item ? <LiteratureReferenceContainer id={item.id}/>: '' }</div>

                                ))}</div>   : (<span></span>)
                    }

                    <div><strong>Last Editor: </strong>{data.OntologicalDisease[0].description.editor.name}</div>
                    <div><strong>Last Edit Date: </strong>{humanify_date(data.OntologicalDisease[0].description.editDate)}</div>
                </div>
                {/*
                 <div>Description</div>
                <div>{data.OntologicalDisease[0].description.statement}</div>
                <div>
                    {editing_description ? (
                            <DescriptionEditableStatementEditor statement={data.OntologicalDisease[0].description.statement} set_editing={set_editing_name} id={data.OntologicalDisease[0].id} es_ID={data.OntologicalDisease[0].description.id} es_field={data.OntologicalDisease[0].description.field} ref_array={[]} refetch={refetch} />
                        )
                        :
                        <div>{data.OntologicalDisease[0].description.statement}</div>
                    }
                    {!editing_description ?
                        (<div className={`${className}__FormGroup`}>
                                <button className="btn btn-primary my-1" onClick={() => set_editing_description(true)}>Edit Description</button>
                                <button className="btn btn-primary my-1"
                                        onClick={() => set_description_history(!show_description_history)}>
                                    {show_name_history ? <span>Hide History</span> : <span>Show History</span>}
                                </button>
                                <button className="btn btn-primary my-1" onClick={() => set_showing_description_references(!showing_description_references)}>
                                    {showing_description_references ? <span>Hide References</span> : <span>Show References</span>}
                                </button>
                            </div>
                        )
                        : (<span></span>)
                    }
                    {show_description_history ?
                        <div>
                            <HistoryContainer field={data.OntologicalDisease[0].description.field}  />
                        </div>
                        : <span></span>
                    }
                    {
                        showing_description_references ?
                            <div><h3>References</h3>
                                <div>{data.OntologicalDisease[0].name.references.length > 0 ?
                                    data.OntologicalDisease[0].name.references.map((item, index) => (
                                        // @ts-ignore
                                        <div key={index}> {item ? <LiteratureReferenceContainer id={item.id}/> : ''}</div>
                                    )) : <span>None</span>}</div>
                            </div> : (<span></span>)
                    }
                    <div><strong>Last Editor: </strong>{data.OntologicalDisease[0].description.editor.name}</div>
                    <div><strong>Last Edit Date: </strong>{humanify_date(data.OntologicalDisease[0].description.editDate)}</div>
                </div>
*/}

                <div>Synonyms</div>

                <div><div>
                    {data.OntologicalDisease[0].synonyms.stringList.join(',') }</div>
                    <div>Synonyms</div>
                    <div>
                        {editing_synonyms ?
                            (
                                <SynonymEditor synonym_string={data.OntologicalDisease[0].synonyms.stringList.join(',')} set_editing={set_editing_synonyms} es_ID={data.OntologicalDisease[0].synonyms.id}
                                               es_field={data.OntologicalDisease[0].synonyms.field} ontologicaldisease_ID={data.OntologicalDisease[0].id}  refetch={refetch}/>

                            ) :

                            <div>{data.OntologicalDisease[0].synonyms.stringList.join(',')}</div> }
                        {editing_synonyms ?
                            (
                                <span></span>

                            ) :

                            (<div className="form-group">
                                    <button className="btn btn-primary my-1" onClick={() => edit_synonyms()}>Edit Synonyms</button>
                                    <button className="btn btn-primary my-1" onClick={() => set_synonyms_history(!show_synonyms_history)}>
                                        {show_synonyms_history ? <span>Hide History</span> : <span>Show History</span>}
                                    </button>
                                </div>
                            )
                        }
                        {show_synonyms_history ?
                            <div>
                                <SynonymHistoryContainer field={data.OntologicalDisease[0].synonyms.field}  />
                            </div>
                            : <span></span>
                        }
                        <div><strong>Last Editor: </strong>{data.OntologicalDisease[0].synonyms.editor.name}</div>
                        <div><strong>Last Edit Date: </strong>{humanify_date(data.OntologicalDisease[0].synonyms.editDate)}</div>
                    </div></div>





                {/*                const omArray = data.OntologicalDisease[0].omniMaps.list
                <div></div>
                <div>
                    <tr>
                        <th>OmniDisease</th>
                        <th>M-Code</th>
                    </tr>
                    const omArray = data.OntologicalDisease[0].omniMaps.list
                    omArray.map (om => (
                    om.map (
                    <tr>
                        <td>{om.omniDiseaseId}</td>
                        <td>{om.mcodeId}</td>
                    </tr>
                    ))
                </div>*/}

                <div>OmniMaps</div>
                <div></div>

                <div>OmniDisease ID</div>
                {<div>{data.OntologicalDisease[0].omniMaps &&
                data.OntologicalDisease[0].omniMaps.list[0] &&
                data.OntologicalDisease[0].omniMaps.list[0].omniDisease &&
                data.OntologicalDisease[0].omniMaps.list[0].omniDisease.omniDiseaseId }</div>}

                <div>OmniMaps--OmniDisease</div>

                {<div>{data.OntologicalDisease[0].omniMaps &&
                data.OntologicalDisease[0].omniMaps.list[0] &&
                data.OntologicalDisease[0].omniMaps.list[0].omniDisease &&
                data.OntologicalDisease[0].omniMaps.list[0].omniDisease.name.statement }</div>}

                <div>OmniMaps--M-Code</div>

                {<div>{data.OntologicalDisease[0].omniMaps &&
                data.OntologicalDisease[0].omniMaps.list[0] &&
                data.OntologicalDisease[0].omniMaps.list[0].mCodes[0] &&
                data.OntologicalDisease[0].omniMaps.list[0].mCodes[0].mcodeId }</div>}

                <div>OmniMaps--Disease Path</div>

                {<div>{data.OntologicalDisease[0].omniMaps &&
                data.OntologicalDisease[0].omniMaps.list[0] &&
                data.OntologicalDisease[0].omniMaps.list[0].mCodes[0] &&
                data.OntologicalDisease[0].omniMaps.list[0].mCodes[0].diseasePath.statement }</div>}



                <div>X-Refs</div>
                {/*{<div>{data.OntologicalDisease[0].xrefs.list.map(name => (<li>{name!.source} - {name!.sourceId}</li>))}</div>}*/}

                <div>
                    <button className={`${className}__small-btn`} onClick={() => set_showing_xrefs(!showing_xrefs)}> {showing_xrefs ? <span>Hide X-Refs</span> : <span>Show X-refs</span>}
                    </button>
                    {showing_xrefs && <XRefContainer id={data.OntologicalDisease[0].id}/>
                    }
                </div>

                <div></div>
                <div></div>

            </div>

        </div>


    );
};

export default OntologicalDisease;