import gql from 'graphql-tag';

export const QUERY_TEST_BY_ID = gql`
    query TestByID($str: ID){
        Molecular_Lab_Test(id:$str){
            id
            authorized_diagnoses
        }
    }
`;
