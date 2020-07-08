import gql from 'graphql-tag';

export const QUERY_LiteratureReference = gql`
    query LiteratureReference($ref_id: ID) {
        LiteratureReference(id: $ref_id){
            shortReference
            id
            PMID
            DOI
            title
            journal{
                id
                name
            }
            volume
            firstPage
            lastPage
            publicationYear
            abstract
            authors{
                id
                surname
                firstInitial
            }
        }
    }  
`;