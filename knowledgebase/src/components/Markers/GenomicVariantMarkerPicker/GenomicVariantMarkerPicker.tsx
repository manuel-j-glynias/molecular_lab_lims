import * as React from "react";
import {Fragment} from "react";

import './styles.css'
import {
    MarkerComponent,
    GenomicVariantMarker,
    GenomicVariantMarkerComponentsQuery
} from '../../../generated/graphql'

const className = 'GenomicVariantMarkerPicker';

export interface Props {
    editing_components: boolean;
    showing_genomic_variants: boolean;
    set_selected_component:(selected:MarkerComponent | null) => void;
    data: GenomicVariantMarkerComponentsQuery;
}


const GenomicVariantMarkerPicker: React.FC<Props> = ({editing_components, showing_genomic_variants, set_selected_component, data}: Props) => {

    function copy_marker(marker: GenomicVariantMarker) {
        console.log(marker.name.statement)
        set_selected_component(marker)
    }


    return    (


        <Fragment>
            {editing_components ? <div className={`${className}__Container`}>
                <div className={`${className}__Title`}>Genomic Variant Markers</div>
                <div className={className}>
                <div className={`${className}__list`}>
                    {data.GenomicVariantMarker &&
                    data.GenomicVariantMarker.map(
                        (marker, index) =>
                            marker && (

                                <div className={`${className}__Marker_Wrapper`} key={index}>
                                    <div className={`${className}__item`}>{marker.name.statement}</div>
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

export default GenomicVariantMarkerPicker;