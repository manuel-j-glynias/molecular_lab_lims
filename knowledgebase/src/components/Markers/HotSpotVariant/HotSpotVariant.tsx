import * as React from 'react';
import {HotSpotVariantQuery} from "../../../generated/graphql";
import './styles.css'

interface Props {
    data: HotSpotVariantQuery;
}

const className = 'HotSpotVariant'

const HotSpotVariant: React.FC<Props> = ({data}) => {
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
                            <div key={i}>{item.disease}</div>
                            <div>{item.oncoTreeCode}</div>
                            <div >{item.occurrences.intValue} / {item.totalSamples.intValue}</div>
                            <div >{item.percentOccurrence.statement}</div>
                        </React.Fragment> )
                    )}
                </div>
            </div>
        </div>
    )
}
export default HotSpotVariant;