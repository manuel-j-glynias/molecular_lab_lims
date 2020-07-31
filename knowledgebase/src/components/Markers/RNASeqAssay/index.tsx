import * as React from "react";
import {useRnaSeqAssayQuery} from "../../../generated/graphql";
import RNASeqAssay from "./RNASeqAssay";

interface Props {
    rnaSeq_id: string;
}

const RNASeqAssayContainer: React.FC<Props> = ({rnaSeq_id}) => {
    const {data, error, loading, refetch} = useRnaSeqAssayQuery(({variables:{id:rnaSeq_id}}))
    React.useEffect(() => {
        refetch();
    }, [rnaSeq_id, refetch]);
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>ERROR</div>;
    }

    if (!data) {
        return <div>No Variant</div>;
    }    return (
        <RNASeqAssay data={data} rnaSeqAssay_id={rnaSeq_id} refetch={refetch}/>
    )
}

export default RNASeqAssayContainer;