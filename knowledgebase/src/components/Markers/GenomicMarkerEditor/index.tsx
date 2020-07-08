import * as React from "react";
import {useVariant_Markers_For_IdQuery} from "../../../generated/graphql";
import GenomicMarkerEditor from "./GenomicMarkerEditor";

interface Props {
    marker_id: string
    variant_type_name:string;
    variant_id:string;
}

const GenomicMarkerEditorContainer : React.FC<Props> = ({variant_type_name, marker_id,variant_id}) => {
    const { data, error, loading, refetch } = useVariant_Markers_For_IdQuery(
        {variables:{id:marker_id}})
    React.useEffect(() => {
        refetch();
    }, [marker_id, refetch]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>ERROR</div>;
    }

    if (!data) {
        return <div>No Variant_Markers_For_Id</div>;
    }
    return (
        <GenomicMarkerEditor data={data}/>

    )
}

export default GenomicMarkerEditorContainer;