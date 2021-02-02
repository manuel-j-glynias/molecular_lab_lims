import gql from 'graphql-tag'

export const QUERY_SAMPLE_TYPE = gql`
    query SampleTypeList{
        Sample_Type{
            id
            name
        }
    }    
`;