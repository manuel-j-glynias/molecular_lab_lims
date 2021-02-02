import React, {Fragment, useState} from 'react'
import {Redirect} from "react-router-dom";
import {useReadyForQcSamplesListQuery} from "../../generated/graphql";
import './styles.css'
import NewSamples from "./SlideQC";
import SlideQC from "./SlideQC";


interface Props {
    logged_in: boolean;
    user_name: string;
    user_graph_id: string;
}
const className = 'SlideQC';

const SlideQCContainer = ({ logged_in,user_name,user_graph_id}: Props) => {
    // return (<NewSamples />)
    const [search_string, set_search_string] = useState('');
    const [filter_term, set_filter_term] = useState('');
    const { data, error, loading, refetch } = useReadyForQcSamplesListQuery(
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
            <div className={`${className}__Container`}>
                <h2>Samples Ready for Slide QC</h2>

                <SlideQC data={data} filter_term={filter_term} set_filter_term={set_filter_term} keyPressed={keyPressed} handleNameFilter={handleNameFilter} handleReset={handleReset}
                            user_name={user_name} user_graph_id={user_graph_id} refetch={refetch}
                />
            </div>
        </Fragment>
    )

}

export default SlideQCContainer;