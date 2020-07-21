import gql from 'graphql-tag';

export const QUERY_EditableBoolean = gql`
    query EditableBoolean($field:String){
        EditableBoolean(field: $field, orderBy: editDate_desc) {
            field
            booleanValue
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

