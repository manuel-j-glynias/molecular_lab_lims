import * as React from "react";
import {useIhcAssayQuery} from "../../../generated/graphql";
import IHCAssay from "./IHCAssay";

interface Props {
    ihc_id: string;
}

const IHCAssayContainer: React.FC<Props> = ({ihc_id}) => {
    const {data, error, loading, refetch} = useIhcAssayQuery(({variables:{id:ihc_id}}))
    React.useEffect(() => {
        refetch();
    }, [ihc_id, refetch]);
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>ERROR</div>;
    }

    if (!data) {
        return <div>No Variant</div>;
    }    return (
        <IHCAssay data={data} ihc_id={ihc_id} refetch={refetch}/>
    )
}

export default IHCAssayContainer;