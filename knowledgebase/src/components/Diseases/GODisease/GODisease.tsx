import * as React from 'react';
import {EditableStatement, GoDiseaseQuery, JaxGeneQuery, Maybe} from '../../../generated/graphql';
import './styles.css';
import {AppendedContentActionTypes, useAppendedContentState} from "../../../context/AppendedContentContext";


interface Props {
    data: GoDiseaseQuery;
    editing_description: boolean;
}
const className = 'GODisease';


const GODisease: React.FC<Props> = ({data,editing_description}) => {
    const [editing_name, set_editing_name]  = React.useState(false);
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
    const getDescriptionString = (q: GoDiseaseQuery): string => {
        let s = ''
        if (q != null) {
            if (q.GODisease != null) {
                if (q.GODisease[0] != null) {
                    if (q.GODisease[0].definition != null) {
                        // @ts-ignore
                        s = q.GODisease[0].definition.statement
                    }
                }
            }
        }
        return s;
    }
    if (!data.GODisease) {
        return <div>No Selected OntologicalDisease</div>;
    }
    if (!data.GODisease[0]) {
        return <div></div>;

    }
    return (
        <div className={className}>
            <h1 className={`${className}__title`}> GO Disease: {data.GODisease[0].name.statement}</h1>
            <div className={`${className}__definition`}>

            <div className={`${className}__definition`}> Definition: {data.GODisease[0].definition.statement}
                {editing_description ?
                    (
                        <div className="form-group">
                            <button className="btn btn-primary my-1"
                                    onClick={() => copy_description(getDescriptionString(data))}>Copy Description
                            </button>
                        </div>

                    ) :
                    (<span></span>)}</div>
            <p className={`${className}__definition`}> goId: {data.GODisease[0].goId}</p>
            <p className={`${className}__definition`}> synonyms: {data.GODisease[0].synonyms.stringList.join(',')}</p>
            <p className={`${className}__definition`}> parents: {data.GODisease[0].parents &&
            data.GODisease[0].parents[0] && data.GODisease[0].parents[0].name.statement}</p>
            <p className={`${className}__definition`}> children: {data.GODisease[0].children &&
            data.GODisease[0].children[0] && data.GODisease[0].children[0].name.statement}</p>
            <p className={`${className}__definition`}> source: {data.GODisease[0].xrefs &&
            data.GODisease[0].xrefs.list[0] && data.GODisease[0].xrefs.list[0].source}</p>
            <p className={`${className}__definition`}> sourceId: {data.GODisease[0].xrefs &&
            data.GODisease[0].xrefs.list[0] && data.GODisease[0].xrefs.list[0].sourceId}</p>
            </div>

        </div>
    )

}

export default GODisease