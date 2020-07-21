import gql from "graphql-tag";

export const TMBMarkersQuery = gql`
    query TMB_Markers
    {
        TMBMarker(orderBy:id_asc){
            id
            name{
                ...es_fields
            }
            method{
                ...es_fields
            }
            resultString{
                ...es_fields
            }
        }
    }
`;