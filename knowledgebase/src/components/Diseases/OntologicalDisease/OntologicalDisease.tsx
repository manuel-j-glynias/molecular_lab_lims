import * as React from 'react';

import {OntologicalDiseaseQuery} from '../../../generated/graphql';
import './styles.css';



interface Props {
    data: OntologicalDiseaseQuery;
    editing_description: boolean;
    set_editing_description: (newEditionDescription: boolean) => void;
    editing_synonyms: boolean;
    set_editing_synonyms: (newEditionDescription: boolean) => void;
    refetch: () => void;

}

const className = 'OntologicalDisease';

const OntologicalDisease: React.FC<Props> = ({data,editing_description,set_editing_description,editing_synonyms,set_editing_synonyms,refetch}) => {

    const isMCodeAvailable = () : boolean =>{
        let b = false

        if (data){
            if (data.OntologicalDisease){
                if (data.OntologicalDisease[0]){
                    if (data.OntologicalDisease[0].omniMaps){
                        if (data.OntologicalDisease[0].omniMaps.list){
                            if (data.OntologicalDisease[0].omniMaps.list[0]){
                                if (data.OntologicalDisease[0].omniMaps.list[0].mCodes[0]){
                                    b = true
                                }
                            }
                        }
                    }
                }
            }
        }

        return b
    }

    if (!data.OntologicalDisease) {
        return <div>No Selected OntologicalDisease</div>;
    }
    if (!data.OntologicalDisease[0]) {
        return <div></div>;

    }
    return (
        <div className={className}>
            <h1 className={`${className}__title`}>{data.OntologicalDisease[0].name.statement}</h1>
            <div className={`${className}__Wrapper`}>
                <div>Name</div>
                <div>{data.OntologicalDisease[0].name.statement}</div>

                 <div>Description</div>
                <div>{data.OntologicalDisease[0].description.statement}</div>


                <div>Synonyms</div>
                {/*{<div>{data.OntologicalDisease[0].synonyms.stringList.join(',') }</div>}*/}
                <div>Blank for now</div>

                <div>OmniMaps--Disease Path</div>

                {<div>{data.OntologicalDisease[0].omniMaps &&
                data.OntologicalDisease[0].omniMaps.list[0] &&
                data.OntologicalDisease[0].omniMaps.list[0].mCodes[0] &&
                data.OntologicalDisease[0].omniMaps.list[0].mCodes[0].diseasePath.statement }</div>}


            </div>

        </div>


    );
};

export default OntologicalDisease;