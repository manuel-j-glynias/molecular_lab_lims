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
                ...ef
            }
            resultMax{
                ...ef
            }
            resultType{
                id
                field
                resultType
                editor{
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