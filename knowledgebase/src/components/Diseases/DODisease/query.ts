import gql from 'graphql-tag';

export const QUERY_OntolgicalDisease = gql`    
    query DODisease($id:ID){
        DODisease(id: $id) {
            doId
            name {
                statement
            }
            definition {
                statement
            }
            exactSynonyms {
                stringList
            }
            relatedSynonyms {
                stringList
            }
            narrowSynonyms {
                stringList
            }
            subsets {
                stringList
            }
            parents {
                name {
                    statement
                }
            }
            children {
                name {
                    statement
                }
            }
        }
    }
`;