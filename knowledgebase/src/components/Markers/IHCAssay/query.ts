import gql from "graphql-tag";

export const IHCAssayQuery = gql`
    query IHCAssay($id:ID){
        IHCAssay(id:$id){
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
                ...ef
            }
            resultMax{
                ...ef
            }
            resultUnits{
                ...es_fields
            }
            resultString{
                ...es_fields
            }
        }
    }
    fragment ecomp on EditableAssayComparator{
        id
        comparator
        field
        editor{
            name
        }
        editDate
        references {
            id
        }
        
    }
    fragment ef on EditableFloat{
        id
        floatValue
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
`