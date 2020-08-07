import * as React from "react";
import {Fragment} from "react";
import './styles.css'
import {
    JaxVariantByGeneQuery,
    useGenomicVariantAddJaxVariantMutation, useJaxVariantByGeneQuery
} from '../../../generated/graphql'

const className = 'JaxVariantSearch';

export interface Props {
    data: JaxVariantByGeneQuery;
    variant_id:string;
    refetch_parent: () => void;
}


const JaxVariantSearch: React.FC<Props> = ({data,variant_id,refetch_parent}: Props) => {

    const [addJaxVarMutation, { loading: mutationLoading, error: mutationError, data:mutationData }] = useGenomicVariantAddJaxVariantMutation({variables:{variant_id:'',jaxvar_id:''}})



    const add_jaxvar = async (jaxVarId: any) => {
        await addJaxVarMutation({variables:{variant_id:variant_id, jaxvar_id:jaxVarId}})
        refetch_parent()
    }

    return (
        <div className={className} >

            <div className={`${className}__Wrapper`} >
                {data.jv_by_name &&
                data.jv_by_name.map(
                    (jv ,index) =>
                        jv && (
                            <Fragment key={index}>
                            <div >{jv.name} </div>
                            <div >{jv.cDot}</div>
                            <div>{jv.proteinEffect.proteinEffect}</div>
                            <div><button className={`${className}__small-btn`} onClick={() => add_jaxvar(jv.id)}>Attach</button></div>
                            </Fragment>
                    ),
                )}
            </div>

        </div>
    )
}

export default JaxVariantSearch;