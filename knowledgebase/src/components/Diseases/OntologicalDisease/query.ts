import gql from 'graphql-tag';

export const QUERY_OntolgicalDisease = gql`
    query OntologicalDisease($id: ID) 
    {
        OntologicalDisease(id:$id){
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
