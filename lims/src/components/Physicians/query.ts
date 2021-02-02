import gql from 'graphql-tag';

export const QUERY_PHYSICIANS = gql`
    query PhysicianList($str: String) {
        Physician(orderBy: last_name_asc, filter: {name_lower_contains: $str}) {
            id
            first_name
            last_name
            degrees
            email
            phone_number
            badge_id
            orders {
                id
                patient_name
                received_order_id
                ml_order_id
                order_date
                mrn
                received_date
                test_ordered{
                    id
                    name
                }
                status{
                    id
                    status
                }
            }
        }
    }
    
`;

/*
createPhysician(
badge_id: String!
degrees: String!
email: String!
first_name: String!
id: ID!
last_name: String!
name_lower: String!
phone_number: String!): String

updatePhysician(
badge_id: String!
degrees: String!
email: String!
first_name: String!
id: ID!
last_name: String!
name_lower: String!
phone_number: String!): String
 */

export const UPDATE_PHYSICIAN = gql`
    mutation update_physician($badge_id:String!,$degrees:String!,$email:String!,$first_name:String!,$id:ID!,$last_name:String!,
        $name_lower:String!,$phone_number:String!){
        updatePhysician(badge_id: $badge_id, degrees: $degrees,email: $email,first_name: $first_name,id: $id,last_name: $last_name,
            name_lower: $name_lower,phone_number: $phone_number)
    }
`
export const CREATE_PHYSICIAN = gql`
    mutation create_physician($badge_id:String!,$degrees:String!,$email:String!,$first_name:String!,$id:ID!,$last_name:String!,
        $name_lower:String!,$phone_number:String!){
        createPhysician(badge_id: $badge_id, degrees: $degrees,email: $email,first_name: $first_name,id: $id,last_name: $last_name,
            name_lower: $name_lower,phone_number: $phone_number)
    }
`