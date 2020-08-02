import gql from 'graphql-tag';

export const QUERY_OntologicalDiseaseList = gql`
    query OntologicalDiseaseList($query_string: String) {
        OntologicalDisease(filter:{name:{statement_contains:$query_string}}) {
            id
            name{
                statement
            }
          }
    }
`;