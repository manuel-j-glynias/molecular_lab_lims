import * as React from "react";
import {useProteinExpression_MarkerQuery} from "../../../generated/graphql";
import ProteinExpressionMarkerEditor from "./ProteinExpressionMarkerEditor";

interface Props {
    marker_id: string;
    editing_description: boolean;
    set_editing_description: (newEditionDescription: boolean) => void;
}

const ProteinExpressionMarkerEditorContainer: React.FC<Props> = ({marker_id, editing_description, set_editing_description}) => {
    const {data, error, loading, refetch} = useProteinExpression_MarkerQuery(({variables:{marker_id:marker_id}}))
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
        return <div>No Variant</div>;
    }    return (
        <ProteinExpressionMarkerEditor data={data} marker_id={marker_id} editing_description={editing_description} set_editing_description={set_editing_description} refetch={refetch}/>
    )
}

export default ProteinExpressionMarkerEditorContainer;