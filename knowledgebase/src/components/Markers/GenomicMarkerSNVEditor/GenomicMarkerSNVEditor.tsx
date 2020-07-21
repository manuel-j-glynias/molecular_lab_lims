import React from 'react';
import {
    VariantProteinEffect,
    VariantSnvIndelQuery
} from "../../../generated/graphql";
import LiteratureReferenceContainer from "../../common/LiteratureReference";
import {AppendedContentActionTypes, useAppendedContentState} from "../../../context/AppendedContentContext";
import HistoryContainer from "../../common/History";
import ProteinEffectHistoryContainer from "../../common/ProteinEffectHistory";
import DescriptionEditor from "./DescriptionEditor";
import ProteinEffectEditor from "./ProteinEffectEditor";
import PDotEditableStatementEditor from "./PDotEditableStatementEditor";
import CDotEditableStatementEditor from "./CDotEditableStatementEditor.tsx"
import GDotEditableStatementEditor from "./GDotEditableStatementEditor";
import ExonEditableStatementEditor from "./ExonEditableStatementEditor";
import {DescriptionWithPmids, add_hyperlinks,humanify_date} from "../../common/Helpers/Ref_helpers";
import './styles.css';

interface Props {
    data: VariantSnvIndelQuery;
    editing_description: boolean;
    set_editing_description: (newEditionDescription: boolean) => void;
    editing_protein_effect: boolean;
    set_editing_protein_effect: (newEditionDescription: boolean) => void;
   refetch: () => void;
}

const className = 'GenomicMarkerSNVEditor';

const GenomicMarkerSNVEditor : React.FC<Props> = ({data,editing_description,set_editing_description,editing_protein_effect,set_editing_protein_effect,refetch}) => {
    const [showing_references, set_showing_references] = React.useState(false);
    const [showing_protein_effect_references, set_showing_protein_effect_references] = React.useState(false);
    const [show_description_history, set_description_history] = React.useState(false);
    const [show_protein_effect_history, set_protein_effect_history] = React.useState(false);

    const [editing_exon, set_editing_exon]= React.useState(false);
    const [show_exon_history, set_exon_history] = React.useState(false);
    const [showing_exon_references, set_showing_exon_references] = React.useState(false);

    const [editing_pdot, set_editing_pdot]= React.useState(false);
    const [show_pdot_history, set_pdot_history] = React.useState(false);
    const [showing_pdot_references, set_showing_pdot_references] = React.useState(false);

    const [editing_cdot, set_editing_cdot]= React.useState(false);
    const [show_cdot_history, set_cdot_history] = React.useState(false);
    const [showing_cdot_references, set_showing_cdot_references] = React.useState(false);

    const [editing_gdot, set_editing_gdot]= React.useState(false);
    const [show_gdot_history, set_gdot_history] = React.useState(false);
    const [showing_gdot_references, set_showing_gdot_references] = React.useState(false);


    const {
        AppendedContentState: {},
        setAppendedContentState
    } = useAppendedContentState();



    const edit_description = async () => {
        setAppendedContentState({type: AppendedContentActionTypes.appendToDescription, nextText: ''})
        set_editing_description(true)
    };
    const getProteinEffect = (q:VariantSnvIndelQuery): VariantProteinEffect => {
        let pe :VariantProteinEffect = VariantProteinEffect.Unknown
        if (q && q.VariantSNVIndel && q.VariantSNVIndel[0] && q.VariantSNVIndel[0].proteinEffect && q.VariantSNVIndel[0].proteinEffect.proteinEffect)
        {
            pe = q.VariantSNVIndel[0].proteinEffect.proteinEffect
        }

        return pe
    }
    const edit_protein_effect = async () => {
        setAppendedContentState({type: AppendedContentActionTypes.appendToProteinEffect, nextProteinEffect: getProteinEffect(data)})
        set_editing_protein_effect(true)
    }
    const show_references = async () => {
        set_showing_references(!showing_references)
    }
    const show_protein_effect_references = async () => {
        set_showing_protein_effect_references(!showing_protein_effect_references)
    }


    if (!data.VariantSNVIndel) {
        return <div>No VariantSNVIndel</div>;
    }
    if (!data.VariantSNVIndel[0]) {
        return <div>No VariantSNVIndel</div>;
    }

    return (
            <React.Fragment>
                <div>Gene</div>
                <div>{data.VariantSNVIndel[0].gene.name} </div>
                <div>Variant Type</div>
                <div>{data.VariantSNVIndel[0].variantType}</div>
                <div>Protein Effect</div>
                <div>
                    {editing_protein_effect ? (
                            <ProteinEffectEditor variant_ID={data.VariantSNVIndel[0].id } protein_effect={data.VariantSNVIndel[0].proteinEffect.proteinEffect} epe_ID={data.VariantSNVIndel[0].proteinEffect.id} epe_field={data.VariantSNVIndel[0].proteinEffect.field} ref_array={[]} set_editing={set_editing_protein_effect} refetch={refetch}/>
                        )
                        :
                        <div>{data.VariantSNVIndel[0].proteinEffect.proteinEffect}</div>
                    }
                    {!editing_protein_effect ?
                        (<div className={`${className}__FormGroup`}>
                                <button className="btn btn-primary my-1" onClick={() => edit_protein_effect()}>Edit
                                    Prot Effect
                                </button>
                                <button className="btn btn-primary my-1"
                                        onClick={() => set_protein_effect_history(!show_protein_effect_history)}>
                                    {show_protein_effect_history ? <span>Hide History</span> : <span>Show History</span>}
                                </button>
                                <button className="btn btn-primary my-1" onClick={() => show_protein_effect_references()}>
                                    {showing_protein_effect_references ? <span>Hide References</span> : <span>Show References</span>}
                                </button>
                            </div>
                        )
                        : (<span></span>)
                    }
                    {show_protein_effect_history ?
                        <div>
                            <ProteinEffectHistoryContainer field={data.VariantSNVIndel[0].proteinEffect.field}  />
                        </div>
                        : <span></span>
                    }
                    {
                        showing_protein_effect_references ?
                            <div><h3>References</h3>
                                <div>{data.VariantSNVIndel[0].proteinEffect.references.length > 0 ?
                                    data.VariantSNVIndel[0].proteinEffect.references.map((item, index) => (
                                        // @ts-ignore
                                        <div key={index}> {item ? <LiteratureReferenceContainer id={item.id}/> : ''}</div>

                                    )) : <span>None</span>}</div>
                            </div> : (<span></span>)
                    }
                    <div><strong>Last Editor: </strong>{data.VariantSNVIndel[0].proteinEffect.editor.name}</div>
                    <div><strong>Last Edit Date: </strong>{humanify_date(data.VariantSNVIndel[0].proteinEffect.editDate)}</div>
                </div>

                <div>Description</div>
                <div>
                    <div className={`${className}__FormGroup`}>
                        {editing_description ? (

                                <DescriptionEditor description={data.VariantSNVIndel[0].description.statement} set_editing={set_editing_description} es_ID={data.VariantSNVIndel[0].description.id}
                                                   es_field={data.VariantSNVIndel[0].description.field} variant_ID={data.VariantSNVIndel[0].id}  refetch={refetch}/>
                            ) :
                            (
                                <div>
                                    {add_hyperlinks(data.VariantSNVIndel[0].description.statement).map((item, index) => (
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
                            <HistoryContainer field={data.VariantSNVIndel[0].description.field}  />
                        </div>
                        : <span></span>
                    }
                    {
                        showing_references ?
                            <div><h3>References</h3>
                                <div>{data.VariantSNVIndel[0].description.references.length > 0 ?
                                    data.VariantSNVIndel[0].description.references.map((item, index) => (
                                        // @ts-ignore
                                        <div key={index}> {item ? <LiteratureReferenceContainer id={item.id}/> : ''}</div>

                                    )) : <span>None</span>}</div>
                            </div> : (<span></span>)
                    }
                    <div><strong>Last Editor: </strong>{data.VariantSNVIndel[0].description.editor.name}</div>
                    <div><strong>Last Edit Date: </strong>{humanify_date(data.VariantSNVIndel[0].description.editDate)}</div>
                </div>

                <div>pDot</div>
                <div>
                    {editing_pdot ?
                        (<PDotEditableStatementEditor statement={data.VariantSNVIndel[0].pDot.statement} set_editing={set_editing_pdot} es_ID={data.VariantSNVIndel[0].pDot.id}
                                                      es_field={data.VariantSNVIndel[0].pDot.field} variant_ID={data.VariantSNVIndel[0].id} ref_array={[]} refetch={refetch} />)
                        : (<div>{data.VariantSNVIndel[0].pDot.statement}</div>)}
                    {editing_pdot ?   <span></span> :
                        (<div className={`${className}__FormGroup`}>
                            <button className="btn btn-primary my-1" onClick={() => set_editing_pdot(true)}>Edit PDot</button>
                            <button className="btn btn-primary my-1" onClick={() => set_pdot_history(!show_pdot_history)}>
                                {show_pdot_history ? <span>Hide History</span> : <span>Show History</span>}
                            </button>
                            <button className="btn btn-primary my-1" onClick={() => set_showing_pdot_references(!showing_pdot_references)}>
                                {showing_pdot_references ? <span>Hide References</span> : <span>Show References</span>}
                            </button>
                        </div>) }

                    {show_pdot_history ?
                        <div>
                            <HistoryContainer field={data.VariantSNVIndel[0].pDot.field}  />
                        </div>
                        : <span></span>
                    }
                    {
                        showing_pdot_references ?
                            <div><h3>References</h3>
                                <div>{data.VariantSNVIndel[0].pDot.references.length > 0 ?
                                    data.VariantSNVIndel[0].pDot.references.map((item, index) => (
                                        // @ts-ignore
                                        <div key={index}> {item ? <LiteratureReferenceContainer id={item.id}/> : ''}</div>

                                    )) : <span>None</span>}</div>
                            </div> : (<span></span>)
                    }
                    <div><strong>Last Editor: </strong>{data.VariantSNVIndel[0].pDot.editor.name}</div>
                    <div><strong>Last Edit Date: </strong>{humanify_date(data.VariantSNVIndel[0].pDot.editDate)}</div>
                </div>

                <div>cDot</div>
                <div>
                    {editing_cdot ?
                        (<CDotEditableStatementEditor statement={data.VariantSNVIndel[0].cDot.statement} set_editing={set_editing_cdot} es_ID={data.VariantSNVIndel[0].cDot.id}
                                                      es_field={data.VariantSNVIndel[0].cDot.field} variant_ID={data.VariantSNVIndel[0].id} ref_array={[]} refetch={refetch} />)
                        : (<div>{data.VariantSNVIndel[0].cDot.statement}</div>)}
                    {editing_cdot ?   <span></span> :
                        (<div className={`${className}__FormGroup`}>
                            <button className="btn btn-primary my-1" onClick={() => set_editing_cdot(true)}>Edit CDot</button>
                            <button className="btn btn-primary my-1" onClick={() => set_cdot_history(!show_cdot_history)}>
                                {show_cdot_history ? <span>Hide History</span> : <span>Show History</span>}
                            </button>
                            <button className="btn btn-primary my-1" onClick={() => set_showing_cdot_references(!showing_cdot_references)}>
                                {showing_cdot_references ? <span>Hide References</span> : <span>Show References</span>}
                            </button>
                        </div>) }

                    {show_cdot_history ?
                        <div>
                            <HistoryContainer field={data.VariantSNVIndel[0].cDot.field}  />
                        </div>
                        : <span></span>
                    }
                    {
                        showing_cdot_references ?
                            <div><h3>References</h3>
                                <div>{data.VariantSNVIndel[0].cDot.references.length > 0 ?
                                    data.VariantSNVIndel[0].cDot.references.map((item, index) => (
                                        // @ts-ignore
                                        <div key={index}> {item ? <LiteratureReferenceContainer id={item.id}/> : ''}</div>

                                    )) : <span>None</span>}</div>
                            </div> : (<span></span>)
                    }
                    <div><strong>Last Editor: </strong>{data.VariantSNVIndel[0].cDot.editor.name}</div>
                    <div><strong>Last Edit Date: </strong>{humanify_date(data.VariantSNVIndel[0].cDot.editDate)}</div>
                </div>

                <div>gDot</div>
                <div>
                    {editing_gdot ?
                        (<GDotEditableStatementEditor statement={data.VariantSNVIndel[0].gDot.statement} set_editing={set_editing_gdot} es_ID={data.VariantSNVIndel[0].gDot.id}
                                                      es_field={data.VariantSNVIndel[0].gDot.field} variant_ID={data.VariantSNVIndel[0].id} ref_array={[]} refetch={refetch} />)
                        : (<div>{data.VariantSNVIndel[0].gDot.statement}</div>)}
                    {editing_gdot ?   <span></span> :
                        (<div className={`${className}__FormGroup`}>
                            <button className="btn btn-primary my-1" onClick={() => set_editing_gdot(true)}>Edit GDot</button>
                            <button className="btn btn-primary my-1" onClick={() => set_gdot_history(!show_gdot_history)}>
                                {show_gdot_history ? <span>Hide History</span> : <span>Show History</span>}
                            </button>
                            <button className="btn btn-primary my-1" onClick={() => set_showing_gdot_references(!showing_gdot_references)}>
                                {showing_gdot_references ? <span>Hide References</span> : <span>Show References</span>}
                            </button>
                        </div>) }

                    {show_gdot_history ?
                        <div>
                            <HistoryContainer field={data.VariantSNVIndel[0].gDot.field}  />
                        </div>
                        : <span></span>
                    }
                    {
                        showing_gdot_references ?
                            <div><h3>References</h3>
                                <div>{data.VariantSNVIndel[0].gDot.references.length > 0 ?
                                    data.VariantSNVIndel[0].gDot.references.map((item, index) => (
                                        // @ts-ignore
                                        <div key={index}> {item ? <LiteratureReferenceContainer id={item.id}/> : ''}</div>

                                    )) : <span>None</span>}</div>
                            </div> : (<span></span>)
                    }
                    <div><strong>Last Editor: </strong>{data.VariantSNVIndel[0].gDot.editor.name}</div>
                    <div><strong>Last Edit Date: </strong>{humanify_date(data.VariantSNVIndel[0].gDot.editDate)}</div>
                </div>
                <div>Exon</div>
                <div>
                    {editing_exon ?
                        (<ExonEditableStatementEditor statement={data.VariantSNVIndel[0].exon.statement} set_editing={set_editing_exon} es_ID={data.VariantSNVIndel[0].exon.id}
                                                      es_field={data.VariantSNVIndel[0].exon.field} variant_ID={data.VariantSNVIndel[0].id} ref_array={[]} refetch={refetch} />)
                        : (<div>{data.VariantSNVIndel[0].exon.statement}</div>)}
                    {editing_exon ?   <span></span> :
                        (<div className={`${className}__FormGroup`}>
                            <button className="btn btn-primary my-1" onClick={() => set_editing_exon(true)}>Edit Exon</button>
                            <button className="btn btn-primary my-1" onClick={() => set_exon_history(!show_exon_history)}>
                                {show_exon_history ? <span>Hide History</span> : <span>Show History</span>}
                            </button>
                            <button className="btn btn-primary my-1" onClick={() => set_showing_exon_references(!showing_exon_references)}>
                                {showing_exon_references ? <span>Hide References</span> : <span>Show References</span>}
                            </button>
                        </div>) }

                    {show_exon_history ?
                        <div>
                            <HistoryContainer field={data.VariantSNVIndel[0].exon.field}  />
                        </div>
                        : <span></span>
                    }
                    {
                        showing_exon_references ?
                            <div><h3>References</h3>
                                <div>{data.VariantSNVIndel[0].exon.references.length > 0 ?
                                    data.VariantSNVIndel[0].exon.references.map((item, index) => (
                                        // @ts-ignore
                                        <div key={index}> {item ? <LiteratureReferenceContainer id={item.id}/> : ''}</div>

                                    )) : <span>None</span>}</div>
                            </div> : (<span></span>)
                    }
                    <div><strong>Last Editor: </strong>{data.VariantSNVIndel[0].exon.editor.name}</div>
                    <div><strong>Last Edit Date: </strong>{humanify_date(data.VariantSNVIndel[0].exon.editDate)}</div>
                </div>


            </React.Fragment>
    )
}

export default GenomicMarkerSNVEditor;