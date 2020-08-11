import gql from 'graphql-tag';

export const QUERY_OntolgicalDisease = gql`
    query OntologicalDisease($id: ID) 
    {
        OntologicalDisease(id:$id){
            id
            name{
                ...es_fields
            }
            description{
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
            omniMaps{
                id
                list{
                    id
                    mCodes{
                        id
                        mcodeId
                        diseasePath{
                            id
                            statement
                        }
                    }
                    omniDisease{
                        id
                        omniDiseaseId
                        name{
                            id
                            statement
                        }
                    }
                }
            }
        }
    }
    
    
`


//   query OntologicalDisease($id: ID)
//     {
//         OntologicalDisease(id:$id){
//             id
//             name{
//                 ...es_fields
//             }
//             description{
//                 ...es_fields
//             }
//             synonyms{
//                 id
//                 stringList
//                 field
//                 references {
//                     id
//                 }
//                 editor {
//                     id
//                     name
//                 }
//                 editDate
//             }
//             children{
//                 id
//                 name{
//                     statement
//                 }
//             }
//             omniMaps{
//                 list{
//                     mCodes{
//                         diseasePath{
//                             statement
//                         }
//                     }
//                     omniDisease{
//                         name{
//                             statement
//                         }
//                     }
//                 }
//             }
//             doDiseases{
//                 id
//             }
//             jaxDiseases{
//                 id
//             }
//             goDiseases{
//                 id
//             }
//             oncoTreeDiseases{
//                 id
//             }
//         }
//     }

export const mutation_add_name = gql`
    mutation OntologicalDiseaseAddName($id: ID!, $old_es_id: ID!, $date: String!, $es_field: String!, $es_statement: String!, $es_id: ID!, $user_id: ID!, $ref_aray:[ID!]!) {
        deleteOntologicalDiseaseName(id: $id, name: [$old_es_id])
        createEditableStatement(editDate: $date, field: $es_field, id: $es_id, statement: $es_statement)
        addEditableStatementEditor(editor: [$user_id], id: $es_id)
        addEditableStatementReferences(id: $es_id, references: $ref_aray)
        addOntologicalDiseaseName(id: $id, name: [$es_id])
    }

`
export const mutation_add_synonym_string = gql`
    mutation OntologicalDiseaseAddSynonyms($id: ID!, $old_esyn_id: ID!, $date: String!, $esyn_field: String!, $esyn_list: [String]!, $esyn_id: ID!, $user_id: ID!) {
        deleteOntologicalDiseaseSynonyms(id: $id, synonyms: [$old_esyn_id])
        createEditableStringList(id: $esyn_id,field: $esyn_field,stringList: $esyn_list,editDate: $date)
        addEditableStringListEditor(editor: [$user_id], id: $esyn_id)
        addEditableStringListReferences(id: $esyn_id, references: [])
        addOntologicalDiseaseSynonyms(id:$id, synonyms: [$esyn_id])
        #        createEditableStatement(editDate: $date, field: $es_field, id: $es_id, statement: $es_statement)
        #        addEditableStatementEditor(editor: [$user_id], id: $es_id)
        #        addEditableStatementReferences(id: $es_id, references: [])
        #        addOmniGeneSynonyms(id: $gene_id, synonymsString: [$es_id])
    }
`
export const mutation_add_description = gql`
    mutation addOntologicalDiseaseDescription($id: ID!, $old_es_id: ID!, $date: String!, $es_field: String!, $es_statement: String!, $es_id: ID!, $user_id: ID!, $ref_aray:[ID!]!) {
        deleteOntologicalDiseaseDescription(id: $id, description: [$old_es_id])
        createEditableStatement(editDate: $date, field: $es_field, id: $es_id, statement: $es_statement)
        addEditableStatementEditor(editor: [$user_id], id: $es_id)
        addEditableStatementReferences(id: $es_id, references: $ref_aray)
        addOntologicalDiseaseDescription(id: $id, description: [$es_id])
    }
`