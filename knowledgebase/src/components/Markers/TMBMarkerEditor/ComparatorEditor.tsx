import * as React from 'react';
import {useEffect} from 'react';
import Select, {OptionTypeBase} from 'react-select';
import {AssayComparator, useTmbMarkerAddComparatorMutation} from "../../../generated/graphql";
import './styles.css';
import {get_editable_comparator_mutation_object} from "../../common/Helpers/EditableStatementHelper";
import {useUserContentState} from "../../../context/UserContentContext";


interface Props {
    comparator: AssayComparator;
    set_editing: (b:boolean) => void;
    marker_ID: string,
    es_ID: string;
    es_field: string;
    ref_array: string[];
    refetch: () => void;
}

const className = 'TMBMarkerEditor';

const ComparatorEditor : React.FC<Props> = ({comparator, set_editing, marker_ID,es_ID,es_field,ref_array,refetch}) => {


    const [addComparatorMutation, { loading: mutationLoading, error: mutationError, data:mutationData }] = useTmbMarkerAddComparatorMutation({variables:{marker_id:'', old_es_id:'',
            date: '',
            es_field:'',es_id:'',
            comp:AssayComparator.EqualsMin,
        user_id: '',
        ref_aray:[]}})

    function get_comparator_value(){
        return getSelectedOption().value
    }

    const {
        UserContentState: {userID}
    } = useUserContentState();

    const user_ID : string = userID;
    const save = async () => {
        const mutation_object = get_editable_comparator_mutation_object(marker_ID,es_ID, es_field,get_comparator_value(), user_ID, [])
        await addComparatorMutation({variables: mutation_object})

    };
    const post_save = () => {
        if (mutationData!=null){
            refetch()
            set_editing(false)
        }
    }
    useEffect(post_save,[mutationData])

    const cancelEdit = async () => {
        // console.log('cancelEdit')
        set_editing(false)
    };
    interface IComparatorOptions extends OptionTypeBase {
        value: AssayComparator; label: string;
    }
    //    Equals
    //     EqualsMin
    //     # value must equal resultString
    //     EqualsString
    //     # Range
    //     # range inclusive of min/max [min,max]
    //     RangeClosed
    //     # range inclusive of min and exclusive of max [min,max)
    //     RangeClosedOpen
    //     # range exclusive of min/max (min,max)
    //     RangeOpen
    //     # range exclusive of min and inclusive of max (min,max]
    //     RangeOpenClosed
    const options: IComparatorOptions[] = [
        { value: AssayComparator.Equals, label: 'Equals' },
        { value: AssayComparator.EqualsMin, label: 'EqualsMin' },
        // { value: AssayComparator.EqualsString, label: 'EqualsString' },
        { value: AssayComparator.RangeClosed, label: 'RangeClosed' },
        { value: AssayComparator.RangeClosedOpen, label: 'RangeClosedOpen' },
        { value: AssayComparator.RangeOpenClosed, label: 'RangeOpenClosed' },
    ];
    const get_label_for_value = (val:AssayComparator):string => {
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


    const state  = {
        selectedOption: { value: comparator, label: get_label_for_value(comparator) },
    };

    const handleChange = async (event:any) => {
        const value : AssayComparator = event.value;
        state.selectedOption.value = value
        state.selectedOption.label = get_label_for_value(value)
    }

    function getSelectedOption() {
        return state.selectedOption;
    }

    return ( <div className="form-group">
            <Select className={`${className}__select`}  options = {options} onChange={handleChange}
                    value={getSelectedOption()}
            />
             <button value="Save" className="btn btn-primary my-1" onClick={() => save()}>Save
            </button>
            <button value="Cancel" className="btn btn-primary my-1"
                    onClick={() => cancelEdit()}>Cancel
            </button>
            <div>
                {mutationLoading && <p>Loading...</p>}
                {mutationError && <p>Error :( Please try again</p>}
                {mutationData && <p>Data</p>}
            </div>


        </div>
    )
}

export default ComparatorEditor;