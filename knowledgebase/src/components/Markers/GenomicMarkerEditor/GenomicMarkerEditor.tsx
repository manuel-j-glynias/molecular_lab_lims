import * as React from "react";
import {Variant_Markers_For_IdQuery} from "../../../generated/graphql";
import GenomicMarkerSNVEditorContainer from "../GenomicMarkerSNVEditor";
import GenomicMarkerRegionEditorContainer from "../GenomicMarkerRegionEditor";
import GenomicMarkerCNVEditorContainer from "../GenomicMarkerCNVEditor";
import GenomicMarkerFusionEditorContainer from "../GenomicMarkerFusionEditor";
import './styles.css'

interface Props {
    data: Variant_Markers_For_IdQuery;
}
const className = 'GenomicMarkerEditor';

const GenomicMarkerEditor : React.FC<Props> = ({data}) => {
    if (!data) {
        return <div>No GenomicVariantMarker</div>;
    }
    if (!data.GenomicVariantMarker) {
        return <div>No GenomicVariantMarker</div>;
    }
    if (!data.GenomicVariantMarker[0]) {
        return <div>No GenomicVariantMarker</div>;
    }
    return (
        <React.Fragment>
            <div className={className}>
                <h3 className={`${className}__title`}>{data.GenomicVariantMarker[0].name.statement} ({data.GenomicVariantMarker[0].method.statement})</h3>
                <div className={`${className}__Wrapper`}>
                { (data.GenomicVariantMarker[0].variant.__typename==="VariantSNVIndel") && <GenomicMarkerSNVEditorContainer variant_id={data.GenomicVariantMarker[0].variant.id} />}
                { (data.GenomicVariantMarker[0].variant.__typename==="VariantRegion") && <GenomicMarkerRegionEditorContainer variant_id={data.GenomicVariantMarker[0].variant.id}/>}
                { (data.GenomicVariantMarker[0].variant.__typename==="VariantCNV") && <GenomicMarkerCNVEditorContainer variant_id={data.GenomicVariantMarker[0].variant.id}/>}
                { (data.GenomicVariantMarker[0].variant.__typename==="VariantFusion") && <GenomicMarkerFusionEditorContainer variant_id={data.GenomicVariantMarker[0].variant.id}/>}
                </div>
            </div>
        </React.Fragment>

    )
}

export default GenomicMarkerEditor;