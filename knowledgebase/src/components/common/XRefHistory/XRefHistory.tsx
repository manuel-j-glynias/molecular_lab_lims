
import * as React from 'react'
import {EditableXRefListQuery} from '../../../generated/graphql'
import './styles.css'
import {Fragment} from "react";


export interface Props {
    data: EditableXRefListQuery;
}


const className = 'History';

const className2 = 'XRefHistory';

const humanify_date =  (date_string:string) : string => {
    const toks = date_string.split("-")
    //2020-04-14-08-26-11-045455
    const d = toks[1] + '/' + toks[2]  + '/' + toks[0] + ' at ' + toks[3] + ':' + toks[4]
    return d
}
const XRefHistory: React.FC<Props> = ({data}) => (

    <div className={className}>
        <h3>History</h3>
        <ol className={`${className2}__list`}>
            {!!data.EditableXRefList &&
            data.EditableXRefList.map(
                (ES, i: string | number ) =>
                    !!ES && (
                        <li key={i} className={`${className2}__item`}>
                            <strong>Created by: {ES.editor.name} on {humanify_date(ES.editDate)}:  </strong>
                            <div className={className2}>
                                <div className={`${className2}__Wrapper`}>

                                    <Fragment>
                                        <div className="header">Source</div>
                                        <div className="header">SourceId</div>
                                    </Fragment>
                                    {ES.list.map(
                                        (name ,index) =>
                                            name && (
                                                <Fragment key={index}>
                                                    <div >{name.source}</div>
                                                    <div >{name.sourceId}</div>
                                                </Fragment>    ),
                                    )}
                                </div>
                            </div>
                        </li>
                    ),
            )}
        </ol>

    </div>
)

export default XRefHistory;