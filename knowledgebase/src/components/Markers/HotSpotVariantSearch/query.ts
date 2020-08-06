import gql from 'graphql-tag';


export const QUERY_HOTSPOT_VARIANT_BY_GENE_NAME = gql`
    query HotSpotVariantByGene($gene_name:String){
        HotSpotVariant(gene:$gene_name,orderBy:position_asc){
            gene
            id
            name
            begin
            end
            position
        }
    }
`

export const mutation_add_hotspot = gql`
    mutation GenomicVariantAddHotSpotVariant($variant_id: ID!, $hotspot_id:ID!) {
        addGenomicVariantHotSpotVariant(id: $variant_id, hotSpotVariant: [$hotspot_id])
     }
`

//addGenomicVariantClinVarVariant(clinVarVariant: [ID!]!id: ID!): String