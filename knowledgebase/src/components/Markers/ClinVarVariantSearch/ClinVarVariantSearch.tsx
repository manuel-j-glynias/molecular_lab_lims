import * as React from "react";
import {Fragment} from "react";
import './styles.css'
import {
    ClinVarVariant,
    ClinVarVariantByGeneQuery,
    EditableStatement,
    useGenomicVariantAddClinVarVariantMutation
} from '../../../generated/graphql'

const className = 'ClinVarVariantSearch';

export interface Props {
    data: ClinVarVariantByGeneQuery;
    variant_id:string;
    refetch_parent: () => void;
}


const ClinVarVariantSearch: React.FC<Props> = ({data,variant_id,refetch_parent}: Props) => {

    const [addClinVarMutation, { loading: mutationLoading, error: mutationError, data:mutationData }] = useGenomicVariantAddClinVarVariantMutation({variables:{variant_id:'',clinvar_id:''}})

    function get_pdot(cv: { __typename?: "ClinVarVariant" } & Pick<ClinVarVariant, "gene" | "id" | "pDot" | "cDot" | "variantId"> & { significance: { __typename?: "EditableStatement" } & Pick<EditableStatement, "statement">; signficanceExplanation: { __typename?: "EditableStatement" } & Pick<EditableStatement, "statement"> }) {
        if (cv.pDot==='(NONE)'){
            return <> {cv.pDot}</>
        }
        else {
            return <> p.{cv.pDot}</>;
        }
    }

    const add_clinvar = async (clinVarId: any) => {
        console.log(clinVarId)
        await addClinVarMutation({variables:{variant_id:variant_id, clinvar_id:clinVarId}})
        refetch_parent()
    }

    return (
        <div className={className} >

            <div className={`${className}__Wrapper`} >
                {data.ClinVarVariant &&
                data.ClinVarVariant.map(
                    (cv ,index) =>
                        cv && (
                            <Fragment key={index}>
                            <div >{cv.gene} </div>
                            <div >{get_pdot(cv)} </div>
                            <div >{cv.cDot}</div>
                            <div>
                                <a href={'https://www.ncbi.nlm.nih.gov/clinvar/variation/' + cv.variantId} target="_blank"
                                   rel="noopener noreferrer">{cv.significance.statement }</a>
                            </div>
                            <div><button className={`${className}__small-btn`} onClick={() => add_clinvar(cv.id)}>Attach</button></div>
                            </Fragment>
                    ),
                )}
            </div>

        </div>
    )
}

export default ClinVarVariantSearch;