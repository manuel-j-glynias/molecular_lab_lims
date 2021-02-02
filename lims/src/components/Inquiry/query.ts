import gql from 'graphql-tag';

export const INQUIRY_ORDERS = gql`query InquiryList($str: String){
    Order(orderBy: ml_order_id_asc, filter: { search_string_lower_contains: $str}) {
        id
        status{
            id
            date
            status
            by {
                id
                user_name
            }
        }
        search_string_lower
        patient_name
        mrn
        date_of_birth
        sex
        diagnosis
        ml_order_id
        received_order_id
        order_date
        received_date
        rejected_once
        comments
        test_ordered{
            id
            name
            description
            acceptable_sample_type{
                name
                requires_pathologist_qc
            }
        }
        information_request{
            id
            field
            requested_by{
                user_name
            }
            requested_date
            resolved_by{
                user_name
            }
            resolved_date
        }
        attending_physician{
            id
            first_name
            last_name
            degrees
            email
        }
        ordered_by{
            id
            first_name
            last_name
            degrees
            email
            badge_id
            orders{
                ml_order_id
            }
        }
    }
}
`;



