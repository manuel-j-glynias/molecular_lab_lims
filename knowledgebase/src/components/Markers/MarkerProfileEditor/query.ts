import gql from "graphql-tag";

export const MarkerProfileQuery = gql`
    query MarkerProfile($marker_id: ID)
    {
        MarkerProfile(id: $marker_id){
            id
            name{
                ...es_fields
            }
            conjunction{
                id
                field
                conjunction
                editDate
                editor{
                    id
                    name
                }
                references{
                    id
                    ... on LiteratureReference {
                        PMID
                    }
                }           }
            components{
                id
                field
                components{
                    id
                    name{
                        id
                        statement
                    }
                }
                editDate
                editor{
                    id
                    name
                }
                references{
                    id
                    ... on LiteratureReference {
                        PMID
                    }
                }
            }
             resultString{
                ...es_fields
            }
        }
    }
    
`;

export const mutation_add_name = gql`
    mutation MarkerProfileAddName($marker_id: ID!, $old_es_id: ID!, $date: String!, $es_field: String!, $es_statement: String!, $es_id: ID!, $user_id: ID!, $ref_aray:[ID!]!) {
        deleteMarkerProfileName(id: $marker_id, name: [$old_es_id])
        createEditableStatement(editDate: $date, field: $es_field, id: $es_id, statement: $es_statement)
        addEditableStatementEditor(editor: [$user_id], id: $es_id)
        addEditableStatementReferences(id: $es_id, references: $ref_aray)
        addMarkerProfileName(id: $marker_id, name: [$es_id])
    }
`


export const mutation_add_results = gql`
    mutation MarkerProfileAddResults($marker_id: ID!, $old_es_id: ID!, $date: String!, $es_field: String!, $es_statement: String!, $es_id: ID!, $user_id: ID!, $ref_aray:[ID!]!) {
        deleteMarkerProfileResultString(id: $marker_id, resultString:[$old_es_id]) 
        createEditableStatement(editDate: $date, field: $es_field, id: $es_id, statement: $es_statement)
        addEditableStatementEditor(editor: [$user_id], id: $es_id)
        addEditableStatementReferences(id: $es_id, references: $ref_aray)
        addMarkerProfileResultString(id: $marker_id, resultString: [$es_id])
    }
`
export const mutation_add_conjuction = gql`
    mutation MarkerProfileAddConjuction($marker_id: ID!, $old_id: ID!, $date: String!, $field: String!, $conjunction:OmniConjunction!, $id: ID!, $user_id: ID!, $ref_array:[ID!]!) {
        deleteMarkerProfileConjunction(id: $marker_id, conjunction: [$old_id])
        createEditableOmniConjunction(id: $id,field: $field,conjunction: $conjunction,editDate: $date)
        addEditableOmniConjunctionEditor(editor: [$user_id], id: $id)
        addEditableOmniConjunctionReferences(id: $id, references: $ref_array)
        addMarkerProfileConjunction(id:$marker_id, conjunction: [$id])
    }
`
export const mutation_add_components = gql`
    mutation MarkerProfileAddComponents($marker_id: ID!, $old_id: ID!, $date: String!, $field: String!, $components:[ID!]!, $id: ID!, $user_id: ID!, $ref_array:[ID!]!) {
        deleteMarkerProfileComponents(id: $marker_id, components: [$old_id])
        createEditableMarkerComponentList(id: $id,field: $field,editDate: $date)
        addEditableMarkerComponentListComponents(id: $id,components: $components)
        addEditableMarkerComponentListEditor(editor: [$user_id], id: $id)
        addEditableMarkerComponentListReferences(id: $id, references: $ref_array)
        addMarkerProfileComponents(id:$marker_id, components: [$id])
    }
`
