import gql from 'graphql-tag';

export const QUERY_CLINVAR_VARIANT = gql`
    query ClinVarVariant($id:ID){
        ClinVarVariant(id:$id) {
            id
            cDot
            pDot
            significance{
                ...es_fields
            }
            signficanceExplanation{
                ...es_fields
            }
            variantId
            gene
        }
    }
`

export const mutation_delete_clinVarVariant = gql`
    mutation GenomicVariantDeleteClivarVariant($variant_id: ID!, $clinvar_var_id:ID!) {
        deleteGenomicVariantClinVarVariant(id: $variant_id, clinVarVariant: [$clinvar_var_id])
    }
`