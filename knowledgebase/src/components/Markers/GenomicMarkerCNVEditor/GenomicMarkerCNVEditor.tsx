import * as React from "react";
import {VariantCnvQuery} from "../../../generated/graphql";
import LiteratureReferenceContainer from "../../common/LiteratureReference";
import {add_hyperlinks, humanify_date,get_ref_array} from "../../common/Helpers/Ref_helpers"
import CopyChangeEditor from "./CopyChangeEditor";
import DescriptionEditor from "./DescriptionEditor";
import HistoryContainer from "../../common/History";
import CopyChangeHistoryContainer from "../../common/CopyChangeHistory"
import {AppendedContentActionTypes, useAppendedContentState} from "../../../context/AppendedContentContext";
import {useUserContentState} from "../../../context/UserContentContext"

import './styles.css';


interface Props {
    data: VariantCnvQuery;
    editing_description: boolean;
    set_editing_description: (newEditionDescription: boolean) => void;
     refetch: () => void;
}

type DescriptionWithPmids = {
    text: string;
    pmid: string;
}
const className = 'GenomicMarkerCNVEditor';

const GenomicMarkerCNVEditor : React.FC<Props> = ({data,editing_description,set_editing_description,refetch}) => {
    const [editing_copyChange, set_editing_copyChange]  = React.useState(false);
    const [showing_copyChange_references, set_showing_copyChange_references] = React.useState(false);
    const [show_copyChange_history, set_copyChange_history] = React.useState(false);
    const [showing_description_references, set_showing_description_references] = React.useState(false);
    const [show_description_history, set_description_history] = React.useState(false);

const {
        AppendedContentState: {},
        setAppendedContentState
    } = useAppendedContentState();

    const {
        UserContentState: {isEditor}
    } = useUserContentState();

    const canEdit : boolean = isEditor;


    const edit_description = async () => {
        setAppendedContentState({type: AppendedContentActionTypes.appendToDescription, nextText: ''})
        set_editing_description(true)
    };
 if (!data.VariantCNV) {
        return <div>No VariantCNV</div>;
    }
    if (!data.VariantCNV[0]) {
        return <div>No VariantCNV</div>;
    }

    return <React.Fragment>
           <div>Gene</div>
            <div>{data.VariantCNV[0].gene.name} </div>

            <div>Copy Number Change</div>
{/*             <div>{data.VariantCNV[0].copyChange.cnvType} </div> */}
            <div>
                {editing_copyChange ? (
                        <CopyChangeEditor variant_ID={data.VariantCNV[0].id } copyChange={data.VariantCNV[0].copyChange.cnvType} id={data.VariantCNV[0].copyChange.id} field={data.VariantCNV[0].copyChange.field} ref_array={get_ref_array(data.VariantCNV[0].copyChange.references)} set_editing={set_editing_copyChange} refetch={refetch}/>
                    )
                    :
                    <div>{data.VariantCNV[0].copyChange.cnvType}</div>
                }
                {!editing_copyChange ?
                    (<div className={`${className}__FormGroup`}>
                            {canEdit && <button className="btn btn-primary my-1" onClick={() => set_editing_copyChange(true)}>Edit Copy Number
                            </button> }
                            <button className="btn btn-primary my-1"
                                    onClick={() => set_copyChange_history(!show_copyChange_history)}>
                                {show_copyChange_history ? <span>Hide History</span> : <span>Show History</span>}
                            </button>
                            <button className="btn btn-primary my-1" onClick={() => set_showing_copyChange_references(!showing_copyChange_references)}>
                                {showing_copyChange_references ? <span>Hide References</span> : <span>Show References</span>}
                            </button>
                        </div>
                    )
                    : (<span></span>)
                }
                {show_copyChange_history ?
                    <div>
                        <CopyChangeHistoryContainer field={data.VariantCNV[0].copyChange.field}  />
                    </div>
                    : <span></span>
                }
                {
                    showing_copyChange_references ?
                        <div><h3>References</h3>
                            <div>{data.VariantCNV[0].copyChange.references.length > 0 ?
                                data.VariantCNV[0].copyChange.references.map((item, index) => (
                                    // @ts-ignore
                                    <div key={index}> {item ? <LiteratureReferenceContainer id={item.id}/> : ''}</div>

                                )) : <span>None</span>}</div>
                        </div> : (<span></span>)
                }
                <div><strong>Last Editor: </strong>{data.VariantCNV[0].copyChange.editor.name}</div>
                <div><strong>Last Edit Date: </strong>{humanify_date(data.VariantCNV[0].copyChange.editDate)}</div>
            </div>
           <div>Description</div>
            <div>
                <div className={`${className}__FormGroup`}>
                    {editing_description ? (

                            <DescriptionEditor description={data.VariantCNV[0].description.statement} set_editing={set_editing_description} es_ID={data.VariantCNV[0].description.id}
                                               es_field={data.VariantCNV[0].description.field} variant_ID={data.VariantCNV[0].id}  refetch={refetch}/>
                        ) :
                        (
                            <div>
                                {add_hyperlinks(data.VariantCNV[0].description.statement).map((item, index) => (
                                    <span key={index} >{item.text}
                                        { item.pmid !=='' ?
                                            <a href={'https://pubmed.ncbi.nlm.nih.gov/' + item.pmid} target="_blank"
                                               rel="noopener noreferrer">PMID: {item.pmid}</a>
                                            : <span></span> }
                            </span>
                                ))
                                }
                            </div>
                        )}
                </div>
                {editing_description ?
                    (
                        <span></span>

                    ) :

                    (<div className={`${className}__FormGroup`}>
                            {canEdit && <button className="btn btn-primary my-1" onClick={() => edit_description()}>Edit Description</button> }
                            <button className="btn btn-primary my-1" onClick={() => set_description_history(!show_description_history)}>
                                {show_description_history ? <span>Hide History</span> : <span>Show History</span>}
                            </button>
                            <button className="btn btn-primary my-1" onClick={() => set_showing_description_references(!showing_description_references)}>
                                {showing_description_references ? <span>Hide References</span> : <span>Show References</span>}
                            </button>
                        </div>
                    )
                }
                {show_description_history ?
                    <div>
                        <HistoryContainer field={data.VariantCNV[0].description.field}  />
                    </div>
                    : <span></span>
                }
                {
                    showing_description_references ?
                        <div><h3>References</h3>
                            <div>{data.VariantCNV[0].description.references.length > 0 ?
                                data.VariantCNV[0].description.references.map((item, index) => (
                                    // @ts-ignore
                                    <div key={index}> {item ? <LiteratureReferenceContainer id={item.id}/> : ''}</div>

                                )) : <span>None</span>}</div>
                        </div> : (<span></span>)
                }
                <div><strong>Last Editor: </strong>{data.VariantCNV[0].description.editor.name}</div>
                <div><strong>Last Edit Date: </strong>{humanify_date(data.VariantCNV[0].description.editDate)}</div>
            </div>

    </React.Fragment>
}

export default GenomicMarkerCNVEditor;