import * as React from "react";
import {AssayComparator, Tmb_MarkerQuery} from "../../../generated/graphql";
import './styles.css';
import NameEditableStatementEditor from "./NameEditableStatementEditor";
import HistoryContainer from "../../common/History";
import EditableFloatHistoryContainer from "../../common/EditableFloatHistory";
import ComparatorHistoryContainer from "../../common/ComparatorHistory";
import LiteratureReferenceContainer from "../../common/LiteratureReference";
import {get_ref_array, humanify_date} from "../../common/Helpers/Ref_helpers";
import MethodEditableStatementEditor from "./MethodEditableStatementEditor";
import ResultsEditableStatementEditor from "./ResultsEditableStatementEditor";
import ResultUnitsEditableStatementEditor from  "./ResultUnitsEditableStatementEditor"
import ResultMinEditor from "./ResultMinEditor"
import ResultMaxEditor from "./ResultMaxEditor"
import ComparatorEditor from "./ComparatorEditor";
import {useUserContentState} from "../../../context/UserContentContext";
import {useEditorContentState} from "../../../context/EditorContentContext";


interface Props{
    marker_id: string;
    editing_description: boolean;
    set_editing_description: (newEditionDescription: boolean) => void;
    data:Tmb_MarkerQuery;
    refetch: () => void;
}

const className = 'TMBMarkerEditor';
const TMBMarkerEditor : React.FC<Props> = ({data, marker_id,editing_description,set_editing_description, refetch}) => {
    const [editing_name, set_editing_name]  = React.useState(false);
    const [showing_name_references, set_showing_name_references] = React.useState(false);
    const [show_name_history, set_name_history] = React.useState(false);

    const [editing_method, set_editing_method]  = React.useState(false);
    const [showing_method_references, set_showing_method_references] = React.useState(false);
    const [show_method_history, set_method_history] = React.useState(false);


    const [editing_comparator, set_editing_comparator]  = React.useState(false);
    const [show_comparator_history, set_comparator_history] = React.useState(false);

    const [editing_result_min, set_editing_result_min]  = React.useState(false);
    const [showing_result_min_references, set_showing_result_min_references] = React.useState(false);
    const [show_result_min_history, set_result_min_history] = React.useState(false);

    const [editing_result_max, set_editing_result_max]  = React.useState(false);
    const [showing_result_max_references, set_showing_result_max_references] = React.useState(false);
    const [show_result_max_history, set_result_max_history] = React.useState(false);


    const [editing_results, set_editing_results]  = React.useState(false);
    const [showing_results_references, set_showing_results_references] = React.useState(false);
    const [show_results_history, set_results_history] = React.useState(false);

    const [editing_result_units, set_editing_result_units]  = React.useState(false);
    const [showing_result_units_references, set_showing_result_units_references] = React.useState(false);
    const [show_result_units_history, set_result_units_history] = React.useState(false);

    const {
        EditorContentState: {isEditor}
    } = useEditorContentState();

    const canEdit : boolean = isEditor;

    function showResultMax() {
        let show = true
        if (data && data.TMBMarker && data.TMBMarker[0] && data.TMBMarker[0].comparator){
            show = data.TMBMarker[0].comparator.comparator==AssayComparator.RangeClosed || data.TMBMarker[0].comparator.comparator==AssayComparator.RangeClosedOpen || data.TMBMarker[0].comparator.comparator==AssayComparator.RangeOpenClosed
        }
        return show
    }

    if (!data.TMBMarker){
        return <div>No TMBMarker</div>;
    }
    if (!data.TMBMarker[0]){
        return <div>No TMBMarker</div>;
    }
    return <React.Fragment>
        <div className={className}>
            <h1 className={`${className}__title`}>{data.TMBMarker[0].name.statement}</h1>
            <div className={`${className}__Wrapper`}>
                <div>Name</div>
                {/*<div>{data.TMBMarker[0].name.statement}</div>*/}
                <div>
                {editing_name ? (
                        <NameEditableStatementEditor statement={data.TMBMarker[0].name.statement} set_editing={set_editing_name} marker_id={marker_id} es_ID={data.TMBMarker[0].name.id} es_field={data.TMBMarker[0].name.field} ref_array={get_ref_array(data.TMBMarker[0].name.references)} refetch={refetch} />
                    )
                    :
                    <div>{data.TMBMarker[0].name.statement}</div>
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
                        <HistoryContainer field={data.TMBMarker[0].name.field}  />
                    </div>
                    : <span></span>
                }
                {
                    showing_name_references ?
                        <div><h3>References</h3>
                            <div>{data.TMBMarker[0].name.references.length > 0 ?
                                data.TMBMarker[0].name.references.map((item, index) => (
                                    // @ts-ignore
                                    <div key={index}> {item ? <LiteratureReferenceContainer id={item.id}/> : ''}</div>

                                )) : <span>None</span>}</div>
                        </div> : (<span></span>)
                }
                <div><strong>Last Editor: </strong>{data.TMBMarker[0].name.editor.name}</div>
                <div><strong>Last Edit Date: </strong>{humanify_date(data.TMBMarker[0].name.editDate)}</div>

            </div>

                <div>Method</div>
                {/*<div>{data.TMBMarker[0].method.statement}</div>*/}
                <div>
                    {editing_method ? (
                            <MethodEditableStatementEditor statement={data.TMBMarker[0].method.statement} set_editing={set_editing_method} marker_id={marker_id} es_ID={data.TMBMarker[0].method.id} es_field={data.TMBMarker[0].method.field} ref_array={get_ref_array(data.TMBMarker[0].method.references)} refetch={refetch} />
                        )
                        :
                        <div>{data.TMBMarker[0].method.statement}</div>
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
                            <HistoryContainer field={data.TMBMarker[0].method.field}  />
                        </div>
                        : <span></span>
                    }
                    {
                        showing_method_references ?
                            <div><h3>References</h3>
                                <div>{data.TMBMarker[0].method.references.length > 0 ?
                                    data.TMBMarker[0].method.references.map((item, index) => (
                                        // @ts-ignore
                                        <div key={index}> {item ? <LiteratureReferenceContainer id={item.id}/> : ''}</div>

                                    )) : <span>None</span>}</div>
                            </div> : (<span></span>)
                    }
                    <div><strong>Last Editor: </strong>{data.TMBMarker[0].method.editor.name}</div>
                    <div><strong>Last Edit Date: </strong>{humanify_date(data.TMBMarker[0].method.editDate)}</div>

                </div>

                <div>Comparator</div>
                <div>
                {editing_comparator ?
                    (<ComparatorEditor marker_ID={marker_id} comparator={data.TMBMarker[0].comparator.comparator} set_editing={set_editing_comparator} es_ID={data.TMBMarker[0].comparator.id} es_field={data.TMBMarker[0].comparator.field} ref_array={get_ref_array(data.TMBMarker[0].comparator.references)} refetch={refetch}/>
                    )
                    : <div>{data.TMBMarker[0].comparator.comparator}</div>}
                {!editing_comparator ?
                    (<div className={`${className}__FormGroup`}>
                        {canEdit && <button className="btn btn-primary my-1" onClick={() => set_editing_comparator(true)}>Edit Comparator</button>}
                    <button className="btn btn-primary my-1"
                            onClick={() => set_comparator_history(!show_comparator_history)}>
                        {show_comparator_history ? <span>Hide History</span> : <span>Show History</span>}
                    </button>
                    </div>
                    )
                    : (<span></span>)
                }
                    {show_comparator_history ?
                        <div>
                            <ComparatorHistoryContainer field={data.TMBMarker[0].comparator.field}  />
                        </div>
                        : <span></span>
                    }
                </div>
                <div>Result Min</div>
                {/*<div>{data.TMBMarker[0].resultMin.floatValue}</div>*/}
                <div>
                    {editing_result_min ? (
                            <ResultMinEditor minResult={data.TMBMarker[0].resultMin.floatValue} set_editing={set_editing_result_min} marker_id={marker_id} es_ID={data.TMBMarker[0].resultMin.id} es_field={data.TMBMarker[0].resultMin.field} ref_array={get_ref_array(data.TMBMarker[0].resultMin.references)} refetch={refetch} />
                        )
                        :
                        <div>{data.TMBMarker[0].resultMin.floatValue}</div>
                    }
                    {!editing_result_min ?
                        (<div className={`${className}__FormGroup`}>
                            {canEdit && <button className="btn btn-primary my-1" onClick={() => set_editing_result_min(true)}>Edit Result Min</button>}
                                <button className="btn btn-primary my-1"
                                        onClick={() => set_result_min_history(!show_result_min_history)}>
                                    {show_result_min_history ? <span>Hide History</span> : <span>Show History</span>}
                                </button>
                                <button className="btn btn-primary my-1" onClick={() => set_showing_result_min_references(!showing_result_min_references)}>
                                    {showing_result_min_references ? <span>Hide References</span> : <span>Show References</span>}
                                </button>
                            </div>
                        )
                        : (<span></span>)
                    }
                    {show_result_min_history ?
                        <div>
                            <EditableFloatHistoryContainer field={data.TMBMarker[0].resultMin.field}  />
                        </div>
                        : <span></span>
                    }
                    {
                        showing_result_min_references ?
                            <div><h3>References</h3>
                                <div>{data.TMBMarker[0].resultMin.references.length > 0 ?
                                    data.TMBMarker[0].resultMin.references.map((item, index) => (
                                        // @ts-ignore
                                        <div key={index}> {item ? <LiteratureReferenceContainer id={item.id}/> : ''}</div>

                                    )) : <span>None</span>}</div>
                            </div> : (<span></span>)
                    }
                    <div><strong>Last Editor: </strong>{data.TMBMarker[0].resultMin.editor.name}</div>
                    <div><strong>Last Edit Date: </strong>{humanify_date(data.TMBMarker[0].resultMin.editDate)}</div>
                </div>

                <div>Result Max</div>
                <div>{data.TMBMarker[0].resultMax && showResultMax() ?
                    <React.Fragment>
                    {/*data.TMBMarker[0].resultMax.floatValue*/}
                        {editing_result_max ? (
                                <ResultMaxEditor maxResult={data.TMBMarker[0].resultMax.floatValue} set_editing={set_editing_result_max} marker_id={marker_id} es_ID={data.TMBMarker[0].resultMax.id} es_field={data.TMBMarker[0].resultMax.field} ref_array={get_ref_array(data.TMBMarker[0].resultMax.references)} refetch={refetch} />
                            )
                            :
                            <div>{data.TMBMarker[0].resultMax.floatValue}</div>
                        }
                        {!editing_result_max ?
                            (<div className={`${className}__FormGroup`}>
                                {canEdit && <button className="btn btn-primary my-1" onClick={() => set_editing_result_max(true)}>Edit Result Max</button>}
                                    <button className="btn btn-primary my-1"
                                            onClick={() => set_result_max_history(!show_result_max_history)}>
                                        {show_result_max_history ? <span>Hide History</span> : <span>Show History</span>}
                                    </button>
                                    <button className="btn btn-primary my-1" onClick={() => set_showing_result_max_references(!showing_result_max_references)}>
                                        {showing_result_max_references ? <span>Hide References</span> : <span>Show References</span>}
                                    </button>
                                </div>
                            )
                            : (<span></span>)
                        }
                        {show_result_max_history ?
                            <div>
                                <EditableFloatHistoryContainer field={data.TMBMarker[0].resultMax.field}  />
                            </div>
                            : <span></span>
                        }
                        {
                            showing_result_max_references ?
                                <div><h3>References</h3>
                                    <div>{data.TMBMarker[0].resultMax.references.length > 0 ?
                                        data.TMBMarker[0].resultMax.references.map((item, index) => (
                                            // @ts-ignore
                                            <div key={index}> {item ? <LiteratureReferenceContainer id={item.id}/> : ''}</div>

                                        )) : <span>None</span>}</div>
                                </div> : (<span></span>)
                        }
                        <div><strong>Last Editor: </strong>{data.TMBMarker[0].resultMax.editor.name}</div>
                        <div><strong>Last Edit Date: </strong>{humanify_date(data.TMBMarker[0].resultMax.editDate)}</div>
                    </React.Fragment>


                    : <span>NA</span>}</div>

                <div>Result Units</div>
                {/*<div>{data.TMBMarker[0].resultUnits.statement}</div>*/}
                <div>
                    {editing_result_units ? (
                            <ResultUnitsEditableStatementEditor statement={data.TMBMarker[0].resultUnits.statement} set_editing={set_editing_result_units} marker_id={marker_id} es_ID={data.TMBMarker[0].resultUnits.id} es_field={data.TMBMarker[0].resultUnits.field} ref_array={get_ref_array(data.TMBMarker[0].resultUnits.references)} refetch={refetch} />
                        )
                        :
                        <div>{data.TMBMarker[0].resultUnits.statement}</div>
                    }
                    {!editing_result_units ?
                        (<div className={`${className}__FormGroup`}>
                            {canEdit && <button className="btn btn-primary my-1" onClick={() => set_editing_result_units(true)}>Edit Result Units</button>}
                                <button className="btn btn-primary my-1"
                                        onClick={() => set_result_units_history(!show_result_units_history)}>
                                    {show_result_units_history ? <span>Hide History</span> : <span>Show History</span>}
                                </button>
                                <button className="btn btn-primary my-1" onClick={() => set_showing_result_units_references(!showing_result_units_references)}>
                                    {showing_result_units_references ? <span>Hide References</span> : <span>Show References</span>}
                                </button>
                            </div>
                        )
                        : (<span></span>)
                    }
                    {show_result_units_history ?
                        <div>
                            <HistoryContainer field={data.TMBMarker[0].resultUnits.field}  />
                        </div>
                        : <span></span>
                    }
                    {
                        showing_result_units_references ?
                            <div><h3>References</h3>
                                <div>{data.TMBMarker[0].resultUnits.references.length > 0 ?
                                    data.TMBMarker[0].resultUnits.references.map((item, index) => (
                                        // @ts-ignore
                                        <div key={index}> {item ? <LiteratureReferenceContainer id={item.id}/> : ''}</div>

                                    )) : <span>None</span>}</div>
                            </div> : (<span></span>)
                    }
                    <div><strong>Last Editor: </strong>{data.TMBMarker[0].resultUnits.editor.name}</div>
                    <div><strong>Last Edit Date: </strong>{humanify_date(data.TMBMarker[0].resultUnits.editDate)}</div>
                </div>

                 <div>Results</div>
                {/*<div>{data.TMBMarker[0].interpretations[0] && data.TMBMarker[0].interpretations[0].tmbInterpretation}</div>*/}
                <div>
                    {editing_results ? (
                            <ResultsEditableStatementEditor statement={data.TMBMarker[0].resultString.statement} set_editing={set_editing_results} marker_id={marker_id} es_ID={data.TMBMarker[0].resultString.id} es_field={data.TMBMarker[0].resultString.field} ref_array={get_ref_array(data.TMBMarker[0].resultString.references)} refetch={refetch} />
                        )
                        :
                        <div>{data.TMBMarker[0].resultString.statement}</div>
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
                            <HistoryContainer field={data.TMBMarker[0].resultString.field}  />
                        </div>
                        : <span></span>
                    }
                    {
                        showing_results_references ?
                            <div><h3>References</h3>
                                <div>{data.TMBMarker[0].resultString.references.length > 0 ?
                                    data.TMBMarker[0].resultString.references.map((item, index) => (
                                        // @ts-ignore
                                        <div key={index}> {item ? <LiteratureReferenceContainer id={item.id}/> : ''}</div>

                                    )) : <span>None</span>}</div>
                            </div> : (<span></span>)
                    }
                    <div><strong>Last Editor: </strong>{data.TMBMarker[0].resultString.editor.name}</div>
                    <div><strong>Last Edit Date: </strong>{humanify_date(data.TMBMarker[0].resultString.editDate)}</div>
                </div>
            </div>
        </div>


    </React.Fragment>
}

export default TMBMarkerEditor;

//