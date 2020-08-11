import gql from 'graphql-tag';

export const QUERY_EditableMarkerComponentList = gql`
    query EditableMarkerComponentList($field:String){
        EditableMarkerComponentList(field: $field, orderBy: editDate_desc) {
            id
            field
            components{
                id
                name{
                    id
                    statement
                }
            }
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

