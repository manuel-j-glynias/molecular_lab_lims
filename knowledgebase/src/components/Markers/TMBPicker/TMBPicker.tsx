import * as React from "react";
import {Fragment} from "react";

import './styles.css'
import {
    MarkerComponent,
    TmbMarker,
    TmbComponentsQuery
} from '../../../generated/graphql'

const className = 'TMBPicker';

export interface Props {
    editing_components: boolean;
    showing_tmb: boolean;
    set_selected_component:(selected:MarkerComponent | null) => void;
    data: TmbComponentsQuery;
}


const TMBPicker: React.FC<Props> = ({editing_components, showing_tmb, set_selected_component, data}: Props) => {

    function copy_marker(marker: TmbMarker) {
        console.log(marker.name.statement)
        set_selected_component(marker)
    }


    return    (


        <Fragment>
            {editing_components ? <div className={`${className}__Container`}>
                <div className={`${className}__Title`}>TMB Markers</div>
                <div className={className}>
                <div className={`${className}__list`}>
                    {data.TMBMarker &&
                    data.TMBMarker.map(
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

export default TMBPicker;