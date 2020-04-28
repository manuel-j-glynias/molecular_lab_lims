import * as React from 'react';
import {useAppendedContentState, AppendedContentActionTypes} from "../../../context/AppendedContentContext"
import {MyGeneInfo_GeneQuery, InternetReference} from '../../../generated/graphql';
import './styles.css';

interface Props {
    data: MyGeneInfo_GeneQuery;
    editing_description: boolean;
}

const className = 'MyGeneInfo';

const MyGeneInfo: React.FC<Props> = ({data, editing_description}) => {

    const convert_strand = (strand: string): string => {
        let s = '+'
        if (strand === 'REVERSE') {
            s = '-'
        }
        return s;
    }
    const get_internet_reference = (q: MyGeneInfo_GeneQuery): string => {
        let s = ''
        if (q != null) {
            if (q.MyGeneInfo_Gene != null) {
                if (q.MyGeneInfo_Gene[0] != null) {
                    if (q.MyGeneInfo_Gene[0].description != null) {
                        if (q.MyGeneInfo_Gene[0].description.references != null) {
                            if (q.MyGeneInfo_Gene[0].description.references.length > 0) {
                                // @ts-ignore
                                if (q.MyGeneInfo_Gene[0].description.references[0].shortReference != null) {
                                    // @ts-ignore
                                    // s = q.MyGeneInfo_Gene[0].description.references[0].shortReference
                                    let ref = q.MyGeneInfo_Gene[0].description.references[0] as InternetReference
                                    s = ref.web_address
                                }
                            }
                        }
                    }
                }
            }
        }
        return s;
    }
    const get_internet_reference_date = (q: MyGeneInfo_GeneQuery): string => {
        let s = ''
        if (q != null) {
            if (q.MyGeneInfo_Gene != null) {
                if (q.MyGeneInfo_Gene[0] != null) {
                    if (q.MyGeneInfo_Gene[0].description != null) {
                        if (q.MyGeneInfo_Gene[0].description.references != null) {
                            if (q.MyGeneInfo_Gene[0].description.references.length > 0) {
                                // @ts-ignore
                                if (q.MyGeneInfo_Gene[0].description.references[0].shortReference != null) {
                                    // @ts-ignore
                                    // s = q.MyGeneInfo_Gene[0].description.references[0].shortReference
                                    let ref = q.MyGeneInfo_Gene[0].description.references[0] as InternetReference
                                    let accessed = ref.accessed_date
                                    s = accessed
                                }
                            }
                        }
                    }
                }
            }
        }
        return s;
    }
    const getDescriptionString = (q: MyGeneInfo_GeneQuery): string => {
        let s = ''
        if (q != null) {
            if (q.MyGeneInfo_Gene != null) {
                if (q.MyGeneInfo_Gene[0] != null) {
                    if (q.MyGeneInfo_Gene[0].description != null) {
                        // @ts-ignore
                        s = q.MyGeneInfo_Gene[0].description.statement
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
        console.log('copy_description')
        const appended2 = '\n' + appended
        setAppendedContentState({type: AppendedContentActionTypes.appendToDescription, nextText: appended2})
        // handle_append_to_description('appended stuff')
    };
    if (!data.MyGeneInfo_Gene) {
        return <div>No MyGeneInfo Gene</div>;
    }
    if (!data.MyGeneInfo_Gene[0]) {
        return <div>No OmniGene</div>;
    }
    //https://www.ncbi.nlm.nih.gov/gene/

    // @ts-ignore
    return (

        <div className={className}>
            <h3 className={`${className}__title`}>myGeneInfo: {data.MyGeneInfo_Gene[0].name}</h3>
            <div className={`${className}__Wrapper`}>
                <div>Chromosomal Position</div>
                <div>{data.MyGeneInfo_Gene[0].chromosome} : {data.MyGeneInfo_Gene[0].start} - {data.MyGeneInfo_Gene[0].end} ( {convert_strand(data.MyGeneInfo_Gene[0].strand)} )</div>

                <div>Entrez Gene</div>
                <div>{(
                    <a href={'https://www.ncbi.nlm.nih.gov/gene/' + data.MyGeneInfo_Gene[0].entrezId} target="_blank"
                       rel="noopener noreferrer">{data.MyGeneInfo_Gene[0].entrezId}</a>)}</div>

                <div>Gene Description</div>
                <div>{data.MyGeneInfo_Gene[0].description.statement}
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
                <div>Reference</div>
                <div>{(<a href={get_internet_reference(data)} target="_blank"
                          rel="noopener noreferrer">{get_internet_reference(data)}</a>)} accessed
                    on {get_internet_reference_date(data)}</div>

            </div>
        </div>

    );
};

export default MyGeneInfo;