import gql from 'graphql-tag';

export const QUERY_OntolgicalDisease = gql`    
    query JaxDisease($id:ID){
        JaxDisease(id: $id) {
            jaxId
            name {
                statement
            }
            source
            definition {
                statement
            }
            termId
        }
    }
`;