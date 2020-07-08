import * as React from "react";
import {VariantFusionQuery} from "../../../generated/graphql";
import LiteratureReferenceContainer from "../../common/LiteratureReference";

interface Props {
    data: VariantFusionQuery
}
type DescriptionWithPmids = {
    text: string;
    pmid: string;
}
const className = 'GenomicMarkerFusionEditor';

const GenomicMarkerFusionEditor : React.FC<Props> = ({data}) => {

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

    if (!data.VariantFusion) {
        return <div>No VariantSNVIndel</div>;
    }
    if (!data.VariantFusion[0]) {
        return <div>No VariantSNVIndel</div>;
    }


    return (
        <React.Fragment>
            <div>Gene</div>
            <div>{data.VariantFusion[0].gene.name} </div>

            <div>Copy Number Change</div>
            <div>{data.VariantFusion[0].copyChange.cnvType} </div>

            <div>Gene 5Prime</div>
            {data.VariantFusion[0].gene5Prime && data.VariantFusion[0].gene5Prime.gene  ?
                // @ts-ignore
                <div>{data.VariantFusion[0].gene5Prime.gene.name} </div> : <div></div> }

            <div>Exon 5Prime</div>
            <div>{data.VariantFusion[0].exon5Prime.intValue}</div>


            <div>Gene 3Prime</div>
            {data.VariantFusion[0].gene3Prime && data.VariantFusion[0].gene3Prime.gene ?
                // @ts-ignore
                <div>{data.VariantFusion[0].gene3Prime.gene.name} </div> : <div></div> }

            <div>Exon 3Prime</div>
            <div>{data.VariantFusion[0].exon3Prime.intValue}</div>

            <div>Description</div>
            <div>
                {add_hyperlinks(data.VariantFusion[0].description.statement).map((item, index) => (
                    <span key={index} >{item.text}
                        { item.pmid !=='' ?
                            <a href={'https://pubmed.ncbi.nlm.nih.gov/' + item.pmid} target="_blank"
                               rel="noopener noreferrer">PMID: {item.pmid}</a>
                            : <span></span> }
                            </span>
                ))
                }</div>
            <div>References</div>
            <div>{data.VariantFusion[0].description.references.length>0 ?
                data.VariantFusion[0].description.references.map((item, index) => (
                    // @ts-ignore
                    <div key={index}> {item ? <LiteratureReferenceContainer id={item.id}/>: '' }</div>

                )) : <span>None</span>}</div>

        </React.Fragment>
    )
}

export default GenomicMarkerFusionEditor;