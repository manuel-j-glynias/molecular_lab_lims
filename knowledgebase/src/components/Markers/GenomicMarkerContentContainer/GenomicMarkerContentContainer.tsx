import * as React from "react";
import {GenomicVariantComponentsQuery} from "../../../generated/graphql";
import './styles.css'
import JaxVariantContainer from "../JaxVariant";
import GOVariantContainer from "../GOVariant";
import ClinVarVariantContainer from "../ClinVarVariant";
import HotSpotVariantContainer from "../HotSpotVariant";
import ClinVarVariantSearchContainer from "../ClinVarVariantSearch";
import HotSpotVariantSearchContainer from "../HotSpotVariantSearch";
import JaxVariantSearchContainer from "../JaxVariantSearch";
import GOVariantSearchContainer from "../GOVariantSearch";

interface Props {
    variant_id: string;
    data: GenomicVariantComponentsQuery;
    editing_description: boolean;
    editing_protein_effect: boolean;
    selected_gene_label: string;
    refetch: () => void;
}
const className = 'GenomicMarkerContentContainer';
const GenomicMarkerContentContainer : React.FC<Props> = ({variant_id,data,editing_description,editing_protein_effect,selected_gene_label,refetch}) => {
    const [show_jax, set_show_jax] = React.useState(false);
    const [show_go, set_show_go] = React.useState(false);
    const [show_clinvar, set_show_clinvar] = React.useState(false);
    const [show_hotspot, set_show_hotspot] = React.useState(false);

    if (!data || !data.GenomicVariant || !data.GenomicVariant[0]) {
        return <div>Please select a variant</div>
    }

    return (<div className={className}>
        <h3 className={'GenomicMarkerContentContainer__title'}>Content</h3>
        <div className="form-group">
            <button className="btn btn-primary my-1 GenomicMarkerContentContainer__Button" onClick={() => set_show_jax(!show_jax)}>
                {show_jax ? <span>Hide Jax</span> : <span>Show Jax</span>}
            </button>
            <button className="btn btn-primary my-1 GenomicMarkerContentContainer__Button" onClick={() => set_show_go(!show_go)}>
                {show_go ? <span>Hide GO</span> : <span>Show GO</span>}
            </button>
            <button className="btn btn-primary my-1 GenomicMarkerContentContainer__Button" onClick={() => set_show_clinvar(!show_clinvar)}>
                {show_clinvar ? <span>Hide ClinVar</span> : <span>Show ClinVar</span>}
            </button>
            <button className="btn btn-primary my-1 GenomicMarkerContentContainer__Button" onClick={() => set_show_hotspot(!show_hotspot)}>
                {show_hotspot ? <span>Hide HotSpot</span> : <span>Show HotSpot</span>}
            </button>
        </div>
        <div className = {`${className}__Wrapper`}>
            <div>
                {show_jax ? ( data.GenomicVariant[0].jaxVariant ? <JaxVariantContainer id={data.GenomicVariant[0].jaxVariant.id} editing_protein_effect={editing_protein_effect} editing_description={editing_description} variant_id={variant_id} refetch_parent={refetch}/>:
                    <div>No Jax Variant associated with this marker.  Select one from the list below:
                        <JaxVariantSearchContainer gene_name={selected_gene_label} variant_id={variant_id} refetch_parent={refetch}/>
                    </div>) :<span></span> }
            </div>
            <div>
                {show_go ? ( data.GenomicVariant[0].goVariant ? <GOVariantContainer id={data.GenomicVariant[0].goVariant.id} variant_id={variant_id} refetch_parent={refetch}/>:
                    <div>No Go Variant associated with this marker.  Select one from the list below:
                        <GOVariantSearchContainer gene_name={selected_gene_label} variant_id={variant_id} refetch_parent={refetch}/>
                    </div>) : <span></span>}
            </div>
            <div>
                {show_clinvar ? ( data.GenomicVariant[0].clinVarVariant ? <ClinVarVariantContainer id={data.GenomicVariant[0].clinVarVariant.id}/>:
                    <div>No ClinVar Variant associated with this marker.  Select one from the list below:
                        <ClinVarVariantSearchContainer gene_name={selected_gene_label} variant_id={variant_id} refetch_parent={refetch}/>
                    </div>) : <span></span> }
            </div>
            <div>
                {show_hotspot ? ( data.GenomicVariant[0].hotSpotVariant ? <HotSpotVariantContainer id={data.GenomicVariant[0].hotSpotVariant.id}/> :
                    <div>No HotSpot Variant associated with this marker.  Select one from the list below:
                        <HotSpotVariantSearchContainer gene_name={selected_gene_label} variant_id={variant_id} refetch_parent={refetch}/>
                    </div>) : <span></span>}
            </div>
        </div>
    </div>)
}

export default GenomicMarkerContentContainer;