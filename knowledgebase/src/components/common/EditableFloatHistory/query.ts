import gql from 'graphql-tag';

export const QUERY_EditableInt = gql`
    query EditableFloat($field:String){
        EditableFloat(field: $field, orderBy: editDate_desc) {
            field
            floatValue
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

