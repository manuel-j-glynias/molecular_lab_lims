import React, {Fragment, useState} from 'react'
import {useOntologicalDiseaseListQuery} from '../../../generated/graphql'
import OntologicalDiseaseList from './OntologicalDiseaseList'

const className = 'OntologicalDiseaseList';

export interface Props {
    query_str: string;
    set_query_string: (newQueryString: string) => void;
    ontological_disease_id: string;
    handle_ontological_disease_id_Change: (newId: string) => void;
}

const OntologicalDiseaseListContainer = ({query_str, set_query_string, handle_ontological_disease_id_Change, ontological_disease_id}: Props) => {

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

    type addGeneResult = {
        result_id: string;
        result_name: string;
    }

    const get_query_string = () : string => {
        let q = query_str
         // console.log('q='+q)
        return q
    }

    const {data, error, loading} = useOntologicalDiseaseListQuery(
        {variables: {query_string: get_query_string()}}
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
                        <div className={`${className}__Title`}>Ontological Diseases</div>
                         <div className={`${className}__Filter`}>
                            <input className={'filter_text_input'} type="text"
                                   placeholder="Name Contains..."
                                   name="subString" value={filter_term}
                                   onChange={e => set_filter_term(e.target.value)}
                                   onKeyPress={keyPressed}
                            />
                            <button className={'btn btn-primary'} onClick={handleNameFilter}>Filter</button>
                            <button className={'btn btn-primary'} onClick={handleReset}>Reset</button>
                        </div>
                    </div>

                </div>
                <div>
                    <OntologicalDiseaseList data={data}  ontological_disease_id={ontological_disease_id}
                                            handle_ontological_disease_id_Change={handle_ontological_disease_id_Change} />
                </div>
            </div>
        </Fragment>
    )
}

export default OntologicalDiseaseListContainer;