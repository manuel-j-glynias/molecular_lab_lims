import gql from "graphql-tag";

export const MarkerProfilesListQuery = gql`
    query MarkerProfiles($query_string:String)
    {
        MarkerProfile(filter:{name:{statement_contains:$query_string}}){
            id
            name{
                ...es_fields
            }
        }
    }
    
`;