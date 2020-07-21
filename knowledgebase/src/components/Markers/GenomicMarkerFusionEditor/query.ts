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
            exon5Prime{
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
            gene3Prime {
                ...eog_fields
            }
            gene5Prime {
                ...eog_fields
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
    fragment eog_fields on EditableOmniGeneReference{
        id
        gene{
            id
            name
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
export const mutation_add_copy_change = gql`
    mutation VariantFusionAddCopyChange($variant_id: ID!, $old_id: ID!, $date: String!, $field: String!, $copy_change: CNVType!, $id: ID!, $user_id: ID!, $ref_aray:[ID!]!) {
        deleteVariantFusionCopyChange(id: $variant_id, copyChange: [$old_id])
        createEditableCopyChange(editDate: $date, field: $field, id: $id, cnvType: $copy_change)
        addEditableCopyChangeEditor(editor: [$user_id], id: $id)
        addEditableCopyChangeReferences(id: $id, references: $ref_aray)
        addVariantFusionCopyChange(id: $variant_id, copyChange: [$id])
    }
`
export const mutation_add_Exon3Prime = gql`
    mutation VariantFusionAddExon3Prime($variant_id: ID!, $old_id: ID!, $date: String!, $field: String!, $exon3: Int!, $id: ID!, $user_id: ID!, $ref_aray:[ID!]!) {
        deleteVariantFusionExon3Prime(id: $variant_id, exon3Prime: [$old_id])
        createEditableInt(editDate: $date, field: $field, id: $id, intValue: $exon3)
        addEditableIntEditor(editor: [$user_id], id: $id)
        addEditableIntReferences(id: $id, references: $ref_aray)
        addVariantFusionExon3Prime(id: $variant_id, exon3Prime: [$id])
    }
`
export const mutation_add_Exon5Prime = gql`
    mutation VariantFusionAddExon5Prime($variant_id: ID!, $old_id: ID!, $date: String!, $field: String!, $exon5: Int!, $id: ID!, $user_id: ID!, $ref_aray:[ID!]!) {
        deleteVariantFusionExon5Prime(id: $variant_id, exon5Prime: [$old_id])
        createEditableInt(editDate: $date, field: $field, id: $id, intValue: $exon5)
        addEditableIntEditor(editor: [$user_id], id: $id)
        addEditableIntReferences(id: $id, references: $ref_aray)
        addVariantFusionExon5Prime(id: $variant_id, exon5Prime: [$id])
    }
`
export const mutation_add_Gene3Prime = gql`
    mutation VariantFusionAddGene3Prime($variant_id: ID!, $old_id: ID!, $date: String!, $field: String!, $gene: ID!, $id: ID!, $user_id: ID!, $ref_aray:[ID!]!) {
        deleteVariantFusionGene3Prime(id: $variant_id, gene3Prime: [$old_id])
        createEditableOmniGeneReference(editDate: $date, field: $field, id: $id)
        addEditableOmniGeneReferenceGene(id: $id, gene: [$gene])
        addEditableOmniGeneReferenceEditor(editor: [$user_id], id: $id)
        addEditableOmniGeneReferenceReferences(id: $id, references: $ref_aray)
        addVariantFusionGene3Prime(id: $variant_id, gene3Prime: [$id])
    }
`
export const mutation_add_Gene5Prime = gql`
    mutation VariantFusionAddGene5Prime($variant_id: ID!, $old_id: ID!, $date: String!, $field: String!, $gene: ID!, $id: ID!, $user_id: ID!, $ref_aray:[ID!]!) {
        deleteVariantFusionGene5Prime(id: $variant_id, gene5Prime: [$old_id])
        createEditableOmniGeneReference(editDate: $date, field: $field, id: $id)
        addEditableOmniGeneReferenceGene(id: $id, gene: [$gene])
        addEditableOmniGeneReferenceEditor(editor: [$user_id], id: $id)
        addEditableOmniGeneReferenceReferences(id: $id, references: $ref_aray)
        addVariantFusionGene5Prime(id: $variant_id, gene5Prime: [$id])
    }
`
export const mutation_add_description = gql`
    mutation VariantFusionAddDescription($variant_id: ID!, $old_es_id: ID!, $date: String!, $es_field: String!, $es_statement: String!, $es_id: ID!, $user_id: ID!, $ref_aray:[ID!]!) {
        deleteVariantFusionDescription(id: $variant_id, description: [$old_es_id])
        createEditableStatement(editDate: $date, field: $es_field, id: $es_id, statement: $es_statement)
        addEditableStatementEditor(editor: [$user_id], id: $es_id)
        addEditableStatementReferences(id: $es_id, references: $ref_aray)
        addVariantFusionDescription(id: $variant_id, description: [$es_id])
    }
`