import gql from "graphql-tag";

export const OmniMapQuery = gql`
    query OmniMap($id: ID)
    {
        OntologicalDisease(id:$id){
            id
            name {
                ...es_fields
            }
            omniMaps {
                id
                list {
                    mCodes {
                        id
                        mcodeId
                        omniDisease {
                            id
                            omniDiseaseId
                            name {
                                ...es_fields
                            }
                        }
                        diseasePath {
                            ...es_fields
                        }
                    }
                    omniDisease {
                        id
                        omniDiseaseId
                        name {
                            ...es_fields
                        }
                    }
                }
            }
        }
    }
`