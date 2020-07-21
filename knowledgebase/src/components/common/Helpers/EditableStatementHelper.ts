import {
    AssayComparator,
    CnvType,
    ExtendedBoolean, MsiMarkerAddNameMutationVariables,
    Scalars, TmbMarkerAddComparatorMutationVariables, TmbMarkerAddResultMinMutationVariables,
    VariantFusionAddCopyChangeMutationVariables,
    VariantFusionAddExon3PrimeMutationVariables,
    VariantFusionAddExon5PrimeMutationVariables, VariantFusionAddGene5PrimeMutationVariables,
    VariantProteinEffect,
    VariantRegionAddIsFrameshiftMutationVariables,
    VariantSnvIndelAddDescriptionMutationVariables,
    VariantSnvIndelAddProteinEffectMutationVariables
} from "../../../generated/graphql";

const get_number_as_two_digit_string = (n: Number): string => {
    let s: string = n.toString()
    if (s.length === 1) {
        s = '0' + s
    }
    return s
}
const get_date_as_hyphenated_string = (): string => {
    const now: Date = new Date();
    // getMonth is zero based so add 1!
    let dateTimeString: string = now.getFullYear().toString() + '-' + get_number_as_two_digit_string(1+now.getMonth()) + '-' + get_number_as_two_digit_string(now.getDate()) + '-' + get_number_as_two_digit_string(now.getHours()) + '-' + get_number_as_two_digit_string(now.getMinutes()) + '-' + get_number_as_two_digit_string(now.getSeconds())
    return dateTimeString
}
function getRandomInt() {
    return Math.floor(Math.random() * Math.floor(1000000));
}

const get_unique_graph_id = (tag:string): string => {
    const now: Date = new Date();
    let end:string = getRandomInt().toString().padStart(6, "0")
    // getMonth is zero based so add 1!
    let dateTimeString: string = now.getFullYear().toString() +  get_number_as_two_digit_string(1+now.getMonth()) + get_number_as_two_digit_string(now.getDate()) + get_number_as_two_digit_string(now.getHours()) + get_number_as_two_digit_string(now.getMinutes()) + get_number_as_two_digit_string(now.getSeconds())
    let graph_id = tag + dateTimeString + '_' + end;
    return graph_id
}



export const get_description_mutation_object = (variantID:string, oldESID:string, esField:string, description:string, userID:string, refs_array:Array<string>): VariantSnvIndelAddDescriptionMutationVariables=> {
     const  variables :VariantSnvIndelAddDescriptionMutationVariables = {
        variant_id:variantID,
        old_es_id:oldESID,
        date: get_date_as_hyphenated_string(),
        es_field: esField,
        es_statement:description,
        es_id: get_unique_graph_id('es_' ),
        user_id: userID,
        ref_aray:refs_array
    }
    return variables;
}
export const get_protein_effect_mutation_object = (variantID:string, oldEPEID:string, epeField:string, epe:VariantProteinEffect, userID:string, refs_array:Array<string>): VariantSnvIndelAddProteinEffectMutationVariables=> {
    const  variables :VariantSnvIndelAddProteinEffectMutationVariables = {
        variant_id:variantID,
        old_epe_id:oldEPEID,
        date: get_date_as_hyphenated_string(),
        epe_field: epeField,
        epe_vpe:epe,
        epe_id: get_unique_graph_id('es_' ),
        user_id: userID,
        ref_aray:refs_array
    }
    return variables;
}
export const get_editable_boolean_mutation_object = (variantID:string, oldEPEID:Scalars['ID'], epeField:string, epe:ExtendedBoolean, userID:string, refs_array:Array<string>): VariantRegionAddIsFrameshiftMutationVariables=> {
    const  variables :VariantRegionAddIsFrameshiftMutationVariables = {
        variant_id:variantID,
        old_eb_id:oldEPEID,
        date: get_date_as_hyphenated_string(),
        eb_field: epeField,
        eb_vpe:epe,
        eb_id: get_unique_graph_id('es_' ),
        user_id: userID,
        ref_aray:refs_array
    }
    return variables;
}
//variant_id: Scalars['ID'];
//   old_id: Scalars['ID'];
//   date: Scalars['String'];
//   field: Scalars['String'];
//   copy_change: CnvType;
//   id: Scalars['ID'];
//   user_id: Scalars['ID'];
//   ref_aray: Array<Scalars['ID']>;
export const get_editable_CopyChangeMutation_object = (variantID:string, old_ID:Scalars['ID'], field:string, copyChange:CnvType, userID:string, refs_array:Array<string>) : VariantFusionAddCopyChangeMutationVariables => {
    const variables = {variant_id : variantID,old_id:old_ID,date: get_date_as_hyphenated_string(),field:field,copy_change:copyChange,id:get_unique_graph_id('es_' ),user_id:userID,ref_aray:refs_array}
    return variables
}
//  variant_id: Scalars['ID'];
//   old_id: Scalars['ID'];
//   date: Scalars['String'];
//   field: Scalars['String'];
//   exon5: Scalars['Int'];
//   id: Scalars['ID'];
//   user_id: Scalars['ID'];
//   ref_aray: Array<Scalars['ID']>;
export const get_exon5_mutation_object = (variantID:string, old_ID:Scalars['ID'], field:string, exon5:Scalars['Int'], userID:string, refs_array:Array<string>) : VariantFusionAddExon5PrimeMutationVariables => {
    const variables = {variant_id : variantID,old_id:old_ID,date: get_date_as_hyphenated_string(),field:field,exon5:exon5,id:get_unique_graph_id('es_' ),user_id:userID,ref_aray:refs_array}
    return variables
}
export const get_exon3_mutation_object = (variantID:string, old_ID:Scalars['ID'], field:string, exon3:Scalars['Int'], userID:string, refs_array:Array<string>) : VariantFusionAddExon3PrimeMutationVariables => {
    const variables = {variant_id : variantID,old_id:old_ID,date: get_date_as_hyphenated_string(),field:field,exon3:exon3,id:get_unique_graph_id('es_' ),user_id:userID,ref_aray:refs_array}
    return variables
}
export const get_gene_mutation_object =  (variantID:string, old_ID:Scalars['ID'], field:string, gene: Scalars['ID'], userID:string, refs_array:Array<string>) : VariantFusionAddGene5PrimeMutationVariables => {
    const variables = {variant_id : variantID,old_id:old_ID,date: get_date_as_hyphenated_string(),field:field,gene: gene,id:get_unique_graph_id('es_' ),user_id:userID,ref_aray:refs_array}
    return variables
}
export const get_msi_mutation_object = (markerID:string, oldESID:string, esField:string, description:string, userID:string, refs_array:Array<string>): MsiMarkerAddNameMutationVariables=> {
    const  variables :MsiMarkerAddNameMutationVariables = {
        marker_id: markerID,
        old_es_id:oldESID,
        date: get_date_as_hyphenated_string(),
        es_field: esField,
        es_statement:description,
        es_id: get_unique_graph_id('es_' ),
        user_id: userID,
        ref_aray:refs_array
    }
    return variables;
}
export const get_editable_float_mutation_object = (markerID:string, oldESID:string, esField:string, ef_float:number, userID:string, refs_array:Array<string>): TmbMarkerAddResultMinMutationVariables=> {
    const  variables :TmbMarkerAddResultMinMutationVariables = {
        marker_id: markerID,
        old_es_id:oldESID,
        date: get_date_as_hyphenated_string(),
        es_field: esField,
        ef_float:ef_float,
        es_id: get_unique_graph_id('es_' ),
        user_id: userID,
        ref_aray:refs_array
    }
    return variables;
}
export const get_editable_comparator_mutation_object = (markerID:string, oldESID:string, esField:string, comp:AssayComparator, userID:string, refs_array:Array<string>): TmbMarkerAddComparatorMutationVariables=> {
    const  variables :TmbMarkerAddComparatorMutationVariables = {
        marker_id: markerID,
        old_es_id:oldESID,
        date: get_date_as_hyphenated_string(),
        es_field: esField,
        comp:comp,
        es_id: get_unique_graph_id('es_' ),
        user_id: userID,
        ref_aray:refs_array
    }
    return variables;
}
