import gql from 'graphql-tag';

export const QUERY_EditableOmniGeneReference = gql`
    query EditableOmniGeneReference($field:String){
        EditableOmniGeneReference(field: $field, orderBy: editDate_desc) {
            field
            gene{
                name
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

