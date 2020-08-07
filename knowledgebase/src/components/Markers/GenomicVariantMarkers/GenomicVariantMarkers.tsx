import * as React from "react";
import './styles.css'
import {Fragment, useEffect, useState} from "react";
import {useGeneList_For_VariantsQuery, useGeneListQuery} from '../../../generated/graphql'
import Select from "react-select";

const className = 'GenomicVariantMarkers';

export interface Props {
    gene_id: string;
    handleGeneIdChange: (newId: string) => void;
    set_query_string: (queryString: string) => void;
    selected_gene_label: string;
    set_selected_gene_label:(label: string) => void;
}

const GenomicVariantMarkers: React.FC<Props> = ({handleGeneIdChange, gene_id,set_query_string,selected_gene_label,set_selected_gene_label}: Props) => {

    const {data, error, loading, refetch} = useGeneList_For_VariantsQuery();



    const genes = [
        { value: '0', label: 'Select Gene' }
    ]
    const [selected_gene_id, set_selected_gene_id] = useState('0')
    // const [selected_gene_label, set_selected_gene_label] = useState('Select Gene')

    const [filter_term, set_filter_term] = useState('');

    const handleNameFilter = () => {
        set_query_string(filter_term)
    }
    const keyPressed = async (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "Enter") {
            handleNameFilter()
        }
    }
    const handleReset = () => {
        set_query_string('')
        set_filter_term('')
    }
    const append_genes = () => {
        if (data && data.OmniGene){
            data.OmniGene.map(
                (gene, i: string | number ) =>
                    !!gene && (
                        genes.push({ value: gene.id, label: gene.name })
                    ))
        }
    }
    const append_genesplus = () => {
        refetch()
        append_genes()
    }
    useEffect(append_genesplus,[selected_gene_label])
    const state  = {
        selectedOption: { value: selected_gene_id, label: selected_gene_label },
    };

    const handleChange = async (event:any) => {
        const value : string = event.value as string;
        const label : string = event.label as string;
        set_selected_gene_id(value)
        set_selected_gene_label(label)
        // state.selectedOption.value = selected_gene_id
        // state.selectedOption.label = selected_gene_label
        handleGeneIdChange(value)
        console.log(value)
    }

    if (loading) {
        return <div>Loading...</div>
    }
    if (error || !data) {
        return <div>ERROR in Genomic Variants List</div>
    }


    return (<Fragment>
        {append_genes()}
        <Select className={`${className}__Select`}  options = {genes} onChange={handleChange}
                value={state.selectedOption}
        />
        <div className={`${className}__Filter`}>
            <input className={'filter_text_input'} type="text"
                   placeholder="Name contains..."
                   name="subString" value={filter_term}
                   onChange={e => set_filter_term(e.target.value)}
                   onKeyPress={keyPressed}
            />
            <button className={'btn btn-primary'} onClick={handleNameFilter}>Filter</button>
            <button className={'btn btn-primary'} onClick={handleReset}>Reset</button>

        </div>

    </Fragment>)
}

export default GenomicVariantMarkers;