import gql from 'graphql-tag';

export const QUERY_EditableImmuneFunction = gql`
    query EditableImmuneFunction($field:String){
        EditableImmuneFunction(field: $field, orderBy: editDate_desc) {
            field
            immuneFunction
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

