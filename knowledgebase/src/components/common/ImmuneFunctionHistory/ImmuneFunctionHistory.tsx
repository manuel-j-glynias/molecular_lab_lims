
import * as React from 'react'
import { EditableImmuneFunctionQuery } from '../../../generated/graphql'
import './styles.css'


export interface Props {
    data: EditableImmuneFunctionQuery;
}


const className = 'History';
const humanify_date =  (date_string:string) : string => {
    const toks = date_string.split("-")
    //2020-04-14-08-26-11-045455
    const d = toks[1] + '/' + toks[2]  + '/' + toks[0] + ' at ' + toks[3] + ':' + toks[4]
    return d
}
const ImmuneFunctionHistory: React.FC<Props> = ({data}) => (

    <div className={className}>
        <h3>History</h3>
        <ol className={`${className}__list`}>
            {!!data.EditableImmuneFunction &&
            data.EditableImmuneFunction.map(
                (ES, i: string | number ) =>
                    !!ES && (
                        <li key={i} className={`${className}__item`}>
                            <strong>Created by: {ES.editor.name} on {humanify_date(ES.editDate)}:  </strong>

                            { ES.immuneFunction}
                        </li>
                    ),
            )}
        </ol>

    </div>
)

export default ImmuneFunctionHistory;