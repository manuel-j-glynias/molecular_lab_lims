import gql from 'graphql-tag';

export const QUERY_OmniGene_Components = gql`
    query OmniGeneComponents($gene_id: ID) {
        OmniGene(id: $gene_id) {
            id
             myGeneInfoGene {
                id
             }
            uniprotEntry {
                id
             }
            jaxGene {
                id
             }
        }
    }

`;

