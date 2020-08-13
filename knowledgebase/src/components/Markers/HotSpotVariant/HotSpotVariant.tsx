import * as React from 'react';
import {
    HotSpotVariantQuery,
    useGenomicVariantDeleteHotSpotVariantMutation,
    useGenomicVariantDeleteJaxVariantMutation
} from "../../../generated/graphql";
import './styles.css'

interface Props {
    data: HotSpotVariantQuery;
    variant_id: string;
    refetch_parent: () => void;
}

const className = 'HotSpotVariant'

const HotSpotVariant: React.FC<Props> = ({data,variant_id,refetch_parent}) => {

    const [deleteHSVarMutation, { loading: mutationLoading, error: mutationError, data:mutationData }] = useGenomicVariantDeleteHotSpotVariantMutation({variables:{variant_id:'',hs_var_id:''}})

    const delete_hsvar = async () => {
        if (data && data.HotSpotVariant && data.HotSpotVariant[0]){
            await deleteHSVarMutation({variables:{variant_id:variant_id, hs_var_id:data.HotSpotVariant[0].id}})
            refetch_parent()
        }
    }

    if (!data.HotSpotVariant) {
        return <div>No MyGeneInfo Gene</div>;
    }
    if (!data.HotSpotVariant[0]) {
        return <div>No OmniGene</div>;
    }


    return (

        <div className={className}>
            <h3 className={`${className}__title`}>HotSpot Variant: {data.HotSpotVariant[0].name}</h3>
            <div className={`${className}__Wrapper`}>
                <div>Gene</div>
                <div>{data.HotSpotVariant[0].gene} </div>

                <div>Reference Amino Acid</div>
                <div>{data.HotSpotVariant[0].referenceAminoAcid}</div>

                <div>Variant Amino Acid</div>
                <div>{data.HotSpotVariant[0].variantAminoAcid}</div>

                <div>Position</div>
                <div>{data.HotSpotVariant[0].position}</div>

                <div>Occurrences</div>
                {/*disease    oncoTreeCode    occurrences/totalSamples    percentOccurrence*/}
                <div className={`${className}__Occurrences_Wrapper`}>
                    {data.HotSpotVariant[0].occurrences && data.HotSpotVariant[0].occurrences.map(

                        (item,i:string | number) =>
                            !!item && (
                            <React.Fragment>
                            <div key={i}>{item.disease.name.statement}</div>
                            <div>{item.oncoTreeCode}</div>
                            <div >{item.occurrences.intValue} / {item.totalSamples.intValue}</div>
                            <div >{item.percentOccurrence.statement}</div>
                        </React.Fragment> )
                    )}
                </div>
            </div>

            <div></div>
            <div><button className={`${className}__small-btn`} onClick={() => delete_hsvar()}>Detach</button></div>
        </div>
    )
}
export default HotSpotVariant;