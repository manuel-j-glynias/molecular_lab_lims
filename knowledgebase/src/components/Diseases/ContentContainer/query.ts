import gql from 'graphql-tag';

export const QUERY_OntologicalDisease_Components = gql`
    query OntologicalDiseaseComponents($id: ID) {
        OntologicalDisease(id: $id) {
            doDiseases{
                id
            }
            goDiseases{
                id
            }
            jaxDiseases{
                id
            }
            oncoTreeDiseases{
                id
            }
        }
    }

`;

