import gql from 'graphql-tag';

export const QUERY_EditableMarkerComponentList = gql`
    query EditableMarkerComponentList($field:String){
        EditableMarkerComponentList(field: $field, orderBy: editDate_desc) {
            field
            components{
                name{
                    statement
                }
            }
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

