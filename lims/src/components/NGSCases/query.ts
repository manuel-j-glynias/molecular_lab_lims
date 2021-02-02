import gql from 'graphql-tag';

export const Query_NGS_Cases = gql`
    query CasesList($str: String) {
        Case(filter: {order: {search_string_lower_contains: $str}}) {
            id
            created_date
            created_by {
                user_name
            }
            order {
                id
                patient_name
                search_string_lower
                mrn
                date_of_birth
                sex
                diagnosis
                test_ordered{
                    id
                    name
                    ngsBased
                }
                ml_order_id
                received_order_id
                order_date
                received_date
                rejected_once
                status {
                    id
                    status
                    date
                    by {
                        id
                        user_name
                    }
                    previousStatus {
                        id
                        status
                        date
                        by {
                            id
                            user_name
                        }
                        previousStatus {
                            id
                            status
                            date
                            by {
                                id
                                user_name
                            }
                        }
                    }
                }
                attending_physician {
                    id
                    first_name
                    last_name
                    degrees
                    email
                }
                ordered_by {
                    id
                    first_name
                    last_name
                    degrees
                    email
                }
            }
            sample {
                id
                sample_id
                status {
                    id
                    status
                    date
                    by {
                        id
                        user_name
                    }
                    previousStatus {
                        id
                        status
                        date
                        by {
                            id
                            user_name
                        }
                        previousStatus {
                            id
                            status
                            date
                            by {
                                id
                                user_name
                            }
                        }
                    }
                }
                patient_name
                mrn
                collected_date
                received_date
                sample_type {
                    id
                    name
                }
            }
        }
    }
`