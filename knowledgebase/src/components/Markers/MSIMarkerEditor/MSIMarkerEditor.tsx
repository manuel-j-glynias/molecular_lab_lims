import * as React from "react";
import {Msi_MarkerQuery} from "../../../generated/graphql";
import './styles.css';
import NameEditableStatementEditor from "./NameEditableStatementEditor";
import HistoryContainer from "../../common/History";
import {add_hyperlinks, get_ref_array, humanify_date} from "../../common/Helpers/Ref_helpers"
import LiteratureReferenceContainer from "../../common/LiteratureReference";
import MethodEditableStatementEditor from "./MethodEditableStatementEditor";
import ResultsEditableStatementEditor from "./ResultsEditableStatementEditor";
import {useUserContentState} from "../../../context/UserContentContext";
import {useEditorContentState} from "../../../context/EditorContentContext";


interface Props{
    marker_id: string;
    editing_description: boolean;
    set_editing_description: (newEditionDescription: boolean) => void;
    data:Msi_MarkerQuery;
    refetch: () => void;
}

const className = 'MSIMarkerEditor';

const MSIMarkerEditor : React.FC<Props> = ({data,marker_id,editing_description,set_editing_description, refetch}) => {
    const [editing_name, set_editing_name]  = React.useState(false);
    const [showing_name_references, set_showing_name_references] = React.useState(false);
    const [show_name_history, set_name_history] = React.useState(false);

    const [editing_method, set_editing_method]  = React.useState(false);
    const [showing_method_references, set_showing_method_references] = React.useState(false);
    const [show_method_history, set_method_history] = React.useState(false);

    const [editing_results, set_editing_results]  = React.useState(false);
    const [showing_results_references, set_showing_results_references] = React.useState(false);
    const [show_results_history, set_results_history] = React.useState(false);

    const {
        EditorContentState: {isEditor}
    } = useEditorContentState();

    const canEdit : boolean = isEditor;

    if (!data.MSIMarker){
        return <div>No MSIMarker</div>;
    }
    if (!data.MSIMarker[0]){
        return <div>No MSIMarker</div>;
    }
    return <React.Fragment>
        <div className={className}>
            <h1 className={`${className}__title`}>{data.MSIMarker[0].name.statement}</h1>
            <div className={`${className}__Wrapper`}>
                <div>Name</div>
                <div>
                {editing_name ? (
                    <NameEditableStatementEditor statement={data.MSIMarker[0].name.statement} set_editing={set_editing_name} marker_id={marker_id} es_ID={data.MSIMarker[0].name.id} es_field={data.MSIMarker[0].name.field} ref_array={get_ref_array(data.MSIMarker[0].name.references)} refetch={refetch} />
                )
                :
                    <div>{data.MSIMarker[0].name.statement}</div>
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
                        <HistoryContainer field={data.MSIMarker[0].name.field}  />
                    </div>
                    : <span></span>
                }
                {
                    showing_name_references ?
                        <div><h3>References</h3>
                            <div>{data.MSIMarker[0].name.references.length > 0 ?
                                data.MSIMarker[0].name.references.map((item, index) => (
                                    // @ts-ignore
                                    <div key={index}> {item ? <LiteratureReferenceContainer id={item.id}/> : ''}</div>

                                )) : <span>None</span>}</div>
                        </div> : (<span></span>)
                }
                <div><strong>Last Editor: </strong>{data.MSIMarker[0].name.editor.name}</div>
                <div><strong>Last Edit Date: </strong>{humanify_date(data.MSIMarker[0].name.editDate)}</div>

                </div>


                <div>Method</div>
                {/*<div>{data.MSIMarker[0].method.statement}</div>*/}
                <div>
                    {editing_method ? (
                            <MethodEditableStatementEditor statement={data.MSIMarker[0].method.statement} set_editing={set_editing_method} marker_id={marker_id} es_ID={data.MSIMarker[0].method.id} es_field={data.MSIMarker[0].method.field} ref_array={get_ref_array(data.MSIMarker[0].method.references)} refetch={refetch} />
                        )
                        :
                        <div>{data.MSIMarker[0].method.statement}</div>
                    }
                    {!editing_method ?
                        (<div className={`${className}__FormGroup`}>
                            {canEdit && <button className="btn btn-primary my-1" onClick={() => set_editing_method(true)}>Edit Method</button>}
                                <button className="btn btn-primary my-1"
                                        onClick={() => set_method_history(!show_method_history)}>
                                    {show_method_history ? <span>Hide History</span> : <span>Show History</span>}
                                </button>
                                <button className="btn btn-primary my-1" onClick={() => set_showing_method_references(!showing_method_references)}>
                                    {showing_method_references ? <span>Hide References</span> : <span>Show References</span>}
                                </button>
                            </div>
                        )
                        : (<span></span>)
                    }
                    {show_method_history ?
                        <div>
                            <HistoryContainer field={data.MSIMarker[0].method.field}  />
                        </div>
                        : <span></span>
                    }
                    {
                        showing_method_references ?
                            <div><h3>References</h3>
                                <div>{data.MSIMarker[0].method.references.length > 0 ?
                                    data.MSIMarker[0].method.references.map((item, index) => (
                                        // @ts-ignore
                                        <div key={index}> {item ? <LiteratureReferenceContainer id={item.id}/> : ''}</div>

                                    )) : <span>None</span>}</div>
                            </div> : (<span></span>)
                    }
                    <div><strong>Last Editor: </strong>{data.MSIMarker[0].method.editor.name}</div>
                    <div><strong>Last Edit Date: </strong>{humanify_date(data.MSIMarker[0].method.editDate)}</div>

                </div>


                <div>Results</div>
                {/*<div>{data.MSIMarker[0].resultString.statement}</div>*/}
                <div>
                    {editing_results ? (
                            <ResultsEditableStatementEditor statement={data.MSIMarker[0].resultString.statement} set_editing={set_editing_results} marker_id={marker_id} es_ID={data.MSIMarker[0].resultString.id} es_field={data.MSIMarker[0].resultString.field} ref_array={get_ref_array(data.MSIMarker[0].resultString.references)} refetch={refetch} />
                        )
                        :
                        <div>{data.MSIMarker[0].resultString.statement}</div>
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
                            <HistoryContainer field={data.MSIMarker[0].resultString.field}  />
                        </div>
                        : <span></span>
                    }
                    {
                        showing_results_references ?
                            <div><h3>References</h3>
                                <div>{data.MSIMarker[0].resultString.references.length > 0 ?
                                    data.MSIMarker[0].resultString.references.map((item, index) => (
                                        // @ts-ignore
                                        <div key={index}> {item ? <LiteratureReferenceContainer id={item.id}/> : ''}</div>

                                    )) : <span>None</span>}</div>
                            </div> : (<span></span>)
                    }
                    <div><strong>Last Editor: </strong>{data.MSIMarker[0].resultString.editor.name}</div>
                    <div><strong>Last Edit Date: </strong>{humanify_date(data.MSIMarker[0].resultString.editDate)}</div>
                </div>
            </div>

        </div>
    </React.Fragment>
}

export default MSIMarkerEditor;