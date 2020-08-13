import gql from 'graphql-tag';

export const QUERY_JAX_VARIANT = gql`
    query JaxVariant($id:ID){
        JaxVariant(id:$id) {
            id
            name
            gene {
                id
                name
            }
            cDot
            pDot
            gDot
            proteinEffect{
                id
                proteinEffect
             }
            transcript{
                ...es_fields
            }
            variantType
            description {
                id
                ...es_fields
            }
        }
    }
 `

export const mutation_delete_jaxVariant = gql`
    mutation GenomicVariantDeleteJaxVariant($variant_id: ID!, $jaxvar_id:ID!) {
        deleteGenomicVariantJaxVariant(id: $variant_id, jaxVariant: [$jaxvar_id])
    }
`