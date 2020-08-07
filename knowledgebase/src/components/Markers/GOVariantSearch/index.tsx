import * as React from 'react';
import {Fragment} from 'react';
import {useGoVariantByGeneQuery} from "../../../generated/graphql";
import GOVariantSearch from './GOVariantSearch'
import {useState} from "react";

interface Props {
    gene_name: string;
    variant_id:string;
    refetch_parent: () => void;
}
const className = 'GOVariantSearch';
const GOVariantSearchContainer = ({gene_name,variant_id,refetch_parent}:Props) => {
    const [pdot, set_pdot] = useState('');
    const [filter_term, set_filter_term] = useState('');

    const { data, error, loading, refetch } = useGoVariantByGeneQuery(
        {variables:{gene_name:gene_name,pdot:pdot}})
    React.useEffect(() => {
        refetch();
    }, [gene_name, pdot,refetch]);

    const handleNameFilter = () => {
        set_pdot(filter_term)
    }
    const keyPressed = async (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "Enter") {
            handleNameFilter()
        }
    }
    const handleReset = () => {
        set_filter_term('')
        set_pdot('')
    }


    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>ERROR</div>;
    }

    if (!data) {
        return <div>No GO Variant</div>;
    }
    return(
        <Fragment>
        <div className={`${className}__Filter`}>
            <input className={'filter_text_input'} type="text"
                   placeholder="pDot contains"
                   name="subString" value={filter_term}
                   onChange={e => set_filter_term(e.target.value)}
                   onKeyPress={keyPressed}
            />

            <button className={'btn btn-primary'} onClick={handleNameFilter}>Filter</button>
            <button className={'btn btn-primary'} onClick={handleReset}>Reset</button>
        </div>
        <GOVariantSearch data={data} variant_id={variant_id} refetch_parent={refetch_parent}/>
        </Fragment>
    );
}
export default GOVariantSearchContainer;