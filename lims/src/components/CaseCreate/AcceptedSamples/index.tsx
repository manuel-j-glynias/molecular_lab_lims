import React, {Fragment, useState} from 'react'
import {Redirect} from "react-router-dom";
import {useAcceptedSamplesListQuery} from "../../../generated/graphql";
import '../styles.css'
import AcceptedSamples from "./AcceptedSamples";


interface Props {
    logged_in: boolean;
    user_name: string;
    user_graph_id: string;
    selected_sample_graph_id:string;
    set_selected_sample_graph_id: (s:string) => void;
    received_order_id:string;
    set_selected_sample_status_graph_id: (s:string) => void;
}
const className = 'CaseCreate';

const AcceptedSamplesContainer = ({ logged_in,user_name,user_graph_id,selected_sample_graph_id,set_selected_sample_graph_id,received_order_id,set_selected_sample_status_graph_id }: Props) => {
    const [search_string, set_search_string] = useState('');
    const [filter_term, set_filter_term] = useState('');
    const { data, error, loading, refetch } = useAcceptedSamplesListQuery(
        { variables: { str: search_string } });

    React.useEffect(() => {
        refetch();
    }, [search_string,refetch]);

    const handleNameFilter = () => {
        set_search_string(filter_term.toLowerCase())
    }
    const keyPressed = async (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "Enter") {
            handleNameFilter()
        }
    }
    const handleReset = () => {
        set_search_string('')
        set_filter_term('')
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>ERROR</div>;
    }

    if (!data) {
        return <div>Error</div>;
    }
    if (!logged_in) {
        return <Redirect to="/"/>
    }
    return (
        <Fragment>
            <div className={`${className}__NewSamples_Container`}>
                <h2>Accepted Samples</h2>

                <AcceptedSamples data={data} filter_term={filter_term} set_filter_term={set_filter_term} keyPressed={keyPressed} handleNameFilter={handleNameFilter} handleReset={handleReset}
                            user_name={user_name} user_graph_id={user_graph_id} refetch={refetch} selected_sample_graph_id={selected_sample_graph_id} set_selected_sample_graph_id={set_selected_sample_graph_id}
                                 received_order_id={received_order_id} set_selected_sample_status_graph_id={set_selected_sample_status_graph_id}
                />
            </div>
        </Fragment>
    )

}

export default AcceptedSamplesContainer;