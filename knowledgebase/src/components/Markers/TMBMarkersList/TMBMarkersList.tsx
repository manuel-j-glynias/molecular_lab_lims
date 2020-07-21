import * as React from "react";
import './styles.css'
import {Tmb_MarkersQuery} from '../../../generated/graphql'

const className = 'TMBMarkersList';

export interface Props {
    marker_id: string;
    handleMarkerIdChange: (newId: string) => void;
    data: Tmb_MarkersQuery;
}


const TMBMarkersList: React.FC<Props> = ({handleMarkerIdChange, marker_id,  data}: Props) => {

    return (
        <div className={className} >

            <ol className={`${className}__list`} >
                {data.TMBMarker &&
                data.TMBMarker.map(
                    (marker ) =>
                        marker && (

                            <li
                                key={marker.id}
                                className={ marker.id===marker_id ?  `${className}__selected_item` :  `${className}__item`  }
                                onClick={() => {
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

export default TMBMarkersList;