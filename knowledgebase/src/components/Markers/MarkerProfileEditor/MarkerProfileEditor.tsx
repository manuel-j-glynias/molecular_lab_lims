import * as React from "react";
import {MarkerComponent, MarkerProfileQuery, useMarkerProfileQuery} from "../../../generated/graphql";
import './styles.css';
import NameEditableStatementEditor from "./NameEditableStatementEditor";
import HistoryContainer from "../../common/History";
import {add_hyperlinks, humanify_date,get_ref_array} from "../../common/Helpers/Ref_helpers"
import LiteratureReferenceContainer from "../../common/LiteratureReference";
import ResultsEditableStatementEditor from "./ResultsEditableStatementEditor";
import ConjuctionEditor from "./ConjuctionEditor"
import ConjuctionHistoryContainer from "../../common/ConjunctionHistory";
import ComponentEditor from "./ComponentEditor"
import EditableMarkerComponentListHistoryContainer from "../../common/EditableMarkerComponentListHistory";
import {useUserContentState} from "../../../context/UserContentContext";

interface Props{
    marker_id: string;
    editing_description: boolean;
    set_editing_description: (newEditionDescription: boolean) => void;
    editing_components: boolean;
    set_editing_components: (newEditionDescription: boolean) => void;
    selected_component: MarkerComponent;
    set_selected_component:(selected:MarkerComponent | null) => void;
    data:MarkerProfileQuery;
    refetch: () => void;
}

const className = 'MarkerProfileEditor';

const MarkerProfileEditor : React.FC<Props> = ({data,marker_id,editing_description,set_editing_description,editing_components,set_editing_components,
                                                   selected_component,set_selected_component,refetch}) => {
    const [editing_name, set_editing_name]  = React.useState(false);
    const [showing_name_references, set_showing_name_references] = React.useState(false);
    const [show_name_history, set_name_history] = React.useState(false);

    const [editing_results, set_editing_results]  = React.useState(false);
    const [showing_results_references, set_showing_results_references] = React.useState(false);
    const [show_results_history, set_results_history] = React.useState(false);

    const [editing_conjuction, set_editing_conjuction]  = React.useState(false);
    const [showing_conjuction_references, set_showing_conjuction_references] = React.useState(false);
    const [show_conjuction_history, set_conjuction_history] = React.useState(false);

    const [showing_components_references, set_showing_components_references] = React.useState(false);
    const [show_components_history, set_components_history] = React.useState(false);

    const {
        UserContentState: {isEditor}
    } = useUserContentState();

    const canEdit : boolean = isEditor;

    if (!data.MarkerProfile){
        return <div>No MSIMarker</div>;
    }
    if (!data.MarkerProfile[0]){
        return <div>No MSIMarker</div>;
    }

    return <React.Fragment>
        <div className={className}>
            <h1 className={`${className}__title`}>{data.MarkerProfile[0].name.statement}</h1>
            <div className={`${className}__Wrapper`}>
                <div>Name</div>
                <div>
                {editing_name ? (
                    <NameEditableStatementEditor statement={data.MarkerProfile[0].name.statement} set_editing={set_editing_name} marker_id={marker_id} es_ID={data.MarkerProfile[0].name.id} es_field={data.MarkerProfile[0].name.field} ref_array={get_ref_array(data.MarkerProfile[0].name.references)} refetch={refetch} />
                )
                :
                    <div>{data.MarkerProfile[0].name.statement}</div>
                }
                {!editing_name ?
                    (<div className={`${className}__FormGroup`}>
                        {canEdit && <button className="btn btn-primary my-1" onClick={() => set_editing_name(true)}>Edit Name</button>}
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
                        <HistoryContainer field={data.MarkerProfile[0].name.field}  />
                    </div>
                    : <span></span>
                }
                {
                    showing_name_references ?
                        <div><h3>References</h3>
                            <div>{data.MarkerProfile[0].name.references.length > 0 ?
                                data.MarkerProfile[0].name.references.map((item, index) => (
                                    // @ts-ignore
                                    <div key={index}> {item ? <LiteratureReferenceContainer id={item.id}/> : ''}</div>

                                )) : <span>None</span>}</div>
                        </div> : (<span></span>)
                }
                <div><strong>Last Editor: </strong>{data.MarkerProfile[0].name.editor.name}</div>
                <div><strong>Last Edit Date: </strong>{humanify_date(data.MarkerProfile[0].name.editDate)}</div>

                </div>

                <div>Conjunction</div>
                <div>
                    {editing_conjuction ? (
                            <ConjuctionEditor conjunction={data.MarkerProfile[0].conjunction.conjunction} set_editing={set_editing_conjuction} marker_id={marker_id} id={data.MarkerProfile[0].conjunction.id} field={data.MarkerProfile[0].conjunction.field} ref_array={get_ref_array(data.MarkerProfile[0].conjunction.references)} refetch={refetch}/>
                        )
                        :
                        <div>{data.MarkerProfile[0].conjunction.conjunction}</div>
                    }
                    {!editing_conjuction ?
                        (<div className={`${className}__FormGroup`}>
                            {canEdit && <button className="btn btn-primary my-1" onClick={() => set_editing_conjuction(true)}>Edit Conjuction</button>}
                                <button className="btn btn-primary my-1"
                                        onClick={() => set_conjuction_history(!show_conjuction_history)}>
                                    {show_conjuction_history ? <span>Hide History</span> : <span>Show History</span>}
                                </button>
                                <button className="btn btn-primary my-1" onClick={() => set_showing_conjuction_references(!showing_conjuction_references)}>
                                    {showing_conjuction_references ? <span>Hide References</span> : <span>Show References</span>}
                                </button>
                            </div>
                        )
                        : (<span></span>)
                    }
                    {show_conjuction_history ?
                        <div>
                            <ConjuctionHistoryContainer field={data.MarkerProfile[0].conjunction.field}  />
                        </div>
                        : <span></span>
                    }
                    {
                        showing_conjuction_references ?
                            <div><h3>References</h3>
                                <div>{data.MarkerProfile[0].conjunction.references.length > 0 ?
                                    data.MarkerProfile[0].conjunction.references.map((item, index) => (
                                        // @ts-ignore
                                        <div key={index}> {item ? <LiteratureReferenceContainer id={item.id}/> : ''}</div>

                                    )) : <span>None</span>}</div>
                            </div> : (<span></span>)
                    }
                    <div><strong>Last Editor: </strong>{data.MarkerProfile[0].conjunction.editor.name}</div>
                    <div><strong>Last Edit Date: </strong>{humanify_date(data.MarkerProfile[0].conjunction.editDate)}</div>
                </div>

                <div>Components</div>
                {/*<div>{data.MarkerProfile[0].components.components.map(((item, index) => (<span key={index}><span>{item && item.name.statement}, </span></span>)))}</div>*/}
                <div>
                    {editing_components ? (
                            // @ts-ignore
                            <ComponentEditor components={data.MarkerProfile[0].components.components} set_editing={set_editing_components} marker_id={marker_id} id={data.MarkerProfile[0].components.id} field={data.MarkerProfile[0].components.field} selected_component={selected_component} set_selected_component={set_selected_component} ref_array={get_ref_array(data.MarkerProfile[0].components.references)} refetch={refetch}/>
                        )
                        :
                        <div>{data.MarkerProfile[0].components.components.map(((item, index) => (<span key={index}><span>{item && item.name.statement}, </span></span>)))}</div>
                    }
                    {!editing_components ?
                        (<div className={`${className}__FormGroup`}>
                            {canEdit && <button className="btn btn-primary my-1" onClick={() => set_editing_components(true)}>Edit Components</button>}
                                <button className="btn btn-primary my-1"
                                        onClick={() => set_components_history(!show_components_history)}>
                                    {show_components_history ? <span>Hide History</span> : <span>Show History</span>}
                                </button>
                                <button className="btn btn-primary my-1" onClick={() => set_showing_components_references(!showing_components_references)}>
                                    {showing_components_references ? <span>Hide References</span> : <span>Show References</span>}
                                </button>
                            </div>
                        )
                        : (<span></span>)
                    }
                    {show_components_history ?
                        <div>
                            <EditableMarkerComponentListHistoryContainer field={data.MarkerProfile[0].components.field}  />
                        </div>
                        : <span></span>
                    }
                    {
                        showing_components_references ?
                            <div><h3>References</h3>
                                <div>{data.MarkerProfile[0].components.references.length > 0 ?
                                    data.MarkerProfile[0].components.references.map((item, index) => (
                                        // @ts-ignore
                                        <div key={index}> {item ? <LiteratureReferenceContainer id={item.id}/> : ''}</div>

                                    )) : <span>None</span>}</div>
                            </div> : (<span></span>)
                    }
                    <div><strong>Last Editor: </strong>{data.MarkerProfile[0].components.editor.name}</div>
                    <div><strong>Last Edit Date: </strong>{humanify_date(data.MarkerProfile[0].components.editDate)}</div>
                </div>


                <div>Results</div>
                <div>
                    {editing_results ? (
                            <ResultsEditableStatementEditor statement={data.MarkerProfile[0].resultString.statement} set_editing={set_editing_results} marker_id={marker_id} es_ID={data.MarkerProfile[0].resultString.id} es_field={data.MarkerProfile[0].resultString.field} ref_array={get_ref_array(data.MarkerProfile[0].resultString.references)} refetch={refetch} />
                        )
                        :
                        <div>{data.MarkerProfile[0].resultString.statement}</div>
                    }
                    {!editing_results ?
                        (<div className={`${className}__FormGroup`}>
                            {canEdit && <button className="btn btn-primary my-1" onClick={() => set_editing_results(true)}>Edit Results</button>}
                                <button className="btn btn-primary my-1"
                                        onClick={() => set_results_history(!show_results_history)}>
                                    {show_results_history ? <span>Hide History</span> : <span>Show History</span>}
                                </button>
                                <button className="btn btn-primary my-1" onClick={() => set_showing_results_references(!showing_results_references)}>
                                    {showing_results_references ? <span>Hide References</span> : <span>Show References</span>}
                                </button>
                            </div>
                        )
                        : (<span></span>)
                    }
                    {show_results_history ?
                        <div>
                            <HistoryContainer field={data.MarkerProfile[0].resultString.field}  />
                        </div>
                        : <span></span>
                    }
                    {
                        showing_results_references ?
                            <div><h3>References</h3>
                                <div>{data.MarkerProfile[0].resultString.references.length > 0 ?
                                    data.MarkerProfile[0].resultString.references.map((item, index) => (
                                        // @ts-ignore
                                        <div key={index}> {item ? <LiteratureReferenceContainer id={item.id}/> : ''}</div>

                                    )) : <span>None</span>}</div>
                            </div> : (<span></span>)
                    }
                    <div><strong>Last Editor: </strong>{data.MarkerProfile[0].resultString.editor.name}</div>
                    <div><strong>Last Edit Date: </strong>{humanify_date(data.MarkerProfile[0].resultString.editDate)}</div>
                </div>
            </div>

        </div>
    </React.Fragment>
}

export default MarkerProfileEditor;