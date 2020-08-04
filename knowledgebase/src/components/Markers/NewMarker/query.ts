import gql from "graphql-tag";

export const mutation_create_marker_profile = gql`
    mutation CreateMarkerProfile($marker_id: ID!, 
        $date: String!,$user_id: ID!, $ref_array:[ID!]!,$empty_string:String!,
        $name_id: ID!,$name:String!,  $name_field: String!, $conjunction_id:ID!,$conjuction_field:String!,$components_id:ID!,$components_field:String!,
        $method_id:ID!, $method_field:String!,$result_string_id:ID!, $result_string_field:String!, ){
        createMarkerProfile(id: $marker_id)
        components: createEditableMarkerComponentList(id:$components_id,editDate:$date,field:$components_field)
        components_editor: addEditableMarkerComponentListEditor(id: $components_id,editor: [$user_id])
        components_ref: addEditableMarkerComponentListReferences(id: $components_id, references: $ref_array)
        addMarkerProfileComponents(components:[$components_id], id:$marker_id)
        conjuction: createEditableOmniConjunction(conjunction: All,id: $conjunction_id,field: $conjuction_field,editDate:$date)
        conjuction_editor: addEditableOmniConjunctionEditor(id: $conjunction_id,editor: [$user_id])
        conjuction_ref: addEditableOmniConjunctionReferences(id: $conjunction_id, references: $ref_array)
        addMarkerProfileConjunction(id: $marker_id,conjunction:[$conjunction_id])
        name: createEditableStatement(editDate: $date, field: $name_field, id: $name_id, statement: $name)
        name_editor: addEditableStatementEditor(editor: [$user_id], id: $name_id)
        name_ref: addEditableStatementReferences(id: $name_id, references: $ref_array)
            addMarkerProfileName(id: $marker_id, name: [$name_id])
        method: createEditableStatement(editDate: $date, field: $method_field, id: $method_id, statement: $empty_string)
        method_editor: addEditableStatementEditor(editor: [$user_id], id: $method_id)
        method_ref: addEditableStatementReferences(id: $method_id, references: $ref_array)
            addMarkerProfileMethod(id: $marker_id,method: [$method_id])
        result: createEditableStatement(editDate: $date, field: $result_string_field, id: $result_string_id, statement: $empty_string)
        result_editor: addEditableStatementEditor(editor: [$user_id], id: $result_string_id)
        result_ref: addEditableStatementReferences(id: $result_string_id, references: $ref_array)
            addMarkerProfileResultString(id: $marker_id,resultString: [$result_string_id])
       
    }
`
