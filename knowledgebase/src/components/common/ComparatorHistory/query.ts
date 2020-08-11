import gql from 'graphql-tag';

export const QUERY_EditableAssayComparator = gql`
    query EditableAssayComparator($field:String){
        EditableAssayComparator(field: $field, orderBy: editDate_desc) {
            id
            field
            comparator
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

