import gql from 'graphql-tag';


export const QUERY_JAX_VARIANT_BY_GENE_NAME = gql`
    query JaxVariantByGene($gene_name:String, $pdot:String){
        jv_by_name: JaxVariant(filter:{AND:[{name_contains:$pdot},{gene:{name:$gene_name}}] }){
            gene{
                id
                name
            }
            id
            pDot
            cDot
            jaxId
            name
            proteinEffect{
                id
                proteinEffect
            }
        }
    }
`

export const mutation_add_jaxVariant = gql`
    mutation GenomicVariantAddJaxVariant($variant_id: ID!, $jaxvar_id:ID!) {
        addGenomicVariantJaxVariant(id: $variant_id, jaxVariant: [$jaxvar_id])
     }
`

