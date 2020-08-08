import * as React from 'react';
import {Fragment} from 'react';
import {useProteinLevelAssayQuery} from "../../../generated/graphql";
import ProteinLevelAssayList from './ProteinLevelAssayList'
import {useState} from "react";

interface Props {
    protein_level_assay_id: string;
    set_protein_level_assay_id: (id:string) => void;
}
const className = 'ProteinLevelAssayList';

const ProteinLevelAssayListContainer = ({protein_level_assay_id, set_protein_level_assay_id}:Props) => {
    const [query_string, set_query_string] = useState('');
    const [filter_term, set_filter_term] = useState('');

    const { data, error, loading, refetch } = useProteinLevelAssayQuery(
        {variables:{query_string:query_string}})
    React.useEffect(() => {
        refetch();
    }, [query_string]);

    const handleNameFilter = () => {
        set_query_string(filter_term)
    }
    const keyPressed = async (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "Enter") {
            handleNameFilter()
        }
    }
    const handleReset = () => {
        set_filter_term('')
        set_query_string('')
    }


    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>ERROR</div>;
    }

    if (!data) {
        return <div>No Jax Variant</div>;
    }
    return(
        <Fragment>
            <div className={`${className}__Filter`}>
                <input className={'filter_text_input'} type="text"
                       placeholder="name contains"
                       name="subString" value={filter_term}
                       onChange={e => set_filter_term(e.target.value)}
                       onKeyPress={keyPressed}
                />

                <button className={'btn btn-primary'} onClick={handleNameFilter}>Filter</button>
                <button className={'btn btn-primary'} onClick={handleReset}>Reset</button>
            </div>
            <ProteinLevelAssayList data={data} protein_level_assay_id={protein_level_assay_id} set_protein_level_assay_id={set_protein_level_assay_id}/>
        </Fragment>
    );
}
export default ProteinLevelAssayListContainer;