import gql from 'graphql-tag';

export const QUERY_EditableBoolean = gql`
    query EditableBoolean($field:String){
        EditableBoolean(field: $field, orderBy: editDate_desc) {
            id
            field
            booleanValue
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

