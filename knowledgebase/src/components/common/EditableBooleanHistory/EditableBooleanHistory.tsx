
import * as React from 'react'
import { EditableBooleanQuery } from '../../../generated/graphql'
import './styles.css'


export interface Props {
    data: EditableBooleanQuery;
}


const className = 'History';
const humanify_date =  (date_string:string) : string => {
    const toks = date_string.split("-")
    //2020-04-14-08-26-11-045455
    const d = toks[1] + '/' + toks[2]  + '/' + toks[0] + ' at ' + toks[3] + ':' + toks[4]
    return d
}
const EditableBooleanHistory: React.FC<Props> = ({data}) => (

    <div className={className}>
        <h3>History</h3>
        <ol className={`${className}__list`}>
            {!!data.EditableBoolean &&
            data.EditableBoolean.map(
                (ES, i: string | number ) =>
                    !!ES && (
                        <li key={i} className={`${className}__item`}>
                            <strong>Created by: {ES.editor.name} on {humanify_date(ES.editDate)}:  </strong>

                            { ES.booleanValue}
                        </li>
                    ),
            )}
        </ol>

    </div>
)

export default EditableBooleanHistory;