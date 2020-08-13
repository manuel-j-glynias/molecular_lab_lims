import gql from 'graphql-tag';

export const QUERY_OntolgicalDisease = gql`    
    query GODisease($id:ID){
        GODisease(id: $id) {
            name {
                statement
                field
                editDate
                editor {
                    name
                }
            }
            definition {
                statement
                field
                editDate
                editor {
                    name
                }
            }
            goId
            synonyms{
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
            xrefs {
                list {
                    source
                    sourceId
                }
            }
        }
    }
`;