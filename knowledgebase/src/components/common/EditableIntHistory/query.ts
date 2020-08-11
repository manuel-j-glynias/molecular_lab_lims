import gql from 'graphql-tag';

export const QUERY_EditableInt = gql`
    query EditableInt($field:String){
        EditableInt(field: $field, orderBy: editDate_desc) {
            id
            field
            intValue
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

