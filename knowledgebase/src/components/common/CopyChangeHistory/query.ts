import gql from 'graphql-tag';

export const QUERY_EditableCopyChange = gql`
    query EditableCopyChange($field:String){
        EditableCopyChange(field: $field, orderBy: editDate_desc) {
            field
            cnvType
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

