import * as React from "react";
import {useVariantSnvIndelQuery} from "../../../generated/graphql";
import GenomicMarkerSNVEditor from "./GenomicMarkerSNVEditor";

interface Props {
    variant_id:string;
    editing_description: boolean;
    set_editing_description: (newEditionDescription: boolean) => void;
    editing_protein_effect: boolean;
    set_editing_protein_effect: (newEditionDescription: boolean) => void;
}

const GenomicMarkerSNVEditorContainer : React.FC<Props> = ({variant_id,editing_description,set_editing_description,editing_protein_effect,set_editing_protein_effect}) => {

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
    return <GenomicMarkerSNVEditor data={data} editing_description={editing_description} set_editing_description={set_editing_description} editing_protein_effect={editing_protein_effect} set_editing_protein_effect={set_editing_protein_effect} refetch={refetch}/>
}

export default GenomicMarkerSNVEditorContainer;