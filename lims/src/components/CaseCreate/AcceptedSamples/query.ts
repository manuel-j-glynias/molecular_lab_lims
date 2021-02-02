import gql from 'graphql-tag';

export const QUERY_SAMPLES = gql`query AcceptedSamplesList($str: String){
        Sample(filter:{search_string_lower_contains: $str}) {
            id
            sample_id
            patient_name
            mrn
            collected_date
            received_date
            sample_type {
                id
                name
                requires_pathologist_qc
            }
           
            comments
            ml_order_id
            received_order_id
            status{
                id
                status
                by{
                    id
                    user_name
                }
                date
            }
            sample_location
            search_string_lower
            ordered_by{
                id
                first_name
                last_name
                degrees
                email
                badge_id

            }
        }
    
}`;