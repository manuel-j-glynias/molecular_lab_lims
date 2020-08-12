import gql from 'graphql-tag';

export const QUERY_OntologicalDisease_Components = gql`
    query OntologicalDiseaseComponents($id: ID) {
        OntologicalDisease(id: $id) {
            doDiseases{
                id
                list{
                    id
                }
            }
            goDiseases{
                id
                list{
                    id
                }
            }
            jaxDiseases{
                id
                list{
                    id
                }
            }
            oncoTreeDiseases{
                id
                list{
                    id
                }
            }
        }
    }

`;

