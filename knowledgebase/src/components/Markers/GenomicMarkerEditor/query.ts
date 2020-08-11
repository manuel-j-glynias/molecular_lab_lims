import gql from "graphql-tag";

export const VARIANT_MARKERS_FOR_ID = gql`
    query Variant_Markers_For_Id($id: ID)
    {
        GenomicVariantMarker(id:$id) {
            id
            name{
                ...es_fields
            }
            method{
                id
                statement
            }
            variant {
                id
                __typename
                name{
                    ...es_fields
                }
            }
        }
    }

`;

