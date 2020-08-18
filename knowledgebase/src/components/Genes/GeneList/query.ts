import gql from 'graphql-tag';

export const QUERY_GENE_LIST = gql`
    query GeneList($str: String) {
        OmniGene(orderBy: name_asc, filter: {names_contains:$str}) {
            id
            name
          }
    }
`;