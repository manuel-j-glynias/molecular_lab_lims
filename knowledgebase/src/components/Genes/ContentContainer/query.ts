import gql from 'graphql-tag';

export const QUERY_OmniGene_Components = gql`
    query OmniGeneComponents($gene_id: ID) {
        OmniGene(id: $gene_id) {
             myGeneInfoGene {
                id
             }
            uniprot_entry {
                id
             }
            jaxGene {
                id
             }
        }
    }

`;

