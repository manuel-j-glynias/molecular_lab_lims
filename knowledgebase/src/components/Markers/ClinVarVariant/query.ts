import gql from 'graphql-tag';

export const QUERY_CLINVAR_VARIANT = gql`
    query ClinVarVariant($id:ID){
        ClinVarVariant(id:$id) {
            id
            cDot
            pDot
            significance{
                ...es_fields
            }
            signficanceExplanation{
                ...es_fields
            }
            variantId
            gene
        }
    }
`