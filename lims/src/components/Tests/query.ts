import gql from 'graphql-tag';

export const QUERY_TESTS = gql`
    query TestsList($str: String){
        Molecular_Lab_Test(orderBy: name_asc, filter: {name_lower_contains: $str}){
            id
            name
            description
            ngsBased
            authorized_diagnoses
            acceptable_sample_type{
                id
                name
                requires_pathologist_qc
            }
            orders{
                id
                patient_name
                received_order_id
                ml_order_id
                order_date
                ordered_by{
                    id
                    first_name
                    last_name
                    degrees
                }
                mrn
                received_date
                 status{
                     id
                    status
                }

            }

        }
    }
`;

/*
updateMolecular_Lab_Test(
description: String!
id: ID!
name: String!
name_lower: String!
ngsBased: Boolean!): String

addMolecular_Lab_TestAcceptable_sample_type(acceptable_sample_type: [ID!]!id: ID!): String

createMolecular_Lab_Test(
description: String!
id: ID!
name: String!
name_lower: String!
ngsBased: Boolean!): String
 */

export const UPDATE_TEST = gql`
    mutation update_test($description:String!,$id:ID!,$name:String!,$name_lower:String!,$ngsBased:Boolean!, $acceptable_sample_type:[ID!]!, 
        $authorized_diagnoses:[String]!) {
        updateMolecular_Lab_Test(description: $description,id: $id,name:$name,name_lower:$name_lower,ngsBased: $ngsBased, authorized_diagnoses:$authorized_diagnoses),
        addMolecular_Lab_TestAcceptable_sample_type(acceptable_sample_type:$acceptable_sample_type, id: $id)
    }
`
export const CREATE_TEST = gql`
    mutation create_test($description:String!,$id:ID!,$name:String!,$name_lower:String!,$ngsBased:Boolean!, $acceptable_sample_type:[ID!]!,$authorized_diagnoses:[String]!) {
        createMolecular_Lab_Test(description: $description,id: $id,name:$name,name_lower:$name_lower,ngsBased: $ngsBased, authorized_diagnoses:$authorized_diagnoses),
        addMolecular_Lab_TestAcceptable_sample_type(acceptable_sample_type:$acceptable_sample_type, id: $id)
    }
`