import gql from 'graphql-tag';


export const QUERY_EditableSynonymList = gql`
    query EditableStringList($field:String){
        EditableStringList(field: $field, orderBy: editDate_desc) {
            id
            field
            stringList
            editDate
            editor{
                id
                name
            }
        }
    }
`;