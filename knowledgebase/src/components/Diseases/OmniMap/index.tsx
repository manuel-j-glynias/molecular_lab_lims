import * as React from "react";
import {useOmniMapQuery} from "../../../generated/graphql";
import OmniMap from "./OmniMap";

interface Props {
    id: string;
}

const OmniMapContainer: React.FC<Props> = ({id}) => {
    const {data, error, loading, refetch} = useOmniMapQuery(({variables:{id:id}}))
    React.useEffect(() => {
        refetch();
    }, [id, refetch]);
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>ERROR</div>;
    }

    if (!data) {
        return <div>No OmniMap</div>;
    }    return (
        <OmniMap data={data} id={id} refetch={refetch}/>
    )
}

export default OmniMapContainer;