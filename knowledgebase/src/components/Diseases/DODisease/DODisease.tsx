import * as React from 'react';
import {EditableStatement, DoDiseaseQuery, Maybe} from '../../../generated/graphql';
import './styles.css';
import {AppendedContentActionTypes, useAppendedContentState} from "../../../context/AppendedContentContext";


interface Props {
    data: DoDiseaseQuery;
    editing_description: boolean;
    editing_synonyms: boolean;
}

const className = 'DODisease';


const DODisease: React.FC<Props> = ({data,editing_description, editing_synonyms}) => {
    const [editing_name, set_editing_name] = React.useState(false);
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
    const getDescriptionString = (q: DoDiseaseQuery): string => {
        let s = ''
        if (q != null) {
            if (q.DODisease != null) {
                if (q.DODisease[0] != null) {
                    if (q.DODisease[0].definition != null) {
                        // @ts-ignore
                        s = q.DODisease[0].definition.statement
                    }
                }
            }
        }
        return s;
    }
    const copy_synonym = async (synonym: string | null) => {
        // console.log('copy_description')
        let text: string = ''

        if (synonym !== null) {
            text = synonym
        }
        setAppendedContentState({type: AppendedContentActionTypes.appendToSynonyms, nextSynonym: text})
        // handle_append_to_description('appended stuff')
    };
    if (!data.DODisease) {
        return <div>No Selected OntologicalDisease</div>;
    }
    if (!data.DODisease[0]) {
        return <div></div>;

    }
    return (
        <div className={className}>
            <h3 className={`${className}__title`}> DO Disease: {data.DODisease[0].name.statement}</h3>
            <div className={`${className}__Wrapper`}>
                <div> doId:</div>
                <div> {data.DODisease[0].doId}</div>
                <div> Definition: </div>
                <div>{data.DODisease[0].definition.statement}
                    {editing_description ?
                        (
                            <div className="form-group">
                                <button className="btn btn-primary my-1"
                                        onClick={() => copy_description(getDescriptionString(data))}>Copy Description
                                </button>
                            </div>

                        ) :
                        (<span></span>)}</div>
                <div> Exact Synonyms: </div>
                <div>{data.DODisease[0].exactSynonyms && data.DODisease[0].exactSynonyms.stringList.map((item, index) => (
                    <div className={`${className}__Synonym_Wrapper`} key={index}>
                        <div>{item}</div>
                        <div>
                            {editing_synonyms ?
                                (
                                    <button className={`${className}__small-btn`}
                                            onClick={() => copy_synonym(item)}>Copy Synonym
                                    </button>
                                )
                                :
                                (<span></span>)}
                        </div>
                    </div>
                ))}</div>
                <div> Related Synonyms: </div>
                <div>{data.DODisease[0].relatedSynonyms && data.DODisease[0].relatedSynonyms.stringList.map((item, index) => (
                    <div className={`${className}__Synonym_Wrapper`} key={index}>
                        <div>{item}</div>
                        <div>
                            {editing_synonyms ?
                                (
                                    <button className={`${className}__small-btn`}
                                            onClick={() => copy_synonym(item)}>Copy Synonym
                                    </button>
                                )
                                :
                                (<span></span>)}
                        </div>
                    </div>
                ))}</div>
                <div> Narrow Synonyms: </div>
                <div> {data.DODisease[0].narrowSynonyms && data.DODisease[0].narrowSynonyms.stringList.map((item, index) => (
                    <div className={`${className}__Synonym_Wrapper`} key={index}>
                        <div>{item}</div>
                        <div>
                            {editing_synonyms ?
                                (
                                    <button className={`${className}__small-btn`}
                                            onClick={() => copy_synonym(item)}>Copy Synonym
                                    </button>
                                )
                                :
                                (<span></span>)}
                        </div>
                    </div>
                ))}</div>

                <div>Children:</div>
                <div>{data.DODisease[0].children &&
                data.DODisease[0].children[0] && data.DODisease[0].children[0].name.statement}</div>

                <div>Parents:</div>
                <div> {data.DODisease[0].parents &&
                data.DODisease[0].parents[0] && data.DODisease[0].parents[0].name.statement}</div>

                <div>Subsets:</div>
                <div>{data.DODisease[0].subsets &&
                data.DODisease[0].subsets && data.DODisease[0].subsets.stringList}</div>

            </div> </div>

    );
};
export default DODisease