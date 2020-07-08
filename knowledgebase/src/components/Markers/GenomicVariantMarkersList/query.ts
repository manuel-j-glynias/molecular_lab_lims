import gql from "graphql-tag";

export const VARIANT_MARKERS_FOR_GENE = gql`
    query Variant_Markers_For_Gene($omnigene_id: ID,$query_string:String)
    {
        GenomicVariantMarker(orderBy: id_asc, filter: {AND:[{name:{statement_contains:$query_string}},{gene: {id:$omnigene_id}}]}) {
            id
            name{
                statement
            }
            method{
                statement
            }
            variant {
                id
                __typename
                name{
                    statement
                }
            }
        }
    }
`;