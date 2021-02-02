import React, {Fragment, useState} from 'react'
import {Redirect} from "react-router-dom";
import {useAlert} from "react-alert";
import {useBcr_AblCasesListQuery} from '../../generated/graphql';
import BCR_ABL from "./BCR_ABL";

interface Props {
    logged_in: boolean;
    user_name: string;
    user_graph_id: string;
}
const className = 'BCR_ABL';

const BCR_ABLCasesContainer = ({ logged_in,user_name,user_graph_id }: Props) => {
    const [search_string, set_search_string] = useState('');
    const [filter_term, set_filter_term] = useState('');
    const alert = useAlert()
    const { data, error, loading, refetch } = useBcr_AblCasesListQuery(
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
                <h2>BCR-ABL Cases</h2>

                <BCR_ABL data={data} filter_term={filter_term} user_name={user_name} user_graph_id={user_graph_id} refetch={refetch}
                         set_filter_term={set_filter_term} keyPressed={keyPressed} handleNameFilter={handleNameFilter} handleReset={handleReset}
                />
            </div>
        </Fragment>
    )
};

export default BCR_ABLCasesContainer;

