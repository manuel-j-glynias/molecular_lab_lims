import gql from 'graphql-tag';

export const QUERY_MyGeneInfo = gql`
    query JaxGene($id:ID){
        JaxGene(id: $id) {
            name
            canonicalTranscript{
                statement
            }
            chromosome
            entrezId
            jaxId
            synonyms{
                stringList
            }
            description {
                statement
                field
                editDate
                editor {
                    name
                }
                references{
                    ...on LiteratureReference{
                        id
                        PMID
                    }
                }
            }
        }
    }
`;