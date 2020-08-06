import gql from 'graphql-tag';


export const QUERY_CLINVAR_VARIANT_BY_GENE_NAME = gql`
    query ClinVarVariantByGene($gene_name:String){
        ClinVarVariant(gene:$gene_name){
            gene
            id
            pDot
            cDot
            variantId
            significance{
                statement
            }
            signficanceExplanation{
                statement
            }
        }
    }
`

export const mutation_add_clinvar = gql`
    mutation GenomicVariantAddClinVarVariant($variant_id: ID!, $clinvar_id:ID!) {
        addGenomicVariantClinVarVariant(id: $variant_id, clinVarVariant: [$clinvar_id])
     }
`

//addGenomicVariantClinVarVariant(clinVarVariant: [ID!]!id: ID!): String