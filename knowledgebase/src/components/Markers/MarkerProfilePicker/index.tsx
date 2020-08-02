import * as React from "react";
import {MarkerComponent, useMarkerProfileComponentsQuery} from '../../../generated/graphql'
import './styles.css'
import MarkerProfilePicker from "./MarkerProfilePicker";
import {useState} from "react";


export interface Props {
    editing_components: boolean;
    showing_marker_profile: boolean;
    set_selected_component:(selected:MarkerComponent | null) => void;
    component_query_string: string;
}
const className = 'MarkerProfilesList';
const MarkerProfilePickerContainer: ({editing_components, showing_marker_profile, set_selected_component,component_query_string}: Props) => any = ({editing_components, showing_marker_profile,set_selected_component,component_query_string}: Props) => {


    const {data, error, loading} = useMarkerProfileComponentsQuery({variables: {q_string:component_query_string}});

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
            <MarkerProfilePicker  showing_marker_profile={showing_marker_profile} set_selected_component={set_selected_component} editing_components={editing_components} data={data} />
    )
}

export default MarkerProfilePickerContainer;


