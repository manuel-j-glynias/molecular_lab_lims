import gql from 'graphql-tag';

export const QUERY_GENE_LIST_FOR_VARIANTS = gql`
    query GeneList_For_Variants
    {
        OmniGene(orderBy: name_asc,filter: {variantMarkers_some: {id_starts_with:"genomicvariantmarker_"}}) {
            id
            name
        }
    }

`;



