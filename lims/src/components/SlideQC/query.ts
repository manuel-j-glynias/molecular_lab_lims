import gql from 'graphql-tag';

export const READY_FOR_QC_SAMPLES_QUERY = gql`query ReadyForQCSamplesList($str: String){
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
        status{
            id
            status
            date
            by{
                id
                user_name
            }
        }
        comments
        ml_order_id
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


export const QC_ACCEPT_SAMPLE = gql`
    mutation qc_acceptSample($qc_acceptance_value:QC_Acceptance_Value!,$diagnosis:String!,$qc_graph_id:ID!,$macro_dissection_required:Boolean!,
        $percent_neoplastic_cells:Float!,$qc_date:String!,$sample_size_mm2:Float!,
        $status:acceptedStatus!,$status_date:String!,$sample_graph_id:ID!, $accepted_by:ID!,$status_graph_id:ID!,$old_status_graph_id:ID!)
    {
        createPathologist_QC(acceptance_value: $qc_acceptance_value,diagnosis: $diagnosis,id: $qc_graph_id,macro_dissection_required: $macro_dissection_required,
        percent_neoplastic_cells: $percent_neoplastic_cells,qc_date: $qc_date, sample_size_mm2: $sample_size_mm2),
        addPathologist_QCQc_by(id: $qc_graph_id, qc_by: [$accepted_by]),
        addSamplePathologist_qc(id:$sample_graph_id, pathologist_qc:[$qc_graph_id]),
        createStatusUpdate(status: $status,date: $status_date,id: $status_graph_id),
        addStatusUpdateBy(id: $status_graph_id,by: [$accepted_by]),
        addStatusUpdatePreviousStatus(id: $status_graph_id, previousStatus: [$old_status_graph_id]),
        addSampleStatus(id: $sample_graph_id, status:[$status_graph_id])
    }
`;

export const QC_REJECT_SAMPLE = gql`
    mutation qc_rejectSample($qc_acceptance_value:QC_Acceptance_Value!,$diagnosis:String!,$qc_graph_id:ID!,$macro_dissection_required:Boolean!,
        $percent_neoplastic_cells:Float!,$qc_date:String!,$sample_size_mm2:Float!,
        $status:acceptedStatus!,$status_date:String!,$sample_graph_id:ID!, $accepted_by:ID!,$status_graph_id:ID!,$old_status_graph_id:ID!,
        $comments:String!,$rejected_reason:Sample_Rejection_Reason_Fields)
    {
        createPathologist_QC(acceptance_value: $qc_acceptance_value,diagnosis: $diagnosis,id: $qc_graph_id,macro_dissection_required: $macro_dissection_required,
            percent_neoplastic_cells: $percent_neoplastic_cells,qc_date: $qc_date, sample_size_mm2: $sample_size_mm2),
        addPathologist_QCQc_by(id: $qc_graph_id, qc_by: [$accepted_by]),
        addSamplePathologist_qc(id:$sample_graph_id, pathologist_qc:[$qc_graph_id]),
        createStatusUpdate(status: $status,date: $status_date,id: $status_graph_id,comments: $comments,rejected_reason: $rejected_reason),
        addStatusUpdateBy(id: $status_graph_id,by: [$accepted_by]),
        addStatusUpdatePreviousStatus(id: $status_graph_id, previousStatus: [$old_status_graph_id]),
        addSampleStatus(id: $sample_graph_id, status:[$status_graph_id])
    }
`;