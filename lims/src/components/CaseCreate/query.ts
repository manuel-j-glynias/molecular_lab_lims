import gql from 'graphql-tag';

/*
createCase(created_date: String!id: ID!)
addCaseCreated_by(created_by: [ID!]!id: ID!): String
addCaseOrder(id: ID!order: [ID!]!): String
addCaseSample(id: ID!sample: [ID!]!): String
 */
export const CREATE_ONE_STATUS_UPDATE = gql`
    mutation createOneStatusUpdate($status_date:String!,$created_by:ID!,
        $status:acceptedStatus!,$status_graph_id:ID!,$old_status_graph_id:ID!,)
    {
        createStatusUpdate(status: $status,date: $status_date,id: $status_graph_id),
        addStatusUpdateBy(id: $status_graph_id,by: [$created_by]),
        addStatusUpdatePreviousStatus(id: $status_graph_id, previousStatus: [$old_status_graph_id]),
    }
    `

export const CREATE_CASE = gql`
    mutation createCase($created_date:String!,$id:ID!,$created_by:ID!,
        $order_graph_id:ID!,$order_status_graph_id:ID!,
        $sample_graph_id:ID!,$sample_status_graph_id:ID!)
    {
        createCase(created_date:$created_date,id:$id),
        addCaseCreated_by(created_by: [$created_by], id: $id),
        
        addCaseOrder(id:$id, order:[$order_graph_id]),
        addOrderStatus(id: $order_graph_id, status:[$order_status_graph_id]),
        
        addCaseSample(id:$id, sample:[$sample_graph_id]),
        addSampleStatus(id: $sample_graph_id, status:[$sample_status_graph_id])

    }
`;