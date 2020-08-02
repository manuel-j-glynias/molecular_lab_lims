import gql from "graphql-tag";

export const MSIComponentsQuery = gql`
    query MSIComponents($q_string:String){
        MSIMarker(orderBy:id_asc, filter:{name:{statement_contains:$q_string}}){
            id
            name{
                id
                statement
            }
        }
    }

`;