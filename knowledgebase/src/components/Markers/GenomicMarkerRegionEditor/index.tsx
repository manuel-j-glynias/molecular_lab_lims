import * as React from "react";
import {useVariantRegionQuery} from "../../../generated/graphql";
import GenomicMarkerRegionEditor from './GenomicMarkerRegionEditor'

interface Props {
    variant_id:string
}
const GenomicMarkerRegionEditorContainer : React.FC<Props> = ({variant_id}) => {

    const {data, error, loading, refetch} = useVariantRegionQuery((
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
    return <GenomicMarkerRegionEditor data={data}/>}

export default GenomicMarkerRegionEditorContainer;