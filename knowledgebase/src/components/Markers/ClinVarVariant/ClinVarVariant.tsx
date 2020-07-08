import * as React from 'react';
import './styles.css'
import {ClinVarVariantQuery} from "../../../generated/graphql";


interface Props {
    data: ClinVarVariantQuery
}
const className = 'ClinVarVariant'

const ClinVarVariant: React.FC<Props> = ({data}) => {
    if (!data.ClinVarVariant || !data.ClinVarVariant[0]) {
        return <div>No ClinVar</div>;
    }
    return (
        <div className={className}>
             <h3 className={`${className}__title`}>ClinVar Variant: <a href={'https://www.ncbi.nlm.nih.gov/clinvar/variation/' + data.ClinVarVariant[0].variantId} target="_blank"
                                                                      rel="noopener noreferrer">{data.ClinVarVariant[0].variantId}</a></h3>
            <div className={`${className}__Wrapper`}>
                <div>Gene</div>
                <div>{data.ClinVarVariant[0].gene} </div>

                <div>cDot</div>
                <div>{data.ClinVarVariant[0].cDot} </div>

                <div>pDot</div>
                <div>{data.ClinVarVariant[0].pDot} </div>

                <div>Significance</div>
                <div>{data.ClinVarVariant[0].significance.statement} </div>

                <div>Explanation</div>
                <div>{data.ClinVarVariant[0].signficanceExplanation.statement} </div>

            </div>
        </div>
    )
}
export default ClinVarVariant;

