import * as React from "react";
import './styles.css'
import {Variant_Markers_For_GeneQuery} from '../../../generated/graphql'

const className = 'GenomicVariantMarkersList';

export interface Props {
    marker_id: string;
    handleMarkerIdChange: (newId: string) => void;
    set_variant_type_name: (newTypeName: string) => void;
    set_variant_id: (newId: string) => void;
    data: Variant_Markers_For_GeneQuery;
}

const GenomicVariantMarkersList: React.FC<Props> = ({handleMarkerIdChange, marker_id, set_variant_type_name, set_variant_id, data}: Props) => {

    return (
    <div className={className} >

        <ol className={`${className}__list`} >
            {data.GenomicVariantMarker &&
            data.GenomicVariantMarker.map(
                (marker ) =>
                    marker && (

                        <li
                            key={marker.id}
                            className={ marker.id===marker_id ?  `${className}__selected_item` :  `${className}__item`  }
                            onClick={() => {
                                            set_variant_type_name(marker.variant.__typename as string);
                                            set_variant_id(marker.variant.id)
                                            handleMarkerIdChange(marker.id!)
                            } }
                        >
                            {marker.name.statement}

                        </li>
                    ),
            )}
        </ol>

    </div>
    )
}

export default GenomicVariantMarkersList;