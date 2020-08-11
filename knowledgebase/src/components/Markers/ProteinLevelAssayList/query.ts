import gql from "graphql-tag";


export const PROTEIN_LEVEL_ASSAY_QUERY = gql`
    query proteinLevelAssay($query_string:String){
        ProteinLevelAssay(filter:{name:{statement_contains:$query_string}}){
            id
            __typename
            name{
                id
                statement
            }
        }
    }
`