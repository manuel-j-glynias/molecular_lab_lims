import gql from 'graphql-tag';


export const QUERY_GO_VARIANT_BY_GENE_NAME = gql`
    query GOVariantByGene($gene_name:String, $pdot:String){
        go_by_name: GOVariant(gene:$gene_name, filter:{name:{statement_contains:$pdot}}){
            id
            gene
            id
            name{
                id
                statement
            }
            mutationType
        }
    }
`

export const mutation_add_goVariant = gql`
    mutation GenomicVariantAddGoVariant($variant_id: ID!, $govar_id:ID!) {
        addGenomicVariantGoVariant(id: $variant_id, goVariant: [$govar_id])
     }
`

