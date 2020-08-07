import gql from 'graphql-tag';


export const QUERY_CLINVAR_VARIANT_BY_GENE_NAME = gql`
    query ClinVarVariantByGene($gene_name:String, $pdot:String){
        cv_by_name: ClinVarVariant(gene:$gene_name,filter:{pDot_contains:$pdot}){
            gene
            id
            pDot
            cDot
            variantId
            significance{
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