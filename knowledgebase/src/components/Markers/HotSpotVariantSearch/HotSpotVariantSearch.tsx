import * as React from "react";
import {Fragment} from "react";
import './styles.css'
import {
    HotSpotVariantByGeneQuery, useGenomicVariantAddHotSpotVariantMutation
} from '../../../generated/graphql'

const className = 'HotSpotVariantSearch';

export interface Props {
    data: HotSpotVariantByGeneQuery;
    variant_id:string;
    refetch_parent: () => void;
}


const HotSpotVariantSearch: React.FC<Props> = ({data,variant_id,refetch_parent}: Props) => {

    const [addHotSpotMutation, { loading: mutationLoading, error: mutationError, data:mutationData }] = useGenomicVariantAddHotSpotVariantMutation({variables:{variant_id:'',hotspot_id:''}})



    const add_hotspot = async (hotspot_id: string) => {
        await addHotSpotMutation({variables:{variant_id:variant_id, hotspot_id:hotspot_id}})
        refetch_parent()
    }

    return (
        <div className={className} >

            <div className={`${className}__Wrapper`} >
                {data.HotSpotVariant &&
                data.HotSpotVariant.map(
                    (hs ,index) =>
                        hs && (
                            <Fragment key={index}>
                            <div >{hs.name} </div>
                            <div >{hs.begin} </div>
                            <div >{hs.end}</div>
                            <div><button className={`${className}__small-btn`} onClick={() => add_hotspot(hs.id)}>Attach</button></div>
                            </Fragment>
                    ),
                )}
            </div>

        </div>
    )
}

export default HotSpotVariantSearch;