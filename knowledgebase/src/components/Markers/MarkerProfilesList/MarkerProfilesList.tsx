import * as React from "react";
import './styles.css'
import {MarkerProfilesQuery} from '../../../generated/graphql'

const className = 'MarkerProfilesList';

export interface Props {
    marker_id: string;
    handleMarkerIdChange: (newId: string) => void;
    data: MarkerProfilesQuery;
}


const MarkerProfilesList: React.FC<Props> = ({handleMarkerIdChange, marker_id,  data}: Props) => {

    return (
        <div className={className} >

            <ol className={`${className}__list`} >
                {data.MarkerProfile &&
                data.MarkerProfile.map(
                    (marker ,index) =>
                        marker && (

                            <li
                                key={index}
                                className={ marker.id===marker_id ?  `${className}__selected_item` :  `${className}__item`  }
                                onClick={() => {handleMarkerIdChange(marker.id)} }
                            >
                                {marker.name.statement}

                            </li>
                        ),
                )}
            </ol>

        </div>
    )
}

export default MarkerProfilesList;