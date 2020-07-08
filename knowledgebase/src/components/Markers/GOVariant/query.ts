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