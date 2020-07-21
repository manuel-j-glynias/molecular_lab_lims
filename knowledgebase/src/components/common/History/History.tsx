
import * as React from 'react'
import { EditableStatementQuery } from '../../../generated/graphql'
import './styles.css'


export interface Props {
    data: EditableStatementQuery;
}


const className = 'History';
const humanify_date =  (date_string:string) : string => {
    const toks = date_string.split("-")
    //2020-04-14-08-26-11-045455
    const d = toks[1] + '/' + toks[2]  + '/' + toks[0] + ' at ' + toks[3] + ':' + toks[4]
    return d
}

const History: React.FC<Props> = ({data}) => (

    <div className={className}>
        <h3>History</h3>
        <ol className={`${className}__list`}>
            {!!data.EditableStatement &&
            data.EditableStatement.map(
                (ES, i: string | number ) =>
                    !!ES && (
                        <li key={i} className={`${className}__item`}>
                            <strong>Created by: {ES.editor.name} on {humanify_date(ES.editDate)}:  </strong>

                            { ES.statement}
                            <ul className="History__ref_list">
                            {ES.references.map((item, index) => (<li key={index}>{item && item.shortReference} </li>)) }
                            </ul>
                        </li>
                    ),
            )}
        </ol>

    </div>
)

export default History;