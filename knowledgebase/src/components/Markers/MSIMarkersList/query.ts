import gql from "graphql-tag";

export const MSIMarkersQuery = gql`
    query MSI_Markers
    {
        MSIMarker(orderBy:id_asc){
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