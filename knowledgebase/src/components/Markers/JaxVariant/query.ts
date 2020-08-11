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