import gql from 'graphql-tag';

export const QUERY_GENE_LIST = gql`
    query GeneList($str: String) {
        OmniGene(orderBy: name_asc, filter: {OR: [{name_starts_with: $str}, {panelName_starts_with: $str}]}) {
            id
            name
          }
    }
`;