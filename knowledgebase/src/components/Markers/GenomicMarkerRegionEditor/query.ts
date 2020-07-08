import gql from 'graphql-tag';

export const FUSION_VARIANT_FOR_ID = gql`
query VariantRegion($variant_id: ID) {
    VariantRegion(id: $variant_id) {
        id
        name{
            ...es_fields
        }
        gene {
            id
            name
        }
        description {
           ...es_fields
        }
        nonCanonicalTranscript{
            ...es_fields
        }
        variantType
        indelType
        proteinEffect{
            id
            proteinEffect
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
        regionType
        regionValue{
            id
            intValue
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
        isFrameshift{
            ...eb
        }
        isTruncating{
            ...eb
        }
        isDeleterious{
            ...eb
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

fragment eb on EditableBoolean{
    id
    booleanValue
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