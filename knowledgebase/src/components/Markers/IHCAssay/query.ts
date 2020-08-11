import gql from "graphql-tag";

export const IHCAssayQuery = gql`
    query IHCAssay($id:ID){
        IHCAssay(id:$id){
            id
            name{
                ...es_fields
            }
            antibodyClone{
                ...es_fields
            }
             comparator{
                 ...ecomp
             }
            resultMin{
                ...ef_fields
            }
            resultMax{
                ...ef_fields
            }
            resultUnits{
                ...es_fields
            }
            resultString{
                ...es_fields
            }
        }
    }
   
    
`