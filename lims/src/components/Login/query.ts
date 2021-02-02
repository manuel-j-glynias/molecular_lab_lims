import gql from 'graphql-tag';

export const QUERY_Users = gql`
    query GetUser{
        Molecular_Lab_User{
            id
            first_name
            last_name
            name_lower
            user_name
            password
            canQC
            canEditUsers
            canEditTests
            canEditOrders
            canEditPhysicians
        }
    }
`;