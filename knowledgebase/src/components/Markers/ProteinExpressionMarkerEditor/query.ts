import gql from "graphql-tag";

export const ProteinExpressionMarkerQuery = gql`
    query ProteinExpression_Marker($marker_id: ID)
    {
        ProteinExpressionMarker(id: $marker_id){
            id
            name{
                ...es_fields
            }
            method{
                ...es_fields
            }
            synonyms{
                id
                stringList
                field
                references {
                    id
                    ... on LiteratureReference {
                        PMID
                    }
                }
                editor {
                    id
                    name
                }
                editDate
            }
            genes{
                id
                genes{
                    id
                    name
                }
                field
                references {
                    id
                    ... on LiteratureReference {
                        PMID
                    }
                }
                editor {
                    id
                    name
                }
                editDate
            }
            assay{
                id
                name{
                    statement
                }
                __typename
            }
            immunePhenotypes{
                id
                immunePhenotype
                field
                references {
                    id
                    ... on LiteratureReference {
                        PMID
                    }
                }
                editor {
                    id
                    name
                }
                editDate
            }
            immuneFunctions{
                id
                immuneFunction
                field
                references {
                    id
                    ... on LiteratureReference {
                        PMID
                    }
                }
                editor {
                    id
                    name
                }
                editDate
            }
            immuneCycleRoles{
                id
                immuneCycleRole
                field
                references {
                    id
                    ... on LiteratureReference {
                        PMID
                    }
                }
                editor {
                    id
                    name
                }
                editDate
            }
            resultString{
                ...es_fields
            }
        }
    }
`;

export const mutation_add_name = gql`
    mutation ProteinExpressionMarkerAddName($marker_id: ID!, $old_es_id: ID!, $date: String!, $es_field: String!, $es_statement: String!, $es_id: ID!, $user_id: ID!, $ref_aray:[ID!]!) {
        deleteProteinExpressionMarkerName(id: $marker_id, name: [$old_es_id])
        createEditableStatement(editDate: $date, field: $es_field, id: $es_id, statement: $es_statement)
        addEditableStatementEditor(editor: [$user_id], id: $es_id)
        addEditableStatementReferences(id: $es_id, references: $ref_aray)
        addProteinExpressionMarkerName(id: $marker_id, name: [$es_id])
    }
`

export const mutation_add_method = gql`
    mutation ProteinExpressionMarkerAddMethod($marker_id: ID!, $old_es_id: ID!, $date: String!, $es_field: String!, $es_statement: String!, $es_id: ID!, $user_id: ID!, $ref_aray:[ID!]!) {
        deleteProteinExpressionMarkerMethod(id: $marker_id, method: [$old_es_id])
        createEditableStatement(editDate: $date, field: $es_field, id: $es_id, statement: $es_statement)
        addEditableStatementEditor(editor: [$user_id], id: $es_id)
        addEditableStatementReferences(id: $es_id, references: $ref_aray)
        addProteinExpressionMarkerMethod(id: $marker_id, method: [$es_id])
    }
`

export const mutation_add_results = gql`
    mutation ProteinExpressionMarkerAddResults($marker_id: ID!, $old_es_id: ID!, $date: String!, $es_field: String!, $es_statement: String!, $es_id: ID!, $user_id: ID!, $ref_aray:[ID!]!) {
        deleteProteinExpressionMarkerResultString(id: $marker_id, resultString:[$old_es_id]) 
        createEditableStatement(editDate: $date, field: $es_field, id: $es_id, statement: $es_statement)
        addEditableStatementEditor(editor: [$user_id], id: $es_id)
        addEditableStatementReferences(id: $es_id, references: $ref_aray)
        addProteinExpressionMarkerResultString(id: $marker_id, resultString: [$es_id])
    }
`
export const mutation_add_synonym_string = gql`
    mutation ProteinExpressionMarkerAddSynonyms($marker_id: ID!, $old_esyn_id: ID!, $date: String!, $esyn_field: String!, $esyn_list: [String]!, $esyn_id: ID!, $user_id: ID!) {
        deleteProteinExpressionMarkerSynonyms(id: $marker_id, synonyms: [$old_esyn_id])
        createEditableStringList(id: $esyn_id,field: $esyn_field,stringList: $esyn_list,editDate: $date)
        addEditableStringListEditor(editor: [$user_id], id: $esyn_id)
        addEditableStringListReferences(id: $esyn_id, references: [])
        addProteinExpressionMarkerSynonyms(id:$marker_id, synonyms: [$esyn_id])
     }
`
export const mutation_add_immune_phenotype = gql`
    mutation ProteinExpressionMarkerAddImmunePhenotype($marker_id: ID!, $old_id: ID!, $date: String!, $field: String!, $phenotype:ImmunePhenotype!, $id: ID!, $user_id: ID!, $ref_array:[ID!]!) {
        deleteProteinExpressionMarkerImmunePhenotypes(id: $marker_id, immunePhenotypes: [$old_id])
        createEditableImmunePhenotype(id: $id,field: $field,immunePhenotype: $phenotype,editDate: $date)
        addEditableImmunePhenotypeEditor(editor: [$user_id], id: $id)
        addEditableImmunePhenotypeReferences(id: $id, references: $ref_array) 
        addProteinExpressionMarkerImmunePhenotypes(id:$marker_id, immunePhenotypes: [$id])
    }
`
export const mutation_add_immune_function = gql`
    mutation ProteinExpressionMarkerAddImmuneFunction($marker_id: ID!, $old_id: ID!, $date: String!, $field: String!, $immuneFunction:ImmuneFunction!, $id: ID!, $user_id: ID!, $ref_array:[ID!]!) {
        deleteProteinExpressionMarkerImmuneFunctions(id: $marker_id, immuneFunctions: [$old_id])
        createEditableImmuneFunction(id: $id,field: $field,immuneFunction: $immuneFunction,editDate: $date)
        addEditableImmuneFunctionEditor(editor: [$user_id], id: $id)
        addEditableImmuneFunctionReferences(id: $id, references: $ref_array)
        addProteinExpressionMarkerImmuneFunctions(id:$marker_id, immuneFunctions: [$id])
    }
`

export const mutation_add_immune_cyle_role = gql`
    mutation ProteinExpressionMarkerAddImmuneCycleRole($marker_id: ID!, $old_id: ID!, $date: String!, $field: String!, $immuneCycleRole:ImmuneCycleRole!, $id: ID!, $user_id: ID!, $ref_array:[ID!]!) {
        deleteProteinExpressionMarkerImmuneCycleRoles(id: $marker_id, immuneCycleRoles: [$old_id])
        createEditableImmuneCycleRole(id: $id,field: $field,immuneCycleRole: $immuneCycleRole,editDate: $date)
        addEditableImmuneCycleRoleEditor(editor: [$user_id], id: $id)
        addEditableImmuneCycleRoleReferences(id: $id, references: $ref_array)
        addProteinExpressionMarkerImmuneCycleRoles(id:$marker_id, immuneCycleRoles: [$id])
    }  
`

