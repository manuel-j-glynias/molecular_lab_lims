import * as React from "react";
import {RnaSeqAssayQuery} from "../../../generated/graphql";
import './styles.css';

interface Props{
    rnaSeqAssay_id: string;
    data:RnaSeqAssayQuery;
    refetch: () => void;
}

const className = 'RNASeqAssay';

const RNASeqAssay : React.FC<Props> = ({data,rnaSeqAssay_id, refetch}) => {

    function showResultMax() {
        let resultMax = "NA"
        if (data && data.RNASeqAssay && data.RNASeqAssay[0] && data.RNASeqAssay[0].resultMax){
            resultMax = data.RNASeqAssay[0].resultMax.floatValue.toString()
        }
        return resultMax
    }

    if (!data.RNASeqAssay){
        return <div>No IHC Assay</div>;
    }
    if (!data.RNASeqAssay[0]){
        return <div>No IHC Assay</div>;
    }


    return <React.Fragment>
        <div className={`${className}__Wrapper`}>
            <div>Name</div>
            <div>{data.RNASeqAssay[0].name.statement}</div>
            <div>comparator</div>
            <div>{data.RNASeqAssay[0].comparator.comparator}</div>
            <div>resultMin</div>
            <div>{data.RNASeqAssay[0].resultMin.floatValue}</div>
            <div>resultMax</div>
            <div>{showResultMax()}</div>
            <div>resultUnits</div>
            <div>{data.RNASeqAssay[0].resultType.resultType}</div>


        </div>
        </React.Fragment>
    }
export default RNASeqAssay;