import gql from 'graphql-tag';

export const QUERY_GenomicVariant_Components = gql`
    query GenomicVariantComponents($variant_id: ID) {
        GenomicVariant(id:$variant_id){
            jaxVariant{
                id
            }
            goVariant{
                id
            }
            clinVarVariant{
                id
            }
            hotSpotVariant{
                id
            }
        }
    }

`;

