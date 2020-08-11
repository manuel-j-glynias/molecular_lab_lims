import gql from 'graphql-tag';

export const QUERY_EditableInt = gql`
    query EditableFloat($field:String){
        EditableFloat(field: $field, orderBy: editDate_desc) {
            id
            field
            floatValue
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

