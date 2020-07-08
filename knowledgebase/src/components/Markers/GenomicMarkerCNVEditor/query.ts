import gql from 'graphql-tag';

export const CNV_VARIANT_FOR_ID = gql`
    query VariantCNV($variant_id: ID) {
        VariantCNV(id: $variant_id) {
            id
            name{
                ...es_fields
            }
            copyChange{
                id
                field
                cnvType
                references {
                    id
                }
                editor {
                    id
                    name
                }
                editDate
            }
            gene{
                id
                name
            }
            description {
                id
                statement
                references {
                    ... on LiteratureReference {
                        id
                        PMID
                    }
                }
            }

            jaxVariant {
                id
            }
            goVariant {
                id
            }
            clinVarVariant {
                id
            }
            hotSpotVariant {
                id
            }
        }
    }

`
