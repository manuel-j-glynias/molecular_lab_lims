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
            omniMaps{
                list{
                    mCodes{
                        diseasePath{
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