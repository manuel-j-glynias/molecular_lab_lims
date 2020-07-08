import * as React from "react";
import {useVariant_Markers_For_GeneQuery} from '../../../generated/graphql'
import GenomicVariantMarkersList from "./GenomicVariantMarkersList";

export interface Props {
    gene_id: string;
    marker_id: string;
    handleMarkerIdChange: (newId: string) => void;
    set_variant_type_name: (newTypeName: string) => void;
    set_variant_id: (newId: string) => void;
    query_string:string
}
const className = 'GenomicVariantMarkersList';
const GenomicVariantMarkersListContainer: ({gene_id, handleMarkerIdChange, marker_id,set_variant_type_name,set_variant_id,query_string}: Props) => any = ({gene_id, handleMarkerIdChange, marker_id,set_variant_type_name,set_variant_id,query_string}: Props) => {

    const {data, error, loading} = useVariant_Markers_For_GeneQuery(
        {variables: {omnigene_id:gene_id,query_string:query_string}}
    );


    return (


        data ?
                 <GenomicVariantMarkersList marker_id={marker_id} handleMarkerIdChange={handleMarkerIdChange} set_variant_type_name={set_variant_type_name} data={data} set_variant_id={set_variant_id}/>

         : <span></span>

    )
}

export default GenomicVariantMarkersListContainer;