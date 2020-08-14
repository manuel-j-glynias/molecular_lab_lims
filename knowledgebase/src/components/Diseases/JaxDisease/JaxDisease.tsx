import * as React from 'react';
import {EditableStatement, JaxDiseaseQuery, Maybe} from '../../../generated/graphql';
import './styles.css';
import {AppendedContentActionTypes, useAppendedContentState} from "../../../context/AppendedContentContext";


interface Props {
    data: JaxDiseaseQuery;
    editing_description: boolean;
}

const className = 'JaxDisease';


const JaxDisease: React.FC<Props> = ({data,editing_description}) => {
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
    const getDescriptionString = (q: JaxDiseaseQuery): string => {
        let s = ''
        if (q != null) {
            if (q.JaxDisease != null) {
                if (q.JaxDisease[0] != null) {
                    if (q.JaxDisease[0].definition != null) {
                        // @ts-ignore
                        s = q.JaxDisease[0].definition.statement
                    }
                }
            }
        }
        return s;
    }

    if (!data.JaxDisease) {
        return <div>No Selected OntologicalDisease</div>;
    }
    if (!data.JaxDisease[0]) {
        return <div></div>;

    }
    return (
        <div className={className}>
            <h3 className={`${className}__title`}> Jax Disease: {data.JaxDisease[0].name.statement}</h3>
            <div className={`${className}__Wrapper`}>
                <div> jaxId:</div>
                <div> {data.JaxDisease[0].termId}</div>
                <div> Definition: </div>
                <div>{data.JaxDisease[0].definition.statement}
                    {editing_description ?
                        (
                            <div className="form-group">
                                <button className="btn btn-primary my-1"
                                        onClick={() => copy_description(getDescriptionString(data))}>Copy Description
                                </button>
                            </div>

                        ) :
                        (<span></span>)}</div>

                <div>Source:</div>
                <div> {data.JaxDisease[0].source}</div>

            </div> </div>

    );
};
export default JaxDisease