import * as React from "react";
import {GenomicVariantComponentsQuery, useGenomicVariantComponentsQuery} from "../../../generated/graphql";
import ContentContainer from "../../Genes/ContentContainer/ContentContainer";
import GenomicMarkerContentContainer from "./GenomicMarkerContentContainer";


interface Props {
    variant_id: string
    editing_description: boolean;
    editing_protein_effect: boolean;
    selected_gene_label: string;
}
const GenomicMarkerContentContainerContainer : React.FC<Props> = ({variant_id,editing_protein_effect,editing_description,selected_gene_label}) => {
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

    return <GenomicMarkerContentContainer data={data} variant_id={variant_id} editing_description={editing_description} editing_protein_effect={editing_protein_effect} selected_gene_label={selected_gene_label} refetch={refetch}/>

}
export default GenomicMarkerContentContainerContainer;