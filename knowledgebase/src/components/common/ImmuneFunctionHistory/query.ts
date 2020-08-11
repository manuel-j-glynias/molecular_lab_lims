import gql from 'graphql-tag';

export const QUERY_EditableImmuneFunction = gql`
    query EditableImmuneFunction($field:String){
        EditableImmuneFunction(field: $field, orderBy: editDate_desc) {
            id
            field
            immuneFunction
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

