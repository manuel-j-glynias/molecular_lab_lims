import gql from "graphql-tag";

export const MarkerProfileComponentsQuery = gql`
    query MarkerProfileComponents($q_string:String){
        MarkerProfile(orderBy:id_asc, filter:{name:{statement_contains:$q_string}}){
            id
            name{
                id
                statement
            }
        }
    }

`;