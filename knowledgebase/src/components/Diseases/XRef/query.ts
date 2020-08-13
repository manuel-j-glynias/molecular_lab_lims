import gql from "graphql-tag";

export const XRefQuery = gql`
    query XRef($id: ID)
    {
        OntologicalDisease(id:$id){
            id
            xrefs{
                id
                list{
                    source
                    sourceId
                }
            }

        }
    }
`