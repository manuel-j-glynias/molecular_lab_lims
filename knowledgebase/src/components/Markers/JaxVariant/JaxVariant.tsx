import * as React from 'react';
import {
    JaxVariantQuery,
    VariantProteinEffect,
    useGenomicVariantDeleteJaxVariantMutation,
} from "../../../generated/graphql";
import './styles.css'
import LiteratureReferenceContainer from "../../common/LiteratureReference";
import {AppendedContentActionTypes, useAppendedContentState} from "../../../context/AppendedContentContext";

interface Props {
    data: JaxVariantQuery;
    editing_description: boolean;
    editing_protein_effect: boolean;
    variant_id: string;
    refetch_parent: () => void;
}
type DescriptionWithPmids = {
    text: string;
    pmid: string;
}
const className = 'JaxVariant';
const JaxVariant: React.FC<Props> = ({data,editing_description,editing_protein_effect,variant_id,refetch_parent}) => {

    const [deleteJaxVarMutation, { loading: mutationLoading, error: mutationError, data:mutationData }] = useGenomicVariantDeleteJaxVariantMutation({variables:{variant_id:'',jaxvar_id:''}})

    const delete_jaxvar = async () => {
        if (data && data.JaxVariant && data.JaxVariant[0]){
            await deleteJaxVarMutation({variables:{variant_id:variant_id, jaxvar_id:data.JaxVariant[0].id}})
            refetch_parent()
        }
    }



    const add_hyperlinks = (description: string): DescriptionWithPmids[] => {
        let d: DescriptionWithPmids[] = []
        let pmids: Array<string> = []
        const regex = /PMID:\s+\d{8}/g;
        const found = description.match(regex);
        if (found != null) {
            var splitted = description.split(regex);
            for (var i = 0; i < found.length; i++) {
                const toks = found[i].split(" ")
                if (toks.length > 0) {

                    const pmid = toks[1]
                    if (!pmids.includes(pmid)) {
                        pmids.push(pmid)
                    }

                    const dwp: DescriptionWithPmids = {
                        text: splitted[i],
                        pmid: pmid
                    }
                    d.push(dwp)
                }
            }
            const last_dwp: DescriptionWithPmids = {
                text: splitted[found.length],
                pmid: ''
            }
            d.push(last_dwp)
        }

        return d;
    }
    const {
        AppendedContentState: {},
        setAppendedContentState
    } = useAppendedContentState();

    const copy_description = async (appended: string) => {
        // console.log('copy_description')
        const appended2 = '\n' + appended
        setAppendedContentState({type: AppendedContentActionTypes.appendToDescription, nextText: appended2})
        // handle_append_to_description('appended stuff')
    };

    const getDescriptionString = (q:JaxVariantQuery):string =>{
        let s = ''
        if (q && q.JaxVariant && q.JaxVariant[0] && q.JaxVariant[0].description && q.JaxVariant[0].description.statement)
        {
            s = q.JaxVariant[0].description.statement
        }
        return s
    }
    const getProteinEffect = (q:JaxVariantQuery): VariantProteinEffect => {
        let pe :VariantProteinEffect = VariantProteinEffect.Unknown
        if (q && q.JaxVariant && q.JaxVariant[0] && q.JaxVariant[0].proteinEffect && q.JaxVariant[0].proteinEffect.proteinEffect)
        {
            pe = q.JaxVariant[0].proteinEffect.proteinEffect
        }

        return pe
    }
    const copy_ProteinEffect = async (pe :VariantProteinEffect) => {
        setAppendedContentState({type: AppendedContentActionTypes.appendToProteinEffect, nextProteinEffect: pe})
    };

    if (!data.JaxVariant) {
        return <div>No MyGeneInfo Gene</div>;
    }
    if (!data.JaxVariant[0]) {
        return <div>No OmniGene</div>;
    }




    return (

        <div className={className}>
            <h3 className={`${className}__title`}>JaxVariant: {data.JaxVariant[0].name}</h3>
            <div className={`${className}__Wrapper`}>
                <div>Gene</div>
                <div>{data.JaxVariant[0].gene.name} </div>

                <div>Variant Type</div>
                <div>{data.JaxVariant[0].variantType}</div>

                <div>Protein Effect</div>
                <div>{data.JaxVariant[0].proteinEffect.proteinEffect}
                    {editing_protein_effect ?
                        (
                            <div className="form-group">
                                <button className="btn btn-primary my-1"
                                        onClick={() => copy_ProteinEffect(getProteinEffect(data))}>Copy Prot Effect
                                </button>
                            </div>

                        ) :
                        (<span></span>)}</div>

                <div>Description</div>
                <div>
                    {add_hyperlinks(data.JaxVariant[0].description.statement).map((item, index) => (
                        <span key={index} >{item.text}
                            { item.pmid !=='' ?
                                <a href={'https://pubmed.ncbi.nlm.nih.gov/' + item.pmid} target="_blank"
                                   rel="noopener noreferrer">PMID: {item.pmid}</a>
                                : <span></span> }
                            </span>
                    ))
                    }
                    {editing_description ?
                        (
                            <div className="form-group">
                                <button className="btn btn-primary my-1"
                                        onClick={() => copy_description(getDescriptionString(data))}>Copy Description
                                </button>
                            </div>

                        ) :
                        (<span></span>)}</div>
                <div>References</div>
                <div>{data.JaxVariant[0].description.references.length>0 ?
                    data.JaxVariant[0].description.references.map((item, index) => (
                        // @ts-ignore
                        <div key={index}> {item ? <LiteratureReferenceContainer id={item.id}/>: '' }</div>

                    )) : <span>None</span>}</div>

                <div>pDot</div>
                <div>{data.JaxVariant[0].pDot}</div>

                <div>cDot</div>
                <div>{data.JaxVariant[0].cDot}</div>

                <div>gDot</div>
                <div>{data.JaxVariant[0].gDot}</div>


                <div>Transcript</div>
                <div>{data.JaxVariant[0].transcript.statement}</div>


                <div></div>
                <div><button className={`${className}__small-btn`} onClick={() => delete_jaxvar()}>Detach</button></div>
            </div>

        </div>
    )
}

export default JaxVariant;