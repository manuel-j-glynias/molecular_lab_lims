import gql from 'graphql-tag';


export const QUERY_EditableXRefList = gql`
    query EditableXRefList($field:String){
        EditableXRefList(field: $field, orderBy: editDate_desc) {
            id
            field
            list{
                source
                sourceId
            }
            editDate
            editor{
                id
                name
            }
        }
    }
`;