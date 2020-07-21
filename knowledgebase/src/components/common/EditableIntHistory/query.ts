import gql from 'graphql-tag';

export const QUERY_EditableInt = gql`
    query EditableInt($field:String){
        EditableInt(field: $field, orderBy: editDate_desc) {
            field
            intValue
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

