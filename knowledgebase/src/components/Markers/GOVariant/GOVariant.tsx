import * as React from 'react';
import {GoVariantQuery} from "../../../generated/graphql";
import './styles.css'

interface Props {
    data: GoVariantQuery;
}
const className = 'GOVariant'

const GoVariant: React.FC<Props> = ({data}) => {

    if (!data.GOVariant || !data.GOVariant[0]) {
        return <div>No Go Variant</div>
    }

    return (
        <div className={className}>
            <h3 className={`${className}__title`}>GOVariant: {data.GOVariant[0].name.statement}</h3>
            <div className={`${className}__Wrapper`}>
                <div>Gene</div>
                <div>{data.GOVariant[0].gene} </div>

                <div>Mutation Type</div>
                <div>{data.GOVariant[0].mutationType} </div>

                <div>GO ID</div>
                <div>{data.GOVariant[0].goId} </div>

            </div>
        </div>

                )
}

export default GoVariant;
