import gql from "graphql-tag";

export const ProteinExpressionMarkerComponentsQuery = gql`
    query ProteinExpressionMarkerComponents($query_string:String){
        ProteinExpressionMarker(orderBy:id_asc, filter:{name:{statement_contains:$query_string}}){
            id
            __typename
            name{
                statement
            }
        }
    }

`;