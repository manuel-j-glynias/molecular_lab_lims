import gql from 'graphql-tag';

export const QUERY_EditableImmunePhenotype = gql`
    query EditableImmunePhenotype($field:String){
        EditableImmunePhenotype(field: $field, orderBy: editDate_desc) {
            id
            field
            immunePhenotype
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

