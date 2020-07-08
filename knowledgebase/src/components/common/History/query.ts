import gql from 'graphql-tag';

export const QUERY_EditableStatement = gql`
    query EditableStatement($field:String){
        EditableStatement(field: $field, orderBy: editDate_desc) {
            field
            statement
            editDate
            editor{
                name
            }
        }
    }
`;

