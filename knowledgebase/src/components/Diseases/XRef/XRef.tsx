import * as React from "react";
import {Fragment} from "react";
import {XRefQuery} from "../../../generated/graphql";
import './styles.css';

interface Props{
    id: string;
    data:XRefQuery;
    refetch: () => void;
}

const className = 'XRef';

const XRef : React.FC<Props> = ({data,id, refetch}) => {

    if (!data.OntologicalDisease){
        return <div>No XRef</div>;
    }
    if (!data.OntologicalDisease[0]){
        return <div>No XRef</div>;
    }
    

    return (
        <div className={className} >
            <div className={`${className}__Wrapper`}>
                {data.OntologicalDisease[0].xrefs.list &&
                data.OntologicalDisease[0].xrefs.list.map(
                    (name ,index) =>
                        name && (
                            <Fragment key={index}>
                                <div >{name.source}</div>
                                <div >{name.sourceId}</div>
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
export default XRef;