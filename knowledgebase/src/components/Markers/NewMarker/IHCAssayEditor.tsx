import * as React from 'react';
import {Fragment, useEffect} from "react";
import {AssayComparator, RnaSeqResultType} from "../../../generated/graphql";
import Select, {OptionTypeBase} from "react-select";
import {useCreateIhcAssayMutation,CreateIhcAssayMutationVariables} from "../../../generated/graphql";
import {get_date_as_hyphenated_string, get_unique_graph_id} from "../../common/Helpers/EditableStatementHelper";
import {useUserContentState} from "../../../context/UserContentContext";

interface Props {
    set_protein_level_assay_id: (newId: string) => void;
    set_creating_new_ihc_assay: (b:boolean)=> void;
    set_query_string: (q:string) => void;
}
const className = 'IHCAssayEditor';

const IHCAssayEditor: React.FC<Props> = ({set_protein_level_assay_id,set_creating_new_ihc_assay,set_query_string}) => {
    const [name, set_name] = React.useState('');
    const [clone, set_clone] = React.useState('');
    const [units, set_units] = React.useState('');
    const [result_string, set_result_string] = React.useState('');
    const [resultMin, set_resultMin] = React.useState('0');
    const [resultMax, set_resultMax] = React.useState('0');
    const [comparator,set_comparator]= React.useState(AssayComparator.Equals);

    //    name: EditableStatement! @relation(name: "NAMED", direction: "OUT")
    //     antibodyClone: EditableStatement! @relation(name: "CLONE", direction: "OUT")
    //     comparator: EditableAssayComparator! @relation(name: "COMPARED", direction: "OUT")
    //     resultMin: EditableFloat! @relation(name: "MIN", direction: "OUT")
    //     resultMax: EditableFloat @relation(name: "MAX", direction: "OUT")
    //     resultString: EditableStatement @relation(name: "RESULT", direction: "OUT")
    //     resultUnits: EditableStatement! @relation(name: "UNITS", direction: "OUT")
    const {
        UserContentState: {userID}
    } = useUserContentState();

    const user_ID : string = userID;
    const [createIhcAssay,{loading,error,data}] = useCreateIhcAssayMutation({variables:{date:'',user_id: '',ref_array:[], assay_id:'',name:'', name_id:'',name_field:'', comparator_id:'',comparator_field:'',comparator:AssayComparator.Equals,
            resultMin_id:'',resultMin_field:'',resultMin:-1,resultMax_id:'',resultMax_field:'',resultMax:-1,clone_id:'',clone_field:'',clone:'',
            units_id:'',units_field:'',units:'',rs_id:'',rs_field:'',rs:'',}})

    const get_CreateIhcAssayMutationVariables = () : CreateIhcAssayMutationVariables => {
        const variables : CreateIhcAssayMutationVariables = {
            date: get_date_as_hyphenated_string(),
            user_id: user_ID,
            ref_array: [],
            assay_id: get_unique_graph_id('ihc_'),
            name_id: get_unique_graph_id('es_'),
            name: name,
            name_field: get_unique_graph_id('ihc_name_field_'),
            comparator_id: get_unique_graph_id('eac_'),
            comparator_field: get_unique_graph_id('ihc_comparator_field_'),
            comparator: comparator,
            resultMin_id: get_unique_graph_id('ef_'),
            resultMin_field: get_unique_graph_id('ihc_resultMin_field_'),
            resultMin: parseFloat(resultMin),
            resultMax_id: get_unique_graph_id('ef_'),
            resultMax_field: get_unique_graph_id('ihc_resultMax_field_'),
            resultMax: parseFloat(resultMax),
            clone_id:get_unique_graph_id('es_'),
            clone_field:get_unique_graph_id('antibodyClone_field_'),
            clone:clone,
            units_id:get_unique_graph_id('es_'),
            units_field:get_unique_graph_id('ihc_resultUnits_field_'),
            units:units,
            rs_id:get_unique_graph_id('es_'),
            rs_field:get_unique_graph_id('ihc_resultString_field_'),
            rs:result_string
        }
        return variables
    }

    const save = async ()  => {
        const mutation_object = get_CreateIhcAssayMutationVariables();
        set_protein_level_assay_id(mutation_object.assay_id);
        await createIhcAssay({variables:mutation_object})
    }

    const post_save = () => {
        if (data!=null){
            set_query_string(name)
            set_creating_new_ihc_assay(false)
        }
    }

    useEffect(post_save,[data])
    const cancel = async ()  => {
        set_creating_new_ihc_assay(false)
    }
    const handle_result_min_change = async (targetValue:string) => {
        if (!isNaN(Number(targetValue))){
            set_resultMin(targetValue)
        }
    }
    const handle_result_max_change = async (targetValue:string) => {
        if (!isNaN(Number(targetValue))){
            set_resultMax(targetValue)
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
    interface IComparatorOptions extends OptionTypeBase {
        value: AssayComparator; label: string;
    }
    const options: IComparatorOptions[] = [
        { value: AssayComparator.Equals, label: 'Equals' },
        { value: AssayComparator.EqualsMin, label: 'EqualsMin' },
        { value: AssayComparator.EqualsString, label: 'EqualsString' },
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
            case AssayComparator.EqualsString: {
                label = 'EqualsString'
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

    return (
        <Fragment>
            <h4>IHC Assay Editor</h4>
            <div className={`${className}__Wrapper`}>

                <div>Name</div>
                <div>
                    <textarea className={`${className}__ShortTextarea`} name="name" placeholder="Name" value={name} onChange={(e) => {set_name(e.target.value)}}/>
                </div>

                <div>Antibody Clone</div>
                <div>
                    <textarea className={`${className}__ShortTextarea`} name="clone" placeholder="Clone" value={clone} onChange={(e) => {set_clone(e.target.value)}}/>

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
                    <textarea className={`${className}__ShortTextarea`} name="max" placeholder="Max Value(float)" value={resultMax} onChange={(e) => {handle_result_max_change(e.target.value)}}/>
                </div>

                <div>Result String</div>
                <div>
                    <textarea className={`${className}__ShortTextarea`} name="result_string" placeholder="Result" value={result_string} onChange={(e) => {set_result_string(e.target.value)}}/>
                </div>

                <div>Result Units</div>
                <div>
                    <textarea className={`${className}__ShortTextarea`} name="units" placeholder="Units" value={units} onChange={(e) => {set_units(e.target.value)}}/>
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

export default IHCAssayEditor;