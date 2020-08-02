import * as React from "react";
import {MarkerComponent, useTmbComponentsQuery} from '../../../generated/graphql'
import './styles.css'
import TMBPicker from "./TMBPicker";
import {useState} from "react";


export interface Props {
    editing_components: boolean;
    showing_tmb: boolean;
    set_selected_component:(selected:MarkerComponent | null) => void;
    component_query_string: string;
}
const className = 'TMBPicker';
const TMBPickerContainer: ({editing_components, showing_tmb,set_selected_component,component_query_string}: Props) => any = ({editing_components, showing_tmb,set_selected_component,component_query_string}: Props) => {


    const {data, error, loading} = useTmbComponentsQuery({variables: {q_string:component_query_string}});

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
            <TMBPicker  showing_tmb={showing_tmb} set_selected_component={set_selected_component} editing_components={editing_components} data={data} />
    )
}

export default TMBPickerContainer;


