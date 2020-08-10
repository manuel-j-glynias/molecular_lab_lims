import gql from 'graphql-tag';

export const QUERY_Users = gql`
    query GetUser{
        User{
            id
            name
            isAdmin
            isEditor
            password
        }
    }
`;