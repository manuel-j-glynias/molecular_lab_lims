import gql from 'graphql-tag';

export const QUERY_OntolgicalDisease = gql`    
    query OncoTreeDisease($id:ID){
        OncoTreeDisease(id: $id) {
            name {
                statement
            }
            mainType {
                statement
            }
            tissue {
                statement
            }
            parent {
                name {
                    statement
                }
            }
            children {
                name {
                    statement
                }
            }
            code
        }
    }
`;