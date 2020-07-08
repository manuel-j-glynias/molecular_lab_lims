import gql from 'graphql-tag';

export const QUERY_MyGeneInfo = gql`
    query MyGeneInfo_Gene($id:ID){
        MyGeneInfoGene(id: $id) {
            name
            entrezId
            chromosome
            start
            end
            strand
            description{
                statement
                field
                references{
                    shortReference
                    ...on InternetReference{
                        accessedDate
                        webAddress
                    }
                }
            }
        }
    }
`;