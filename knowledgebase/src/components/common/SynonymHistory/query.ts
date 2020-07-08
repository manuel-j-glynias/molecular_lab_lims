import gql from 'graphql-tag';


export const QUERY_EditableSynonymList = gql`
    query EditableStringList($field:String){
        EditableStringList(field: $field, orderBy: editDate_desc) {
            field
            stringList
            editDate
            editor{
                name
            }
        }
    }
`;