import gql from 'graphql-tag';

export const QUERY_MyGeneInfo = gql`
    query Uniprot($id:ID){
        UniprotEntry(id:$id){
            id
            name
            accessionNumber
            uniprotId
            function{
                id
                statement
                field
                editor{
                    name
                }
                editDate
                references{
                    id
                }
            }
        }
    }
`;