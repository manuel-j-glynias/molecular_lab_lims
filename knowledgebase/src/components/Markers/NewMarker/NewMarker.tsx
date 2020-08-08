import * as React from "react";
import {useEffect, useState} from "react";
import Select from "react-select";
import './styles.css'
import {useAlert} from 'react-alert'
import {
    CreateGenomicVariantMarkerRegionMutationVariables,
    CreateGenomicVariantMarkerSnvMutationVariables,
    CreateGenomicVariantMarkerCnvMutationVariables,
    CreateGenomicVariantMarkerFusionMutationVariables,
    CreateMarkerProfileMutationVariables,CreateMsiMarkerMutationVariables,CreateTmbMarkerMutationVariables,
    CreateProteinExpressionMarkerMutationVariables,
    RegionType,
    useCreateGenomicVariantMarkerRegionMutation,
    useCreateGenomicVariantMarkerSnvMutation,
    useCreateGenomicVariantMarkerCnvMutation,
    useCreateGenomicVariantMarkerFusionMutation,useCreateMsiMarkerMutation,useCreateTmbMarkerMutation,
    useCreateMarkerProfileMutation,
    useCreateProteinExpressionMarkerMutation,
    useGeneListQuery
} from '../../../generated/graphql'
import {useUserContentState} from "../../../context/UserContentContext";
import {get_date_as_hyphenated_string, get_unique_graph_id} from "../../common/Helpers/EditableStatementHelper";
import GeneList from "./GeneList";
import ProteinLevelAssayList from "../ProteinLevelAssayList/ProteinLevelAssayList";
import ProteinLevelAssayListContainer from "../ProteinLevelAssayList";


const className = 'NewMarker';

interface Props {
    set_marker_id: (newId: string) => void;
    set_markerType: (newId: string) => void;
    set_query_string: (query: string) => void;
    set_gene_id: (newId: string) => void;
    set_selected_gene_label:(label: string) => void;
}

const NewMarker: React.FC<Props> = ({set_markerType,set_query_string, set_marker_id,set_gene_id,set_selected_gene_label}) => {
    const [markerName, set_markerName] = useState('Protein Expression Markers')
    const [new_markerType, set_new_markerType] = useState('ProteinExpressionMarker')
    const [new_marker_name, set_new_marker_name] = useState('');
    const [new_marker_id, set_new_marker_id] = useState('');
    const [new_gene_id, set_new_gene_id] = useState('');
    const [new_gene_name, set_new_gene_name] = useState('');
    const [gene_query_string, set_gene_query_string] = React.useState("");
    const [region_type, set_region_type] = React.useState(RegionType.Gene);
    const [region_type_label, set_region_type_label] = React.useState('Gene');
    const [filter_term, set_filter_term] = useState('');
    const [protein_level_assay_id, set_protein_level_assay_id]= useState('');
    const alert = useAlert()

    const {
        UserContentState: {userID}
    } = useUserContentState();

    const user_ID : string = userID;

    const [createMarkerProfile, { loading: markerProfileMutationLoading, error: markerProfileMutationError, data:markerProfileMutationData }] = useCreateMarkerProfileMutation({variables:{marker_id:'', conjuction_field:'',components_id:'',
            components_field:'',conjunction_id:'', date:'', empty_string:'', method_field:'', method_id:'', name:'', name_id:'',name_field:'',result_string_id:'',result_string_field:'',user_id: '',ref_array:[]}})

    const get_CreateMarkerProfileMutationVariables_object = ():CreateMarkerProfileMutationVariables => {
        const variables : CreateMarkerProfileMutationVariables= {
            marker_id: get_unique_graph_id('marker_profile_'),
            date: get_date_as_hyphenated_string(),
            user_id: user_ID,
            ref_array: [],
            empty_string:'',
            name_id: get_unique_graph_id('es_'),
            name: new_marker_name,
            name_field: get_unique_graph_id("marker_profile_name_field_"),
            components_id:get_unique_graph_id('es_'),
            components_field:get_unique_graph_id("marker_profile_components_field_"),
            conjunction_id: get_unique_graph_id('es_'),
            conjuction_field: get_unique_graph_id('marker_profile_conjunction_field_'),
            method_id: get_unique_graph_id('es_'),
            method_field: get_unique_graph_id('marker_profile_method_field_'),
            result_string_id: get_unique_graph_id('es_'),
            result_string_field: get_unique_graph_id('marker_profile_result_string_field_'),
        }
        return variables;
    }

    const post_CreateMarkerProfileMutation = () => {
        console.log("post_CreateMarkerProfileMutation")
        if (markerProfileMutationData!=null){
            set_query_string(new_marker_name)
            set_markerType('MarkerProfile')
            set_marker_id(new_marker_id)
            // handleMarkerIdChange(new_marker_id)
        }
    }
    useEffect(post_CreateMarkerProfileMutation,[markerProfileMutationData])

    const [createGenomicVariantSNV, { loading: snvMutationLoading, error: snvMutationError, data:snvMutationData }] = useCreateGenomicVariantMarkerSnvMutation({variables:{marker_id:'',
            date:'', empty_string:'', method_field:'', method_id:'', name:'', name_id:'',name_field:'',result_string_id:'',result_string_field:'',user_id: '',ref_array:[],
            gene_id:'',variant_id:'',name_v_id:'',name_v_field:'',des_id:'',des_field:'',pe_id:'',pe_field:'',pdot_id:'',pdot_field:'',cdot_id:'',cdot_field:'',gdot_id:'',gdot_field:'',exon_id:'',exon_field:'',trans_id:'',trans_field:'',}})

    const get_CreateGenomicVariantMarkerSnvMutationVariables = ():CreateGenomicVariantMarkerSnvMutationVariables => {
        const variables :CreateGenomicVariantMarkerSnvMutationVariables = {
            variant_id: get_unique_graph_id('snvindel_'),
            gene_id:new_gene_id,
            name_v_id: get_unique_graph_id('es_'),
            name_v_field: get_unique_graph_id('snvindel_VariantName_'),
            des_id: get_unique_graph_id('es_'),
            des_field:get_unique_graph_id('snvindel_VariantDescription_'),
            pe_id: get_unique_graph_id('es_'),
            pe_field: get_unique_graph_id('snvindel_Variant_protein_effect_'),
            pdot_id: get_unique_graph_id('es_'),
            pdot_field: get_unique_graph_id('snvindel_Variant_pdot_'),
            cdot_id: get_unique_graph_id('es_'),
            cdot_field: get_unique_graph_id('snvindel_Variant_cdot_'),
            gdot_id: get_unique_graph_id('es_'),
            gdot_field: get_unique_graph_id('snvindel_Variant_gdot_'),
            exon_id: get_unique_graph_id('es_'),
            exon_field: get_unique_graph_id('snvindel_Variant_exon_'),
            trans_id: get_unique_graph_id('es_'),
            trans_field:get_unique_graph_id('snvindel_Variant_canonicalTranscript_'),
            marker_id: get_unique_graph_id('genomicvariantmarker_'),
            date: get_date_as_hyphenated_string(),
            user_id: user_ID,
            ref_array: [],
            empty_string:'',
            name_id: get_unique_graph_id('es_'),
            name: new_marker_name,
            name_field: get_unique_graph_id("marker_profile_name_field_"),
            method_id: get_unique_graph_id('es_'),
            method_field: get_unique_graph_id('marker_profile_method_field_'),
            result_string_id: get_unique_graph_id('es_'),
            result_string_field: get_unique_graph_id('marker_profile_result_string_field_'),

        }
        return variables;
    }
    const post_CreateGenomicVariantMarkerSnvMutation = () => {
        console.log("post_CreateGenomicVariantMarkerSnvMutation")
        if (snvMutationData!=null){
            set_query_string(new_marker_name)
            set_markerType('GenomicVariantMarker')
            set_selected_gene_label(new_gene_name)
            set_gene_id(new_gene_id)
            set_marker_id(new_marker_id)
        }
    }
    useEffect(post_CreateGenomicVariantMarkerSnvMutation,[snvMutationData])

    const [createGenomicVariantRegion, { loading: regionMutationLoading, error: regionMutationError, data:regionMutationData }] = useCreateGenomicVariantMarkerRegionMutation({variables:{marker_id:'',
            date:'', empty_string:'', method_field:'', method_id:'', name:'', name_id:'',name_field:'',result_string_id:'',result_string_field:'',user_id: '',ref_array:[],del_id:'',del_field:'',frame_id:'',frame_field:'',trunc_id:'',trunc_field:'',
            region_type:RegionType.Gene,region_value_field:'',region_value_id:'',
            gene_id:'',variant_id:'',name_v_id:'',name_v_field:'',des_id:'',des_field:'',pe_id:'',pe_field:'',trans_id:'',trans_field:''}})

    const get_CreateGenomicVariantMarkerRegionMutationVariables = ():CreateGenomicVariantMarkerRegionMutationVariables => {
        const variables :CreateGenomicVariantMarkerRegionMutationVariables = {
            variant_id: get_unique_graph_id('region_'),
            gene_id:new_gene_id,
            name_v_id: get_unique_graph_id('es_'),
            name_v_field: get_unique_graph_id('region_VariantName_'),
            des_id: get_unique_graph_id('es_'),
            des_field:get_unique_graph_id('region_VariantDescription_'),
            pe_id: get_unique_graph_id('es_'),
            pe_field: get_unique_graph_id('region_Variant_protein_effect_'),
            trans_id: get_unique_graph_id('es_'),
            trans_field:get_unique_graph_id('region_Variant_canonicalTranscript_'),
            region_type:region_type,
            region_value_field:get_unique_graph_id('region_VariantValue_'),
            region_value_id: get_unique_graph_id('ei_'),
            del_id:get_unique_graph_id('ei_'),
            del_field:get_unique_graph_id('region_VariantDeleterious_'),
            frame_id:get_unique_graph_id('ei_'),
            frame_field:get_unique_graph_id('region_VariantFrameshift_'),
            trunc_id:get_unique_graph_id('ei_'),
            trunc_field:get_unique_graph_id('region_VariantTruncating_'),
            marker_id: get_unique_graph_id('genomicvariantmarker_'),
            date: get_date_as_hyphenated_string(),
            user_id: user_ID,
            ref_array: [],
            empty_string:'',
            name_id: get_unique_graph_id('es_'),
            name: new_marker_name,
            name_field: get_unique_graph_id("marker_profile_name_field_"),
            method_id: get_unique_graph_id('es_'),
            method_field: get_unique_graph_id('marker_profile_method_field_'),
            result_string_id: get_unique_graph_id('es_'),
            result_string_field: get_unique_graph_id('marker_profile_result_string_field_'),

        }
        return variables;
    }
    const post_CreateGenomicVariantMarkerRegionMutation = () => {
        console.log("post_CreateGenomicVariantMarkerRegionMutation")
        if (snvMutationData!=null){
            set_query_string(new_marker_name)
            set_markerType('GenomicVariantMarker')
            set_selected_gene_label(new_gene_name)
            set_gene_id(new_gene_id)
            set_marker_id(new_marker_id)
        }
    }
    useEffect(post_CreateGenomicVariantMarkerRegionMutation,[regionMutationData])

    const [createGenomicVariantCNV, { loading: cnvMutationLoading, error: cnvMutationError, data:cnvMutationData }] = useCreateGenomicVariantMarkerCnvMutation({variables:{marker_id:'',
            date:'', empty_string:'', method_field:'', method_id:'', name:'', name_id:'',name_field:'',result_string_id:'',result_string_field:'',user_id: '',ref_array:[],
            gene_id:'',variant_id:'',name_v_id:'',name_v_field:'',des_id:'',des_field:'',trans_id:'',trans_field:'',cc_id:'',cc_field:'',}})

    const get_CreateGenomicVariantMarkerCnvMutationVariables = ():CreateGenomicVariantMarkerCnvMutationVariables => {
        const variables :CreateGenomicVariantMarkerCnvMutationVariables = {
            variant_id: get_unique_graph_id('snvindel_'),
            gene_id:new_gene_id,
            name_v_id: get_unique_graph_id('es_'),
            name_v_field: get_unique_graph_id('CNV_VariantName_'),
            des_id: get_unique_graph_id('es_'),
            des_field:get_unique_graph_id('CNV_VariantDescription_'),
            trans_id: get_unique_graph_id('es_'),
            trans_field:get_unique_graph_id('CNV_Variant_canonicalTranscript_'),
            cc_id: get_unique_graph_id('ecc_'),
            cc_field:get_unique_graph_id('CNV_VariantCopyChange_'),
            marker_id: get_unique_graph_id('genomicvariantmarker_'),
            date: get_date_as_hyphenated_string(),
            user_id: user_ID,
            ref_array: [],
            empty_string:'',
            name_id: get_unique_graph_id('es_'),
            name: new_marker_name,
            name_field: get_unique_graph_id("marker_profile_name_field_"),
            method_id: get_unique_graph_id('es_'),
            method_field: get_unique_graph_id('marker_profile_method_field_'),
            result_string_id: get_unique_graph_id('es_'),
            result_string_field: get_unique_graph_id('marker_profile_result_string_field_'),

        }
        return variables;
    }
    const post_CreateGenomicVariantMarkerCnvMutation = () => {
        console.log("post_CreateGenomicVariantMarkerCnvMutation")
        if (cnvMutationData!=null){
            set_query_string(new_marker_name)
            set_markerType('GenomicVariantMarker')
            set_selected_gene_label(new_gene_name)
            set_gene_id(new_gene_id)
            set_marker_id(new_marker_id)
        }
    }
    useEffect(post_CreateGenomicVariantMarkerCnvMutation,[cnvMutationData])

    const [createGenomicVariantFusion, { loading: fusionMutationLoading, error: fusionMutationError, data:fusionMutationData }] = useCreateGenomicVariantMarkerFusionMutation({variables:{marker_id:'',
            date:'', empty_string:'', method_field:'', method_id:'', name:'', name_id:'',name_field:'',result_string_id:'',result_string_field:'',user_id: '',ref_array:[],
            gene_id:'',variant_id:'',name_v_id:'',name_v_field:'',des_id:'',des_field:'',trans_id:'',trans_field:'',cc_id:'',cc_field:'',g5_id:'',g5_field:'',g3_id:'',g3_field:'',e5_id:'',e5_field:'',e3_id:'',e3_field:'',}})

    const get_CreateGenomicVariantMarkerFusionMutationVariables = ():CreateGenomicVariantMarkerFusionMutationVariables => {
        const variables :CreateGenomicVariantMarkerFusionMutationVariables = {
            variant_id: get_unique_graph_id('snvindel_'),
            gene_id:new_gene_id,
            name_v_id: get_unique_graph_id('es_'),
            name_v_field: get_unique_graph_id('fusion_VariantName_'),
            des_id: get_unique_graph_id('es_'),
            des_field:get_unique_graph_id('fusion_VariantDescription_'),
            trans_id: get_unique_graph_id('es_'),
            trans_field:get_unique_graph_id('fusion_Variant_canonicalTranscript_'),
            cc_id: get_unique_graph_id('ecc_'),
            cc_field:get_unique_graph_id('fusion_VariantCopyChange_'),
            g5_id:get_unique_graph_id('eog_'),
            g5_field:get_unique_graph_id('fusion_Variant_gene5_'),
            g3_id:get_unique_graph_id('eog_'),
            g3_field:get_unique_graph_id('fusion_Variant_gene3_'),
            e5_id:get_unique_graph_id('ei_'),
            e5_field:get_unique_graph_id('fusion_Variant_exon5_'),
            e3_id:get_unique_graph_id('ei_'),
            e3_field:get_unique_graph_id('fusion_Variant_exon3_'),
            marker_id: get_unique_graph_id('genomicvariantmarker_'),
            date: get_date_as_hyphenated_string(),
            user_id: user_ID,
            ref_array: [],
            empty_string:'',
            name_id: get_unique_graph_id('es_'),
            name: new_marker_name,
            name_field: get_unique_graph_id("marker_profile_name_field_"),
            method_id: get_unique_graph_id('es_'),
            method_field: get_unique_graph_id('marker_profile_method_field_'),
            result_string_id: get_unique_graph_id('es_'),
            result_string_field: get_unique_graph_id('marker_profile_result_string_field_'),

        }
        return variables;
    }
    const post_CreateGenomicVariantMarkerFusionMutation = () => {
        console.log("post_CreateGenomicVariantMarkerFusionMutation")
        if (fusionMutationData!=null){
            set_query_string(new_marker_name)
            set_markerType('GenomicVariantMarker')
            set_selected_gene_label(new_gene_name)
            set_gene_id(new_gene_id)
            set_marker_id(new_marker_id)
        }
    }
    useEffect(post_CreateGenomicVariantMarkerFusionMutation,[fusionMutationData])

    const [createMsiMarker, { loading: msiMutationLoading, error: msiMutationError, data:msiMutationData }] = useCreateMsiMarkerMutation({variables:{marker_id:'',  date:'', empty_string:'', method_field:'', method_id:'', name:'', name_id:'',name_field:'',result_string_id:'',result_string_field:'',user_id: '',ref_array:[]}})

    const get_CreateMsiMarkerMutationVariables_object = ():CreateMsiMarkerMutationVariables => {
        const variables : CreateMsiMarkerMutationVariables= {
            marker_id: get_unique_graph_id('msi_'),
            date: get_date_as_hyphenated_string(),
            user_id: user_ID,
            ref_array: [],
            empty_string:'',
            name_id: get_unique_graph_id('es_'),
            name: new_marker_name,
            name_field: get_unique_graph_id("msi_name_field_"),
            method_id: get_unique_graph_id('es_'),
            method_field: get_unique_graph_id('msi_method_field_'),
            result_string_id: get_unique_graph_id('es_'),
            result_string_field: get_unique_graph_id('msi_result_string_field_'),
        }
        return variables;
    }

    const post_CreateMsiMarkerMutation = () => {
        console.log("post_CreateMarkerProfileMutation")
        if (msiMutationData!=null){
            set_query_string(new_marker_name)
            set_markerType('MSIMarker')
            set_marker_id(new_marker_id)
            // handleMarkerIdChange(new_marker_id)
        }
    }
    useEffect(post_CreateMsiMarkerMutation,[msiMutationData])

    const [createTmbMarker, { loading: tmbMutationLoading, error: tmbMutationError, data:tmbMutationData }] = useCreateTmbMarkerMutation({variables:{marker_id:'',  date:'', empty_string:'', method_field:'', method_id:'',
            name:'', name_id:'',name_field:'',result_string_id:'',result_string_field:'',comparator_id:'',comparator_field:'',resultMin_id:'',resultMin_field:'',resultUnits_id:'', resultUnits_field:'',interpretation_id:'',interpretation_field:'',
            user_id: '',ref_array:[]}})

    const get_CreateTmbMarkerMutationVariables_object = ():CreateTmbMarkerMutationVariables => {
        const variables : CreateTmbMarkerMutationVariables= {
            marker_id: get_unique_graph_id('tmb_'),
            date: get_date_as_hyphenated_string(),
            user_id: user_ID,
            ref_array: [],
            empty_string:'',
            name_id: get_unique_graph_id('es_'),
            name: new_marker_name,
            name_field: get_unique_graph_id("tmb_name_field_"),
            comparator_id:get_unique_graph_id('eac_'),
            comparator_field:get_unique_graph_id('comparator_field_'),
            resultMin_id:get_unique_graph_id('ef_'),
            resultMin_field:get_unique_graph_id('resultMin_field_'),
            resultUnits_id:get_unique_graph_id('es_'),
            resultUnits_field:get_unique_graph_id('tmb_resultUnits_field_'),
            interpretation_id:get_unique_graph_id('etmbi_'),
            interpretation_field:get_unique_graph_id('tmb_interpretation_field_'),
            method_id: get_unique_graph_id('es_'),
            method_field: get_unique_graph_id('tmb_method_field_'),
            result_string_id: get_unique_graph_id('es_'),
            result_string_field: get_unique_graph_id('tmb_result_string_field_'),
        }
        return variables;
    }

    const post_CreateTmbMarkerMutation = () => {
        console.log("post_CreateMarkerProfileMutation")
        if (tmbMutationData!=null){
            set_query_string(new_marker_name)
            set_markerType('TMBMarker')
            set_marker_id(new_marker_id)
            // handleMarkerIdChange(new_marker_id)
        }
    }
    useEffect(post_CreateTmbMarkerMutation,[tmbMutationData])

    const [createProteinExpressionMarker, { loading: peMutationLoading, error: peMutationError, data:peMutationData }] =
        useCreateProteinExpressionMarkerMutation({variables:{marker_id:'',  date:'', empty_string:'', method_field:'', method_id:'', name:'', name_id:'',name_field:'',result_string_id:'',result_string_field:'',user_id: '',ref_array:[],
            synonyms_id:'',synonyms_field:'',genes_id:'',genes_field:'',assay_id:'',pheno_id:'',pheno_field:'',function_id:'',function_field:'',role_id:'',role_field:'',}})

    const get_CreateProteinExpressionMarkerMutationVariables_object = ():CreateProteinExpressionMarkerMutationVariables => {
        const variables : CreateProteinExpressionMarkerMutationVariables= {
            marker_id: get_unique_graph_id('pe_'),
            date: get_date_as_hyphenated_string(),
            user_id: user_ID,
            ref_array: [],
            empty_string:'',
            name_id: get_unique_graph_id('es_'),
            name: new_marker_name,
            name_field: get_unique_graph_id("pe_name_field_"),
            method_id: get_unique_graph_id('es_'),
            method_field: get_unique_graph_id('pe_method_field_'),
            synonyms_id:get_unique_graph_id('esl_'),
            synonyms_field:get_unique_graph_id('synonyms_protein_expression_marker_'),
            genes_id:get_unique_graph_id('eogl_'),
            genes_field:get_unique_graph_id('eogl_field_'),
            assay_id:protein_level_assay_id,
            pheno_id:get_unique_graph_id('eip_'),
            pheno_field:get_unique_graph_id('immune_phenotype_field_'),
            function_id:get_unique_graph_id('eif_'),
            function_field:get_unique_graph_id('immune_function_field_'),
            role_id:get_unique_graph_id('eicr_'),
            role_field:get_unique_graph_id('immune_cycle_role_field_'),
            result_string_id: get_unique_graph_id('es_'),
            result_string_field: get_unique_graph_id('pe_result_string_field_'),
        }
        return variables;
    }

    const post_CreateProteinExpressionMarkerMutation = () => {
        console.log("post_CreateProteinExpressionMarkerMutation")
        if (peMutationData!=null){
            set_query_string(new_marker_name)
            set_markerType('ProteinExpressionMarker')
            set_marker_id(new_marker_id)
        }
    }
    useEffect(post_CreateProteinExpressionMarkerMutation,[peMutationData])



    const options = [
        { value: 'ProteinExpressionMarker', label: 'Protein Expression Markers' },
        { value: 'VariantSNVIndel', label: 'GenomicVariantMarker--SNVIndel' },
        { value: 'VariantRegion', label: 'Genomic Variant Markers--Region' },
        { value: 'VariantCNV', label: 'Genomic Variant Markers--CNV' },
        { value: 'VariantFusion', label: 'Genomic Variant Markers--Fusion' },
        { value: 'MSIMarker', label: 'MSI Markers' },
        { value: 'TMBMarker', label: 'TMB Markers' },
        { value: 'MarkerProfile', label: 'Marker Profiles' },

    ];
    const state  = {
        selectedOption: { value: new_markerType, label: markerName },
    };

    const regiontype_options = [
        { value: RegionType.Gene, label: 'Gene' },
        { value: RegionType.Exon, label: 'Exon' },
        { value: RegionType.Codon, label: 'Codon' },
    ];

    const regiontype_state  = {
        selectedOption: { value: region_type, label: region_type_label },
    };

    const handleChange = async (event:any) => {
        const label : string = event.label
        const value : string = event.value as string;
        set_markerName(label)
        set_new_markerType(value)
        state.selectedOption.value = new_markerType
        state.selectedOption.label = markerName
    }
    const handleRegionTypeChange = async (event:any) => {
        const label : string = event.label
        const value : RegionType = event.value;
        console.log(label,value)
        set_region_type(value)
        set_region_type_label(label)
        regiontype_state.selectedOption.value = value
        regiontype_state.selectedOption.label = label
    }
    const handleCreateMarker = async () => {
        let data_ok = true
        if (new_marker_name===""){
            data_ok = false
            alert.error("Please name the Marker!")
        }
        if (new_markerType==='ProteinExpressionMarker' && protein_level_assay_id===""){
            data_ok = false
            alert.error("Please select an Assay!")
        }

        if (data_ok)
            {
            switch(new_markerType){
                case "ProteinExpressionMarker": {
                    console.log("ProteinExpressionMarker")
                    const mutation_object = get_CreateProteinExpressionMarkerMutationVariables_object();
                    set_new_marker_id(mutation_object.marker_id)
                    await createProteinExpressionMarker({variables:mutation_object})
                    break;
                }
                case "VariantSNVIndel": {
                    console.log("VariantSNVIndel")
                    const mutation_object = get_CreateGenomicVariantMarkerSnvMutationVariables();
                    set_new_marker_id(mutation_object.marker_id)
                    await createGenomicVariantSNV({variables:mutation_object})
                    break;
                }
                case "VariantRegion": {
                    console.log("VariantRegion")
                    const mutation_object = get_CreateGenomicVariantMarkerRegionMutationVariables();
                    set_new_marker_id(mutation_object.marker_id)
                    await createGenomicVariantRegion({variables:mutation_object})
                    break;
                }
                case "VariantCNV": {
                    console.log("VariantCNV")
                    const mutation_object = get_CreateGenomicVariantMarkerCnvMutationVariables();
                    set_new_marker_id(mutation_object.marker_id)
                    await createGenomicVariantCNV({variables:mutation_object})
                    break;
                }
                case "VariantFusion": {
                    console.log("VariantFusion")
                    const mutation_object = get_CreateGenomicVariantMarkerFusionMutationVariables();
                    set_new_marker_id(mutation_object.marker_id)
                    await createGenomicVariantFusion({variables:mutation_object})
                    break;
                }
                case "MSIMarker": {
                    console.log("MSIMarker")
                    const mutation_object = get_CreateMsiMarkerMutationVariables_object()
                    set_new_marker_id(mutation_object.marker_id)
                    await createMsiMarker({variables:mutation_object})
                    break;
                }
                case "TMBMarker": {
                    console.log("TMBMarker")
                    const mutation_object = get_CreateTmbMarkerMutationVariables_object();
                    set_new_marker_id(mutation_object.marker_id)
                    await createTmbMarker({variables:mutation_object})
                    break;
                }
                case "MarkerProfile": {
                    console.log("MarkerProfile")
                    const mutation_object = get_CreateMarkerProfileMutationVariables_object();
                    set_new_marker_id(mutation_object.marker_id)
                    await createMarkerProfile({variables:mutation_object})
                    break;
                }
            }
        }
    }
    const keyPressed = async (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "Enter") {
            handleCreateMarker()
        }
    }
    const handleNameFilter = () => {
        set_gene_query_string(filter_term)
    }
     const handleReset = () => {
        set_gene_query_string('')
        set_filter_term('')
    }
    const {data} = useGeneListQuery(
        {variables: {str: gene_query_string}}
    );
    const handleGeneIdChange = async (newGeneID:string,newGeneName:string) => {
        set_new_gene_id(newGeneID)
        set_new_gene_name(newGeneName)
    }

    function isGenomicMarker() {
        return new_markerType == 'VariantSNVIndel' || new_markerType == 'VariantRegion'|| new_markerType == 'VariantCNV' || new_markerType == 'VariantFusion';
    }

    return (
        <div className={`${className}__Container`}>
         <h3>New Marker</h3>
            <div className={`${className}__Wrapper`}>
                <div>New Marker Name</div>
                <div className={`${className}__Filter`}>
                    <input className={'filter_text_input'} type="text"
                                                   placeholder="Name"
                                                   name="subString" value={new_marker_name}
                                                   onChange={e => set_new_marker_name(e.target.value)}
                                                   onKeyPress={keyPressed}
                                            />
                </div>

                <div>Select Marker Type:</div>
                <div><Select className={`${className}__Select`}  options = {options} onChange={handleChange}
                    value={state.selectedOption}/> </div>


                <div>{new_markerType == 'VariantRegion' && <span>Select Region Type</span> }</div>
                <div>{new_markerType == 'VariantRegion' &&
                    <div>
                        <Select className={`${className}__Select`}  options = {regiontype_options} onChange={handleRegionTypeChange} value={regiontype_state.selectedOption}/>
                    </div>  }
                </div>

                <div>{isGenomicMarker() && <span>Select Gene</span>}</div>
                <div>{isGenomicMarker() &&
                    <div >
                        {data &&
                            <div>
                                <div className={`${className}__Filter`}>
                                    <input className={'filter_text_input'} type="text"
                                           placeholder="Name Starts With..."
                                           name="subString" value={filter_term}
                                           onChange={e => set_filter_term(e.target.value)}
                                    />
                                <button className={'btn btn-primary'} onClick={handleNameFilter}>Filter</button>
                                <button className={'btn btn-primary'} onClick={handleReset}>Reset</button>
                                </div>

                                <div className={`${className}__GeneListWrapper`}>
                                    <GeneList data={data} query_str={gene_query_string} gene_id={new_gene_id} handleGeneIdChange={handleGeneIdChange} set_gene_query_string={set_gene_query_string}/>
                                </div>
                                </div>
                        }
                    </div>}
                </div>

                <div>
                    {new_markerType == 'ProteinExpressionMarker' && <span>Select Assay</span>}
                </div>
                <div>
                    {new_markerType == 'ProteinExpressionMarker' &&
                    <ProteinLevelAssayListContainer protein_level_assay_id={protein_level_assay_id} set_protein_level_assay_id={set_protein_level_assay_id} />
                    }
                </div>

                <div></div>
                <div><button className={'btn btn-primary'} onClick={handleCreateMarker}>Create Marker</button></div>
            </div>
        </div>
    )

}

export default NewMarker;

