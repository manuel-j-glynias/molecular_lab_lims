import gql from 'graphql-tag';

export const QUERY_MyGeneInfo = gql`
    query MyGeneInfo_Gene($id:ID){
        MyGeneInfo_Gene(id: $id) {
            name
            entrezId
            chromosome
            start
            end
            strand
            synonyms
            description{
                statement
                field
                references{
                    shortReference
                    ...on InternetReference{
                        accessed_date
                        web_address
                    }
                }
            }
        }
    }
`;