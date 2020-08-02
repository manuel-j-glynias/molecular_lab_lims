import * as React from "react";
import {Fragment, useState} from "react";

import './styles.css'
import {MarkerComponent, GenomicVariant} from '../../../generated/graphql'
import GenomicVariantMarkerPickerContainer from "../GenomicVariantMarkerPicker";
import ProteinExpressionMarkerPickerContainer from "../ProteinExpressionMarkerPicker"
import MarkerProfilePickerContainer from "../MarkerProfilePicker"
import TMBPickerContainer from "../TMBPicker";
import MSIPickerContainer from "../MSIPicker";


const className = 'MarkerPicker';

export interface Props {
    editing_components: boolean;
    // selected_component: MarkerComponent;
    set_selected_component:(selected:MarkerComponent | null) => void;
}


const MarkerPicker: React.FC<Props> = ({editing_components,
                                           // selected_component,
                                           set_selected_component}: Props) => {

    const [showing_genomic_variants, set_showing_genomic_variants] = React.useState(false);
    const [showing_protein_expression, set_showing_protein_expression] = React.useState(false);
    const [showing_tmb, set_showing_tmb] = React.useState(false);
    const [showing_msi, set_showing_msi] = React.useState(false);
    const [showing_marker_profile, set_showing_marker_profile] = React.useState(false);

    const [component_query_string, set_component_query_string] = React.useState("");
    const [filter_term, set_filter_term] = useState('');

    const handleNameFilter = () => {
        set_component_query_string(filter_term)
    }
    const keyPressed = async (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "Enter") {
            handleNameFilter()
        }
    }
    const handleReset = () => {
        set_component_query_string('')
        set_filter_term('')
    }

    return    (
        <Fragment>
        {editing_components ? <div className={className}>
            <h3 className={'ContentContainer__title'}>Markers</h3>
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
            <div className="form-group">
                <button className="btn btn-primary my-1" onClick={() => set_showing_genomic_variants(!showing_genomic_variants)}>
                    {showing_genomic_variants ? <span>Hide Genomic Variant Markers</span> : <span>Show Genomic Variant Markers</span>}
                </button>
                <button className="btn btn-primary my-1" onClick={() => set_showing_protein_expression(!showing_protein_expression)}>
                    {showing_protein_expression ? <span>Hide Protein Expression Markers</span> : <span>Show Protein Expression Markers</span>}
                </button>
                <button className="btn btn-primary my-1" onClick={() => set_showing_tmb(!showing_tmb)}>
                    {showing_tmb ? <span>Hide TMB Markers</span> : <span>Show TMB Markers</span>}
                </button>
                <button className="btn btn-primary my-1" onClick={() => set_showing_msi(!showing_msi)}>
                    {showing_msi ? <span>Hide MSI Markers</span> : <span>Show MSI Markers</span>}
                </button>
                <button className="btn btn-primary my-1" onClick={() => set_showing_marker_profile(!showing_marker_profile)}>
                    {showing_marker_profile ? <span>Hide Marker Profiles</span> : <span>Show Marker Profiles</span>}
                </button>
            </div>
            <div className = {`${className}__Wrapper`}>
                <div>
                    {showing_genomic_variants ?
                        <div>
                            <GenomicVariantMarkerPickerContainer showing_genomic_variants={showing_genomic_variants}  set_selected_component={set_selected_component} editing_components={editing_components} query_string={component_query_string}/>
                        </div>
                        : <span></span>}
                </div>
                <div> {showing_protein_expression ?
                    <div>
                        <ProteinExpressionMarkerPickerContainer showing_protein_expression={showing_protein_expression}  set_selected_component={set_selected_component} editing_components={editing_components}  query_string={component_query_string}/>
                    </div>
                    : (<span></span>) }
                </div>
                <div> {showing_tmb ?
                    <div>
                        <TMBPickerContainer component_query_string={component_query_string} editing_components={editing_components} set_selected_component={set_selected_component}  showing_tmb={showing_tmb}/>
                    </div>
                    : (<span></span>) }
                </div>
                <div> {showing_msi ?
                    <div>
                        <MSIPickerContainer component_query_string={component_query_string} editing_components={editing_components} set_selected_component={set_selected_component}  showing_msi={showing_msi}/>
                    </div>
                    : (<span></span>) }
                </div>
                <div> {showing_marker_profile ?
                    <div>
                        <MarkerProfilePickerContainer component_query_string={component_query_string} editing_components={editing_components} set_selected_component={set_selected_component}  showing_marker_profile={showing_marker_profile}/>
                    </div>
                    : (<span></span>) }
                </div>
            </div>
        </div>
        : <span></span> }
        </Fragment>
    )
}

export default MarkerPicker;