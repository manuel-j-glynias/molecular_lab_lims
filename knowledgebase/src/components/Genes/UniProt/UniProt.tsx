import * as React from 'react';
import {useAppendedContentState, AppendedContentActionTypes} from "../../../context/AppendedContentContext"
import {UniprotQuery} from '../../../generated/graphql';
import './styles.css';
import LiteratureReferenceContainer from "../LiteratureReference";

interface Props {
    data: UniprotQuery;
    editing_description: boolean;
}
type DescriptionWithPubMed = {
    text: string;
    pmid: string;
}
const className = 'UniProt';

const UniProt: React.FC<Props> = ({data,editing_description}) => {
    const getDescriptionString = (q: UniprotQuery): string => {
        let s = ''
        if (q != null) {
            if (q.Uniprot_Entry != null) {
                if (q.Uniprot_Entry[0] != null) {
                    if (q.Uniprot_Entry[0].function != null) {
                        // @ts-ignore
                        s = q.Uniprot_Entry[0].function.statement
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
    const add_hyperlinks = (description: string): DescriptionWithPubMed[] => {
        let d: DescriptionWithPubMed[] = []
        let pmids: Array<string> = []
        const regex = /PubMed:\d{8}/g;
        const found = description.match(regex);
        if (found != null) {
            var splitted = description.split(regex);
            for (var i = 0; i < found.length; i++) {
                const toks = found[i].split(":")
                if (toks.length > 0) {

                    const pmid = toks[1]
                    if (!pmids.includes(pmid)) {
                        pmids.push(pmid)
                    }

                    const dwp: DescriptionWithPubMed = {
                        text: splitted[i],
                        pmid: pmid
                    }
                    // console.log(dwp.text)
                    // console.log(dwp.pmid)
                    d.push(dwp)
                }
            }
            const last_dwp: DescriptionWithPubMed = {
                text: splitted[found.length],
                pmid: ''
            }
            d.push(last_dwp)
        }

        return d;
    }

    if (!data.Uniprot_Entry) {
        return <div>No MyGeneInfo Gene</div>;
    }
    if (!data.Uniprot_Entry[0]) {
        return <div>No OmniGene</div>;
    }

    return (

        <div className={className}>
            <h3 className={`${className}__title`}>Uniprot: {data.Uniprot_Entry[0].uniprot_id}</h3>
            <div className={`${className}__Wrapper`}>
                <div>Accession Number</div>
                <div>{(
                    <a href={'https://www.uniprot.org/uniprot/' + data.Uniprot_Entry[0].accessionNumber} target="_blank"
                       rel="noopener noreferrer">{data.Uniprot_Entry[0].accessionNumber}</a>)}</div>

                    <div>Function</div>
                    <div>
                        {/*{data.Uniprot_Entry[0].function.statement}*/}
                        {add_hyperlinks(data.Uniprot_Entry[0].function.statement).map((item, index) => (
                            <span key={index} >{item.text}
                                { item.pmid !=='' ?
                                    <a href={'https://pubmed.ncbi.nlm.nih.gov/' + item.pmid} target="_blank"
                                       rel="noopener noreferrer">PubMed: {item.pmid}</a>
                                    : <span></span> }
                            </span>
                        ))
                        }
                        {editing_description ?
                            (
                                <div className="form-group">
                                    <button className="btn btn-primary my-1"
                                            onClick={() => copy_description(getDescriptionString(data))}>Copy Function
                                    </button>
                                </div>

                            ) :
                            (<span></span>)}
                    </div>

                <div>References</div>
                <div>{data.Uniprot_Entry[0].function.references.length>0 ?
                    data.Uniprot_Entry[0].function.references.map((item, index) => (
                        <div key={index}> {item ? <LiteratureReferenceContainer id={item.id}/>: '' }</div>

                    )) : <span>None</span>}</div>

            </div>
        </div>
    );
};

export default UniProt;