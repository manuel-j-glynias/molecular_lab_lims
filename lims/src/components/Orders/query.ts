import gql from 'graphql-tag';

export const QUERY_ORDERS = gql`query OrdersList($str: String,$str2: String){
    Order(orderBy: ml_order_id_asc, filter: {AND: [{OR: [{information_request_some: {id_starts_with: ""}}, {ml_order_id_starts_with: $str2}]}, {search_string_lower_contains: $str},{status:{status:not_ready}}]}) {
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
}`;


// updateOrder_Information_Request(
//     field: Order_Information_Request_Fields!
// id: ID!
// requested_date: String!
// resolved_date: String!): String


export const UPDATE_ORDER_INFORMATION_REQUEST = gql`
    mutation updateOrder_Information_Request($field: Order_Information_Request_Fields!, $id:ID!, $requested_date:String!, $resolved_date:String!, $resolved_by:ID!) {
        updateOrder_Information_Request(field: $field, id: $id,requested_date: $requested_date, resolved_date: $resolved_date),
        addOrder_Information_RequestResolved_by(id: $id, resolved_by: [$resolved_by])
    }`;

export const ADD_ORDER_INFORMATION_REQUEST = gql`
    mutation addOrder_Information_Request($field: Order_Information_Request_Fields!, $id:ID!,$requested_date:String!,$requested_by:ID!,$order_id:ID!){
        createOrder_Information_Request(field: $field, id: $id,requested_date: $requested_date, resolved_date:"-"),
        addOrder_Information_RequestRequested_by(id: $id,requested_by: [$requested_by]),
        addOrderInformation_request(id:$order_id,information_request:[$id])
    }
`;

export const UPDATE_ORDER = gql`
    mutation updateOrder($comments:String!,$date_of_birth:String!,$diagnosis:String!,$id:ID!,$ml_order_id:String!,$mrn:String!,$order_date:String!,
    $patient_name:String!,$received_date:String!,$received_order_id:String!,$rejected_once:Boolean!,$search_string_lower:String!,$sex:String!,
    $attending_physician_id:ID!,$ordered_by_id:ID!,$test_id:ID!)
    {
        updateOrder(comments:$comments,date_of_birth:$date_of_birth,diagnosis:$diagnosis,id:$id,ml_order_id:$ml_order_id,mrn:$mrn,
            order_date:$order_date,patient_name:$patient_name,received_date:$received_date,received_order_id:$received_order_id,
            rejected_once:$rejected_once,search_string_lower:$search_string_lower,sex:$sex, ),
        addOrderAttending_physician(attending_physician: [$attending_physician_id], id: $id),
        addOrderOrdered_by(id: $id, ordered_by: [$ordered_by_id]),
        addOrderTest_ordered(id: $id,test_ordered: [$test_id])
    }
`;

export const CREATE_ORDER = gql`
    mutation createOrder($comments:String!,$date_of_birth:String!,$diagnosis:String!,$id:ID!,$ml_order_id:String!,$mrn:String!,$order_date:String!,
        $patient_name:String!,$received_date:String!,$received_order_id:String!,$rejected_once:Boolean!,$search_string_lower:String!,$sex:String!,
        $attending_physician_id:ID!,$ordered_by_id:ID!,$test_id:ID!,$status_date:String!,$status_graph_id:ID!, $created_by:ID!)
    {
        createOrder(comments:$comments,date_of_birth:$date_of_birth,diagnosis:$diagnosis,id:$id,ml_order_id:$ml_order_id,mrn:$mrn,
            order_date:$order_date,patient_name:$patient_name,received_date:$received_date,received_order_id:$received_order_id,
            rejected_once:$rejected_once,search_string_lower:$search_string_lower,sex:$sex),
        addOrderAttending_physician(attending_physician: [$attending_physician_id], id: $id),
        addOrderOrdered_by(id: $id, ordered_by: [$ordered_by_id]),
        addOrderTest_ordered(id: $id,test_ordered: [$test_id]),
        createStatusUpdate(status: not_ready,date: $status_date,id: $status_graph_id),
        addStatusUpdateBy(id: $status_graph_id,by: [$created_by]),
        addOrderStatus(id: $id, status:[$status_graph_id])
    }
`;

export const ACCEPT_ORDER = gql`
    mutation acceptOrder($status_date:String!,$id:ID!, $accepted_by:ID!,$status_graph_id:ID!,$old_status_graph_id:ID!)
    {
        createStatusUpdate(status: accepted,date: $status_date,id: $status_graph_id),
        addStatusUpdateBy(id: $status_graph_id,by: [$accepted_by]),
        addStatusUpdatePreviousStatus(id: $status_graph_id, previousStatus: [$old_status_graph_id]),
        addOrderStatus(id: $id, status:[$status_graph_id])
    }
`;
export const REJECT_ORDER = gql`
    mutation rejectOrder($status_date:String!,$id:ID!, $rejected_by:ID!,$status_graph_id:ID!,$old_status_graph_id:ID!)
    {
        createStatusUpdate(status: rejected,date: $status_date,id: $status_graph_id),
        addStatusUpdateBy(id: $status_graph_id,by: [$rejected_by]),
        addStatusUpdatePreviousStatus(id: $status_graph_id, previousStatus: [$old_status_graph_id]),
        addOrderStatus(id: $id, status:[$status_graph_id])
    }
`;
