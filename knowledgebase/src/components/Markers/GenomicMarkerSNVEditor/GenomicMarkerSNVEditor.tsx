import * as React from "react";
import {VariantSnvIndelQuery} from "../../../generated/graphql";
import LiteratureReferenceContainer from "../../common/LiteratureReference";


interface Props {
    data: VariantSnvIndelQuery
}
type DescriptionWithPmids = {
    text: string;
    pmid: string;
}
const className = 'GenomicMarkerSNVEditor';

const GenomicMarkerSNVEditor : React.FC<Props> = ({data}) => {
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

                <div>Exon</div>
                <div>{data.VariantSNVIndel[0].exon.statement} </div>

                <div>cDot</div>
                <div>{data.VariantSNVIndel[0].cDot.statement}</div>

                <div>pDot</div>
                <div>{data.VariantSNVIndel[0].pDot.statement}</div>

                <div>gDot</div>
                <div>{data.VariantSNVIndel[0].gDot.statement}</div>

                <div>Protein Effect</div>
                <div>{data.VariantSNVIndel[0].proteinEffect.proteinEffect}</div>

                <div>Variant Type</div>
                <div>{data.VariantSNVIndel[0].variantType}</div>

                <div>Description</div>
                <div>
                    {add_hyperlinks(data.VariantSNVIndel[0].description.statement).map((item, index) => (
                        <span key={index} >{item.text}
                            { item.pmid !=='' ?
                                <a href={'https://pubmed.ncbi.nlm.nih.gov/' + item.pmid} target="_blank"
                                   rel="noopener noreferrer">PMID: {item.pmid}</a>
                                : <span></span> }
                            </span>
                    ))
                    }</div>
                <div>References</div>
                <div>{data.VariantSNVIndel[0].description.references.length>0 ?
                    data.VariantSNVIndel[0].description.references.map((item, index) => (
                        // @ts-ignore
                        <div key={index}> {item ? <LiteratureReferenceContainer id={item.id}/>: '' }</div>

                    )) : <span>None</span>}</div>

            </React.Fragment>
    )
}

export default GenomicMarkerSNVEditor;