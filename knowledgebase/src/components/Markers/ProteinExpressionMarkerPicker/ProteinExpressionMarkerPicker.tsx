import * as React from "react";
import {Fragment} from "react";

import './styles.css'
import {
    MarkerComponent,
    ProteinExpressionMarker,
    ProteinExpressionMarkerComponentsQuery
} from '../../../generated/graphql'

const className = 'ProteinExpressionMarkerPicker';

export interface Props {
    editing_components: boolean;
    showing_protein_expression: boolean;
    set_selected_component:(selected:MarkerComponent | null) => void;
    data: ProteinExpressionMarkerComponentsQuery;
}


const ProteinExpressionMarkerPicker: React.FC<Props> = ({editing_components, showing_protein_expression, set_selected_component, data}: Props) => {

    function copy_marker(marker: ProteinExpressionMarker) {
        console.log(marker.name.statement)
        set_selected_component(marker)
    }


    return    (


        <Fragment>
            {editing_components ? <div className={`${className}__Container`}>
                <div className={`${className}__Title`}>Protein Expression Markers</div>
                <div className={className}>
                <div className={`${className}__list`}>
                    {data.ProteinExpressionMarker &&
                    data.ProteinExpressionMarker.map(
                        (marker, index) =>
                            marker && (

                                <div className={`${className}__Marker_Wrapper`} key={index}>
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

export default ProteinExpressionMarkerPicker;