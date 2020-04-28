import gql from 'graphql-tag';

export const QUERY_OmniGene = gql`
    query OmniGene($gene_id: ID) {
        OmniGene(id: $gene_id) {
            id
            name
            panelName
             geneDescription {
                ...es_fields
            }
            oncogenicCategory {
                ...es_fields
            }
            synonymsString {
                ...es_fields
            }
            myGeneInfoGene {
                id
             }
            uniprot_entry {
                id
             }
            jaxGene {
                id
             }
        }
    }

    fragment es_fields on EditableStatement {
        id
        statement
        field
        references {
            id
        }
        editor {
            id
            name
        }
        edit_date
    }
`;

export const GET_PUBMED_ID = gql`
    query GetPubMedID($ref_id:ID){
        LiteratureReference(id:$ref_id){
            PMID
        }
    }
`;

export const mutation_add_synonym_string = gql`
    mutation addSynonymString($gene_id: ID!, $old_es_id: ID!, $date: String!, $es_field: String!, $es_statement: String!, $es_id: ID!, $user_id: ID!) {
        deleteOmniGeneSynonymsString(id: $gene_id, synonymsString: [$old_es_id])
        createEditableStatement(deleted: false, edit_date: $date, field: $es_field, id: $es_id, statement: $es_statement)
        addEditableStatementEditor(editor: [$user_id], id: $es_id)
        addEditableStatementReferences(id: $es_id, references: [])
        addOmniGeneSynonymsString(id: $gene_id, synonymsString: [$es_id])
    }
`
export const mutation_add_category_string = gql`
    mutation addOmniGeneOncogenicCategory($gene_id: ID!, $old_es_id: ID!, $date: String!, $es_field: String!, $es_statement: String!, $es_id: ID!, $user_id: ID!) {
        deleteOmniGeneOncogenicCategory(id: $gene_id, oncogenicCategory: [$old_es_id])
        createEditableStatement(deleted: false, edit_date: $date, field: $es_field, id: $es_id, statement: $es_statement)
        addEditableStatementEditor(editor: [$user_id], id: $es_id)
        addEditableStatementReferences(id: $es_id, references: [])
        addOmniGeneOncogenicCategory(id: $gene_id, oncogenicCategory: [$es_id])
    }
`

export const mutation_add_description = gql`
    mutation addOmniGeneGeneDescription($gene_id: ID!, $old_es_id: ID!, $date: String!, $es_field: String!, $es_statement: String!, $es_id: ID!, $user_id: ID!, $ref_aray:[ID!]!) {
        deleteOmniGeneGeneDescription(id: $gene_id, geneDescription: [$old_es_id])
        createEditableStatement(deleted: false, edit_date: $date, field: $es_field, id: $es_id, statement: $es_statement)
        addEditableStatementEditor(editor: [$user_id], id: $es_id)
        addEditableStatementReferences(id: $es_id, references: $ref_aray)
        addOmniGeneGeneDescription(id: $gene_id, geneDescription: [$es_id])
    }
`
