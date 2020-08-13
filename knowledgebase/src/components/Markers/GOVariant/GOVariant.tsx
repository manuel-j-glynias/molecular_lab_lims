import * as React from 'react';
import {GoVariantQuery, useGenomicVariantDeleteGoVariantMutation} from "../../../generated/graphql";
import './styles.css'

interface Props {
    data: GoVariantQuery;
    variant_id: string;
    refetch_parent: () => void;
}
const className = 'GOVariant'

const GoVariant: React.FC<Props> = ({data,variant_id,refetch_parent}) => {
    const [deleteGoVarMutation, { loading: mutationLoading, error: mutationError, data:mutationData }] = useGenomicVariantDeleteGoVariantMutation({variables:{variant_id:'',govar_id:''}})

    const delete_jaxvar = async () => {
        if (data && data.GOVariant && data.GOVariant[0]){
            await deleteGoVarMutation({variables:{variant_id:variant_id, govar_id:data.GOVariant[0].id}})
            refetch_parent()
        }
    }

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
