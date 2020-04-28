import gql from 'graphql-tag';

export const QUERY_MyGeneInfo = gql`
    query JaxGene($id:ID){
        JaxGene(id: $id) {
            name
            canonicalTranscript
            chromosome
            entrezId
            jaxId
            synonyms
            description {
                statement
                field
                edit_date
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