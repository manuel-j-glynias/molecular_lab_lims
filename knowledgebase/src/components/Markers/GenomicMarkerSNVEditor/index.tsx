import * as React from "react";
import {useVariantSnvIndelQuery} from "../../../generated/graphql";
import GenomicMarkerSNVEditor from "./GenomicMarkerSNVEditor";

interface Props {
    variant_id:string
}

const GenomicMarkerSNVEditorContainer : React.FC<Props> = ({variant_id}) => {

    const {data, error, loading, refetch} = useVariantSnvIndelQuery((
        {variables:{variant_id:variant_id}}
    ))
    React.useEffect(() => {
        refetch();
    }, [variant_id, refetch]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>ERROR</div>;
    }

    if (!data) {
        return <div>No Variant</div>;
    }
    return <GenomicMarkerSNVEditor data={data}/>
}

export default GenomicMarkerSNVEditorContainer;