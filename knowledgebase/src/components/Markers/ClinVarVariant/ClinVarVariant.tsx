import * as React from 'react';
import './styles.css'
import {
    ClinVarVariantQuery,
    useGenomicVariantDeleteClivarVariantMutation,
    useGenomicVariantDeleteGoVariantMutation
} from "../../../generated/graphql";


interface Props {
    data: ClinVarVariantQuery
    variant_id: string;
    refetch_parent: () => void;
}
const className = 'ClinVarVariant'

const ClinVarVariant: React.FC<Props> = ({data,variant_id,refetch_parent}) => {

    const [deleteClinVarVarMutation, { loading: mutationLoading, error: mutationError, data:mutationData }] = useGenomicVariantDeleteClivarVariantMutation({variables:{variant_id:'',clinvar_var_id:''}})

    const delete_clinvar_var = async () => {
        if (data && data.ClinVarVariant && data.ClinVarVariant[0]){
            await deleteClinVarVarMutation({variables:{variant_id:variant_id, clinvar_var_id:data.ClinVarVariant[0].id}})
            refetch_parent()
        }
    }
    if (!data.ClinVarVariant || !data.ClinVarVariant[0]) {
        return <div>No ClinVar</div>;
    }
    return (
        <div className={className}>
             <h3 className={`${className}__title`}>ClinVar Variant: <a href={'https://www.ncbi.nlm.nih.gov/clinvar/variation/' + data.ClinVarVariant[0].variantId} target="_blank"
                                                                      rel="noopener noreferrer">{data.ClinVarVariant[0].variantId}</a></h3>
            <div className={`${className}__Wrapper`}>
                <div>Gene</div>
                <div>{data.ClinVarVariant[0].gene} </div>

                <div>cDot</div>
                <div>{data.ClinVarVariant[0].cDot} </div>

                <div>pDot</div>
                <div>{data.ClinVarVariant[0].pDot} </div>

                <div>Significance</div>
                <div>{data.ClinVarVariant[0].significance.statement} </div>

                <div>Explanation</div>
                <div>{data.ClinVarVariant[0].signficanceExplanation.statement} </div>

                <div></div>
                <div><button className={`${className}__small-btn`} onClick={() => delete_clinvar_var()}>Detach</button></div>

            </div>
        </div>
    )
}
export default ClinVarVariant;

