import * as React from "react";
import {useVariant_Markers_For_IdQuery} from "../../../generated/graphql";
import GenomicMarkerEditor from "./GenomicMarkerEditor";

interface Props {
    marker_id: string
    variant_type_name:string;
    variant_id:string;
    editing_description: boolean;
    set_editing_description: (newEditionDescription: boolean) => void;
    editing_protein_effect: boolean;
    set_editing_protein_effect: (newEditionDescription: boolean) => void;

}

const GenomicMarkerEditorContainer : React.FC<Props> = ({variant_type_name, marker_id,variant_id,editing_description,set_editing_description,editing_protein_effect,set_editing_protein_effect}) => {
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
        <GenomicMarkerEditor data={data} editing_description={editing_description} set_editing_description={set_editing_description} editing_protein_effect={editing_protein_effect} set_editing_protein_effect={set_editing_protein_effect}/>

    )
}

export default GenomicMarkerEditorContainer;