import gql from "graphql-tag";

export const TMBMarkerQuery = gql`
    query TMB_Marker($marker_id: ID)
    {
        TMBMarker(id: $marker_id){
            id
            name{
                ...es_fields
            }
            method{
                ...es_fields
            }
            comparator {
                id
                field
                comparator
                references {
                    id
                }
                editor {
                    id
                    name
                }
                editDate
            }
            resultMin {
                id
                field
                floatValue
                references {
                    id
                }
                editor {
                    id
                    name
                }
                editDate
            }
            resultMax {
                id
                field
                floatValue
                references {
                    id
                }
                editor {
                    id
                    name
                }
                editDate
            }
            resultUnits {
                ...es_fields
            }
            interpretations {
                id
                field
                tmbInterpretation
                references{
                    id
                }
                editor {
                    id
                    name
                }
                editDate
            }
            resultString {
                ...es_fields
            }
        }
    }
`;
export const mutation_add_name = gql`
    mutation TmbMarkerAddName($marker_id: ID!, $old_es_id: ID!, $date: String!, $es_field: String!, $es_statement: String!, $es_id: ID!, $user_id: ID!, $ref_aray:[ID!]!) {
        deleteTMBMarkerName(id: $marker_id, name: [$old_es_id])
        createEditableStatement(editDate: $date, field: $es_field, id: $es_id, statement: $es_statement)
        addEditableStatementEditor(editor: [$user_id], id: $es_id)
        addEditableStatementReferences(id: $es_id, references: $ref_aray)
        addTMBMarkerName(id: $marker_id, name: [$es_id])
    }
`

export const mutation_add_method = gql`
    mutation TmbMarkerAddMethod($marker_id: ID!, $old_es_id: ID!, $date: String!, $es_field: String!, $es_statement: String!, $es_id: ID!, $user_id: ID!, $ref_aray:[ID!]!) {
        deleteTMBMarkerMethod(id: $marker_id, method: [$old_es_id])
        createEditableStatement(editDate: $date, field: $es_field, id: $es_id, statement: $es_statement)
        addEditableStatementEditor(editor: [$user_id], id: $es_id)
        addEditableStatementReferences(id: $es_id, references: $ref_aray)
        addTMBMarkerMethod(id: $marker_id, method: [$es_id])
    }
`

export const mutation_add_results = gql`
    mutation TmbMarkerAddResults($marker_id: ID!, $old_es_id: ID!, $date: String!, $es_field: String!, $es_statement: String!, $es_id: ID!, $user_id: ID!, $ref_aray:[ID!]!) {
        deleteTMBMarkerResultString(id: $marker_id, resultString:[$old_es_id])
        createEditableStatement(editDate: $date, field: $es_field, id: $es_id, statement: $es_statement)
        addEditableStatementEditor(editor: [$user_id], id: $es_id)
        addEditableStatementReferences(id: $es_id, references: $ref_aray)
        addTMBMarkerResultString(id: $marker_id, resultString: [$es_id])
    }
`
export const mutation_add_result_units = gql`
    mutation TmbMarkerAddResultUnits($marker_id: ID!, $old_es_id: ID!, $date: String!, $es_field: String!, $es_statement: String!, $es_id: ID!, $user_id: ID!, $ref_aray:[ID!]!) {
        deleteTMBMarkerResultUnits(id: $marker_id, resultUnits:[$old_es_id])
        createEditableStatement(editDate: $date, field: $es_field, id: $es_id, statement: $es_statement)
        addEditableStatementEditor(editor: [$user_id], id: $es_id)
        addEditableStatementReferences(id: $es_id, references: $ref_aray)
        addTMBMarkerResultUnits(id: $marker_id, resultUnits: [$es_id])
    }
`
export const mutation_add_result_min = gql`
    mutation TmbMarkerAddResultMin($marker_id: ID!, $old_es_id: ID!, $date: String!, $es_field: String!, $ef_float: Float!, $es_id: ID!, $user_id: ID!, $ref_aray:[ID!]!) {
        deleteTMBMarkerResultMin(id: $marker_id, resultMin:[$old_es_id])
        createEditableFloat(editDate: $date, field: $es_field, id: $es_id, floatValue: $ef_float)
        addEditableFloatEditor(editor: [$user_id], id: $es_id)
        addEditableFloatReferences(id: $es_id, references: $ref_aray)
        addTMBMarkerResultMin(id: $marker_id, resultMin: [$es_id])
    }
`
export const mutation_add_result_max = gql`
    mutation TmbMarkerAddResultMax($marker_id: ID!, $old_es_id: ID!, $date: String!, $es_field: String!, $ef_float: Float!, $es_id: ID!, $user_id: ID!, $ref_aray:[ID!]!) {
        deleteTMBMarkerResultMax(id: $marker_id, resultMax:[$old_es_id])
        createEditableFloat(editDate: $date, field: $es_field, id: $es_id, floatValue: $ef_float)
        addEditableFloatEditor(editor: [$user_id], id: $es_id)
        addEditableFloatReferences(id: $es_id, references: $ref_aray)
        addTMBMarkerResultMax(id: $marker_id, resultMax: [$es_id]) 
    }
`

export const mutation_add_comparator = gql`
    mutation TmbMarkerAddComparator($marker_id: ID!, $old_es_id: ID!, $date: String!, $es_field: String!, $comp: AssayComparator!, $es_id: ID!, $user_id: ID!, $ref_aray:[ID!]! ) {
        deleteTMBMarkerComparator(id: $marker_id, comparator:[$old_es_id])
        createEditableAssayComparator(editDate: $date, field: $es_field, id: $es_id, comparator: $comp)
        addEditableAssayComparatorEditor(editor: [$user_id], id: $es_id)
        addEditableAssayComparatorReferences(id: $es_id, references: $ref_aray)
        addTMBMarkerComparator(id: $marker_id, comparator:[$es_id])
    }
`