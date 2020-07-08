import * as React from 'react';
import {JaxVariantQuery} from "../../../generated/graphql";
import './styles.css'
import LiteratureReferenceContainer from "../../common/LiteratureReference";

interface Props {
    data: JaxVariantQuery;
}
type DescriptionWithPmids = {
    text: string;
    pmid: string;
}
const className = 'JaxVariant';
const JaxVariant: React.FC<Props> = ({data}) => {

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

                <div>cDot</div>
                <div>{data.JaxVariant[0].cDot}</div>

                <div>pDot</div>
                <div>{data.JaxVariant[0].pDot}</div>

                <div>gDot</div>
                <div>{data.JaxVariant[0].gDot}</div>

                <div>Protein Effect</div>
                <div>{data.JaxVariant[0].proteinEffect.proteinEffect}</div>

                <div>Transcript</div>
                <div>{data.JaxVariant[0].transcript.statement}</div>

                <div>Variant Type</div>
                <div>{data.JaxVariant[0].variantType}</div>

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
                }</div>
                <div>References</div>
                <div>{data.JaxVariant[0].description.references.length>0 ?
                    data.JaxVariant[0].description.references.map((item, index) => (
                        // @ts-ignore
                        <div key={index}> {item ? <LiteratureReferenceContainer id={item.id}/>: '' }</div>

                    )) : <span>None</span>}</div>
            </div>
        </div>
    )
}

export default JaxVariant;