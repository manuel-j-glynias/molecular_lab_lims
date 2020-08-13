import gql from 'graphql-tag';


export const QUERY_CLINVAR_VARIANT_BY_GENE_NAME = gql`
    query ClinVarVariantByGene($gene_name:String, $pdot:String){
        ClinVarVariant(gene:$gene_name,filter:{pDot_contains:$pdot}){
            id
            gene
            pDot
            cDot
            variantId
            significance{
                id
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