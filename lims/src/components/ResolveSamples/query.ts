import gql from 'graphql-tag';

export const QUERY_RESOLVE_SAMPLES = gql`query ResolveSamplesList($str: String){
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
                rejected_reason
                comments
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
            pathologist_qc{
                id
                acceptance_value
                diagnosis
                macro_dissection_required
                percent_neoplastic_cells
                qc_by{
                    id
                    user_name
                }
                qc_date
            }
            
        }
    
}`;

export const RESOLVE_SAMPLE = gql`
    mutation resolveSample($status_date:String!,$id:ID!, $rejected_by:ID!,$status_graph_id:ID!,$old_status_graph_id:ID!,
        $comments:String!,$rejected_reason:Sample_Rejection_Reason_Fields!)
    {
        createStatusUpdate(status: sample_rejection_resolved,date: $status_date,id: $status_graph_id,comments: $comments,rejected_reason: $rejected_reason)
        addStatusUpdateBy(id: $status_graph_id,by: [$rejected_by]),
        addStatusUpdatePreviousStatus(id: $status_graph_id, previousStatus: [$old_status_graph_id]),
        addSampleStatus(id: $id, status:[$status_graph_id])
    }
`;