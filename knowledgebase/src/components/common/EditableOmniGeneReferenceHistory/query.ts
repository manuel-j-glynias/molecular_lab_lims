import gql from 'graphql-tag';

export const QUERY_EditableOmniGeneReference = gql`
    query EditableOmniGeneReference($field:String){
        EditableOmniGeneReference(field: $field, orderBy: editDate_desc) {
            id
            field
            gene{
                id
                name
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

