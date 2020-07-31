import gql from "graphql-tag";

export const ProteinExpressionMarkersListQuery = gql`
    query ProteinExpression_Markers($query_string:String)
    {
        ProteinExpressionMarker(orderBy:id_asc, filter:{name:{statement_contains:$query_string}}){
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