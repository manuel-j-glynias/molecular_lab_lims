import * as React from 'react';

import {OmniGeneQuery} from '../../../generated/graphql';
import './styles.css';
import DescriptionEditor from "./DescriptionEditor";
import LiteratureReferenceContainer from "../LiteratureReference";
import HistoryContainer from "../History";
import SynonymEditor from "./SynonymEditor";
import OncogenicCategoryEditor from "./OncogenicCategoryEditor"
import {AppendedContentActionTypes, useAppendedContentState} from "../../../context/AppendedContentContext"


interface Props {
    data: OmniGeneQuery;
    editing_description: boolean
    set_editing_description: (newEditionDescription: boolean) => void;
    editing_category: boolean
    set_editing_category: (newEditionDescription: boolean) => void;
    editing_synonyms: boolean
    set_editing_synonyms: (newEditionDescription: boolean) => void;
    refetch: () => void;

}

const className = 'OmniGene';

const OmniGene: React.FC<Props> = ({data,editing_description,set_editing_description, editing_category,set_editing_category,editing_synonyms,set_editing_synonyms,refetch}) => {
    // const [editing_category, set_editing_category] = React.useState(false);
    // const [editing_synonyms, set_editing_synonyms] = React.useState(false);
    const [showing_references, set_showing_references] = React.useState(false);

    const [show_description_history, set_description_history] = React.useState(false);
    const [show_category_history, set_category_history] = React.useState(false);
    const [show_synonyms_history, set_synonyms_history] = React.useState(false);

    const {
        AppendedContentState: {},
        setAppendedContentState
    } = useAppendedContentState();

    const edit_description = async () => {
        setAppendedContentState({type: AppendedContentActionTypes.appendToDescription, nextText: ''})
        set_editing_description(true)
    };
    const edit_categories = async () => {
        set_editing_category(true)
    }
    const edit_synonyms = async () => {
        set_editing_synonyms(true)
    }
    const show_references = async () => {
        set_showing_references(!showing_references)
    }
    const humanify_date =  (date_string:string) : string => {
        const toks = date_string.split("-")
        //2020-04-14-08-26-11-045455
        const d = toks[1] + '/' + toks[2]  + '/' + toks[0] + ' at ' + toks[3] + ':' + toks[4]
        return d
    }

    if (!data.OmniGene) {
        return <div>No Selected OmniGene</div>;
    }
    if (!data.OmniGene[0]) {
        return <div></div>;

    }
    return (

        <div className={className}>
            <h1 className={`${className}__title`}>{data.OmniGene[0].name}</h1>
            <h4>Panel Name:  {data.OmniGene[0].panelName}</h4>
            <div className={`${className}__Wrapper`}>
                 <div>Gene Description</div>
                <div>
                    <div className="form-group">
                        {editing_description ? (

                                <DescriptionEditor description={data.OmniGene[0].geneDescription.statement} set_editing={set_editing_description} es_ID={data.OmniGene[0].geneDescription.id}
                                                   es_field={data.OmniGene[0].geneDescription.field} omnigene_ID={data.OmniGene[0].id}  refetch={refetch}/>
                            ) :
                            (
                                <div>
                                    {data.OmniGene[0].geneDescription.statement}
                                </div>
                            )}
                    </div>
                    <div></div>
                    {editing_description ?
                        (
                            <span></span>

                        ) :

                        (<div className="form-group">
                                <button className="btn btn-primary my-1" onClick={() => edit_description()}>Edit Description</button>
                                <button className="btn btn-primary my-1" onClick={() => set_description_history(!show_description_history)}>
                                    {show_description_history ? <span>Hide History</span> : <span>Show History</span>}
                                </button>
                                <button className="btn btn-primary my-1" onClick={() => show_references()}>
                                    {showing_references ? <span>Hide References</span> : <span>Show References</span>}
                                </button>
                            </div>
                        )
                    }
                    {show_description_history ?
                        <div>
                            <HistoryContainer field={data.OmniGene[0].geneDescription.field}  />
                        </div>
                        : <span></span>
                    }
                    {
                        showing_references ?
                            <div><h3>References</h3>
                                {data.OmniGene[0].geneDescription.references.map((item, index) => (
                                <div key={index}> {item ? <LiteratureReferenceContainer id={item.id}/>: '' }</div>

                            ))}</div>   : (<span></span>)
                                             }

                    <div><strong>Last Editor: </strong>{data.OmniGene[0].geneDescription.editor.name}</div>
                    <div><strong>Last Edit Date: </strong>{humanify_date(data.OmniGene[0].geneDescription.edit_date)}</div>
                </div>
                <div>Oncogenic Category</div>
                <div>

                    {editing_category ?
                        (
                            <OncogenicCategoryEditor category_string={data.OmniGene[0].oncogenicCategory.statement} set_editing={set_editing_category}es_ID={data.OmniGene[0].oncogenicCategory.id}
                                                     es_field={data.OmniGene[0].oncogenicCategory.field} omnigene_ID={data.OmniGene[0].id} refetch={refetch}/>

                        ) :
                        data.OmniGene[0].oncogenicCategory.statement
                    }

                    {!editing_category ?
                        (<div className="form-group">
                                <button className="btn btn-primary my-1" onClick={() => edit_categories()}>Edit
                                    Category
                                </button>
                                <button className="btn btn-primary my-1"
                                        onClick={() => set_category_history(!show_category_history)}>
                                    {show_category_history ? <span>Hide History</span> : <span>Show History</span>}
                                </button>

                            </div>
                        )
                        : (<span></span>)
                    }

                    {show_category_history ?
                        <div>
                            <HistoryContainer field={data.OmniGene[0].oncogenicCategory.field}  />
                        </div>
                        : <span></span>
                    }
                    <div><strong>Last Editor: </strong>{data.OmniGene[0].oncogenicCategory.editor.name}</div>
                    <div><strong>Last Edit Date: </strong>{humanify_date(data.OmniGene[0].oncogenicCategory.edit_date)}</div>
                </div>


                <div>Synonyms</div>
                <div>
                    {editing_synonyms ?
                        (
                            <SynonymEditor synonym_string={data.OmniGene[0].synonymsString.statement} set_editing={set_editing_synonyms} es_ID={data.OmniGene[0].synonymsString.id}
                                           es_field={data.OmniGene[0].synonymsString.field} omnigene_ID={data.OmniGene[0].id}  refetch={refetch}/>

                        ) :

                        <div>{data.OmniGene[0].synonymsString.statement}</div> }
                    {editing_synonyms ?
                        (
                            <span></span>

                        ) :

                        (<div className="form-group">
                                <button className="btn btn-primary my-1" onClick={() => edit_synonyms()}>Edit Synonyms</button>
                                <button className="btn btn-primary my-1" onClick={() => set_synonyms_history(!show_synonyms_history)}>
                                    {show_synonyms_history ? <span>Hide History</span> : <span>Show History</span>}
                                </button>
                            </div>
                        )
                    }
                    {show_synonyms_history ?
                        <div>
                            <HistoryContainer field={data.OmniGene[0].synonymsString.field}  />
                        </div>
                        : <span></span>
                    }
                    <div><strong>Last Editor: </strong>{data.OmniGene[0].synonymsString.editor.name}</div>
                    <div><strong>Last Edit Date: </strong>{humanify_date(data.OmniGene[0].synonymsString.edit_date)}</div>
                </div>


            </div>


        </div>

    );
};

export default OmniGene;