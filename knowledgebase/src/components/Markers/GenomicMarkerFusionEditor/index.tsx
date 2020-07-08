import * as React from "react";
import {useVariantFusionQuery} from "../../../generated/graphql";
import GenomicMarkerFusionEditor from './GenomicMarkerFusionEditor'

interface Props {
    variant_id: string
}
const GenomicMarkerFusionEditorContainer : React.FC<Props> = ({variant_id}) => {
    const {data, error, loading, refetch} = useVariantFusionQuery((
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
    return <GenomicMarkerFusionEditor data={data}/>
}

export default GenomicMarkerFusionEditorContainer;