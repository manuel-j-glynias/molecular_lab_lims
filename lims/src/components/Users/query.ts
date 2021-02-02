import gql from 'graphql-tag';

export const QUERY_USERS = gql`
    query UsersList($str: String) {
        Molecular_Lab_User(filter: {name_lower_contains: $str}) {
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
            canApproveReagent
        }
    
    }
`

/*
createMolecular_Lab_User(
canAdmin: Boolean!
canQC: Boolean!
first_name: String!
id: ID!
last_name: String!
name_lower: String!
password: String!
user_name: String!): String

updateMolecular_Lab_User(
canEditOrders: Boolean!
canEditPhysicians: Boolean!
canEditTests: Boolean!
canEditUsers: Boolean!
canQC: Boolean!
first_name: String!
id: ID!
last_name: String!
name_lower: String!
password: String!
user_name: String!
 */

export const UPDATE_USER = gql`
    mutation update_user($canEditOrders:Boolean!,$canEditPhysicians:Boolean!,$canEditTests:Boolean!,$canEditUsers:Boolean!,$canQC:Boolean!,$canApproveReagent:Boolean!,
        $first_name:String!$id:ID!,$last_name:String!,$name_lower:String!,$password:String!, $user_name:String!){
        updateMolecular_Lab_User(canEditOrders: $canEditOrders, canEditPhysicians: $canEditPhysicians,canEditTests: $canEditTests,canEditUsers: $canEditUsers, canQC:$canQC, canApproveReagent:$canApproveReagent,
            first_name: $first_name, id:$id,last_name:$last_name, name_lower: $name_lower, password: $password, user_name: $user_name)   
    }
`

export const CREATE_USER = gql`
    mutation create_user($canEditOrders:Boolean!,$canEditPhysicians:Boolean!,$canEditTests:Boolean!,$canEditUsers:Boolean!,$canQC:Boolean!,$canApproveReagent:Boolean!,
        $first_name:String!$id:ID!,$last_name:String!,$name_lower:String!,$password:String!, $user_name:String!){
        createMolecular_Lab_User(canEditOrders: $canEditOrders, canEditPhysicians: $canEditPhysicians,canEditTests: $canEditTests,canEditUsers: $canEditUsers,canQC:$canQC, canApproveReagent:$canApproveReagent,
            first_name: $first_name, id:$id,last_name:$last_name, name_lower: $name_lower, password: $password, user_name: $user_name)
    }
`