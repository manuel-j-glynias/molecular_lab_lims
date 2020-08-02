import gql from "graphql-tag";

export const TMBComponentsQuery = gql`
    query TMBComponents($q_string:String){
        TMBMarker(orderBy:id_asc, filter:{name:{statement_contains:$q_string}}){
            id
            name{
                id
                statement
            }
        }
    }

`;