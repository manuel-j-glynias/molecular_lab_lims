import * as React from "react";
import {useMarkerProfileQuery} from "../../../generated/graphql";
import MarkerProfileEditor from "./MarkerProfileEditor";

interface Props {
    marker_id: string;
    editing_description: boolean;
    set_editing_description: (newEditionDescription: boolean) => void;
    editing_components: boolean;
    set_editing_components: (newEditionDescription: boolean) => void;
}

const MarkerProfileEditorContainer: React.FC<Props> = ({marker_id, editing_description, set_editing_description,editing_components,set_editing_components}) => {
    const {data, error, loading, refetch} = useMarkerProfileQuery(({variables:{marker_id:marker_id}}))
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
        <MarkerProfileEditor data={data} marker_id={marker_id} editing_description={editing_description} set_editing_description={set_editing_description}
                             editing_components={editing_components} set_editing_components={set_editing_components} refetch={refetch}/>
    )
}

export default MarkerProfileEditorContainer;