import gql from 'graphql-tag';

export const QUERY_EditableProteinEffect = gql`
    query EditableProteinEffect($field:String){
        EditableProteinEffect(field: $field, orderBy: editDate_desc) {
            id
            field
            proteinEffect
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

