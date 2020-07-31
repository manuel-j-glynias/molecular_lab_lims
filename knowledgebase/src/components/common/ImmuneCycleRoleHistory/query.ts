import gql from 'graphql-tag';

export const QUERY_EditableImmuneCycleRole = gql`
    query EditableImmuneCycleRole($field:String){
        EditableImmuneCycleRole(field: $field, orderBy: editDate_desc) {
            field
            immuneCycleRole
            editDate
            editor{
                name
            }
            references{
                shortReference
            }
        }
    }
`;

