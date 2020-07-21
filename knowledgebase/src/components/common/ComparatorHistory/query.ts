import gql from 'graphql-tag';

export const QUERY_EditableAssayComparator = gql`
    query EditableAssayComparator($field:String){
        EditableAssayComparator(field: $field, orderBy: editDate_desc) {
            field
            comparator
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

