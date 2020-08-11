import gql from 'graphql-tag';

export const QUERY_EditableImmuneCycleRole = gql`
    query EditableImmuneCycleRole($field:String){
        EditableImmuneCycleRole(field: $field, orderBy: editDate_desc) {
            id
            field
            immuneCycleRole
            editDate
            editor{
                id
                name
            }
            references{
                id
                shortReference
            }
        }
    }
`;

