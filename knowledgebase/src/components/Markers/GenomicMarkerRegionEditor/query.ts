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
export const mutation_add_description = gql`
    mutation VariantRegionAddDescription($variant_id: ID!, $old_es_id: ID!, $date: String!, $es_field: String!, $es_statement: String!, $es_id: ID!, $user_id: ID!, $ref_aray:[ID!]!) {
        deleteVariantRegionDescription(id: $variant_id, description: [$old_es_id])
        createEditableStatement(editDate: $date, field: $es_field, id: $es_id, statement: $es_statement)
        addEditableStatementEditor(editor: [$user_id], id: $es_id)
        addEditableStatementReferences(id: $es_id, references: $ref_aray)
        addVariantRegionDescription(id: $variant_id, description: [$es_id])
    }
`
export const mutation_add_protein_effect = gql`
    mutation VariantRegionAddProteinEffect($variant_id: ID!, $old_epe_id: ID!, $date: String!, $epe_field: String!, $epe_vpe: VariantProteinEffect!, $epe_id: ID!, $user_id: ID!, $ref_aray:[ID!]!) {
        deleteVariantRegionProteinEffect(id: $variant_id, proteinEffect: [$old_epe_id])
        createEditableProteinEffect(editDate: $date, field: $epe_field, id: $epe_id, proteinEffect: $epe_vpe)
        addEditableProteinEffectEditor(editor: [$user_id], id: $epe_id)
        addEditableProteinEffectReferences(id: $epe_id, references: $ref_aray)
        addVariantRegionProteinEffect(id: $variant_id, proteinEffect: [$epe_id])
    }
`
//addVariantRegionIsFrameshift(id: ID!isFrameshift: [ID!]!): String
export const mutation_add_frameshift = gql`
    mutation VariantRegionAddIsFrameshift($variant_id: ID!, $old_eb_id: ID!, $date: String!, $eb_field: String!, $eb_vpe: ExtendedBoolean!, $eb_id: ID!, $user_id: ID!, $ref_aray:[ID!]!) {
        deleteVariantRegionIsFrameshift(id: $variant_id, isFrameshift: [$old_eb_id])
        createEditableBoolean(editDate: $date, field: $eb_field, id: $eb_id, booleanValue: $eb_vpe)
        addEditableBooleanEditor(editor: [$user_id], id: $eb_id)
        addEditableBooleanReferences(id: $eb_id, references: $ref_aray)
        addVariantRegionIsFrameshift(id: $variant_id, isFrameshift: [$eb_id])
    }
`
export const mutation_add_deleterious = gql`
    mutation VariantRegionAddIsDeleterious($variant_id: ID!, $old_eb_id: ID!, $date: String!, $eb_field: String!, $eb_vpe: ExtendedBoolean!, $eb_id: ID!, $user_id: ID!, $ref_aray:[ID!]!) {
        deleteVariantRegionIsDeleterious(id: $variant_id, isDeleterious: [$old_eb_id])
        createEditableBoolean(editDate: $date, field: $eb_field, id: $eb_id, booleanValue: $eb_vpe)
        addEditableBooleanEditor(editor: [$user_id], id: $eb_id)
        addEditableBooleanReferences(id: $eb_id, references: $ref_aray)
        addVariantRegionIsDeleterious(id: $variant_id, isDeleterious: [$eb_id])
    }
`
export const mutation_add_truncating = gql`
    mutation VariantRegionAddIsTruncating($variant_id: ID!, $old_eb_id: ID!, $date: String!, $eb_field: String!, $eb_vpe: ExtendedBoolean!, $eb_id: ID!, $user_id: ID!, $ref_aray:[ID!]!) {
        deleteVariantRegionIsTruncating(id: $variant_id, isTruncating: [$old_eb_id])
        createEditableBoolean(editDate: $date, field: $eb_field, id: $eb_id, booleanValue: $eb_vpe)
        addEditableBooleanEditor(editor: [$user_id], id: $eb_id)
        addEditableBooleanReferences(id: $eb_id, references: $ref_aray)
        addVariantRegionIsTruncating(id: $variant_id, isTruncating: [$eb_id])
    }
`