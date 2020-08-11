import gql from "graphql-tag";

export const mutation_create_marker_profile = gql`
    mutation CreateMarkerProfile($marker_id: ID!, 
        $date: String!,$user_id: ID!, $ref_array:[ID!]!,$empty_string:String!,
        $name_id: ID!,$name:String!,  $name_field: String!, $conjunction_id:ID!,$conjuction_field:String!,$components_id:ID!,$components_field:String!,
        $method_id:ID!, $method_field:String!,$result_string_id:ID!, $result_string_field:String!, ){
        createMarkerProfile(id: $marker_id)
        components: createEditableMarkerComponentList(id:$components_id,editDate:$date,field:$components_field)
        components_editor: addEditableMarkerComponentListEditor(id: $components_id,editor: [$user_id])
        components_ref: addEditableMarkerComponentListReferences(id: $components_id, references: $ref_array)
        addMarkerProfileComponents(components:[$components_id], id:$marker_id)
        conjuction: createEditableOmniConjunction(conjunction: All,id: $conjunction_id,field: $conjuction_field,editDate:$date)
        conjuction_editor: addEditableOmniConjunctionEditor(id: $conjunction_id,editor: [$user_id])
        conjuction_ref: addEditableOmniConjunctionReferences(id: $conjunction_id, references: $ref_array)
        addMarkerProfileConjunction(id: $marker_id,conjunction:[$conjunction_id])
        name: createEditableStatement(editDate: $date, field: $name_field, id: $name_id, statement: $name)
        name_editor: addEditableStatementEditor(editor: [$user_id], id: $name_id)
        name_ref: addEditableStatementReferences(id: $name_id, references: $ref_array)
            addMarkerProfileName(id: $marker_id, name: [$name_id])
        method: createEditableStatement(editDate: $date, field: $method_field, id: $method_id, statement: $empty_string)
        method_editor: addEditableStatementEditor(editor: [$user_id], id: $method_id)
        method_ref: addEditableStatementReferences(id: $method_id, references: $ref_array)
            addMarkerProfileMethod(id: $marker_id,method: [$method_id])
        result: createEditableStatement(editDate: $date, field: $result_string_field, id: $result_string_id, statement: $empty_string)
        result_editor: addEditableStatementEditor(editor: [$user_id], id: $result_string_id)
        result_ref: addEditableStatementReferences(id: $result_string_id, references: $ref_array)
            addMarkerProfileResultString(id: $marker_id,resultString: [$result_string_id])
       
    }
`

export const mutation_create_SNV_marker_ = gql`
    mutation CreateGenomicVariantMarkerSNV($gene_id: ID!, $variant_id: ID!,$name_v_id: ID!,$name:String!,  $name_v_field: String!,
        $pe_id: ID!,$pe_field: String!,$des_id: ID!,$des_field: String!,$pdot_id: ID!,$pdot_field: String!,$cdot_id: ID!,$cdot_field: String!,$gdot_id: ID!,$gdot_field: String!,
        $trans_id: ID!,$trans_field: String!,$exon_id: ID!,$exon_field: String!,
        $date: String!,$user_id: ID!, $ref_array:[ID!]!,$empty_string:String!,
        $marker_id: ID!,$name_id: ID!,  $name_field: String!,
        $method_id:ID!, $method_field:String!,$result_string_id:ID!, $result_string_field:String!, ){

        createVariantSNVIndel(id: $variant_id,indelType: SNV,variantType: SNV)
        
        name_v: createEditableStatement(editDate: $date, field: $name_v_field, id: $name_v_id, statement: $name)
        name_v_editor: addEditableStatementEditor(editor: [$user_id], id: $name_v_id)
        name_v_ref: addEditableStatementReferences(id: $name_v_id, references: $ref_array)
        addVariantSNVIndelName(id:$variant_id,name: [$name_v_id])
        
        pe: createEditableProteinEffect(editDate: $date, field: $pe_field, id: $pe_id, proteinEffect: Unknown)
        pe_editor: addEditableProteinEffectEditor(editor: [$user_id], id: $pe_id)
        pe_ref: addEditableProteinEffectReferences(id: $pe_id, references: $ref_array)
        addVariantSNVIndelProteinEffect(id: $variant_id, proteinEffect: [$pe_id])

        des: createEditableStatement(editDate: $date, field: $des_field, id: $des_id, statement: $empty_string)
        des_editor: addEditableStatementEditor(editor: [$user_id], id: $des_id)
        des_ref: addEditableStatementReferences(id: $des_id, references: $ref_array)
        addVariantSNVIndelDescription(id:$variant_id,description: [$des_id])

        addVariantSNVIndelGene(id: $variant_id,gene: [$gene_id])
        
        pdot: createEditableStatement(editDate: $date, field: $pdot_field, id: $pdot_id, statement: $empty_string)
        pdot_editor: addEditableStatementEditor(editor: [$user_id], id: $pdot_id)
        pdot_ref: addEditableStatementReferences(id: $pdot_id, references: $ref_array)
        addVariantSNVIndelPDot(id:$variant_id, pDot:[$pdot_id])

        cdot: createEditableStatement(editDate: $date, field: $cdot_field, id: $cdot_id, statement: $empty_string)
        cdot_editor: addEditableStatementEditor(editor: [$user_id], id: $cdot_id)
        cdot_ref: addEditableStatementReferences(id: $cdot_id, references: $ref_array)
        addVariantSNVIndelCDot(id:$variant_id, cDot:[$cdot_id])

        gdot: createEditableStatement(editDate: $date, field: $gdot_field, id: $gdot_id, statement: $empty_string)
        gdot_editor: addEditableStatementEditor(editor: [$user_id], id: $gdot_id)
        gdot_ref: addEditableStatementReferences(id: $gdot_id, references: $ref_array)
        addVariantSNVIndelGDot(id:$variant_id, gDot: [$gdot_id])

        exon: createEditableStatement(editDate: $date, field: $exon_field, id: $exon_id, statement: $empty_string)
        exon_editor: addEditableStatementEditor(editor: [$user_id], id: $exon_id)
        exon_ref: addEditableStatementReferences(id: $exon_id, references: $ref_array)
        addVariantSNVIndelExon(id:$variant_id, exon: [$exon_id])

        trans: createEditableStatement(editDate: $date, field: $trans_field, id: $trans_id, statement: $empty_string)
        trans_editor: addEditableStatementEditor(editor: [$user_id], id: $trans_id)
        trans_ref: addEditableStatementReferences(id: $trans_id, references: $ref_array)
        addVariantSNVIndelNonCanonicalTranscript(id:$variant_id, nonCanonicalTranscript: [$trans_id])
        
        createGenomicVariantMarker(id: $marker_id)
        addGenomicVariantMarkerVariant(id:$marker_id, variant: [$variant_id] )
        addGenomicVariantMarkerGene(id: $marker_id, gene: [$gene_id])
        name: createEditableStatement(editDate: $date, field: $name_field, id: $name_id, statement: $name)
        name_editor: addEditableStatementEditor(editor: [$user_id], id: $name_id)
        name_ref: addEditableStatementReferences(id: $name_id, references: $ref_array)
        addGenomicVariantMarkerName(id: $marker_id, name: [$name_id])
        method: createEditableStatement(editDate: $date, field: $method_field, id: $method_id, statement: "NGS")
        method_editor: addEditableStatementEditor(editor: [$user_id], id: $method_id)
        method_ref: addEditableStatementReferences(id: $method_id, references: $ref_array)
        addGenomicVariantMarkerMethod(id: $marker_id,method: [$method_id])
        result: createEditableStatement(editDate: $date, field: $result_string_field, id: $result_string_id, statement: $empty_string)
        result_editor: addEditableStatementEditor(editor: [$user_id], id: $result_string_id)
        result_ref: addEditableStatementReferences(id: $result_string_id, references: $ref_array)
        addGenomicVariantMarkerResultString(id: $marker_id,resultString: [$result_string_id])

    }
`

export const mutation_create_region_marker_ = gql`
    mutation CreateGenomicVariantMarkerRegion($gene_id: ID!, $variant_id: ID!,$name_v_id: ID!,$name:String!,  $name_v_field: String!,
        $pe_id: ID!,$pe_field: String!,$des_id: ID!,$des_field: String!,
        $trans_id: ID!,$trans_field: String!,
        $region_type:RegionType!, $region_value_id:ID!, $region_value_field:String!,$region_value:Int!,
        $del_id: ID!,$del_field: String!,$frame_id: ID!,$frame_field: String!,$trunc_id: ID!,$trunc_field: String!,
        $date: String!,$user_id: ID!, $ref_array:[ID!]!,$empty_string:String!,
        $marker_id: ID!,$name_id: ID!,  $name_field: String!,
        $method_id:ID!, $method_field:String!,$result_string_id:ID!, $result_string_field:String!, ){

        createVariantRegion(id: $variant_id,indelType: SNV,variantType: Region, regionType: $region_type)

        name_v: createEditableStatement(editDate: $date, field: $name_v_field, id: $name_v_id, statement: $name)
        name_v_editor: addEditableStatementEditor(editor: [$user_id], id: $name_v_id)
        name_v_ref: addEditableStatementReferences(id: $name_v_id, references: $ref_array)
        addVariantRegionName(id:$variant_id,name: [$name_v_id])

        pe: createEditableProteinEffect(editDate: $date, field: $pe_field, id: $pe_id, proteinEffect: Unknown)
        pe_editor: addEditableProteinEffectEditor(editor: [$user_id], id: $pe_id)
        pe_ref: addEditableProteinEffectReferences(id: $pe_id, references: $ref_array)
        addVariantRegionProteinEffect(id: $variant_id, proteinEffect: [$pe_id])

        des: createEditableStatement(editDate: $date, field: $des_field, id: $des_id, statement: $empty_string)
        des_editor: addEditableStatementEditor(editor: [$user_id], id: $des_id)
        des_ref: addEditableStatementReferences(id: $des_id, references: $ref_array)
        addVariantRegionDescription(id:$variant_id,description: [$des_id])

        addVariantRegionGene(id: $variant_id,gene: [$gene_id])
        
        rv: createEditableInt(editDate: $date,field: $region_value_field, id: $region_value_id, intValue: $region_value)
        rv_editor: addEditableIntEditor(editor: [$user_id], id: $region_value_id)
        rv_ref: addEditableIntReferences(id: $region_value_id, references: $ref_array)
        addVariantRegionRegionValue(id:$variant_id,regionValue: [$region_value_id] )
        
        trans: createEditableStatement(editDate: $date, field: $trans_field, id: $trans_id, statement: $empty_string)
        trans_editor: addEditableStatementEditor(editor: [$user_id], id: $trans_id)
        trans_ref: addEditableStatementReferences(id: $trans_id, references: $ref_array)
        addVariantRegionNonCanonicalTranscript(id:$variant_id, nonCanonicalTranscript: [$trans_id])

        del: createEditableBoolean(id:$del_id, field: $del_field,editDate: $date, booleanValue: Unknown )
        del_editor: addEditableBooleanEditor(editor: [$user_id], id: $del_id)
        del_ref: addEditableBooleanReferences(id:$del_id,references: $ref_array)
        addVariantRegionIsDeleterious(id:$variant_id,isDeleterious: [$del_id] )

        frame: createEditableBoolean(id:$frame_id, field: $frame_field,editDate: $date, booleanValue: Unknown )
        frame_editor: addEditableBooleanEditor(editor: [$user_id], id: $frame_id)
        frame_ref: addEditableBooleanReferences(id:$frame_id,references: $ref_array)
        addVariantRegionIsFrameshift(id:$variant_id,isFrameshift: [$frame_id])

        trunc: createEditableBoolean(id:$trunc_id, field: $trunc_field,editDate: $date, booleanValue: Unknown )
        trunc_editor: addEditableBooleanEditor(editor: [$user_id], id: $trunc_id)
        trunc_ref: addEditableBooleanReferences(id:$trunc_id,references: $ref_array)
        addVariantRegionIsTruncating(id:$variant_id, isTruncating: [$trunc_id])
        

        createGenomicVariantMarker(id: $marker_id)
        addGenomicVariantMarkerVariant(id:$marker_id, variant: [$variant_id] )
        addGenomicVariantMarkerGene(id: $marker_id, gene: [$gene_id])
        name: createEditableStatement(editDate: $date, field: $name_field, id: $name_id, statement: $name)
        name_editor: addEditableStatementEditor(editor: [$user_id], id: $name_id)
        name_ref: addEditableStatementReferences(id: $name_id, references: $ref_array)
        addGenomicVariantMarkerName(id: $marker_id, name: [$name_id])
        method: createEditableStatement(editDate: $date, field: $method_field, id: $method_id, statement: "NGS")
        method_editor: addEditableStatementEditor(editor: [$user_id], id: $method_id)
        method_ref: addEditableStatementReferences(id: $method_id, references: $ref_array)
        addGenomicVariantMarkerMethod(id: $marker_id,method: [$method_id])
        result: createEditableStatement(editDate: $date, field: $result_string_field, id: $result_string_id, statement: $empty_string)
        result_editor: addEditableStatementEditor(editor: [$user_id], id: $result_string_id)
        result_ref: addEditableStatementReferences(id: $result_string_id, references: $ref_array)
        addGenomicVariantMarkerResultString(id: $marker_id,resultString: [$result_string_id])

    }
`

export const mutation_create_cnv_marker_ = gql`
    mutation CreateGenomicVariantMarkerCNV($gene_id: ID!, $variant_id: ID!,$name_v_id: ID!,$name:String!,  $name_v_field: String!,
        $des_id: ID!,$des_field: String!,$cc_id: ID!,$cc_field: String!,
        $trans_id: ID!,$trans_field: String!,
        $date: String!,$user_id: ID!, $ref_array:[ID!]!,$empty_string:String!,
        $marker_id: ID!,$name_id: ID!,  $name_field: String!,
        $method_id:ID!, $method_field:String!,$result_string_id:ID!, $result_string_field:String!, ){

        createVariantCNV(id: $variant_id)

        name_v: createEditableStatement(editDate: $date, field: $name_v_field, id: $name_v_id, statement: $name)
        name_v_editor: addEditableStatementEditor(editor: [$user_id], id: $name_v_id)
        name_v_ref: addEditableStatementReferences(id: $name_v_id, references: $ref_array)
        addVariantCNVName(id:$variant_id,name: [$name_v_id])

        des: createEditableStatement(editDate: $date, field: $des_field, id: $des_id, statement: $empty_string)
        des_editor: addEditableStatementEditor(editor: [$user_id], id: $des_id)
        des_ref: addEditableStatementReferences(id: $des_id, references: $ref_array)
        addVariantCNVDescription(id:$variant_id,description: [$des_id])


        trans: createEditableStatement(editDate: $date, field: $trans_field, id: $trans_id, statement: $empty_string)
        trans_editor: addEditableStatementEditor(editor: [$user_id], id: $trans_id)
        trans_ref: addEditableStatementReferences(id: $trans_id, references: $ref_array)
        addVariantCNVNonCanonicalTranscript(id:$variant_id, nonCanonicalTranscript: [$trans_id])

        addVariantCNVGene(id: $variant_id,gene: [$gene_id])

        cc: createEditableCopyChange(id:$cc_id,field: $cc_field, editDate: $date,cnvType: Unknown )
        cc_editor: addEditableCopyChangeEditor(editor: [$user_id], id: $cc_id)
        cc_ref: addEditableCopyChangeReferences(id: $cc_id, references: $ref_array)
        addVariantCNVCopyChange(id:$variant_id,copyChange:[$cc_id])
        
        createGenomicVariantMarker(id: $marker_id)
        addGenomicVariantMarkerVariant(id:$marker_id, variant: [$variant_id] )
        addGenomicVariantMarkerGene(id: $marker_id, gene: [$gene_id])
        name: createEditableStatement(editDate: $date, field: $name_field, id: $name_id, statement: $name)
        name_editor: addEditableStatementEditor(editor: [$user_id], id: $name_id)
        name_ref: addEditableStatementReferences(id: $name_id, references: $ref_array)
        addGenomicVariantMarkerName(id: $marker_id, name: [$name_id])
        method: createEditableStatement(editDate: $date, field: $method_field, id: $method_id, statement: "NGS")
        method_editor: addEditableStatementEditor(editor: [$user_id], id: $method_id)
        method_ref: addEditableStatementReferences(id: $method_id, references: $ref_array)
        addGenomicVariantMarkerMethod(id: $marker_id,method: [$method_id])
        result: createEditableStatement(editDate: $date, field: $result_string_field, id: $result_string_id, statement: $empty_string)
        result_editor: addEditableStatementEditor(editor: [$user_id], id: $result_string_id)
        result_ref: addEditableStatementReferences(id: $result_string_id, references: $ref_array)
        addGenomicVariantMarkerResultString(id: $marker_id,resultString: [$result_string_id])

    }
`

export const mutation_create_fusion_marker_ = gql`
    mutation CreateGenomicVariantMarkerFusion($gene_id: ID!, $variant_id: ID!,$name_v_id: ID!,$name:String!,  $name_v_field: String!,
        $des_id: ID!,$des_field: String!,$cc_id: ID!,$cc_field: String!,
        $trans_id: ID!,$trans_field: String!,
        $g5_id: ID!,$g5_field: String!,$e5_id: ID!,$e5_field: String!,$g3_id: ID!,$g3_field: String!,$e3_id: ID!,$e3_field: String!,
        $date: String!,$user_id: ID!, $ref_array:[ID!]!,$empty_string:String!,
        $marker_id: ID!,$name_id: ID!,  $name_field: String!,
        $method_id:ID!, $method_field:String!,$result_string_id:ID!, $result_string_field:String!, ){

        createVariantFusion(id: $variant_id)

        name_v: createEditableStatement(editDate: $date, field: $name_v_field, id: $name_v_id, statement: $name)
        name_v_editor: addEditableStatementEditor(editor: [$user_id], id: $name_v_id)
        name_v_ref: addEditableStatementReferences(id: $name_v_id, references: $ref_array)
        addVariantFusionName(id:$variant_id,name: [$name_v_id])

        des: createEditableStatement(editDate: $date, field: $des_field, id: $des_id, statement: $empty_string)
        des_editor: addEditableStatementEditor(editor: [$user_id], id: $des_id)
        des_ref: addEditableStatementReferences(id: $des_id, references: $ref_array)
        addVariantFusionDescription(id:$variant_id,description: [$des_id])


        trans: createEditableStatement(editDate: $date, field: $trans_field, id: $trans_id, statement: $empty_string)
        trans_editor: addEditableStatementEditor(editor: [$user_id], id: $trans_id)
        trans_ref: addEditableStatementReferences(id: $trans_id, references: $ref_array)
        addVariantFusionNonCanonicalTranscript(id:$variant_id, nonCanonicalTranscript: [$trans_id])

        addVariantFusionGene(id: $variant_id,gene: [$gene_id])

        cc: createEditableCopyChange(id:$cc_id,field: $cc_field, editDate: $date,cnvType: Unknown )
        cc_editor: addEditableCopyChangeEditor(editor: [$user_id], id: $cc_id)
        cc_ref: addEditableCopyChangeReferences(id: $cc_id, references: $ref_array)
        addVariantFusionCopyChange(id:$variant_id,copyChange:[$cc_id])
        
        g5: createEditableOmniGeneReference(id:$g5_id,field: $g5_field, editDate:$date)
        g5_gene: addEditableOmniGeneReferenceGene(id: $g5_id,gene: [$gene_id])
        g5_editor: addEditableOmniGeneReferenceEditor(id:$g5_id,editor: [$user_id])
        g5_ref: addEditableOmniGeneReferenceReferences(id:$g5_id,, references: $ref_array)
        addVariantFusionGene5Prime(id:$variant_id,gene5Prime: [$g5_id] )

        g3: createEditableOmniGeneReference(id:$g3_id,field: $g3_field, editDate:$date)
        g3_gene: addEditableOmniGeneReferenceGene(id: $g3_id,gene: [$gene_id])
        g3_editor: addEditableOmniGeneReferenceEditor(id:$g3_id,editor: [$user_id])
        g3_ref: addEditableOmniGeneReferenceReferences(id:$g3_id,, references: $ref_array)
        addVariantFusionGene3Prime(id:$variant_id,gene3Prime: [$g3_id] )

        e5: createEditableInt(id:$e5_id,field: $e5_field,editDate: $date,intValue: -1)
        e5_editor: addEditableIntEditor(id:$e5_id,editor: [$user_id])
        e5_ref: addEditableIntReferences(id:$e5_id,, references: $ref_array)
        addVariantFusionExon5Prime(id:$variant_id,exon5Prime: [$e5_id] )

        e3: createEditableInt(id:$e3_id,field: $e3_field,editDate: $date,intValue: -1)
        e3_editor: addEditableIntEditor(id:$e3_id,editor: [$user_id])
        e3_ref: addEditableIntReferences(id:$e3_id,, references: $ref_array)
        addVariantFusionExon3Prime(id:$variant_id,exon3Prime: [$e3_id] )

        createGenomicVariantMarker(id: $marker_id)
        addGenomicVariantMarkerVariant(id:$marker_id, variant: [$variant_id] )
        addGenomicVariantMarkerGene(id: $marker_id, gene: [$gene_id])
        name: createEditableStatement(editDate: $date, field: $name_field, id: $name_id, statement: $name)
        name_editor: addEditableStatementEditor(editor: [$user_id], id: $name_id)
        name_ref: addEditableStatementReferences(id: $name_id, references: $ref_array)
        addGenomicVariantMarkerName(id: $marker_id, name: [$name_id])
        method: createEditableStatement(editDate: $date, field: $method_field, id: $method_id, statement: "NGS")
        method_editor: addEditableStatementEditor(editor: [$user_id], id: $method_id)
        method_ref: addEditableStatementReferences(id: $method_id, references: $ref_array)
        addGenomicVariantMarkerMethod(id: $marker_id,method: [$method_id])
        result: createEditableStatement(editDate: $date, field: $result_string_field, id: $result_string_id, statement: $empty_string)
        result_editor: addEditableStatementEditor(editor: [$user_id], id: $result_string_id)
        result_ref: addEditableStatementReferences(id: $result_string_id, references: $ref_array)
        addGenomicVariantMarkerResultString(id: $marker_id,resultString: [$result_string_id])

    }
`
export const mutation_create_msi_marker = gql`
    mutation CreateMSIMarker($marker_id: ID!,
        $date: String!,$user_id: ID!, $ref_array:[ID!]!,$empty_string:String!,
        $name_id: ID!,$name:String!,  $name_field: String!, 
        $method_id:ID!, $method_field:String!,$result_string_id:ID!, $result_string_field:String!, ){
        
        createMSIMarker(id: $marker_id)
        name: createEditableStatement(editDate: $date, field: $name_field, id: $name_id, statement: $name)
        name_editor: addEditableStatementEditor(editor: [$user_id], id: $name_id)
        name_ref: addEditableStatementReferences(id: $name_id, references: $ref_array)
        addMSIMarkerName(id: $marker_id, name: [$name_id])
        method: createEditableStatement(editDate: $date, field: $method_field, id: $method_id, statement: $empty_string)
        method_editor: addEditableStatementEditor(editor: [$user_id], id: $method_id)
        method_ref: addEditableStatementReferences(id: $method_id, references: $ref_array)
        addMSIMarkerMethod(id: $marker_id,method: [$method_id])
        result: createEditableStatement(editDate: $date, field: $result_string_field, id: $result_string_id, statement: $empty_string)
        result_editor: addEditableStatementEditor(editor: [$user_id], id: $result_string_id)
        result_ref: addEditableStatementReferences(id: $result_string_id, references: $ref_array)
        addMSIMarkerResultString(id: $marker_id,resultString: [$result_string_id])

    }
`
export const mutation_create_tmb_marker = gql`
    mutation CreateTMBMarker($marker_id: ID!,
        $date: String!,$user_id: ID!, $ref_array:[ID!]!,$empty_string:String!,
        $name_id: ID!,$name:String!,  $name_field: String!,
        $method_id:ID!, $method_field:String!,$result_string_id:ID!, $result_string_field:String!,
        $comparator_id:ID!, $comparator_field:String!,$resultMin_id:ID!, $resultMin_field:String!,$resultUnits_id:ID!, $resultUnits_field:String!,$interpretation_id:ID!, $interpretation_field:String!,
    ){

        createTMBMarker(id: $marker_id)
        name: createEditableStatement(editDate: $date, field: $name_field, id: $name_id, statement: $name)
        name_editor: addEditableStatementEditor(editor: [$user_id], id: $name_id)
        name_ref: addEditableStatementReferences(id: $name_id, references: $ref_array)
        addTMBMarkerName(id: $marker_id, name: [$name_id])
        method: createEditableStatement(editDate: $date, field: $method_field, id: $method_id, statement: $empty_string)
        method_editor: addEditableStatementEditor(editor: [$user_id], id: $method_id)
        method_ref: addEditableStatementReferences(id: $method_id, references: $ref_array)
        addTMBMarkerMethod(id: $marker_id,method: [$method_id])
        result: createEditableStatement(editDate: $date, field: $result_string_field, id: $result_string_id, statement: $empty_string)
        result_editor: addEditableStatementEditor(editor: [$user_id], id: $result_string_id)
        result_ref: addEditableStatementReferences(id: $result_string_id, references: $ref_array)
        addTMBMarkerResultString(id: $marker_id,resultString: [$result_string_id])
        
        comp: createEditableAssayComparator(id:$comparator_id, field: $comparator_field,editDate: $date,comparator: Equals )
        comp_editor: addEditableAssayComparatorEditor(editor: [$user_id], id: $comparator_id)
        comp_ref: addEditableAssayComparatorReferences(id: $comparator_id, references: $ref_array)
        addTMBMarkerComparator(id:$marker_id,comparator: [$comparator_id] )
        
        min: createEditableFloat(id:$resultMin_id,field:$resultMin_field,editDate: $date,floatValue: 0.0 )
        min_editor: addEditableFloatEditor(id:$resultMin_id, editor: [$user_id])
        min_ref: addEditableFloatReferences(id:$resultMin_id, references: $ref_array)
        addTMBMarkerResultMin(id: $marker_id,resultMin: [$resultMin_id])
        
        units: createEditableStatement(editDate: $date, field: $resultUnits_field, id: $resultUnits_id, statement: $empty_string)
        units_editor: addEditableStatementEditor(editor: [$user_id], id: $resultUnits_id)
        units_ref: addEditableStatementReferences(id: $resultUnits_id, references: $ref_array)
        addTMBMarkerResultUnits(id:$marker_id,resultUnits:[$resultUnits_id] )

        interpretation: createEditableTMBInterpretation(id:$interpretation_id,field:$interpretation_field,editDate: $date,tmbInterpretation: High  )
        interpretation_editor: addEditableTMBInterpretationEditor(editor: [$user_id], id: $interpretation_id)
        interpretation_ref: addEditableTMBInterpretationReferences(id: $interpretation_id, references: $ref_array)
        addTMBMarkerInterpretations(id:$marker_id, interpretations: [$interpretation_id] )
    }
`
export const mutation_create_protein_expression_marker = gql`
    mutation CreateProteinExpressionMarker($marker_id: ID!,
        $date: String!,$user_id: ID!, $ref_array:[ID!]!,$empty_string:String!,
        $name_id: ID!,$name:String!,  $name_field: String!,
        $method_id:ID!, $method_field:String!,$result_string_id:ID!, $result_string_field:String!, 
        $synonyms_id:ID!, $synonyms_field:String!,$genes_id:ID!, $genes_field:String!,$assay_id:ID!,
        $pheno_id:ID!, $pheno_field:String!,$function_id:ID!, $function_field:String!,$role_id:ID!, $role_field:String!,
    ){

        createProteinExpressionMarker(id: $marker_id)
        name: createEditableStatement(editDate: $date, field: $name_field, id: $name_id, statement: $name)
        name_editor: addEditableStatementEditor(editor: [$user_id], id: $name_id)
        name_ref: addEditableStatementReferences(id: $name_id, references: $ref_array)
        addProteinExpressionMarkerName(id: $marker_id, name: [$name_id])
        method: createEditableStatement(editDate: $date, field: $method_field, id: $method_id, statement: $empty_string)
        method_editor: addEditableStatementEditor(editor: [$user_id], id: $method_id)
        method_ref: addEditableStatementReferences(id: $method_id, references: $ref_array)
        addProteinExpressionMarkerMethod(id: $marker_id,method: [$method_id])
        result: createEditableStatement(editDate: $date, field: $result_string_field, id: $result_string_id, statement: $empty_string)
        result_editor: addEditableStatementEditor(editor: [$user_id], id: $result_string_id)
        result_ref: addEditableStatementReferences(id: $result_string_id, references: $ref_array)
        addProteinExpressionMarkerResultString(id: $marker_id,resultString: [$result_string_id])

        synonyms: createEditableStringList(id:$synonyms_id, field:$synonyms_field,editDate: $date, stringList: [$name])
        synonyms_editor: addEditableStringListEditor(editor: [$user_id], id: $synonyms_id)
        synonyms_ref: addEditableStringListReferences(id: $synonyms_id, references: $ref_array)
        addProteinExpressionMarkerSynonyms(id: $marker_id, synonyms: [$synonyms_id])
        genes: createEditableOmniGeneList(id:$genes_id,field:$genes_field, editDate: $date )
        genes_editor: addEditableOmniGeneListEditor(editor: [$user_id], id: $genes_id)
        genes_ref: addEditableOmniGeneListReferences(id: $genes_id, references: $ref_array)
        addProteinExpressionMarkerGenes(id: $marker_id,genes:[$genes_id] )

        addProteinExpressionMarkerAssay(id:$marker_id,assay: [$assay_id])

        pheno: createEditableImmunePhenotype(id:$pheno_id, field: $pheno_field, editDate: $date, immunePhenotype: Unknown)
        pheno_editor: addEditableImmunePhenotypeEditor(editor: [$user_id], id: $pheno_id)
        pheno_ref: addEditableImmunePhenotypeReferences(id: $pheno_id, references: $ref_array)
        addProteinExpressionMarkerImmunePhenotypes(id:$marker_id, immunePhenotypes: [$pheno_id])

        function: createEditableImmuneFunction(id:$function_id, field: $function_field, editDate: $date, immuneFunction: Unknown)
        function_editor: addEditableImmuneFunctionEditor(editor: [$user_id], id: $function_id)
        function_ref: addEditableImmuneFunctionReferences(id: $function_id, references: $ref_array)
        addProteinExpressionMarkerImmuneFunctions(id:$marker_id, immuneFunctions: [$function_id])

        role: createEditableImmuneCycleRole(id:$role_id, field: $role_field, editDate: $date, immuneCycleRole: Unknown)
        role_editor: addEditableImmuneCycleRoleEditor(editor: [$user_id], id: $role_id)
        role_ref: addEditableImmuneCycleRoleReferences(id: $role_id, references: $ref_array)
        addProteinExpressionMarkerImmuneCycleRoles(id:$marker_id, immuneCycleRoles: [$role_id])


    }
`

export const mutation_create_ihc_assay = gql`
    mutation CreateIHCAssay($date: String!,$user_id: ID!, $ref_array:[ID!]!,
        $assay_id: ID!,$name_id: ID!,$name_field: String!,$name:String!,
        $clone_id: ID!,$clone_field: String!,$clone:String!,
        $comparator_id:ID!, $comparator_field:String!,$comparator: AssayComparator!,
        $resultMin_id:ID!, $resultMin_field:String!,$resultMin:Float!,
        $rs_id: ID!,$rs_field: String!,$rs:String!,
        $units_id: ID!,$units_field: String!,$units:String!,
    ){
        createIHCAssay(id: $assay_id)

        name: createEditableStatement(editDate: $date, field: $name_field, id: $name_id, statement: $name)
        name_editor: addEditableStatementEditor(editor: [$user_id], id: $name_id)
        name_ref: addEditableStatementReferences(id: $name_id, references: $ref_array)
        addIHCAssayName(id:$assay_id,name: [$name_id] )

        clone: createEditableStatement(editDate: $date, field: $clone_field, id: $clone_id, statement: $clone)
        clone_editor: addEditableStatementEditor(editor: [$user_id], id: $clone_id)
        clone_ref: addEditableStatementReferences(id: $clone_id, references: $ref_array)
        addIHCAssayAntibodyClone(id:$assay_id,antibodyClone: [$clone_id] )

        comp: createEditableAssayComparator(id:$comparator_id,field:$comparator_field,editDate: $date, comparator: $comparator  )
        comp_editor: addEditableAssayComparatorEditor(editor: [$user_id], id: $comparator_id)
        comp_ref: addEditableAssayComparatorReferences(id: $comparator_id, references: $ref_array)
        addIHCAssayComparator(id:$assay_id, comparator:[$comparator_id])

        min: createEditableFloat(id: $resultMin_id,field:$resultMin_field,editDate: $date,floatValue: $resultMin )
        min_editor: addEditableFloatEditor(editor: [$user_id], id: $resultMin_id)
        min_ref: addEditableFloatReferences(id: $resultMin_id, references: $ref_array)
        addIHCAssayResultMin(id:$assay_id,resultMin: [$resultMin_id])

        rs: createEditableStatement(editDate: $date, field: $rs_field, id: $rs_id, statement: $rs)
        rs_editor: addEditableStatementEditor(editor: [$user_id], id: $rs_id)
        rs_ref: addEditableStatementReferences(id: $rs_id, references: $ref_array)
        addIHCAssayResultString(id:$assay_id,resultString: [$rs_id] )

        units: createEditableStatement(editDate: $date, field: $units_field, id: $units_id, statement: $units)
        units_editor: addEditableStatementEditor(editor: [$user_id], id: $units_id)
        units_ref: addEditableStatementReferences(id: $units_id, references: $ref_array)
        addIHCAssayResultUnits(id:$assay_id,resultUnits: [$units_id] )

    }
`
export const mutation_create_ihc_assay_with_max = gql`
    mutation CreateIHCAssayWithMax($date: String!,$user_id: ID!, $ref_array:[ID!]!,
        $assay_id: ID!,$name_id: ID!,$name_field: String!,$name:String!,
        $clone_id: ID!,$clone_field: String!,$clone:String!,
        $comparator_id:ID!, $comparator_field:String!,$comparator: AssayComparator!,
        $resultMin_id:ID!, $resultMin_field:String!,$resultMin:Float!,
        $resultMax_id:ID!, $resultMax_field:String!,$resultMax:Float!,
        $rs_id: ID!,$rs_field: String!,$rs:String!,
        $units_id: ID!,$units_field: String!,$units:String!,
    ){
        createIHCAssay(id: $assay_id)

        name: createEditableStatement(editDate: $date, field: $name_field, id: $name_id, statement: $name)
        name_editor: addEditableStatementEditor(editor: [$user_id], id: $name_id)
        name_ref: addEditableStatementReferences(id: $name_id, references: $ref_array)
        addIHCAssayName(id:$assay_id,name: [$name_id] )

        clone: createEditableStatement(editDate: $date, field: $clone_field, id: $clone_id, statement: $clone)
        clone_editor: addEditableStatementEditor(editor: [$user_id], id: $clone_id)
        clone_ref: addEditableStatementReferences(id: $clone_id, references: $ref_array)
        addIHCAssayAntibodyClone(id:$assay_id,antibodyClone: [$clone_id] )

        comp: createEditableAssayComparator(id:$comparator_id,field:$comparator_field,editDate: $date, comparator: $comparator  )
        comp_editor: addEditableAssayComparatorEditor(editor: [$user_id], id: $comparator_id)
        comp_ref: addEditableAssayComparatorReferences(id: $comparator_id, references: $ref_array)
        addIHCAssayComparator(id:$assay_id, comparator:[$comparator_id])

        min: createEditableFloat(id: $resultMin_id,field:$resultMin_field,editDate: $date,floatValue: $resultMin )
        min_editor: addEditableFloatEditor(editor: [$user_id], id: $resultMin_id)
        min_ref: addEditableFloatReferences(id: $resultMin_id, references: $ref_array)
        addIHCAssayResultMin(id:$assay_id,resultMin: [$resultMin_id])

        max: createEditableFloat(id: $resultMax_id,field:$resultMax_field,editDate: $date,floatValue: $resultMax )
        max_editor: addEditableFloatEditor(editor: [$user_id], id: $resultMax_id)
        max_ref: addEditableFloatReferences(id: $resultMax_id, references: $ref_array)
        addIHCAssayResultMax(id:$assay_id, resultMax: [$resultMax_id])

        rs: createEditableStatement(editDate: $date, field: $rs_field, id: $rs_id, statement: $rs)
        rs_editor: addEditableStatementEditor(editor: [$user_id], id: $rs_id)
        rs_ref: addEditableStatementReferences(id: $rs_id, references: $ref_array)
        addIHCAssayResultString(id:$assay_id,resultString: [$rs_id] )

        units: createEditableStatement(editDate: $date, field: $units_field, id: $units_id, statement: $units)
        units_editor: addEditableStatementEditor(editor: [$user_id], id: $units_id)
        units_ref: addEditableStatementReferences(id: $units_id, references: $ref_array)
        addIHCAssayResultUnits(id:$assay_id,resultUnits: [$units_id] )

    }
`
export const mutation_create_rna_seq_assay = gql`
    mutation CreateRnaSeqAssay($date: String!,$user_id: ID!, $ref_array:[ID!]!,
        $assay_id: ID!,$name_id: ID!,$name_field: String!,$name:String!,
        $comparator_id:ID!, $comparator_field:String!,$comparator: AssayComparator!,
        $resultMin_id:ID!, $resultMin_field:String!,$resultMin:Float!,
        $resultType_id:ID!, $resultType_field:String!,$resultType:RNASeqResultType!,
    ){
        createRNASeqAssay(id: $assay_id)
        name: createEditableStatement(editDate: $date, field: $name_field, id: $name_id, statement: $name)
        name_editor: addEditableStatementEditor(editor: [$user_id], id: $name_id)
        name_ref: addEditableStatementReferences(id: $name_id, references: $ref_array)
        addRNASeqAssayName(id:$assay_id,name: [$name_id])
        
        comp: createEditableAssayComparator(id:$comparator_id,field:$comparator_field,editDate: $date, comparator: $comparator  )
        comp_editor: addEditableAssayComparatorEditor(editor: [$user_id], id: $comparator_id)
        comp_ref: addEditableAssayComparatorReferences(id: $comparator_id, references: $ref_array)
        addRNASeqAssayComparator(id:$assay_id, comparator:[$comparator_id])
        
        min: createEditableFloat(id: $resultMin_id,field:$resultMin_field,editDate: $date,floatValue: $resultMin )
        min_editor: addEditableFloatEditor(editor: [$user_id], id: $resultMin_id)
        min_ref: addEditableFloatReferences(id: $resultMin_id, references: $ref_array)
        addRNASeqAssayResultMin(id:$assay_id,resultMin: [$resultMin_id])
        
        rt: createEditableRNASeqResultType(id:$resultType_id,editDate: $date,field:$resultType_field,resultType: $resultType)
        rt_editor: addEditableRNASeqResultTypeEditor(editor: [$user_id], id: $resultType_id)
        rt_ref: addEditableRNASeqResultTypeReferences(id: $resultType_id, references: $ref_array)
        addRNASeqAssayResultType(id:$assay_id, resultType: [$resultType_id])
    }
`
export const mutation_create_rna_seq_assay_with_max = gql`
    mutation CreateRnaSeqAssayWithMax($date: String!,$user_id: ID!, $ref_array:[ID!]!,
        $assay_id: ID!,$name_id: ID!,$name:String!,  $name_field: String!,
        $comparator_id:ID!, $comparator_field:String!,$comparator: AssayComparator!,
        $resultMin_id:ID!, $resultMin_field:String!,$resultMin:Float!,
        $resultMax_id:ID!, $resultMax_field:String!,$resultMax:Float!,
        $resultType_id:ID!, $resultType_field:String!,$resultType:RNASeqResultType!,
    ){
        createRNASeqAssay(id: $assay_id)
        name: createEditableStatement(editDate: $date, field: $name_field, id: $name_id, statement: $name)
        name_editor: addEditableStatementEditor(editor: [$user_id], id: $name_id)
        name_ref: addEditableStatementReferences(id: $name_id, references: $ref_array)
        addRNASeqAssayName(id:$assay_id,name: [$name_id])

        comp: createEditableAssayComparator(id:$comparator_id,field:$comparator_field,editDate: $date, comparator: $comparator  )
        comp_editor: addEditableAssayComparatorEditor(editor: [$user_id], id: $comparator_id)
        comp_ref: addEditableAssayComparatorReferences(id: $comparator_id, references: $ref_array)
        addRNASeqAssayComparator(id:$assay_id, comparator:[$comparator_id])

        min: createEditableFloat(id: $resultMin_id,field:$resultMin_field,editDate: $date,floatValue: $resultMin )
        min_editor: addEditableFloatEditor(editor: [$user_id], id: $resultMin_id)
        min_ref: addEditableFloatReferences(id: $resultMin_id, references: $ref_array)
        addRNASeqAssayResultMin(id:$assay_id,resultMin: [$resultMin_id])

        max: createEditableFloat(id: $resultMax_id,field:$resultMax_field,editDate: $date,floatValue: $resultMax )
        max_editor: addEditableFloatEditor(editor: [$user_id], id: $resultMax_id)
        max_ref: addEditableFloatReferences(id: $resultMax_id, references: $ref_array)
        addRNASeqAssayResultMax(id:$assay_id, resultMax: [$resultMax_id])

        rt: createEditableRNASeqResultType(id:$resultType_id,editDate: $date,field:$resultType_field,resultType: $resultType)
        rt_editor: addEditableRNASeqResultTypeEditor(editor: [$user_id], id: $resultType_id)
        rt_ref: addEditableRNASeqResultTypeReferences(id: $resultType_id, references: $ref_array)
        addRNASeqAssayResultType(id:$assay_id, resultType: [$resultType_id])
    }
`
