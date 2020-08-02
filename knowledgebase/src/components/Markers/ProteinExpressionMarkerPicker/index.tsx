import * as React from "react";
import {MarkerComponent, useProteinExpressionMarkerComponentsQuery} from '../../../generated/graphql'
import './styles.css'
import ProteinExpressionMarkerPicker from "./ProteinExpressionMarkerPicker";
import {useState} from "react";


export interface Props {
    editing_components: boolean;
    showing_protein_expression: boolean;
    set_selected_component:(selected:MarkerComponent | null) => void;
    query_string: string;
}
const className = 'MarkerProfilesList';
const GenomicVariantMarkerPickerContainer: ({editing_components, showing_protein_expression,set_selected_component,query_string}: Props) => any = ({editing_components, showing_protein_expression,set_selected_component,query_string}: Props) => {


    const {data, error, loading} = useProteinExpressionMarkerComponentsQuery({variables: {query_string:query_string}});

    if (loading) {
        return <div>useMarkerComponentsQuery Loading...</div>
    }
    if (error) {
        return <div>useMarkerComponentsQuery Error!  {console.log(error.message)}</div>
    }

    if (!data) {
        return <div>useMarkerComponentsQuery No Data</div>;
    }

    return (
            <ProteinExpressionMarkerPicker  showing_protein_expression={showing_protein_expression} set_selected_component={set_selected_component} editing_components={editing_components} data={data} />
    )
}

export default GenomicVariantMarkerPickerContainer;


