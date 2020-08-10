import React, {Fragment, useState} from 'react'
import {useGeneListQuery} from '../../../generated/graphql'
import GeneList, {OwnProps} from './GeneList'
import { useAlert } from 'react-alert'
import apiClient from "../../../axios/Axios";
import {useUserContentState} from "../../../context/UserContentContext";

const className = 'GeneList';

const GeneListContainer = ({query_str, handleGeneIdChange, gene_id, set_gene_query_string}: OwnProps) => {

    const [filter_term, set_filter_term] = useState('');
    const [all_caps, set_all_caps] = useState(true)
    const [add_gene, set_add_gene] = useState('');
    const alert = useAlert()

    const {
        UserContentState: {isEditor}
    } = useUserContentState();

    const canEdit : boolean = isEditor;

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

    type addGeneResult = {
        result_id: string;
        result_name: string;
    }

    const addGeneService = async (gene_name:string) => {
        try{
            const response = await apiClient.get<addGeneResult>("/new_gene/" + gene_name)
            const addGeneResult = response.data;
            return addGeneResult
        } catch (err) {
            if (err && err.response) {
                // const axiosError = err as AxiosError<ServerError>
                return err.response;
            }

            throw err;

        }
    }

    const handleAddGene = () => {
        addGeneService(add_gene).then( (response:addGeneResult) => {
            set_filter_term(response.result_name)
            set_gene_query_string(response.result_name)
            set_add_gene('')
        }).catch(err => alert.show(err))

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
                        <div className={`${className}__Title`}>Genes</div>
                        {canEdit &&
                        <div className={`${className}__Buttons`}>
                            <input className={'add_gene_input'} type="text"
                                   placeholder="HGNC..."
                                   name="addGeneButton" value={add_gene}
                                   onChange={e => set_add_gene(e.target.value.toUpperCase())}
                            />
                            <button className={'btn btn-primary'} onClick={handleAddGene}>Add Gene</button>
                        </div> }
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