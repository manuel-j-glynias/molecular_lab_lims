import gql from 'graphql-tag';

export const QUERY_EditableProteinEffect = gql`
    query EditableProteinEffect($field:String){
        EditableProteinEffect(field: $field, orderBy: editDate_desc) {
            field
            proteinEffect
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

