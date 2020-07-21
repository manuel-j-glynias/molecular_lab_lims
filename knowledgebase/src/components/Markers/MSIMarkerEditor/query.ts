import gql from "graphql-tag";

export const MSIMarkerQuery = gql`
    query MSI_Marker($marker_id: ID)
    {
        MSIMarker(id: $marker_id){
            id
            name{
                ...es_fields
            }
            method{
                ...es_fields
            }
            resultString{
                ...es_fields
            }
        }
    }
`;

export const mutation_add_name = gql`
    mutation MsiMarkerAddName($marker_id: ID!, $old_es_id: ID!, $date: String!, $es_field: String!, $es_statement: String!, $es_id: ID!, $user_id: ID!, $ref_aray:[ID!]!) {
        deleteMSIMarkerName(id: $marker_id, name: [$old_es_id])
        createEditableStatement(editDate: $date, field: $es_field, id: $es_id, statement: $es_statement)
        addEditableStatementEditor(editor: [$user_id], id: $es_id)
        addEditableStatementReferences(id: $es_id, references: $ref_aray)
        addMSIMarkerName(id: $marker_id, name: [$es_id])
    }
`

export const mutation_add_method = gql`
    mutation MsiMarkerAddMethod($marker_id: ID!, $old_es_id: ID!, $date: String!, $es_field: String!, $es_statement: String!, $es_id: ID!, $user_id: ID!, $ref_aray:[ID!]!) {
        deleteMSIMarkerMethod(id: $marker_id, method: [$old_es_id])
        createEditableStatement(editDate: $date, field: $es_field, id: $es_id, statement: $es_statement)
        addEditableStatementEditor(editor: [$user_id], id: $es_id)
        addEditableStatementReferences(id: $es_id, references: $ref_aray)
        addMSIMarkerMethod(id: $marker_id, method: [$es_id])
    }
`

export const mutation_add_results = gql`
    mutation MsiMarkerAddResults($marker_id: ID!, $old_es_id: ID!, $date: String!, $es_field: String!, $es_statement: String!, $es_id: ID!, $user_id: ID!, $ref_aray:[ID!]!) {
        deleteMSIMarkerResultString(id: $marker_id, resultString:[$old_es_id]) 
        createEditableStatement(editDate: $date, field: $es_field, id: $es_id, statement: $es_statement)
        addEditableStatementEditor(editor: [$user_id], id: $es_id)
        addEditableStatementReferences(id: $es_id, references: $ref_aray)
        addMSIMarkerResultString(id: $marker_id, resultString: [$es_id])
    }
`