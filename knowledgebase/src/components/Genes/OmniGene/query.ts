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
            synonyms {
                id
                stringList
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
            transcript{
                ...es_fields
            }
            myGeneInfoGene {
                id
             }
            uniprotEntry {
                id
             }
            jaxGene {
                id
             }
        }
    }

#    fragment es_fields on EditableStatement {
#        id
#        statement
#        field
#        references {
#            id
#        }
#        editor {
#            id
#            name
#        }
#        editDate
#    }
`;

export const GET_PUBMED_ID = gql`
    query GetPubMedID($ref_id:ID){
        LiteratureReference(id:$ref_id){
            PMID
        }
    }
`;

export const mutation_add_synonym_string = gql`
    mutation addSynonyms($gene_id: ID!, $old_esyn_id: ID!, $date: String!, $esyn_field: String!, $esyn_list: [String]!, $esyn_id: ID!, $user_id: ID!) {
        deleteOmniGeneSynonyms(id: $gene_id, synonyms: [$old_esyn_id])
        createEditableStringList(id: $esyn_id,field: $esyn_field,stringList: $esyn_list,editDate: $date)
        addEditableStringListEditor(editor: [$user_id], id: $esyn_id)
        addEditableStringListReferences(id: $esyn_id, references: [])
        addOmniGeneSynonyms(id:$gene_id, synonyms: [$esyn_id])
#        createEditableStatement(editDate: $date, field: $es_field, id: $es_id, statement: $es_statement)
#        addEditableStatementEditor(editor: [$user_id], id: $es_id)
#        addEditableStatementReferences(id: $es_id, references: [])
#        addOmniGeneSynonyms(id: $gene_id, synonymsString: [$es_id])
    }
`
export const mutation_add_category_string = gql`
    mutation addOmniGeneOncogenicCategory($gene_id: ID!, $old_es_id: ID!, $date: String!, $es_field: String!, $es_statement: String!, $es_id: ID!, $user_id: ID!, $ref_aray:[ID!]!) {
        deleteOmniGeneOncogenicCategory(id: $gene_id, oncogenicCategory: [$old_es_id])
        createEditableStatement(editDate: $date, field: $es_field, id: $es_id, statement: $es_statement)
        addEditableStatementEditor(editor: [$user_id], id: $es_id)
        addEditableStatementReferences(id: $es_id, references: $ref_aray)
        addOmniGeneOncogenicCategory(id: $gene_id, oncogenicCategory: [$es_id])
    }
`

export const mutation_add_description = gql`
    mutation addOmniGeneGeneDescription($gene_id: ID!, $old_es_id: ID!, $date: String!, $es_field: String!, $es_statement: String!, $es_id: ID!, $user_id: ID!, $ref_aray:[ID!]!) {
        deleteOmniGeneGeneDescription(id: $gene_id, geneDescription: [$old_es_id])
        createEditableStatement(editDate: $date, field: $es_field, id: $es_id, statement: $es_statement)
        addEditableStatementEditor(editor: [$user_id], id: $es_id)
        addEditableStatementReferences(id: $es_id, references: $ref_aray)
        addOmniGeneGeneDescription(id: $gene_id, geneDescription: [$es_id])
    }
`
