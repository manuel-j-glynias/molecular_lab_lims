import gql from 'graphql-tag';

export const FUSION_VARIANT_FOR_ID = gql`
    query VariantFusion($variant_id: ID) {
        VariantFusion(id: $variant_id) {
            id
            name{
                ...es_fields
            }
            gene {
                name
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
            exon3Prime{
                ...ei_fields
            }
            exon5Prime{
                ...ei_fields
            }
            gene3Prime {
                ...eog_fields
            }
            gene5Prime {
                ...eog_fields
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
    fragment eog_fields on EditableOmniGeneReference{
        id
        gene{
            id
        }
        field
        references {
            id
        }
        editor {
            id
            name
        }
        editDate
    }
`
