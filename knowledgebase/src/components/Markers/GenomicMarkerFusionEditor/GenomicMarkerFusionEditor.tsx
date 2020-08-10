import * as React from "react";
import {VariantFusionQuery} from "../../../generated/graphql";
import LiteratureReferenceContainer from "../../common/LiteratureReference";
import {add_hyperlinks, get_ref_array, humanify_date} from "../../common/Helpers/Ref_helpers"
import CopyChangeEditor from "./CopyChangeEditor";
import DescriptionEditor from "./DescriptionEditor";
import Exon5Editor from  "./Exon5Editor"
import HistoryContainer from "../../common/History";
import CopyChangeHistoryContainer from "../../common/CopyChangeHistory"
import EditableIntHistoryHistoryContainer from "../../common/EditableIntHistory";
import EditableOmniGeneReferenceContainer from "../../common/EditableOmniGeneReferenceHistory"
import {AppendedContentActionTypes, useAppendedContentState} from "../../../context/AppendedContentContext";
import Exon3Editor from "./Exon3Editor";
import Gene5Editor from "./Gene5Editor";
import Gene3Editor from "./Gene3Editor";
import './styles.css';
import {useUserContentState} from "../../../context/UserContentContext";

interface Props {
    data: VariantFusionQuery;
    editing_description: boolean;
    set_editing_description: (newEditionDescription: boolean) => void;
    refetch: () => void;
}

const className = 'GenomicMarkerFusionEditor';

const GenomicMarkerFusionEditor : React.FC<Props> = ({data,editing_description,set_editing_description,refetch}) => {
    const [editing_copyChange, set_editing_copyChange]  = React.useState(false);
    const [showing_copyChange_references, set_showing_copyChange_references] = React.useState(false);
    const [show_copyChange_history, set_copyChange_history] = React.useState(false);

    const [showing_description_references, set_showing_description_references] = React.useState(false);
    const [show_description_history, set_description_history] = React.useState(false);

    const [editing_exon5, set_editing_exon5]  = React.useState(false);
    const [showing_exon5_references, set_showing_exon5_references] = React.useState(false);
    const [show_exon5_history, set_exon5_history] = React.useState(false);

    const [editing_exon3, set_editing_exon3]  = React.useState(false);
    const [showing_exon3_references, set_showing_exon3_references] = React.useState(false);
    const [show_exon3_history, set_exon3_history] = React.useState(false);


    const [editing_gene5, set_editing_gene5]  = React.useState(false);
    const [showing_gene5_references, set_showing_gene5_references] = React.useState(false);
    const [show_gene5_history, set_gene5_history] = React.useState(false);


    const [editing_gene3, set_editing_gene3]  = React.useState(false);
    const [showing_gene3_references, set_showing_gene3_references] = React.useState(false);
    const [show_gene3_history, set_gene3_history] = React.useState(false);

    const {
        AppendedContentState: {},
        setAppendedContentState
    } = useAppendedContentState();
    const edit_description = async () => {
        setAppendedContentState({type: AppendedContentActionTypes.appendToDescription, nextText: ''})
        set_editing_description(true)
    };
    const {
        UserContentState: {isEditor}
    } = useUserContentState();

    const canEdit : boolean = isEditor;

    function getExonNumber(n: number): string {
        let exonNumber = ''
        if (n == -1) {
            exonNumber = "Unknown"
        } else {
            exonNumber = n.toString()
        }
        return exonNumber;
    }
    function getGeneName(name: string): string {
        let gene = ''
        if (name == "") {
            gene = "Unknown"
        } else {
            gene = name
        }
        return gene;
    }
    function get5GeneName(): string {
        let gene = 'Unknown'
        if (data && data.VariantFusion && data.VariantFusion[0] && data.VariantFusion[0].gene5Prime && data.VariantFusion[0].gene5Prime.gene){
            gene = data.VariantFusion[0].gene5Prime.gene.name
        }
        return gene;
    }
    function get3GeneName(): string {
        let gene = 'Unknown'
        if (data && data.VariantFusion && data.VariantFusion[0] && data.VariantFusion[0].gene3Prime && data.VariantFusion[0].gene3Prime.gene){
            gene = data.VariantFusion[0].gene3Prime.gene.name
        }
        return gene;
    }

    {/*{data.VariantFusion[0].gene5Prime && data.VariantFusion[0].gene5Prime.gene  ?*/}
    {/*    // @ts-ignore*/}
    {/*    <div>{getGeneName(data.VariantFusion[0].gene5Prime.gene.name)} </div> : <div></div> }*/}


    if (!data.VariantFusion) {
        return <div>No VariantFusion</div>;
    }
    if (!data.VariantFusion[0]) {
        return <div>No VariantFusion</div>;
    }


    return (
        <React.Fragment>
            <div>Gene</div>
            <div>{data.VariantFusion[0].gene.name} </div>

            <div>Copy Number Change</div>
            {/*<div>{data.VariantFusion[0].copyChange.cnvType} </div>*/}
            <div>
                {editing_copyChange ? (
                        <CopyChangeEditor variant_ID={data.VariantFusion[0].id } copyChange={data.VariantFusion[0].copyChange.cnvType} id={data.VariantFusion[0].copyChange.id} field={data.VariantFusion[0].copyChange.field} ref_array={get_ref_array(data.VariantFusion[0].copyChange.references)} set_editing={set_editing_copyChange} refetch={refetch}/>
                    )
                    :
                    <div>{data.VariantFusion[0].copyChange.cnvType}</div>
                }
                {!editing_copyChange ?
                    (<div className={`${className}__FormGroup`}>
                        {canEdit && <button className="btn btn-primary my-1" onClick={() => set_editing_copyChange(true)}>Edit
                                Copy Number
                            </button> }
                            <button className="btn btn-primary my-1"
                                    onClick={() => set_copyChange_history(!show_copyChange_history)}>
                                {show_copyChange_history ? <span>Hide History</span> : <span>Show History</span>}
                            </button>
                            <button className="btn btn-primary my-1" onClick={() => set_showing_copyChange_references(!showing_copyChange_references)}>
                                {showing_copyChange_references ? <span>Hide References</span> : <span>Show References</span>}
                            </button>
                        </div>
                    )
                    : (<span></span>)
                }
                {show_copyChange_history ?
                    <div>
                        <CopyChangeHistoryContainer field={data.VariantFusion[0].copyChange.field}  />
                    </div>
                    : <span></span>
                }
                {
                    showing_copyChange_references ?
                        <div><h3>References</h3>
                            <div>{data.VariantFusion[0].copyChange.references.length > 0 ?
                                data.VariantFusion[0].copyChange.references.map((item, index) => (
                                    // @ts-ignore
                                    <div key={index}> {item ? <LiteratureReferenceContainer id={item.id}/> : ''}</div>

                                )) : <span>None</span>}</div>
                        </div> : (<span></span>)
                }
                <div><strong>Last Editor: </strong>{data.VariantFusion[0].copyChange.editor.name}</div>
                <div><strong>Last Edit Date: </strong>{humanify_date(data.VariantFusion[0].copyChange.editDate)}</div>
            </div>

            <div>5' Gene</div>
            {/*{data.VariantFusion[0].gene5Prime && data.VariantFusion[0].gene5Prime.gene  ?*/}
            {/*    // @ts-ignore*/}
            {/*    <div>{getGeneName(data.VariantFusion[0].gene5Prime.gene.name)} </div> : <div></div> }*/}
            <div>
                {editing_gene5 ? (
                        <Gene5Editor variant_ID={data.VariantFusion[0].id } gene5_id={data.VariantFusion[0].gene5Prime.gene.id} es_ID={data.VariantFusion[0].gene5Prime.id} es_field={data.VariantFusion[0].gene5Prime.field} ref_array={get_ref_array(data.VariantFusion[0].gene5Prime.references)} set_editing={set_editing_gene5} refetch={refetch}/>
                    )
                    :
                    <div>{get5GeneName()}</div>
                }
                {!editing_gene5 ?
                    (<div className={`${className}__FormGroup`}>
                        {canEdit && <button className="btn btn-primary my-1" onClick={() => set_editing_gene5(true)}>Edit
                                5' Gene
                            </button> }
                            <button className="btn btn-primary my-1"
                                    onClick={() => set_gene5_history(!show_gene5_history)}>
                                {show_gene5_history ? <span>Hide History</span> : <span>Show History</span>}
                            </button>
                            <button className="btn btn-primary my-1" onClick={() => set_showing_gene5_references(!showing_gene5_references)}>
                                {showing_gene5_references ? <span>Hide References</span> : <span>Show References</span>}
                            </button>
                        </div>
                    )
                    : (<span></span>)
                }
                {show_gene5_history ?
                    <div>
                        <EditableOmniGeneReferenceContainer field={data.VariantFusion[0].gene5Prime.field}  />
                    </div>
                    : <span></span>
                }
                {
                    showing_gene5_references ?
                        <div><h3>References</h3>
                            <div>{data.VariantFusion[0].gene5Prime.references.length > 0 ?
                                data.VariantFusion[0].gene5Prime.references.map((item, index) => (
                                    // @ts-ignore
                                    <div key={index}> {item ? <LiteratureReferenceContainer id={item.id}/> : ''}</div>

                                )) : <span>None</span>}</div>
                        </div> : (<span></span>)
                }
                <div><strong>Last Editor: </strong>{data.VariantFusion[0].gene5Prime.editor.name}</div>
                <div><strong>Last Edit Date: </strong>{humanify_date(data.VariantFusion[0].gene5Prime.editDate)}</div>
            </div>

            <div>5' Exon</div>
            {/*<div>{getExonNumber(data.VariantFusion[0].exon5Prime.intValue)}</div>*/}
            {/*Exon5Editor*/}
            <div>
                {editing_exon5 ? (
                        <Exon5Editor variant_ID={data.VariantFusion[0].id } exon5={data.VariantFusion[0].exon5Prime.intValue} es_ID={data.VariantFusion[0].exon5Prime.id} es_field={data.VariantFusion[0].exon5Prime.field} ref_array={get_ref_array(data.VariantFusion[0].exon5Prime.references)} set_editing={set_editing_exon5} refetch={refetch}/>
                    )
                    :
                    <div>{getExonNumber(data.VariantFusion[0].exon5Prime.intValue)}</div>
                }
                {!editing_exon5 ?
                    (<div className={`${className}__FormGroup`}>
                        {canEdit && <button className="btn btn-primary my-1" onClick={() => set_editing_exon5(true)}>Edit
                                5' Exon
                            </button> }
                            <button className="btn btn-primary my-1"
                                    onClick={() => set_exon5_history(!show_exon5_history)}>
                                {show_exon5_history ? <span>Hide History</span> : <span>Show History</span>}
                            </button>
                            <button className="btn btn-primary my-1" onClick={() => set_showing_exon5_references(!showing_exon5_references)}>
                                {showing_exon5_references ? <span>Hide References</span> : <span>Show References</span>}
                            </button>
                        </div>
                    )
                    : (<span></span>)
                }
                {show_exon5_history ?
                    <div>
                        <EditableIntHistoryHistoryContainer field={data.VariantFusion[0].exon5Prime.field}  />
                    </div>
                    : <span></span>
                }
                {
                    showing_exon5_references ?
                        <div><h3>References</h3>
                            <div>{data.VariantFusion[0].exon5Prime.references.length > 0 ?
                                data.VariantFusion[0].exon5Prime.references.map((item, index) => (
                                    // @ts-ignore
                                    <div key={index}> {item ? <LiteratureReferenceContainer id={item.id}/> : ''}</div>

                                )) : <span>None</span>}</div>
                        </div> : (<span></span>)
                }
                <div><strong>Last Editor: </strong>{data.VariantFusion[0].exon5Prime.editor.name}</div>
                <div><strong>Last Edit Date: </strong>{humanify_date(data.VariantFusion[0].exon5Prime.editDate)}</div>
            </div>



            <div>3' Gene</div>
            {/*{data.VariantFusion[0].gene3Prime && data.VariantFusion[0].gene3Prime.gene ?*/}
            {/*    // @ts-ignore*/}
            {/*    <div>{getGeneName(data.VariantFusion[0].gene3Prime.gene.name)} </div> : <div></div> }*/}
            <div>
                {editing_gene3 ? (
                        <Gene3Editor variant_ID={data.VariantFusion[0].id } gene3_id={data.VariantFusion[0].gene3Prime.gene.id} es_ID={data.VariantFusion[0].gene3Prime.id} es_field={data.VariantFusion[0].gene3Prime.field} ref_array={get_ref_array(data.VariantFusion[0].gene3Prime.references)} set_editing={set_editing_gene3} refetch={refetch}/>
                    )
                    :
                    <div>{get3GeneName()}</div>
                }
                {!editing_gene3 ?
                    (<div className={`${className}__FormGroup`}>
                        {canEdit && <button className="btn btn-primary my-1" onClick={() => set_editing_gene3(true)}>Edit
                                3' Gene
                            </button> }
                            <button className="btn btn-primary my-1"
                                    onClick={() => set_gene3_history(!show_gene3_history)}>
                                {show_gene3_history ? <span>Hide History</span> : <span>Show History</span>}
                            </button>
                            <button className="btn btn-primary my-1" onClick={() => set_showing_gene3_references(!showing_gene3_references)}>
                                {showing_gene3_references ? <span>Hide References</span> : <span>Show References</span>}
                            </button>
                        </div>
                    )
                    : (<span></span>)
                }
                {show_gene3_history ?
                    <div>
                        <EditableOmniGeneReferenceContainer field={data.VariantFusion[0].gene3Prime.field}  />
                    </div>
                    : <span></span>
                }
                {
                    showing_gene3_references ?
                        <div><h3>References</h3>
                            <div>{data.VariantFusion[0].gene3Prime.references.length > 0 ?
                                data.VariantFusion[0].gene3Prime.references.map((item, index) => (
                                    // @ts-ignore
                                    <div key={index}> {item ? <LiteratureReferenceContainer id={item.id}/> : ''}</div>

                                )) : <span>None</span>}</div>
                        </div> : (<span></span>)
                }
                <div><strong>Last Editor: </strong>{data.VariantFusion[0].gene3Prime.editor.name}</div>
                <div><strong>Last Edit Date: </strong>{humanify_date(data.VariantFusion[0].gene3Prime.editDate)}</div>
            </div>

            <div>3' Exon</div>
            {/*<div>{getExonNumber(data.VariantFusion[0].exon3Prime.intValue)}</div>*/}
            <div>
                {editing_exon3 ? (
                        <Exon3Editor variant_ID={data.VariantFusion[0].id } exon3={data.VariantFusion[0].exon3Prime.intValue} es_ID={data.VariantFusion[0].exon3Prime.id} es_field={data.VariantFusion[0].exon3Prime.field} ref_array={get_ref_array(data.VariantFusion[0].exon3Prime.references)} set_editing={set_editing_exon3} refetch={refetch}/>
                    )
                    :
                    <div>{getExonNumber(data.VariantFusion[0].exon3Prime.intValue)}</div>
                }
                {!editing_exon3 ?
                    (<div className={`${className}__FormGroup`}>
                        {canEdit && <button className="btn btn-primary my-1" onClick={() => set_editing_exon3(true)}>Edit
                                3' Exon
                            </button> }
                            <button className="btn btn-primary my-1"
                                    onClick={() => set_exon3_history(!show_exon3_history)}>
                                {show_copyChange_history ? <span>Hide History</span> : <span>Show History</span>}
                            </button>
                            <button className="btn btn-primary my-1" onClick={() => set_showing_exon3_references(!showing_exon3_references)}>
                                {showing_exon3_references ? <span>Hide References</span> : <span>Show References</span>}
                            </button>
                        </div>
                    )
                    : (<span></span>)
                }
                {show_exon3_history ?
                    <div>
                        <EditableIntHistoryHistoryContainer field={data.VariantFusion[0].exon3Prime.field}  />
                    </div>
                    : <span></span>
                }
                {
                    showing_exon3_references ?
                        <div><h3>References</h3>
                            <div>{data.VariantFusion[0].exon3Prime.references.length > 0 ?
                                data.VariantFusion[0].exon3Prime.references.map((item, index) => (
                                    // @ts-ignore
                                    <div key={index}> {item ? <LiteratureReferenceContainer id={item.id}/> : ''}</div>

                                )) : <span>None</span>}</div>
                        </div> : (<span></span>)
                }
                <div><strong>Last Editor: </strong>{data.VariantFusion[0].exon3Prime.editor.name}</div>
                <div><strong>Last Edit Date: </strong>{humanify_date(data.VariantFusion[0].exon3Prime.editDate)}</div>
            </div>

            <div>Description</div>
            <div>
                <div className={`${className}__FormGroup`}>
                    {editing_description ? (

                            <DescriptionEditor description={data.VariantFusion[0].description.statement} set_editing={set_editing_description} es_ID={data.VariantFusion[0].description.id}
                                               es_field={data.VariantFusion[0].description.field} variant_ID={data.VariantFusion[0].id}  refetch={refetch}/>
                        ) :
                        (
                            <div>
                                {add_hyperlinks(data.VariantFusion[0].description.statement).map((item, index) => (
                                    <span key={index} >{item.text}
                                        { item.pmid !=='' ?
                                            <a href={'https://pubmed.ncbi.nlm.nih.gov/' + item.pmid} target="_blank"
                                               rel="noopener noreferrer">PMID: {item.pmid}</a>
                                            : <span></span> }
                            </span>
                                ))
                                }
                            </div>
                        )}
                </div>
                {editing_description ?
                    (
                        <span></span>

                    ) :

                    (<div className={`${className}__FormGroup`}>
                        {canEdit && <button className="btn btn-primary my-1" onClick={() => edit_description()}>Edit Description</button>}
                            <button className="btn btn-primary my-1" onClick={() => set_description_history(!show_description_history)}>
                                {show_description_history ? <span>Hide History</span> : <span>Show History</span>}
                            </button>
                            <button className="btn btn-primary my-1" onClick={() => set_showing_description_references(!showing_description_references)}>
                                {showing_description_references ? <span>Hide References</span> : <span>Show References</span>}
                            </button>
                        </div>
                    )
                }
                {show_description_history ?
                    <div>
                        <HistoryContainer field={data.VariantFusion[0].description.field}  />
                    </div>
                    : <span></span>
                }
                {
                    showing_description_references ?
                        <div><h3>References</h3>
                            <div>{data.VariantFusion[0].description.references.length > 0 ?
                                data.VariantFusion[0].description.references.map((item, index) => (
                                    // @ts-ignore
                                    <div key={index}> {item ? <LiteratureReferenceContainer id={item.id}/> : ''}</div>

                                )) : <span>None</span>}</div>
                        </div> : (<span></span>)
                }
                <div><strong>Last Editor: </strong>{data.VariantFusion[0].description.editor.name}</div>
                <div><strong>Last Edit Date: </strong>{humanify_date(data.VariantFusion[0].description.editDate)}</div>
            </div>

            {/*<div>*/}
            {/*    {add_hyperlinks(data.VariantFusion[0].description.statement).map((item, index) => (*/}
            {/*        <span key={index} >{item.text}*/}
            {/*            { item.pmid !=='' ?*/}
            {/*                <a href={'https://pubmed.ncbi.nlm.nih.gov/' + item.pmid} target="_blank"*/}
            {/*                   rel="noopener noreferrer">PMID: {item.pmid}</a>*/}
            {/*                : <span></span> }*/}
            {/*                </span>*/}
            {/*    ))*/}
            {/*    }</div>*/}
            {/*<div>References</div>*/}
            {/*<div>{data.VariantFusion[0].description.references.length>0 ?*/}
            {/*    data.VariantFusion[0].description.references.map((item, index) => (*/}
            {/*        // @ts-ignore*/}
            {/*        <div key={index}> {item ? <LiteratureReferenceContainer id={item.id}/>: '' }</div>*/}

            {/*    )) : <span>None</span>}</div>*/}

        </React.Fragment>
    )
}


export default GenomicMarkerFusionEditor;