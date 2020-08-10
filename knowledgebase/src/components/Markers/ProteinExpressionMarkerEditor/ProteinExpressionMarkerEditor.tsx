import * as React from "react";
import {ProteinExpression_MarkerQuery} from "../../../generated/graphql";
import './styles.css';
import NameEditableStatementEditor from "./NameEditableStatementEditor";
import HistoryContainer from "../../common/History";
import {add_hyperlinks, get_ref_array, humanify_date} from "../../common/Helpers/Ref_helpers"
import LiteratureReferenceContainer from "../../common/LiteratureReference";
import MethodEditableStatementEditor from "./MethodEditableStatementEditor";
import ResultsEditableStatementEditor from "./ResultsEditableStatementEditor";
import SynonymEditor from "./SynonymEditor";
import SynonymHistoryContainer from "../../common/SynonymHistory";
import IHCAssayContainer from "../IHCAssay";
import RNASeqAssayContainer from "../RNASeqAssay";
import ImmunePhenotypeEditor from "./ImmunePhenotypeEditor";
import ImmuneFunctionEditor from "./ImmuneFunctionEditor";
import ImmuneCycleRoleEditor from "./ImmuneCycleRoleEditor";
import ImmuneCycleRoleHistoryContainer from "../../common/ImmuneCycleRoleHistory";
import ImmuneFunctionHistoryContainer from "../../common/ImmuneFunctionHistory";
import ImmunePhenotypeHistoryContainer from "../../common/ImmunePhenotypeHistory";
import {useUserContentState} from "../../../context/UserContentContext";


interface Props{
    marker_id: string;
    editing_description: boolean;
    set_editing_description: (newEditionDescription: boolean) => void;
    data:ProteinExpression_MarkerQuery;
    refetch: () => void;
}

const className = 'ProteinExpressionMarkerEditor';

const ProteinExpressionMarkerEditor : React.FC<Props> = ({data,marker_id,editing_description,set_editing_description, refetch}) => {
    const [editing_name, set_editing_name]  = React.useState(false);
    const [showing_name_references, set_showing_name_references] = React.useState(false);
    const [show_name_history, set_name_history] = React.useState(false);

    const [editing_method, set_editing_method]  = React.useState(false);
    const [showing_method_references, set_showing_method_references] = React.useState(false);
    const [show_method_history, set_method_history] = React.useState(false);

    const [editing_results, set_editing_results]  = React.useState(false);
    const [showing_results_references, set_showing_results_references] = React.useState(false);
    const [show_results_history, set_results_history] = React.useState(false);

    const [editing_synonyms, set_editing_synonyms] = React.useState(false);
    const [show_synonyms_history, set_synonyms_history] = React.useState(false);


    const [editing_immune_phenotype, set_editing_immune_phenotype]  = React.useState(false);
    const [showing_immune_phenotype_references, set_showing_immune_phenotype_references] = React.useState(false);
    const [show_immune_phenotype_history, set_immune_phenotype_history] = React.useState(false);

    const [editing_immune_function, set_editing_immune_function]  = React.useState(false);
    const [showing_immune_function_references, set_showing_immune_function_references] = React.useState(false);
    const [show_immune_function_history, set_immune_function_history] = React.useState(false);

    const [editing_immune_cycle_role, set_editing_immune_cycle_role]  = React.useState(false);
    const [showing_immune_cycle_role_references, set_showing_immune_cycle_role_references] = React.useState(false);
    const [show_immune_cycle_role_history, set_immune_cycle_role_history] = React.useState(false);

    const [show_assay, set_show_assay] = React.useState(false);

    const {
        UserContentState: {isEditor}
    } = useUserContentState();

    const canEdit : boolean = isEditor;

    if (!data.ProteinExpressionMarker){
        return <div>No Protein Expression Marker</div>;
    }
    if (!data.ProteinExpressionMarker[0]){
        return <div>No Protein Expression Marker</div>;
    }
    return <React.Fragment>
        <div className={className}>
            <h1 className={`${className}__title`}>{data.ProteinExpressionMarker[0].name.statement}</h1>
            <div className={`${className}__Wrapper`}>
                <div>Name</div>
                <div>
                {editing_name ? (
                    <NameEditableStatementEditor statement={data.ProteinExpressionMarker[0].name.statement} set_editing={set_editing_name} marker_id={marker_id} es_ID={data.ProteinExpressionMarker[0].name.id} es_field={data.ProteinExpressionMarker[0].name.field} ref_array={get_ref_array(data.ProteinExpressionMarker[0].name.references)} refetch={refetch} />
                )
                :
                    <div>{data.ProteinExpressionMarker[0].name.statement}</div>
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
                        <HistoryContainer field={data.ProteinExpressionMarker[0].name.field}  />
                    </div>
                    : <span></span>
                }
                {
                    showing_name_references ?
                        <div><h3>References</h3>
                            <div>{data.ProteinExpressionMarker[0].name.references.length > 0 ?
                                data.ProteinExpressionMarker[0].name.references.map((item, index) => (
                                    // @ts-ignore
                                    <div key={index}> {item ? <LiteratureReferenceContainer id={item.id}/> : ''}</div>

                                )) : <span>None</span>}</div>
                        </div> : (<span></span>)
                }
                <div><strong>Last Editor: </strong>{data.ProteinExpressionMarker[0].name.editor.name}</div>
                <div><strong>Last Edit Date: </strong>{humanify_date(data.ProteinExpressionMarker[0].name.editDate)}</div>

                </div>


                <div>Method</div>
                {/*<div>{data.MSIMarker[0].method.statement}</div>*/}
                <div>
                    {editing_method ? (
                            <MethodEditableStatementEditor statement={data.ProteinExpressionMarker[0].method.statement} set_editing={set_editing_method} marker_id={marker_id} es_ID={data.ProteinExpressionMarker[0].method.id} es_field={data.ProteinExpressionMarker[0].method.field} ref_array={get_ref_array(data.ProteinExpressionMarker[0].method.references)} refetch={refetch} />
                        )
                        :
                        <div>{data.ProteinExpressionMarker[0].method.statement}</div>
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
                            <HistoryContainer field={data.ProteinExpressionMarker[0].method.field}  />
                        </div>
                        : <span></span>
                    }
                    {
                        showing_method_references ?
                            <div><h3>References</h3>
                                <div>{data.ProteinExpressionMarker[0].method.references.length > 0 ?
                                    data.ProteinExpressionMarker[0].method.references.map((item, index) => (
                                        // @ts-ignore
                                        <div key={index}> {item ? <LiteratureReferenceContainer id={item.id}/> : ''}</div>

                                    )) : <span>None</span>}</div>
                            </div> : (<span></span>)
                    }
                    <div><strong>Last Editor: </strong>{data.ProteinExpressionMarker[0].method.editor.name}</div>
                    <div><strong>Last Edit Date: </strong>{humanify_date(data.ProteinExpressionMarker[0].method.editDate)}</div>

                </div>

                <div>Synonyms</div>
                <div>
                    {editing_synonyms ?
                        (
                            <SynonymEditor synonym_string={data.ProteinExpressionMarker[0].synonyms.stringList.join(',')} set_editing={set_editing_synonyms} es_ID={data.ProteinExpressionMarker[0].synonyms.id}
                                           es_field={data.ProteinExpressionMarker[0].synonyms.field} marker_id={data.ProteinExpressionMarker[0].id}  refetch={refetch}/>

                        ) :

                        <div>{data.ProteinExpressionMarker[0].synonyms.stringList.join(',')}</div> }
                    {editing_synonyms ?
                        (
                            <span></span>

                        ) :

                        (<div className="form-group">
                            {canEdit && <button className="btn btn-primary my-1" onClick={() => set_editing_synonyms(true)}>Edit Synonyms</button>}
                                <button className="btn btn-primary my-1" onClick={() => set_synonyms_history(!show_synonyms_history)}>
                                    {show_synonyms_history ? <span>Hide History</span> : <span>Show History</span>}
                                </button>
                            </div>
                        )
                    }
                    {show_synonyms_history ?
                        <div>
                            <SynonymHistoryContainer field={data.ProteinExpressionMarker[0].synonyms.field}  />
                        </div>
                        : <span></span>
                    }
                    <div><strong>Last Editor: </strong>{data.ProteinExpressionMarker[0].synonyms.editor.name}</div>
                    <div><strong>Last Edit Date: </strong>{humanify_date(data.ProteinExpressionMarker[0].synonyms.editDate)}</div>
                </div>

                <div>Assay</div>
                <div>
                    {data.ProteinExpressionMarker[0].assay.__typename}
                    <button className={`${className}__small-btn`} onClick={() => set_show_assay(!show_assay)}> {show_assay ? <span>Hide Assay</span> : <span>Show Assay</span>}
                    </button>
                    {show_assay && data.ProteinExpressionMarker[0].assay.__typename=="IHCAssay" &&
                        <IHCAssayContainer ihc_id={data.ProteinExpressionMarker[0].assay.id} />
                    }
                    {show_assay && data.ProteinExpressionMarker[0].assay.__typename=="RNASeqAssay" &&
                    <RNASeqAssayContainer rnaSeq_id={data.ProteinExpressionMarker[0].assay.id} />
                    }

                </div>

                <div>Immune Phenotype</div>
                {/*<div>{data.ProteinExpressionMarker[0].immunePhenotypes[0] && data.ProteinExpressionMarker[0].immunePhenotypes[0].immunePhenotype}</div>*/}
                <div>
                    {editing_immune_phenotype ? (
                            data.ProteinExpressionMarker[0].immunePhenotypes[0] && <ImmunePhenotypeEditor phenotype={data.ProteinExpressionMarker[0].immunePhenotypes[0].immunePhenotype} set_editing={set_editing_immune_phenotype} marker_id={marker_id} id={data.ProteinExpressionMarker[0].immunePhenotypes[0].id} field={data.ProteinExpressionMarker[0].immunePhenotypes[0].field} ref_array={get_ref_array(data.ProteinExpressionMarker[0].immunePhenotypes[0].references)} refetch={refetch} />
                        )
                        :
                        <div>{data.ProteinExpressionMarker[0].immunePhenotypes[0] && data.ProteinExpressionMarker[0].immunePhenotypes[0].immunePhenotype}</div>
                    }
                    {!editing_immune_phenotype ?
                        (<div className={`${className}__FormGroup`}>
                            {canEdit && <button className="btn btn-primary my-1" onClick={() => set_editing_immune_phenotype(true)}>Edit Phenotype</button>}
                                <button className="btn btn-primary my-1"
                                        onClick={() => set_immune_phenotype_history(!show_immune_phenotype_history)}>
                                    {show_immune_phenotype_history ? <span>Hide History</span> : <span>Show History</span>}
                                </button>
                                <button className="btn btn-primary my-1" onClick={() => set_showing_immune_phenotype_references(!showing_immune_phenotype_references)}>
                                    {showing_immune_phenotype_references ? <span>Hide References</span> : <span>Show References</span>}
                                </button>
                            </div>
                        )
                        : (<span></span>)
                    }
                    {show_immune_phenotype_history ?
                        <div>
                            {data.ProteinExpressionMarker[0].immunePhenotypes[0] && <ImmunePhenotypeHistoryContainer field={data.ProteinExpressionMarker[0].immunePhenotypes[0].field}  />}
                        </div>
                        : <span></span>
                    }
                    {
                        showing_immune_phenotype_references ?
                            <div><h3>References</h3>
                                <div>{data.ProteinExpressionMarker[0].immunePhenotypes[0] && data.ProteinExpressionMarker[0].immunePhenotypes[0].references.length > 0 ?
                                    data.ProteinExpressionMarker[0].immunePhenotypes[0].references.map((item, index) => (
                                        // @ts-ignore
                                        <div key={index}> {item ? <LiteratureReferenceContainer id={item.id}/> : ''}</div>

                                    )) : <span>None</span>}</div>
                            </div> : (<span></span>)
                    }
                    <div><strong>Last Editor: </strong>{data.ProteinExpressionMarker[0].immunePhenotypes[0] &&data.ProteinExpressionMarker[0].immunePhenotypes[0].editor.name}</div>
                    <div><strong>Last Edit Date: </strong>{data.ProteinExpressionMarker[0].immunePhenotypes[0] && humanify_date(data.ProteinExpressionMarker[0].immunePhenotypes[0].editDate)}</div>

                </div>
                <div>Immune Function</div>
                {/*<div>{data.ProteinExpressionMarker[0].immuneFunctions[0] && data.ProteinExpressionMarker[0].immuneFunctions[0].immuneFunction}</div>*/}
                <div>
                    {editing_immune_function ? (
                            data.ProteinExpressionMarker[0].immuneFunctions[0] && <ImmuneFunctionEditor immuneFunction={data.ProteinExpressionMarker[0].immuneFunctions[0].immuneFunction} set_editing={set_editing_immune_function} marker_id={marker_id} id={data.ProteinExpressionMarker[0].immuneFunctions[0].id} field={data.ProteinExpressionMarker[0].immuneFunctions[0].field} ref_array={get_ref_array(data.ProteinExpressionMarker[0].immuneFunctions[0].references)} refetch={refetch} />
                        )
                        :
                        <div>{data.ProteinExpressionMarker[0].immuneFunctions[0] && data.ProteinExpressionMarker[0].immuneFunctions[0].immuneFunction}</div>
                    }
                    {!editing_immune_function ?
                        (<div className={`${className}__FormGroup`}>
                            {canEdit && <button className="btn btn-primary my-1" onClick={() => set_editing_immune_function(true)}>Edit Function</button>}
                                <button className="btn btn-primary my-1"
                                        onClick={() => set_immune_function_history(!show_immune_function_history)}>
                                    {show_immune_function_history ? <span>Hide History</span> : <span>Show History</span>}
                                </button>
                                <button className="btn btn-primary my-1" onClick={() => set_showing_immune_function_references(!showing_immune_function_references)}>
                                    {showing_immune_function_references ? <span>Hide References</span> : <span>Show References</span>}
                                </button>
                            </div>
                        )
                        : (<span></span>)
                    }
                    {show_immune_function_history ?
                        <div>
                            {data.ProteinExpressionMarker[0].immuneFunctions[0] && <ImmuneFunctionHistoryContainer field={data.ProteinExpressionMarker[0].immuneFunctions[0].field}  />}
                        </div>
                        : <span></span>
                    }
                    {
                        showing_immune_function_references ?
                            <div><h3>References</h3>
                                <div>{data.ProteinExpressionMarker[0].immuneFunctions[0] && data.ProteinExpressionMarker[0].immuneFunctions[0].references.length > 0 ?
                                    data.ProteinExpressionMarker[0].immuneFunctions[0].references.map((item, index) => (
                                        // @ts-ignore
                                        <div key={index}> {item ? <LiteratureReferenceContainer id={item.id}/> : ''}</div>

                                    )) : <span>None</span>}</div>
                            </div> : (<span></span>)
                    }
                    <div><strong>Last Editor: </strong>{data.ProteinExpressionMarker[0].immuneFunctions[0] &&data.ProteinExpressionMarker[0].immuneFunctions[0].editor.name}</div>
                    <div><strong>Last Edit Date: </strong>{data.ProteinExpressionMarker[0].immuneFunctions[0] && humanify_date(data.ProteinExpressionMarker[0].immuneFunctions[0].editDate)}</div>

                </div>

                <div>Immune Cycle Role</div>
                {/*<div>{data.ProteinExpressionMarker[0].immuneCycleRoles[0] && data.ProteinExpressionMarker[0].immuneCycleRoles[0].immuneCycleRole}</div>*/}
                <div>
                    {editing_immune_cycle_role ? (
                            data.ProteinExpressionMarker[0].immuneCycleRoles[0] && <ImmuneCycleRoleEditor immuneCycleRole={data.ProteinExpressionMarker[0].immuneCycleRoles[0].immuneCycleRole} set_editing={set_editing_immune_cycle_role} marker_id={marker_id} id={data.ProteinExpressionMarker[0].immuneCycleRoles[0].id} field={data.ProteinExpressionMarker[0].immuneCycleRoles[0].field} ref_array={get_ref_array(data.ProteinExpressionMarker[0].immuneCycleRoles[0].references)} refetch={refetch} />
                        )
                        :
                        <div>{data.ProteinExpressionMarker[0].immuneCycleRoles[0] && data.ProteinExpressionMarker[0].immuneCycleRoles[0].immuneCycleRole}</div>
                    }
                    {!editing_immune_cycle_role ?
                        (<div className={`${className}__FormGroup`}>
                            {canEdit && <button className="btn btn-primary my-1" onClick={() => set_editing_immune_cycle_role(true)}>Edit Function</button>}
                                <button className="btn btn-primary my-1"
                                        onClick={() => set_immune_cycle_role_history(!show_immune_cycle_role_history)}>
                                    {show_immune_cycle_role_history ? <span>Hide History</span> : <span>Show History</span>}
                                </button>
                                <button className="btn btn-primary my-1" onClick={() => set_showing_immune_cycle_role_references(!showing_immune_cycle_role_references)}>
                                    {showing_immune_cycle_role_references ? <span>Hide References</span> : <span>Show References</span>}
                                </button>
                            </div>
                        )
                        : (<span></span>)
                    }
                    {show_immune_cycle_role_history ?
                        <div>
                            {data.ProteinExpressionMarker[0].immuneCycleRoles[0] && <ImmuneCycleRoleHistoryContainer field={data.ProteinExpressionMarker[0].immuneCycleRoles[0].field}  />}
                        </div>
                        : <span></span>
                    }
                    {
                        showing_immune_cycle_role_references ?
                            <div><h3>References</h3>
                                <div>{data.ProteinExpressionMarker[0].immuneCycleRoles[0] && data.ProteinExpressionMarker[0].immuneCycleRoles[0].references.length > 0 ?
                                    data.ProteinExpressionMarker[0].immuneCycleRoles[0].references.map((item, index) => (
                                        // @ts-ignore
                                        <div key={index}> {item ? <LiteratureReferenceContainer id={item.id}/> : ''}</div>

                                    )) : <span>None</span>}</div>
                            </div> : (<span></span>)
                    }
                    <div><strong>Last Editor: </strong>{data.ProteinExpressionMarker[0].immuneCycleRoles[0] &&data.ProteinExpressionMarker[0].immuneCycleRoles[0].editor.name}</div>
                    <div><strong>Last Edit Date: </strong>{data.ProteinExpressionMarker[0].immuneCycleRoles[0] && humanify_date(data.ProteinExpressionMarker[0].immuneCycleRoles[0].editDate)}</div>

                </div>

                <div>Results</div>
                {/*<div>{data.MSIMarker[0].resultString.statement}</div>*/}
                <div>
                    {editing_results ? (
                            <ResultsEditableStatementEditor statement={data.ProteinExpressionMarker[0].resultString.statement} set_editing={set_editing_results} marker_id={marker_id} es_ID={data.ProteinExpressionMarker[0].resultString.id} es_field={data.ProteinExpressionMarker[0].resultString.field} ref_array={get_ref_array(data.ProteinExpressionMarker[0].resultString.references)} refetch={refetch} />
                        )
                        :
                        <div>{data.ProteinExpressionMarker[0].resultString.statement}</div>
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
                            <HistoryContainer field={data.ProteinExpressionMarker[0].resultString.field}  />
                        </div>
                        : <span></span>
                    }
                    {
                        showing_results_references ?
                            <div><h3>References</h3>
                                <div>{data.ProteinExpressionMarker[0].resultString.references.length > 0 ?
                                    data.ProteinExpressionMarker[0].resultString.references.map((item, index) => (
                                        // @ts-ignore
                                        <div key={index}> {item ? <LiteratureReferenceContainer id={item.id}/> : ''}</div>

                                    )) : <span>None</span>}</div>
                            </div> : (<span></span>)
                    }
                    <div><strong>Last Editor: </strong>{data.ProteinExpressionMarker[0].resultString.editor.name}</div>
                    <div><strong>Last Edit Date: </strong>{humanify_date(data.ProteinExpressionMarker[0].resultString.editDate)}</div>
                </div>
            </div>

        </div>
    </React.Fragment>
}

export default ProteinExpressionMarkerEditor;