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
                ...es_fields
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
export const mutation_add_copy_change = gql`
    mutation VariantCNVAddCopyChange($variant_id: ID!, $old_id: ID!, $date: String!, $field: String!, $copy_change: CNVType!, $id: ID!, $user_id: ID!, $ref_aray:[ID!]!) {
        deleteVariantCNVCopyChange(id: $variant_id, copyChange: [$old_id])
        createEditableCopyChange(editDate: $date, field: $field, id: $id, cnvType: $copy_change)
        addEditableCopyChangeEditor(editor: [$user_id], id: $id)
        addEditableCopyChangeReferences(id: $id, references: $ref_aray)
        addVariantCNVCopyChange(id: $variant_id, copyChange: [$id])
    }
`
export const mutation_add_description = gql`
    mutation VariantCNVAddDescription($variant_id: ID!, $old_es_id: ID!, $date: String!, $es_field: String!, $es_statement: String!, $es_id: ID!, $user_id: ID!, $ref_aray:[ID!]!) {
        deleteVariantCNVDescription(id: $variant_id, description: [$old_es_id])
        createEditableStatement(editDate: $date, field: $es_field, id: $es_id, statement: $es_statement)
        addEditableStatementEditor(editor: [$user_id], id: $es_id)
        addEditableStatementReferences(id: $es_id, references: $ref_aray)
        addVariantCNVDescription(id: $variant_id, description: [$es_id])
    }
`


