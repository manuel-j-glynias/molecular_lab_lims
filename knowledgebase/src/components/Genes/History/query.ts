import gql from 'graphql-tag';

export const QUERY_EditableStatement = gql`
    query EditableStatement($field:String){
        EditableStatement(field: $field, orderBy: edit_date_desc) {
            field
            statement
            edit_date
            editor{
                name
            }
        }
    }
`;