import gql from 'graphql-tag';

export const QUERY_MyGeneInfo = gql`
    query Uniprot($id:ID){
        Uniprot_Entry(id:$id){
            id
            name
            accessionNumber
            uniprot_id
            function{
                id
                statement
                field
                editor{
                    name
                }
                edit_date
                references{
                    id
                }
            }
        }
    }
`;