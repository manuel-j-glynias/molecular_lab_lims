import * as React from "react";
import {GenomicVariantComponentsQuery, useGenomicVariantComponentsQuery} from "../../../generated/graphql";
import ContentContainer from "../../Genes/ContentContainer/ContentContainer";
import GenomicMarkerContentContainer from "./GenomicMarkerContentContainer";


interface Props {
    variant_id: string
}
const GenomicMarkerContentContainerContainer : React.FC<Props> = ({variant_id}) => {
    const { data, error, loading, refetch } = useGenomicVariantComponentsQuery(
        {variables:{variant_id:variant_id}}
    )
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
        return <div>Please select a variant from the panel</div>;
    }

    return <GenomicMarkerContentContainer data={data} variant_id={variant_id}/>

}
export default GenomicMarkerContentContainerContainer;