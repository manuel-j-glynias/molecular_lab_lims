import * as React from 'react';
import {Fragment, useEffect} from 'react';
import Select, {OptionTypeBase} from "react-select";
import {
    AssayComparator,
    CreateRnaSeqAssayMutationVariables,
    RnaSeqResultType,
    useCreateRnaSeqAssayMutation
} from "../../../generated/graphql";
import {useUserContentState} from "../../../context/UserContentContext";
import {get_date_as_hyphenated_string, get_unique_graph_id} from "../../common/Helpers/EditableStatementHelper";

interface Props {
    set_protein_level_assay_id: (newId: string) => void;
    set_creating_new_rnaseq_assay: (b:boolean)=> void;
    set_query_string: (q:string) => void;
}
const className = 'RnaSeqAssayEditor';


const RnaSeqAssayEditor: React.FC<Props> = ({set_protein_level_assay_id,set_creating_new_rnaseq_assay,set_query_string}) => {

    const [name, set_name] = React.useState('');
    const [resultType, set_resultType] = React.useState(RnaSeqResultType.RankScore);
    const [resultMin, set_resultMin] = React.useState('0');
    const [resultMax, set_resultMax] = React.useState('0');
    const [comparator,set_comparator]= React.useState(AssayComparator.Equals);
    const [showMax, set_showMax] = React.useState(true);
    const [should_showMax, set_should_showMax] = React.useState(false);

    const {
        UserContentState: {userID}
    } = useUserContentState();

    const user_ID : string = userID;


    const [createRnaSeqAssay, {loading,error,data}] = useCreateRnaSeqAssayMutation({variables:{date:'',user_id: '',ref_array:[], assay_id:'',name:'', name_id:'',name_field:'', comparator_id:'',comparator_field:'',comparator:AssayComparator.Equals,
        resultMin_id:'',resultMin_field:'',resultMin:-1,resultMax_id:'',resultMax_field:'',resultMax:-1,resultType_id:'',resultType_field:'',resultType:RnaSeqResultType.NRpm}})

    const get_CreateRnaSeqAssayMutationVariables = () : CreateRnaSeqAssayMutationVariables => {
        const variables : CreateRnaSeqAssayMutationVariables = {
                date: get_date_as_hyphenated_string(),
                user_id: user_ID,
                ref_array: [],
                assay_id: get_unique_graph_id('rna_seq_'),
                name_id: get_unique_graph_id('es_'),
                name: name,
                name_field: get_unique_graph_id('rna_seq_name_field_'),
                comparator_id: get_unique_graph_id('eac_'),
                comparator_field: get_unique_graph_id('rna_seq_comparator_field_'),
                comparator: comparator,
                resultMin_id: get_unique_graph_id('ef_'),
                resultMin_field: get_unique_graph_id('rna_seq_resultMin_field_'),
                resultMin: parseFloat(resultMin),
                resultMax_id: get_unique_graph_id('ef_'),
                resultMax_field: get_unique_graph_id('rna_seq_resultMax_field_'),
                resultMax: parseFloat(resultMax),
                resultType_id: get_unique_graph_id('ernaseq_'),
                resultType_field: get_unique_graph_id('rna_seq_resultType_field_'),
                resultType: resultType
            }
            return variables;
    }


    const save = async ()  => {
        const mutation_object = get_CreateRnaSeqAssayMutationVariables();
        set_protein_level_assay_id(mutation_object.assay_id);
        await createRnaSeqAssay({variables:mutation_object})

    }

    const post_save = () => {
        if (data!=null){
            set_query_string(name)
             set_creating_new_rnaseq_assay(false)
        }
    }

    useEffect(post_save,[data])

    const cancel = async ()  => {
        set_creating_new_rnaseq_assay(false)
    }

    const handle_result_min_change = async (targetValue:string) => {
        if (!isNaN(Number(targetValue))){
            set_resultMin(targetValue)
        }
    }
    function getResultMin():number {
        let number = -1;
        if (resultMin != ''){
            number = parseFloat(resultMin);
        }
        return number;
    }
    function getResultMax():number {
        let number = -1;
        if (resultMax != ''){
            number = parseFloat(resultMax);
        }
        return number;
    }
    // function usingMax():boolean{
    //     console.log(comparator_state.selectedOption.value)
    //     let show = comparator_state.selectedOption.value==AssayComparator.RangeClosed || comparator_state.selectedOption.value==AssayComparator.RangeClosedOpen || comparator_state.selectedOption.value==AssayComparator.RangeOpenClosed
    //     return show
    //
    // }
    const handle_result_max_change = async (targetValue:string) => {
        if (!isNaN(Number(targetValue))){
            set_resultMax(targetValue)
        }
    }
    interface IComparatorOptions extends OptionTypeBase {
        value: AssayComparator; label: string;
    }
     const options: IComparatorOptions[] = [
        { value: AssayComparator.Equals, label: 'Equals' },
        { value: AssayComparator.EqualsMin, label: 'EqualsMin' },
        { value: AssayComparator.RangeClosed, label: 'RangeClosed' },
        { value: AssayComparator.RangeClosedOpen, label: 'RangeClosedOpen' },
        { value: AssayComparator.RangeOpenClosed, label: 'RangeOpenClosed' },
    ];
    const get_label_for_comparator_value = (val:AssayComparator):string => {
        let label: string = 'Equals'
        switch(val) {
            case AssayComparator.Equals: {
                label = 'Equals'
                break;
            }
            case AssayComparator.EqualsMin: {
                label = 'EqualsMin'
                break;
            }
             case AssayComparator.RangeClosed: {
                label = 'RangeClosed'
                break;
            }
            case AssayComparator.RangeClosedOpen: {
                label = 'RangeClosedOpen'
                break;
            }
            case AssayComparator.RangeOpenClosed: {
                label = 'RangeOpenClosed'
                break;
            }

            default: {
                label = 'Equals'
                break;
            }
        }
        return label
    }


    const comparator_state  = {
        selectedOption: { value: comparator, label: get_label_for_comparator_value(comparator) },
    };

    const handleComparatorChange = async (event:any) => {
        const value : AssayComparator = event.value;
        comparator_state.selectedOption.value = value
        comparator_state.selectedOption.label = get_label_for_comparator_value(value)
        // let show = comparator_state.selectedOption.value==AssayComparator.RangeClosed || comparator_state.selectedOption.value==AssayComparator.RangeClosedOpen || comparator_state.selectedOption.value==AssayComparator.RangeOpenClosed
        // set_should_showMax(show)
    }

    // const show_show_max = () => {
    //     set_showMax(should_showMax)
    // }
    //
    // useEffect(show_show_max,[should_showMax])

    interface IRnaSeqResultTypeOptions extends OptionTypeBase {
        value: RnaSeqResultType; label: string;
    }
    const rnaSeqResultTypeOptions: IRnaSeqResultTypeOptions[] = [
        { value: RnaSeqResultType.RankScore, label: 'RankScore' },
        { value: RnaSeqResultType.NRpm, label: 'nRPM' },
     ];
    const get_label_for_RnaSeqResultType_value = (val:RnaSeqResultType):string => {
        let label: string = 'Equals'
        switch(val) {
            case RnaSeqResultType.RankScore: {
                label = 'RankScore'
                break;
            }
            case RnaSeqResultType.NRpm: {
                label = 'nRPM'
                break;
            }
         }
        return label
    }


    const resultType_state  = {
        selectedOption: { value: resultType, label: get_label_for_RnaSeqResultType_value(resultType) },
    };

    const handleResultTypeChange = async (event:any) => {
        const value : RnaSeqResultType = event.value;
        resultType_state.selectedOption.value = value
        resultType_state.selectedOption.label = get_label_for_RnaSeqResultType_value(value)
    }

    // function getSelectedComparatorOption() {
    //     return comparator_state.selectedOption;
    // }

    //    name: EditableStatement! @relation(name: "NAMED", direction: "OUT")
    //     comparator: EditableAssayComparator! @relation(name: "COMPARED", direction: "OUT")
    //     resultMin: EditableFloat! @relation(name: "MIN", direction: "OUT")
    //     resultMax: EditableFloat @relation(name: "MAX", direction: "OUT")
    //     resultType: EditableRNASeqResultType! @relation(name: "RESULT_TYPE", direction: "OUT")
    // nRPM
    //     RankScore
    return (
        <Fragment>
            <h4>RNA Seq Assay Editor</h4>

            <div className={`${className}__Wrapper`}>

                <div>Name</div>
                <div>
                    <textarea className={`${className}__ShortTextarea`} name="name" placeholder="Name" value={name} onChange={(e) => {set_name(e.target.value)}}/>
                </div>

                <div>Comparator</div>
                <div>
                    <Select className={`${className}__select`}  options = {options} onChange={handleComparatorChange}
                            value={comparator_state.selectedOption}
                    />
                </div>

                <div>Result Min</div>
                <div>
                    <textarea className={`${className}__ShortTextarea`} name="min" placeholder="Min Value(float)" value={resultMin} onChange={(e) => {handle_result_min_change(e.target.value)}}/>
                </div>

                <div>Result Max</div>
                <div>
                    {showMax ?
                    <textarea className={`${className}__ShortTextarea`} name="max" placeholder="Max Value(float)" value={resultMax} onChange={(e) => {handle_result_max_change(e.target.value)}}/>
                    : <span>NA</span>}

                </div>

                <div>Result Type</div>
                <div>
                    <Select className={`${className}__select`}  options = {rnaSeqResultTypeOptions} onChange={handleResultTypeChange}
                            value={resultType_state.selectedOption}
                    />
                </div>

                <div></div>
                <div>
                    <button className={'btn btn-primary'} onClick={()=>save()}>Save</button>
                    <button className={'btn btn-primary'} onClick={()=>cancel()}>Cancel</button>

                </div>
            </div>
        </Fragment>
    );
}

export default RnaSeqAssayEditor;