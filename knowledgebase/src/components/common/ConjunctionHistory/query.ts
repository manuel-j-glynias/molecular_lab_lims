import gql from 'graphql-tag';

export const QUERY_EditableImmunePhenotype = gql`
    query EditableOmniConjunction($field:String){
        EditableOmniConjunction(field: $field, orderBy: editDate_desc) {
            field
            conjunction
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

