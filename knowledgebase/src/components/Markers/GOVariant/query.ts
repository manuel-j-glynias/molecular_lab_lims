import gql from 'graphql-tag';

export const QUERY_GO_VARIANT = gql`
    query GOVariant($id:ID){
        GOVariant(id:$id) {
            id
            name{
                ...es_fields
            }
            goId
            jaxVariant{
                name
                id
            }
            gene
            mutationType
        }
    }

`

export const mutation_delete_goVariant = gql`
    mutation GenomicVariantDeleteGoVariant($variant_id: ID!, $govar_id:ID!) {
        deleteGenomicVariantGoVariant(id: $variant_id, goVariant: [$govar_id])
    }
`