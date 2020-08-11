import gql from 'graphql-tag';

export const SNV_VARIANT_FOR_ID = gql`
    query VariantSNVIndel($variant_id: ID){
        VariantSNVIndel(id:$variant_id) {
            id
            name{
                ...es_fields
            }
            cDot{
                ...es_fields
            }
            pDot{
                ...es_fields
            }
            gDot{
                ...es_fields
            }
            gene{
                id
                name
            }
            description {
                ...es_fields
            }
            variantType
            indelType
            proteinEffect{
                ...epe_fields
            }
            exon{
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
//addVariantSNVIndelDescription(description: [ID!]!id: ID!): String
export const mutation_VariantSNVIndel_add_description = gql`
    mutation VariantSNVIndelAddDescription($variant_id: ID!, $old_es_id: ID!, $date: String!, $es_field: String!, $es_statement: String!, $es_id: ID!, $user_id: ID!, $ref_aray:[ID!]!) {
        deleteVariantSNVIndelDescription(id: $variant_id, description: [$old_es_id])
        createEditableStatement(editDate: $date, field: $es_field, id: $es_id, statement: $es_statement)
        addEditableStatementEditor(editor: [$user_id], id: $es_id)
        addEditableStatementReferences(id: $es_id, references: $ref_aray)
        addVariantSNVIndelDescription(id: $variant_id, description: [$es_id]) 
    } 
`

//addVariantSNVIndelProteinEffect(id: ID!proteinEffect: [ID!]!): String

//createEditableProteinEffect(
// editDate: String!
// field: String!
// id: ID!
// proteinEffect: VariantProteinEffect!): String
export const mutation_add_protein_effect = gql`
    mutation VariantSNVIndelAddProteinEffect($variant_id: ID!, $old_epe_id: ID!, $date: String!, $epe_field: String!, $epe_vpe: VariantProteinEffect!, $epe_id: ID!, $user_id: ID!, $ref_aray:[ID!]!) {
        deleteVariantSNVIndelProteinEffect(id: $variant_id, proteinEffect: [$old_epe_id])
        createEditableProteinEffect(editDate: $date, field: $epe_field, id: $epe_id, proteinEffect: $epe_vpe)
        addEditableProteinEffectEditor(editor: [$user_id], id: $epe_id)
        addEditableProteinEffectReferences(id: $epe_id, references: $ref_aray)
        addVariantSNVIndelProteinEffect(id: $variant_id, proteinEffect: [$epe_id])
    }
`
export const mutation_VariantSNVIndel_add_pDot = gql`
    mutation VariantSNVIndelAddPDot($variant_id: ID!, $old_es_id: ID!, $date: String!, $es_field: String!, $es_statement: String!, $es_id: ID!, $user_id: ID!, $ref_aray:[ID!]!) {
        deleteVariantSNVIndelPDot(id: $variant_id, pDot: [$old_es_id])
        createEditableStatement(editDate: $date, field: $es_field, id: $es_id, statement: $es_statement)
        addEditableStatementEditor(editor: [$user_id], id: $es_id)
        addEditableStatementReferences(id: $es_id, references: $ref_aray)
        addVariantSNVIndelPDot(id: $variant_id, pDot: [$es_id])
    }
`
export const mutation_VariantSNVIndel_add_cDot = gql`
    mutation VariantSNVIndelAddCDot($variant_id: ID!, $old_es_id: ID!, $date: String!, $es_field: String!, $es_statement: String!, $es_id: ID!, $user_id: ID!, $ref_aray:[ID!]!) {
        deleteVariantSNVIndelCDot(id: $variant_id, cDot: [$old_es_id])
        createEditableStatement(editDate: $date, field: $es_field, id: $es_id, statement: $es_statement)
        addEditableStatementEditor(editor: [$user_id], id: $es_id)
        addEditableStatementReferences(id: $es_id, references: $ref_aray)
        addVariantSNVIndelCDot(id: $variant_id, cDot: [$es_id])
    }
`
export const mutation_VariantSNVIndel_add_gDot = gql`
    mutation VariantSNVIndelAddGDot($variant_id: ID!, $old_es_id: ID!, $date: String!, $es_field: String!, $es_statement: String!, $es_id: ID!, $user_id: ID!, $ref_aray:[ID!]!) {
        deleteVariantSNVIndelGDot(id: $variant_id, gDot: [$old_es_id])
        createEditableStatement(editDate: $date, field: $es_field, id: $es_id, statement: $es_statement)
        addEditableStatementEditor(editor: [$user_id], id: $es_id)
        addEditableStatementReferences(id: $es_id, references: $ref_aray)
        addVariantSNVIndelGDot(id: $variant_id, gDot: [$es_id])
    }
`
export const mutation_VariantSNVIndel_add_exon = gql`
    mutation VariantSNVIndelAddExon($variant_id: ID!, $old_es_id: ID!, $date: String!, $es_field: String!, $es_statement: String!, $es_id: ID!, $user_id: ID!, $ref_aray:[ID!]!) {
        deleteVariantSNVIndelExon(id: $variant_id, exon: [$old_es_id])
        createEditableStatement(editDate: $date, field: $es_field, id: $es_id, statement: $es_statement)
        addEditableStatementEditor(editor: [$user_id], id: $es_id)
        addEditableStatementReferences(id: $es_id, references: $ref_aray)
        addVariantSNVIndelExon(id: $variant_id, exon: [$es_id])
    }
`
