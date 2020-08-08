import * as React from "react";
import {Fragment} from "react";
import './styles.css'
import {
    ProteinLevelAssayQuery
} from '../../../generated/graphql'

const className = 'ProteinLevelAssayList';

export interface Props {
    data: ProteinLevelAssayQuery;
    protein_level_assay_id: string;
    set_protein_level_assay_id: (id:string) => void;
}


const ProteinLevelAssayList: React.FC<Props> = ({data,protein_level_assay_id,set_protein_level_assay_id}: Props) => {

    const handleIdChange = async (newID:string) => {
        set_protein_level_assay_id(newID)
    }

    return (
        <div className={className} >

            <div className={`${className}__Wrapper`} >
                {data.ProteinLevelAssay &&
                data.ProteinLevelAssay.map(
                    (pla ,index) =>
                        pla && (
                            <Fragment key={index} >
                                <div className={ pla.id===protein_level_assay_id ?  `${className}__selected_item` :  `${className}__item`  }
                                      onClick={() => handleIdChange(pla.id)} >{pla.name.statement} </div>
                                <div className={ pla.id===protein_level_assay_id ?  `${className}__selected_item` :  `${className}__item`  }>{pla.__typename}</div>
                            </Fragment>
                        ),
                )}
            </div>

        </div>
    )
}

export default ProteinLevelAssayList;