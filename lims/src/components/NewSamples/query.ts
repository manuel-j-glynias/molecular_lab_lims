import gql from 'graphql-tag';

export const QUERY_SAMPLES = gql`query SamplesList($str: String){
        Sample(filter:{AND:[{search_string_lower_contains: $str},{status:{status:not_ready}}]}) {
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
            status{
                id
                status
                by{
                    id
                    user_name
                }
                date
            }
            comments
            received_order_id
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



export const ACCEPT_SAMPLE = gql`  
    mutation acceptSample($status:acceptedStatus!,$status_date:String!,$id:ID!, $accepted_by:ID!,$status_graph_id:ID!,$old_status_graph_id:ID!)
    {
        createStatusUpdate(status: $status,date: $status_date,id: $status_graph_id),
        addStatusUpdateBy(id: $status_graph_id,by: [$accepted_by]),
        addStatusUpdatePreviousStatus(id: $status_graph_id, previousStatus: [$old_status_graph_id]),
        addSampleStatus(id: $id, status:[$status_graph_id])
    }
`;
export const REJECT_SAMPLE = gql`
    mutation rejectSample($status_date:String!,$id:ID!, $rejected_by:ID!,$status_graph_id:ID!,$old_status_graph_id:ID!,
        $comments:String!,$rejected_reason:Sample_Rejection_Reason_Fields!)
    {
        createStatusUpdate(status: rejected,date: $status_date,id: $status_graph_id,comments: $comments,rejected_reason: $rejected_reason)
        addStatusUpdateBy(id: $status_graph_id,by: [$rejected_by]),
        addStatusUpdatePreviousStatus(id: $status_graph_id, previousStatus: [$old_status_graph_id]),
        addSampleStatus(id: $id, status:[$status_graph_id])
    }
`;
export const CREATE_SAMPLE = gql`
    mutation createSample($collected_date: String!,$comments:String!,$id:ID!,$mrn:String!,$patient_name:String!,
        $received_date:String!,$received_order_id:String!,$sample_id: String!,$sample_location: String!,$search_string_lower: String!,
        $ordered_by_id:ID!,$sample_type_id:ID!,$status_date:String!,$status_graph_id:ID!,$created_by:ID!)
    {
        createSample(collected_date:$collected_date, comments:$comments, id:$id, mrn:$mrn,patient_name:$patient_name,
            received_date:$received_date,received_order_id:$received_order_id,sample_id:$sample_id,sample_location:$sample_location,search_string_lower:$search_string_lower),
        addSampleSample_type(sample_type: [$sample_type_id], id: $id),
        addSampleOrdered_by(ordered_by: [$ordered_by_id], id: $id),
        createStatusUpdate(status: not_ready,date: $status_date,id: $status_graph_id),
        addStatusUpdateBy(id: $status_graph_id,by: [$created_by]),
        addSampleStatus(id: $id, status:[$status_graph_id])
    }
`;
export const UPDATE_SAMPLE = gql`
    mutation updateSample($collected_date: String!,$comments:String!,$id:ID!,$mrn:String!,$patient_name:String!,
        $received_date:String!,$received_order_id:String!,$sample_id: String!,$sample_location: String!,$search_string_lower: String!,
        $ordered_by_id:ID!,$sample_type_id:ID!)
    {
        updateSample(collected_date:$collected_date, comments:$comments, id:$id, mrn:$mrn,patient_name:$patient_name,
            received_date:$received_date,received_order_id:$received_order_id,sample_id:$sample_id,sample_location:$sample_location,search_string_lower:$search_string_lower,),
        addSampleSample_type(sample_type: [$sample_type_id], id: $id),
        addSampleOrdered_by(ordered_by: [$ordered_by_id], id: $id),
    }
`;