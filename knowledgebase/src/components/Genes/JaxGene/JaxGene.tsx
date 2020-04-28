import * as React from 'react';

import {JaxGeneQuery} from '../../../generated/graphql';
import './styles.css';
import {AppendedContentActionTypes, useAppendedContentState} from "../../../context/AppendedContentContext";

interface Props {
    data: JaxGeneQuery;
    editing_description: boolean;
    editing_synonyms: boolean;
}

type DescriptionWithPmids = {
    text: string;
    pmid: string;
}

const className = 'JaxGene';

const JaxGene: React.FC<Props> = ({data,editing_description,editing_synonyms}) => {
    const getDescriptionString = (q: JaxGeneQuery): string => {
        let s = ''
        if (q != null) {
            if (q.JaxGene != null) {
                if (q.JaxGene[0] != null) {
                    if (q.JaxGene[0].description != null) {
                        // @ts-ignore
                        s = q.JaxGene[0].description.statement
                    }
                }
            }
        }
        return s;
    }
    const {
        AppendedContentState: {},
        setAppendedContentState
    } = useAppendedContentState();

    //copy_description
    const copy_description = async (appended: string) => {
        // console.log('copy_description')
        const appended2 = '\n' + appended
        setAppendedContentState({type: AppendedContentActionTypes.appendToDescription, nextText: appended2})
        // handle_append_to_description('appended stuff')
    };
    const copy_synonym = async (synonym: string|null) => {
        // console.log('copy_description')
        let text : string = ''

        if (synonym!==null){
            text = synonym
        }
        setAppendedContentState({type: AppendedContentActionTypes.appendToSynonyms, nextSynonym: text})
        // handle_append_to_description('appended stuff')
    };
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
                        pmid: pmids[i]
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

    if (!data.JaxGene) {
        return <div>No MyGeneInfo Gene</div>;
    }
    if (!data.JaxGene[0]) {
        return <div>No OmniGene</div>;
    }
    // https://www.ncbi.nlm.nih.gov/nuccore/
    return (

        <div className={className}>
            <h3 className={`${className}__title`}>JaxGene: {data.JaxGene[0].name}</h3>
            <div className={`${className}__Wrapper`}>
                <div>Jax Id</div>
                <div>{data.JaxGene[0].jaxId}</div>
                <div>Chromosome</div>
                <div>{data.JaxGene[0].chromosome}</div>
                <div>Synonyms</div>

                <div>{data.JaxGene[0].synonyms.map((item, index) => (
                    <div className={`${className}__Synonym_Wrapper`} key={index}>
                    <div>{item}</div>
                        <div>
                        {editing_synonyms ?
                            <button className={`${className}__small-btn`}
                                    onClick={() => copy_synonym(item)}>Copy Synonym
                            </button>
                            :
                            (<span></span>)}
                        </div>
                    </div>
                ))}</div>
                <div>Canonical Transcript</div>
                <div>{(
                    <a href={'https://www.ncbi.nlm.nih.gov/nuccore/' + data.JaxGene[0].canonicalTranscript} target="_blank"
                       rel="noopener noreferrer">{data.JaxGene[0].canonicalTranscript}</a>)}</div>
                <div>Entrez Gene</div>
                <div>{(
                    <a href={'https://www.ncbi.nlm.nih.gov/gene/' + data.JaxGene[0].entrezId} target="_blank"
                       rel="noopener noreferrer">{data.JaxGene[0].entrezId}</a>)}</div>

                <div>Gene Description</div>
                <div>
                    {/*{data.JaxGene[0].description.statement}*/}
                    {add_hyperlinks(data.JaxGene[0].description.statement).map((item, index) => (
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
                        (<span></span>)}
                </div>
            </div>
        </div>

    );
};

export default JaxGene;