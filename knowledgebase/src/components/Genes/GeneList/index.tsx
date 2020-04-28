import React, {Fragment, useState} from 'react'
import {useGeneListQuery} from '../../../generated/graphql'
import GeneList, {OwnProps} from './GeneList'


const className = 'GeneList';

const GeneListContainer = ({query_str, handleGeneIdChange, gene_id, set_gene_query_string}: OwnProps) => {

    const [filter_term, set_filter_term] = useState('');
    const [all_caps, set_all_caps] = useState(true)
    const [add_gene, set_add_gene] = useState('');

    const handleNameFilter = () => {
        set_gene_query_string(filter_term)
    }
    const keyPressed = async (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "Enter") {
            handleNameFilter()
        }
    }
    const handleReset = () => {
        set_gene_query_string('')
        set_filter_term('')
    }
    const handleAddGene = () => {
        console.log('Add gene:' + add_gene)
    }

    const handle_all_caps = () => {
        set_all_caps(!all_caps)
    }
    const get_query_string = () => {
        let q = query_str
        if (all_caps) {
            q = query_str.toUpperCase()
        }
        // console.log('q='+q)
        return q
    }

    const {data, error, loading} = useGeneListQuery(
        {variables: {str: get_query_string()}}
    );


    if (loading) {
        return <div>Loading...</div>
    }
    if (error || !data) {
        return <div>ERROR in GeneList</div>
    }
    return (
        <Fragment>
            <div className={`${className}__Container`}>

                <div className={`${className}__Panel_Wrapper`}>
                    <div className={`${className}__Panel`}>
                        <div className={`${className}__Buttons`}>
                            <input className={'add_gene_input'} type="text"
                                   placeholder="HGNC..."
                                   name="addGeneButton" value={add_gene}
                                   onChange={e => set_add_gene(e.target.value.toUpperCase())}
                            />
                            <button className={'btn btn-primary'} onClick={handleAddGene}>Add Gene</button>
                        </div>
                        <div className={`${className}__Filter`}>
                            <input className={'filter_text_input'} type="text"
                                   placeholder="Name Starts With..."
                                   name="subString" value={filter_term}
                                   onChange={e => set_filter_term(e.target.value)}
                                   onKeyPress={keyPressed}
                            />
                            <div>
                                <label className={`${className}__Label`}>
                                    <input
                                        name="isAllCaps"
                                        type="checkbox"
                                        checked={all_caps}
                                        onChange={handle_all_caps}/> Search with ALL-CAPS:
                                </label>
                            </div>
                            <button className={'btn btn-primary'} onClick={handleNameFilter}>Filter</button>
                            <button className={'btn btn-primary'} onClick={handleReset}>Reset</button>
                            <div className={`${className}__Title`}>Genes</div>
                        </div>
                    </div>

                </div>
                <div>
                    <GeneList data={data} query_str={query_str} gene_id={gene_id}
                              handleGeneIdChange={handleGeneIdChange} set_gene_query_string={set_gene_query_string}/>
                </div>
            </div>
        </Fragment>
    )
}

export default GeneListContainer;