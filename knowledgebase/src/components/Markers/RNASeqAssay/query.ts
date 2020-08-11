import gql from "graphql-tag";

export const RNASeqAssayQuery = gql`
    query RNASeqAssay($id:ID){
        RNASeqAssay(id:$id){
            name{
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
            resultType{
                id
                field
                resultType
                editor{
                    id
                    name
                }
                editDate
                references {
                    id
                }                
            }
        }
    }
    `