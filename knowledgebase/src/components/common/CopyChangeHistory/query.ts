import gql from 'graphql-tag';

export const QUERY_EditableCopyChange = gql`
    query EditableCopyChange($field:String){
        EditableCopyChange(field: $field, orderBy: editDate_desc) {
            id
            field
            cnvType
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

