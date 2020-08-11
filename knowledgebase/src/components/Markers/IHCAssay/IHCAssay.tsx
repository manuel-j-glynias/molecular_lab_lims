import * as React from "react";
import {IhcAssayQuery} from "../../../generated/graphql";
import './styles.css';

interface Props{
    ihc_id: string;
    data:IhcAssayQuery;
    refetch: () => void;
}

const className = 'IHCAssay';

const IHCAssay : React.FC<Props> = ({data,ihc_id, refetch}) => {

    function showResultMax() {
        let resultMax = "NA"
        if (data && data.IHCAssay && data.IHCAssay[0] && data.IHCAssay[0].resultMax){
            if (data.IHCAssay[0].resultMax.floatValue != -1){
                resultMax = data.IHCAssay[0].resultMax.floatValue.toString()
            }
        }
        return resultMax
    }

    if (!data.IHCAssay){
        return <div>No IHC Assay</div>;
    }
    if (!data.IHCAssay[0]){
        return <div>No IHC Assay</div>;
    }


    return <React.Fragment>
        <div className={`${className}__Wrapper`}>
            <div>Name</div>
            <div>{data.IHCAssay[0].name.statement}</div>
            <div>antibodyClone</div>
            <div>{data.IHCAssay[0].antibodyClone.statement}</div>
            <div>comparator</div>
            <div>{data.IHCAssay[0].comparator.comparator}</div>
            { data.IHCAssay[0].comparator.comparator!="EqualsString" && <div>Result Min</div> }
            { data.IHCAssay[0].comparator.comparator!="EqualsString" && <div>{data.IHCAssay[0].resultMin.floatValue}</div> }
            { data.IHCAssay[0].comparator.comparator!="EqualsString" &&  <div>Result Max</div> }
            { data.IHCAssay[0].comparator.comparator!="EqualsString" && <div>{showResultMax()}</div> }
            { data.IHCAssay[0].comparator.comparator!="EqualsString" && <div>Result Units</div> }
            { data.IHCAssay[0].comparator.comparator!="EqualsString" && <div>{data.IHCAssay[0].resultUnits.statement}</div> }

            { data.IHCAssay[0].comparator.comparator=="EqualsString" && data.IHCAssay[0].resultString && <div>Results</div> }
            { data.IHCAssay[0].comparator.comparator=="EqualsString" && data.IHCAssay[0].resultString && <div>{data.IHCAssay[0].resultString.statement}</div> }




        </div>
        </React.Fragment>
    }
export default IHCAssay;