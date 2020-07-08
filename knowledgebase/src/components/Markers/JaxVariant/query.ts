import gql from 'graphql-tag';

export const QUERY_JAX_VARIANT = gql`
    query JaxVariant($id:ID){
        JaxVariant(id:$id) {
            id
            name
            gene {
                id
                name
            }
            cDot
            pDot
            gDot
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
            transcript{
                ...es_fields
            }
            variantType
            description {
                ...es_fields
            }
        }
    }
    fragment es_fields on EditableStatement {
        id
        statement
        field
        references {
            id
            ... on LiteratureReference {
                 PMID
            }
        }
        editor {
            id
            name
        }
        editDate
    }
`