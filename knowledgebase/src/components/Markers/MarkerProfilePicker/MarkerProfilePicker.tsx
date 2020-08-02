import * as React from "react";
import {Fragment} from "react";

import './styles.css'
import {
    MarkerComponent,
    MarkerProfile,
    MarkerProfileComponentsQuery
} from '../../../generated/graphql'

const className = 'MarkerProfilePicker';

export interface Props {
    editing_components: boolean;
    showing_marker_profile: boolean;
    set_selected_component:(selected:MarkerComponent | null) => void;
    data: MarkerProfileComponentsQuery;
}


const MarkerProfilePicker: React.FC<Props> = ({editing_components, showing_marker_profile, set_selected_component, data}: Props) => {

    function copy_marker(marker: MarkerProfile) {
        console.log(marker.name.statement)
        set_selected_component(marker)
    }


    return    (


        <Fragment>
            {editing_components ? <div className={`${className}__Container`}>
                <div className={`${className}__Title`}>Marker Profiles</div>
                <div className={className}>
                <div className={`${className}__list`}>
                    {data.MarkerProfile &&
                    data.MarkerProfile.map(
                        (marker, index) =>
                            marker && (

                                <div className={`${className}__Marker_Wrapper`} key={marker.name.id}>
                                    <div  className={`${className}__item`}>{marker.name.statement}</div>
                                    <div>
                                        <button className={`${className}__small-btn`}
                                            // @ts-ignore
                                                onClick={() => copy_marker(marker)}>Copy
                                        </button>
                                    </div>
                                </div>
                            ),
                    )}
                </div>

            </div>
            </div> : <span></span>}
        </Fragment>
    )
}

export default MarkerProfilePicker;