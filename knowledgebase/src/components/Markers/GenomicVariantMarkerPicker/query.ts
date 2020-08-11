import gql from "graphql-tag";

export const GenomicVariantMarkerComponentsQuery = gql`
    query GenomicVariantMarkerComponents($query_string:String){
        GenomicVariantMarker(orderBy:id_asc, filter:{name:{statement_contains:$query_string}}){
            id
            __typename
            name{
                id
                statement
            }
        }
    }

`;