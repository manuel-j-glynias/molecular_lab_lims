import * as React from "react";
import {Fragment} from "react";
import {OmniMapQuery} from "../../../generated/graphql";
import './styles.css';

interface Props{
    id: string;
    data:OmniMapQuery;
    refetch: () => void;
}

const className = 'OmniMap';

const OmniMap : React.FC<Props> = ({data,id, refetch}) => {

    if (!data.OntologicalDisease){
        return <div>No OmniMap</div>;
    }
    if (!data.OntologicalDisease[0]){
        return <div>No OmniMap</div>;
    }
    

    return (
        <div className={className} >
            <div className={`${className}__Wrapper`}>
                {data.OntologicalDisease[0].omniMaps.list &&
                data.OntologicalDisease[0].omniMaps.list.map(
                    (om ,index) =>
                        om && (
                            <Fragment key={index}>
                                <div >{om.mCodes[0] && om.mCodes[0].mcodeId}</div>
                                <div >{om.mCodes[0] && om.mCodes[0].diseasePath.statement}</div>
                                <div >{om.mCodes[0] && om.mCodes[0].omniDisease.omniDiseaseId}</div>
                                <div >{om.mCodes[0] && om.mCodes[0].omniDisease.name.statement}</div>
                                {/*<div >{om.omniDisease && om.omniDisease.omniDiseaseId}</div>
                                <div >{om.omniDisease && om.omniDisease.name.statement}</div>*/}
                            </Fragment>    ),
                )}
            </div>
        </div>
    )

    {/*return (
        <div className={className} >

            <div className={`${className}__Wrapper`} >
                {data.cv_by_name &&
                data.cv_by_name.map(
                    (cv ,index) =>
                        cv && (
                            <Fragment key={index}>
                                <div >{cv.gene} </div>
                                <div >{cv.pDot==='(NONE)' ?  cv.pDot : 'p.' + cv.pDot } </div>
                                <div >{cv.cDot}</div>
                                <div>
                                    <a href={'https://www.ncbi.nlm.nih.gov/clinvar/variation/' + cv.variantId} target="_blank"
                                       rel="noopener noreferrer">{cv.significance.statement }</a>
                                </div>
                                <div><button className={`${className}__small-btn`} onClick={() => add_clinvar(cv.id)}>Attach</button></div>
                            </Fragment>
                        ),
                )}
            </div>

        </div>
    )*/}


    }
export default OmniMap;