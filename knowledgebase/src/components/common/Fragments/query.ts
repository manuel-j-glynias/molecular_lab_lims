import gql from 'graphql-tag';

export const QUERY_0 = gql`    
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
        fragment esl_fields on EditableStringList {
            id
            stringList
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
    fragment copyChange_fields on EditableCopyChange{
            id
            field
            cnvType
            references {
                id
            }
            editor {
                id
                name
            }
            editDate
        }
    fragment ei_fields on EditableInt {
        id
        intValue
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
    fragment eog_fields on EditableOmniGeneReference{
            id
            gene{
                id
                name
            }
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
    fragment epe_fields on EditableProteinEffect{
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
    fragment eb_fields on EditableBoolean{
        id
        booleanValue
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
        fragment ef_fields on EditableFloat{
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
`