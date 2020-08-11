import gql from 'graphql-tag';

export const QUERY_EditableImmunePhenotype = gql`
    query EditableOmniConjunction($field:String){
        EditableOmniConjunction(field: $field, orderBy: editDate_desc) {
            id
            field
            conjunction
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

