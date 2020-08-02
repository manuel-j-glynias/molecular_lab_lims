
import * as React from 'react'
import { OntologicalDiseaseListQuery } from '../../../generated/graphql'
import './styles.css'



interface Props {
    ontological_disease_id: string;
    handle_ontological_disease_id_Change: (newId: string) => void;
    data: OntologicalDiseaseListQuery;
}

const className = 'OntologicalDiseaseList';



const OntologicalDiseaseList: React.FC<Props> = ({data,
                                                     handle_ontological_disease_id_Change, ontological_disease_id}) => {

    return (
    <div className={className} >

        <ol className={`${className}__list`} >
            {!!data.OntologicalDisease &&
            data.OntologicalDisease.map(
                (disease, i: string | number ) =>
                    !!disease && (
                        <li key={i}
                            className={ disease.id===ontological_disease_id ?  `${className}__selected_item` :  `${className}__item`  }
                            onClick={() => handle_ontological_disease_id_Change(disease.id!)}
                        >
                            {disease.name.statement}
                        </li>
                    ),
            )}
        </ol>

    </div>
)
}

export default OntologicalDiseaseList;