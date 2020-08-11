import gql from 'graphql-tag';

export const QUERY_MyGeneInfo = gql`
    query JaxGene($id:ID){
        JaxGene(id: $id) {
            name
            canonicalTranscript{
                id
                statement
            }
            chromosome
            entrezId
            jaxId
            synonyms{
                id
                stringList
            }
            description {
                id
                statement
                field
                editDate
                editor {
                    id
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