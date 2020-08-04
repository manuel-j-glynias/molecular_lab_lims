import * as React from "react";
import {ExtendedBoolean, VariantProteinEffect, VariantRegionQuery} from "../../../generated/graphql";
import LiteratureReferenceContainer from "../../common/LiteratureReference";
import {AppendedContentActionTypes, useAppendedContentState} from "../../../context/AppendedContentContext";
import HistoryContainer from "../../common/History";
import ProteinEffectHistoryContainer from "../../common/ProteinEffectHistory";
import EditableBooleanHistoryContainer from "../../common/EditableBooleanHistory";
import ProteinEffectEditor from "./ProteinEffectEditor";
import {add_hyperlinks, get_ref_array, humanify_date} from "../../common/Helpers/Ref_helpers";
import DescriptionEditor from "./DescriptionEditor";
import FrameshiftEditor from "./FrameshiftEditor";
import DeleteriousEditor from "./DeleteriousEditor";
import TruncatingEditor from "./TruncatingEditor";


interface Props {
    data: VariantRegionQuery
    editing_description: boolean;
    set_editing_description: (newEditionDescription: boolean) => void;
    editing_protein_effect: boolean;
    set_editing_protein_effect: (newEditionDescription: boolean) => void;
    refetch: () => void;

}

const className = 'GenomicMarkerRegionEditor';

const GenomicMarkerRegionEditor : React.FC<Props> = ({data,editing_description,set_editing_description,editing_protein_effect,set_editing_protein_effect,refetch}) => {

    const [showing_description_references, set_showing_description_references] = React.useState(false);
    const [show_description_history, set_description_history] = React.useState(false);
    const [showing_protein_effect_references, set_showing_protein_effect_references] = React.useState(false);
    const [show_protein_effect_history, set_protein_effect_history] = React.useState(false);

    const [editing_isFrameshift, set_editing_isFrameshift]  = React.useState(false);
    const [showing_isFrameshift_references, set_showing_isFrameshift_references] = React.useState(false);
    const [show_isFrameshift_history, set_isFrameshift_history] = React.useState(false);

    const [editing_isDeleterious, set_editing_isDeleterious]  = React.useState(false);
    const [showing_isDeleterious_references, set_showing_isDeleterious_references] = React.useState(false);
    const [show_isDeleterious_history, set_isDeleterious_history] = React.useState(false);

    const [editing_isTruncating, set_editing_isTruncating]  = React.useState(false);
    const [showing_isTruncating_references, set_showing_isTruncating_references] = React.useState(false);
    const [show_isTruncating_history, set_isTruncating_history] = React.useState(false);

    const {
        AppendedContentState: {},
        setAppendedContentState
    } = useAppendedContentState();

    const getProteinEffect = (q:VariantRegionQuery): VariantProteinEffect => {
        let pe :VariantProteinEffect = VariantProteinEffect.Unknown
        if (q && q.VariantRegion && q.VariantRegion[0] && q.VariantRegion[0].proteinEffect && q.VariantRegion[0].proteinEffect.proteinEffect)
        {
            pe = q.VariantRegion[0].proteinEffect.proteinEffect
        }

        return pe
    }
    const edit_description = async () => {
        setAppendedContentState({type: AppendedContentActionTypes.appendToDescription, nextText: ''})
        set_editing_description(true)
    };
    const show_references = async () => {
        set_showing_description_references(!showing_description_references)
    }
    const edit_protein_effect = async () => {
        setAppendedContentState({type: AppendedContentActionTypes.appendToProteinEffect, nextProteinEffect: getProteinEffect(data)})
        set_editing_protein_effect(true)
    }
    const show_protein_effect_references = async () => {
        set_showing_protein_effect_references(!showing_protein_effect_references)
    }


    if (!data.VariantRegion) {
        return <div>No VariantSNVIndel</div>;
    }
    if (!data.VariantRegion[0]) {
        return <div>No VariantSNVIndel</div>;
    }


    return (
        <React.Fragment>
            <div>Gene</div>
            <div>{data.VariantRegion[0].gene.name} </div>

            <div>Variant Type</div>
            <div>{data.VariantRegion[0].variantType && data.VariantRegion[0].variantType}</div>

            <div>Region Type</div>
            <div>{data.VariantRegion[0].regionType}</div>

            <div>Region Value</div>
            <div>{data.VariantRegion[0].regionValue.intValue}</div>

            <div>Protein Effect</div>
            <div>
                {editing_protein_effect ? (
                        <ProteinEffectEditor variant_ID={data.VariantRegion[0].id } protein_effect={data.VariantRegion[0].proteinEffect.proteinEffect} epe_ID={data.VariantRegion[0].proteinEffect.id} epe_field={data.VariantRegion[0].proteinEffect.field} ref_array={get_ref_array(data.VariantRegion[0].proteinEffect.references)} set_editing={set_editing_protein_effect} refetch={refetch}/>
                    )
                    :
                    <div>{data.VariantRegion[0].proteinEffect.proteinEffect}</div>
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
                        <ProteinEffectHistoryContainer field={data.VariantRegion[0].proteinEffect.field}  />
                    </div>
                    : <span></span>
                }
                {
                    showing_protein_effect_references ?
                        <div><h3>References</h3>
                            <div>{data.VariantRegion[0].proteinEffect.references.length > 0 ?
                                data.VariantRegion[0].proteinEffect.references.map((item, index) => (
                                    // @ts-ignore
                                    <div key={index}> {item ? <LiteratureReferenceContainer id={item.id}/> : ''}</div>

                                )) : <span>None</span>}</div>
                        </div> : (<span></span>)
                }
                <div><strong>Last Editor: </strong>{data.VariantRegion[0].proteinEffect.editor.name}</div>
                <div><strong>Last Edit Date: </strong>{humanify_date(data.VariantRegion[0].proteinEffect.editDate)}</div>
            </div>


            <div>Description</div>
            <div>
                <div className={`${className}__FormGroup`}>
                    {editing_description ? (

                            <DescriptionEditor description={data.VariantRegion[0].description.statement} set_editing={set_editing_description} es_ID={data.VariantRegion[0].description.id}
                                               es_field={data.VariantRegion[0].description.field} variant_ID={data.VariantRegion[0].id}  refetch={refetch}/>
                        ) :
                        (
                            <div>
                                {add_hyperlinks(data.VariantRegion[0].description.statement).map((item, index) => (
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
                                {showing_description_references ? <span>Hide References</span> : <span>Show References</span>}
                            </button>
                        </div>
                    )
                }
                {show_description_history ?
                    <div>
                        <HistoryContainer field={data.VariantRegion[0].description.field}  />
                    </div>
                    : <span></span>
                }
                {
                    showing_description_references ?
                        <div><h3>References</h3>
                            <div>{data.VariantRegion[0].description.references.length > 0 ?
                                data.VariantRegion[0].description.references.map((item, index) => (
                                    // @ts-ignore
                                    <div key={index}> {item ? <LiteratureReferenceContainer id={item.id}/> : ''}</div>

                                )) : <span>None</span>}</div>
                        </div> : (<span></span>)
                }
                <div><strong>Last Editor: </strong>{data.VariantRegion[0].description.editor.name}</div>
                <div><strong>Last Edit Date: </strong>{humanify_date(data.VariantRegion[0].description.editDate)}</div>
            </div>


            <div>isFrameshift</div>
            <div>
                {!editing_isFrameshift && data.VariantRegion[0].isFrameshift.booleanValue}
                {editing_isFrameshift && <div><FrameshiftEditor isFrameshift={data.VariantRegion[0].isFrameshift.booleanValue} id={data.VariantRegion[0].isFrameshift.id} field={data.VariantRegion[0].isFrameshift.field}
                                                                variant_ID={data.VariantRegion[0].id} ref_array={get_ref_array(data.VariantRegion[0].isFrameshift.references)} set_editing={set_editing_isFrameshift}
                refetch={refetch}/></div>}

            {editing_isFrameshift ? <span></span> :
                (<div className={`${className}__FormGroup`}>
                    <button className="btn btn-primary my-1"
                            onClick={() => set_editing_isFrameshift(true)}>Edit isFrameshift
                    </button>
                    <button className="btn btn-primary my-1"
                            onClick={() => set_isFrameshift_history(!show_isFrameshift_history)}>
                        {show_isFrameshift_history ? <span>Hide History</span> : <span>Show History</span>}
                    </button>
                    <button className="btn btn-primary my-1"
                            onClick={() => set_showing_isFrameshift_references(!showing_isFrameshift_references)}>
                        {showing_isFrameshift_references ? <span>Hide References</span> :
                            <span>Show References</span>}
                    </button>
                </div>)}
                {show_isFrameshift_history  ?
                    <div>
                        <EditableBooleanHistoryContainer field={data.VariantRegion[0].isFrameshift.field}/>
                    </div>
                    : <span></span>
                }
                {
                    showing_isFrameshift_references  ?
                        <div><h3>References</h3>
                            <div>{data.VariantRegion[0].isFrameshift.references.length > 0 ?
                                data.VariantRegion[0].isFrameshift.references.map((item, index) => (
                                    // @ts-ignore
                                    <div key={index}> {item ?
                                        <LiteratureReferenceContainer id={item.id}/> : ''}</div>

                                )) : <span>None</span>}</div>
                        </div> : (<span></span>)
                }
                <div><strong>Last Editor: </strong>{data.VariantRegion[0].isFrameshift.editor.name}</div>
                <div><strong>Last Edit Date: </strong>{humanify_date(data.VariantRegion[0].isFrameshift.editDate)}</div>
            </div>
            <div>isTruncating</div>
            {/*<div>{data.VariantRegion[0].isTruncating.booleanValue}</div>*/}
            <div>
                {!editing_isTruncating && data.VariantRegion[0].isTruncating.booleanValue}
                {editing_isTruncating && <div><TruncatingEditor isTruncating={data.VariantRegion[0].isTruncating.booleanValue} id={data.VariantRegion[0].isTruncating.id} field={data.VariantRegion[0].isTruncating.field}
                                                                variant_ID={data.VariantRegion[0].id} ref_array={get_ref_array(data.VariantRegion[0].isTruncating.references)} set_editing={set_editing_isTruncating}
                                                                refetch={refetch}/></div>}

                {editing_isTruncating ? <span></span> :
                    (<div className={`${className}__FormGroup`}>
                        <button className="btn btn-primary my-1"
                                onClick={() => set_editing_isTruncating(true)}>Edit isTruncating
                        </button>
                        <button className="btn btn-primary my-1"
                                onClick={() => set_isTruncating_history(!show_isTruncating_history)}>
                            {show_isTruncating_history ? <span>Hide History</span> : <span>Show History</span>}
                        </button>
                        <button className="btn btn-primary my-1"
                                onClick={() => set_showing_isTruncating_references(!showing_isTruncating_references)}>
                            {showing_isTruncating_references ? <span>Hide References</span> :
                                <span>Show References</span>}
                        </button>
                    </div>)}
                {show_isTruncating_history  ?
                    <div>
                        <EditableBooleanHistoryContainer field={data.VariantRegion[0].isTruncating.field}/>
                    </div>
                    : <span></span>
                }
                {
                    showing_isTruncating_references  ?
                        <div><h3>References</h3>
                            <div>{data.VariantRegion[0].isTruncating.references.length > 0 ?
                                data.VariantRegion[0].isTruncating.references.map((item, index) => (
                                    // @ts-ignore
                                    <div key={index}> {item ?
                                        <LiteratureReferenceContainer id={item.id}/> : ''}</div>

                                )) : <span>None</span>}</div>
                        </div> : (<span></span>)
                }
                <div><strong>Last Editor: </strong>{data.VariantRegion[0].isTruncating.editor.name}</div>
                <div><strong>Last Edit Date: </strong>{humanify_date(data.VariantRegion[0].isTruncating.editDate)}</div>
            </div>

            <div>isDeleterious</div>
            {/*<div>{data.VariantRegion[0].isDeleterious.booleanValue}</div>*/}
            <div>
                {!editing_isDeleterious && data.VariantRegion[0].isDeleterious.booleanValue}
                {editing_isDeleterious && <div><DeleteriousEditor isDeleterious={data.VariantRegion[0].isDeleterious.booleanValue} id={data.VariantRegion[0].isDeleterious.id} field={data.VariantRegion[0].isDeleterious.field}
                                                                variant_ID={data.VariantRegion[0].id} ref_array={get_ref_array(data.VariantRegion[0].isDeleterious.references)} set_editing={set_editing_isDeleterious}
                                                                refetch={refetch}/></div>}

                {editing_isDeleterious ? <span></span> :
                    (<div className={`${className}__FormGroup`}>
                        <button className="btn btn-primary my-1"
                                onClick={() => set_editing_isDeleterious(true)}>Edit isDeleterious
                        </button>
                        <button className="btn btn-primary my-1"
                                onClick={() => set_isDeleterious_history(!show_isDeleterious_history)}>
                            {show_isDeleterious_history ? <span>Hide History</span> : <span>Show History</span>}
                        </button>
                        <button className="btn btn-primary my-1"
                                onClick={() => set_showing_isDeleterious_references(!showing_isDeleterious_references)}>
                            {showing_isDeleterious_references ? <span>Hide References</span> :
                                <span>Show References</span>}
                        </button>
                    </div>)}
                {show_isDeleterious_history  ?
                    <div>
                        <EditableBooleanHistoryContainer field={data.VariantRegion[0].isDeleterious.field}/>
                    </div>
                    : <span></span>
                }
                {
                    showing_isDeleterious_references  ?
                        <div><h3>References</h3>
                            <div>{data.VariantRegion[0].isDeleterious.references.length > 0 ?
                                data.VariantRegion[0].isDeleterious.references.map((item, index) => (
                                    // @ts-ignore
                                    <div key={index}> {item ?
                                        <LiteratureReferenceContainer id={item.id}/> : ''}</div>

                                )) : <span>None</span>}</div>
                        </div> : (<span></span>)
                }
                <div><strong>Last Editor: </strong>{data.VariantRegion[0].isDeleterious.editor.name}</div>
                <div><strong>Last Edit Date: </strong>{humanify_date(data.VariantRegion[0].isDeleterious.editDate)}</div>
            </div>



        </React.Fragment>
    )
}

export default GenomicMarkerRegionEditor;