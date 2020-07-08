import gql from 'graphql-tag';

export const SNV_VARIANT_FOR_ID = gql`
    query VariantSNVIndel($variant_id: ID){
        VariantSNVIndel(id:$variant_id) {
            id
            name{
                ...es_fields
            }
            cDot{
                ...es_fields
            }
            pDot{
                ...es_fields
            }
            gDot{
                ...es_fields
            }
            gene{
                id
                name
            }
            description {
                ...es_fields
            }
            variantType
            indelType
            proteinEffect{
                id
                proteinEffect
                field
                references {
                    id
                }
                editor {
                    id
                    name
                }
                editDate
            }
            exon{
                ...es_fields
            }

            jaxVariant {
                id
            }
            goVariant {
                id
            }
            clinVarVariant {
                id
            }
            hotSpotVariant {
                id
            }
        }
    }

`
