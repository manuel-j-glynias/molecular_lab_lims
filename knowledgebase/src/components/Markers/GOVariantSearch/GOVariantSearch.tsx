import * as React from "react";
import {Fragment} from "react";
import './styles.css'
import {
    GoVariantByGeneQuery,
    useGenomicVariantAddGoVariantMutation, useGoVariantByGeneQuery
} from '../../../generated/graphql'

const className = 'GOVariantSearch';

export interface Props {
    data: GoVariantByGeneQuery;
    variant_id:string;
    refetch_parent: () => void;
}


const GOVariantSearch: React.FC<Props> = ({data,variant_id,refetch_parent}: Props) => {

    const [addGOVarMutation, { loading: mutationLoading, error: mutationError, data:mutationData }] = useGenomicVariantAddGoVariantMutation({variables:{variant_id:'',govar_id:''}})



    const add_govar = async (goVarId: any) => {
        await addGOVarMutation({variables:{variant_id:variant_id, govar_id:goVarId}})
        refetch_parent()
    }

    return (
        <div className={className} >

            <div className={`${className}__Wrapper`} >
                {data.go_by_name &&
                data.go_by_name.map(
                    (go ,index) =>
                        go && (
                            <Fragment key={index}>
                            <div >{go.name.statement} </div>
                            <div >{go.mutationType} </div>
                            <div><button className={`${className}__small-btn`} onClick={() => add_govar(go.id)}>Attach</button></div>
                            </Fragment>
                    ),
                )}
            </div>

        </div>
    )
}

export default GOVariantSearch;