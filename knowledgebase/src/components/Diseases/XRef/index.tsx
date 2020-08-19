import * as React from "react";
import {useXRefQuery} from "../../../generated/graphql";
import XRef from "./XRef";

interface Props {
    id: string;
}

const XRefContainer: React.FC<Props> = ({id}) => {
    const {data, error, loading, refetch} = useXRefQuery(({variables:{id:id}}))
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
        return <div>No XRef</div>;
    }    return (
        <XRef data={data} id={id} refetch={refetch}/>
    )
}

export default XRefContainer;