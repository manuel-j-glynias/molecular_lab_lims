import React, {Fragment, useEffect, useState} from 'react'
import {AcceptedStatus, Maybe, Molecular_Lab_Test, useUpdate_TestMutation,useCreate_TestMutation} from '../../generated/graphql';
import './styles.css'
import {get_unique_graph_id} from "../common/utils/utils";

interface Props  {
    selected_test_obj: Maybe<Molecular_Lab_Test>;
    handleDBUpdate: () => void;
    isNew:boolean;
}

const className = 'Tests';

const TestDetails: React.FC<Props> = ({selected_test_obj,isNew,handleDBUpdate}) => {
    const [editing, set_editing] = React.useState(false);
    const [name_str, set_name_str] = React.useState('')
    const [description_str, set_description_str] = React.useState('')
    const [ngs_based, set_ngs_based] = React.useState(false)
    const [selected_order, set_selected_order] = useState('');

    const [whole_blood, set_whole_blood] = React.useState(false)
    const [whole_blood_edta, set_whole_blood_edta] = React.useState(false)
    const [marrow, set_marrow] = React.useState(false)
    const [slide, set_slide] = React.useState(false)

    const [diagnoses, set_diagnoses] = React.useState<string[]>([]);
    const [diagnosis_to_add, set_diagnosis_to_add] = useState('');


    const [updateTest, {loading:upLoading, error:upError, data:upData}] = useUpdate_TestMutation({variables:{
        acceptable_sample_type:[],
            description:'',
            id:'',
            name:'',
            name_lower:'',
            ngsBased:false,
            authorized_diagnoses:[]
        }});

    const [createTest, {loading:crLoading, error:crError, data:crData}] = useCreate_TestMutation({variables:{
            acceptable_sample_type:[],
            description:'',
            id:'',
            name:'',
            name_lower:'',
            ngsBased:false,
            authorized_diagnoses:[]
        }});


    useEffect(() => {
        if (isNew){
            set_name_str('');
            set_description_str('');
            set_editing(true);
            set_ngs_based(false);
            set_diagnoses([]);
        }
    },[isNew]);

    const copy_values = () => {
        if (selected_test_obj!=null){
            set_name_str(selected_test_obj.name);
            set_description_str(selected_test_obj.description);
            set_ngs_based(selected_test_obj.ngsBased);
            let d: string[] = []
            let item: number = 0;
            for (item=0; item < selected_test_obj.authorized_diagnoses.length;item++){
                if (selected_test_obj.authorized_diagnoses[item]!=null){
                    d.push(selected_test_obj.authorized_diagnoses[item] as string)
                }
            }
            set_diagnoses(d);
         }
        if (isNew){
            set_name_str('');
            set_description_str('');
            set_ngs_based(false);
            let d: string[] = []
            set_diagnoses(d);
        }
        setup_acceptable_sample_types_arrays();
    }

    const handleEdit = () => {
        copy_values();
        set_editing(true);
    }
    const cancelEdit = () => {
        set_editing(false);
    }
    const get_acceptable_sample_types_as_string = ():string => {
        let s = ''
        if (selected_test_obj!=null) {
            let a_st_array = selected_test_obj.acceptable_sample_type
            if (a_st_array!=null && a_st_array.length>0){
                let index = 0;
                for (index =0; index<a_st_array.length;index++){
                    if (a_st_array[index]!=null){
                        if (s!=''){
                            s += ', ';
                        }
                        // @ts-ignore
                        s += a_st_array[index].name
                    }
                }
            }
        }
        return s
    }
    const setup_acceptable_sample_types_arrays = () => {
        set_whole_blood(false);
        set_whole_blood_edta(false);
        set_marrow(false);
        set_slide(false);
        if (selected_test_obj!=null) {
            let a_st_array = selected_test_obj.acceptable_sample_type
            if (a_st_array!=null && a_st_array.length>0){
                let index = 0;
                for (index =0; index<a_st_array.length;index++){
                    if (a_st_array[index]!=null){
                        // @ts-ignore
                        let name = a_st_array[index].name;
                       if (name==="Whole Blood"){
                           set_whole_blood(true);
                       }
                        else if (name==="Whole Blood EDTA"){
                            set_whole_blood_edta(true);
                       }
                       else if (name==="Bone Marrow Aspirate"){
                           set_marrow(true);
                       }else if (name==="Unstained Slide"){
                           set_slide(true);
                       }
                    }
                }
            }
        }
    }
    const get_acceptable_sample_types_graph_id_array = ():string[] => {
        let graph_ids :string[] = [];

        if (whole_blood){
            graph_ids.push('sample_type_whole_blood');
        }
        if (whole_blood_edta){
            graph_ids.push('sample_type_whole_blood_edta');
        }
        if (marrow){
            graph_ids.push('sample_type_bone_marrow_aspirate');
        }
        if (slide){
            graph_ids.push('sample_type_unstained_slide');
        }

        return graph_ids;
    }
    const save = async () => {
        let acceptable_sample_types = get_acceptable_sample_types_graph_id_array()
        if (selected_test_obj!=null) {
            let name_lower = name_str.toLowerCase();
            await updateTest({
                variables: {
                    acceptable_sample_type:acceptable_sample_types,
                    description:description_str,
                    id:selected_test_obj.id,
                    name:name_str,
                    name_lower:name_lower,
                    ngsBased:ngs_based,
                    authorized_diagnoses:diagnoses
                }
            })
        }
        else if (isNew){
            let name_lower = name_str.toLowerCase();
            let graph_id = get_unique_graph_id('test_');
            await createTest(
                {
                    variables: {
                        acceptable_sample_type:acceptable_sample_types,
                        description:description_str,
                        id:graph_id,
                        name:name_str,
                        name_lower:name_lower,
                        ngsBased:ngs_based,
                        authorized_diagnoses:diagnoses
                    }
                }
            )

        }
        set_editing(false);
        await handleDBUpdate();
        set_name_str('');
        set_description_str('');
        set_ngs_based(false);

    }
    function handleOrder_select(ml_order_id: string, id: string,received_order_id:string,status_id:string) {
        set_selected_order(ml_order_id);
    }

    const get_status_str = (status: AcceptedStatus) => {
        let s= ''
        if (status==AcceptedStatus.NotReady){
            s = "Order Received"
        }
        else if (status==AcceptedStatus.Accepted){
            s = "Order Accepted"
        }
        else if (status==AcceptedStatus.ReadyForQc){
            s = "Slide QC"
        }
        else if (status==AcceptedStatus.CaseCreated){
            s = "Case Created"
        }
        else if (status==AcceptedStatus.Rejected){
            s = "Order Rejected"
        }
        return s;
    }


    function handle_delete(i: string | number) {
        if (typeof i == "number"){
            let d: string[] = []
            let item: number = 0;
            for (item=0; item < diagnoses.length;item++){
                    d.push(diagnoses[item])
            }
            d.splice(i, 1);
            set_diagnoses(d)
        }
    }
    function handle_add_diagnosis() {
        if (diagnosis_to_add != '') {
            let d: string[] = []
            let item: number = 0;
            for (item = 0; item < diagnoses.length; item++) {
                d.push(diagnoses[item])
            }
            d.push(diagnosis_to_add);
            d.sort((a, b) => a.localeCompare(b))
            set_diagnoses(d)
            set_diagnosis_to_add('')
        }
    }

    return (
        <Fragment>
            <div className={`${className}__Details_Panel`}><h3>Test Details:</h3>

                <div className={`${className}__DetailsTable`}>

                    <div className={`${className}__DetailsRow`}>
                        <div className={`${className}__DetailsCellLeft`}>Name:</div>
                        <div className={`${className}__DetailsCellRight`}>{editing ?
                            <span><textarea className={`${className}__ShortTextarea`} name="name"
                                            placeholder="Test Name..." value={name_str} onChange={(e) => {
                                set_name_str(e.target.value)
                            }}/></span> : (selected_test_obj!=null ? selected_test_obj.name : name_str)}</div>

                        <div className={`${className}__DetailsCellLeft`}>Description:</div>
                        <div className={`${className}__DetailsCellRight`}> {editing ?
                            <span><textarea className={`${className}__ShortTextarea`} name="description"
                                            placeholder="Test Description..." value={description_str} onChange={(e) => {
                                set_description_str(e.target.value)
                            }}/></span>:  (selected_test_obj!=null ? selected_test_obj.description : description_str)}
                        </div>
                    </div>

                    <div className={`${className}__DetailsRow`}>
                        <div className={`${className}__DetailsCellLeft`}>NGS Based:</div>
                        <div className={`${className}__DetailsCellRight`}>{editing ?
                            <span>
                                <input
                                    type="checkbox"
                                    checked={ngs_based}
                                    onChange={() => {
                                        set_ngs_based(!ngs_based);
                                    }}
                                />

                            </span> : (selected_test_obj!=null ? (selected_test_obj.ngsBased ? "True" : "False") : (ngs_based ? "True" : "False" ))}</div>


                    </div>
                </div>

                <div className={`${className}__DetailsTable`}>
                    <div className={`${className}__DetailsRow`}>
                        <div className={`${className}__DetailsCellLeftLong`}>Acceptable Sample Types:</div>
                        <div className={`${className}__DetailsCellRightLong`}>{editing ?
                            <span>
                                <label className={`${className}__radio_choice`}>
                                <input
                                    type="checkbox"
                                    name="blood"
                                    checked={whole_blood}
                                    onChange={ () => set_whole_blood(!whole_blood)}
                                />
                                Whole Blood
                              </label>
                                <label className={`${className}__radio_choice`}>
                                <input
                                    type="checkbox"
                                    name="edta"
                                    checked={whole_blood_edta}
                                    onChange={ () => set_whole_blood_edta(!whole_blood_edta)}
                                />
                                Whole Blood EDTA
                              </label>
                                <label className={`${className}__radio_choice`}>
                                <input
                                    type="checkbox"
                                    name="marrow"
                                    checked={marrow}
                                    onChange={ () => set_marrow(!marrow)}
                                />
                                Bone Marrow Aspirate
                              </label>
                                <label className={`${className}__radio_choice`}>
                                <input
                                    type="checkbox"
                                    name="slide"
                                    checked={slide}
                                    onChange={ () => set_slide(!slide)}
                                />
                                Unstained Slide
                              </label>
                            </span> : get_acceptable_sample_types_as_string()}
                        </div>
                    </div>
                </div>

                <div className="Vertical_Spacer_10" />
                <div className={`${className}__DiagnosisLabel`}>Authorized Diagnoses (ICD-10-CM Codes):</div>
                {!editing && <ol className={`${className}__ScrollableContainer `} >
                    {selected_test_obj &&
                    selected_test_obj.authorized_diagnoses.map(
                        (diag, i: string | number ) =>
                            !!diag && (
                                <li key={i}
                                    className={   `${className}__diagnosis_item`}
                                ><span>{diag} </span>

                                </li>
                            ),
                    )}
                </ol>}
                {editing && <div>
                <ol className={`${className}__EditingScrollableContainer `} >
                    {diagnoses.map(
                        (diag, i: string | number ) =>
                            !!diag && (
                                <li key={i}
                                    className={   `${className}__diagnosis_item`}
                                ><span>{diag} </span>
                                    <span><button className={'btn btn-primary'} onClick={() => handle_delete(i)}>Delete</button></span>

                                </li>
                            ),
                    )}
                </ol>
                    <div className="Vertical_Spacer_10" />

                    <span><textarea className={`${className}__DiagnosisShortTextarea`} name="added_diagnosis"
                                    placeholder="New Diagnosis..." value={diagnosis_to_add} onChange={(e) => {
                        set_diagnosis_to_add(e.target.value)
                    }}/> <button className={'btn btn-primary'} onClick={() => handle_add_diagnosis()}>Add Diagnosis</button></span>
                </div>}

                <div className="Vertical_Spacer_10" />


                {!editing && <div className={`${className}__Panel_Wrapper`}>
                    <h3>Orders Placed:</h3>
                    <div className={'Vertical_Spacer_10'}></div>
                    <div className={`${className}__Table`}>
                        <div className={`${className}__Header_Row`}>
                            <div className={`${className}__Table_Cell_Medium`}>Patient Name</div>
                            <div className={`${className}__Table_Cell_Small`}>MRN</div>
                            <div className={`${className}__Table_Cell_Medium`}>ML Order ID</div>
                            <div className={`${className}__Table_Cell_Small`}>Received Order ID</div>
                            <div className={`${className}__Table_Cell_Medium`}>Date Received</div>
                            <div className={`${className}__Table_Cell_Medium`}>Ordered By</div>
                            <div className={`${className}__Table_Cell_Medium`}>Status</div>
                        </div>
                    </div>

                    <div className={`${className}__Table_Container`}>

                        <div className={`${className}__Table`}>
                            {selected_test_obj && selected_test_obj.orders && selected_test_obj.orders.map((order, i: number) =>
                                !!order &&  (
                                    <div key={i} className={`${className}__Row`}
                                         onClick={() => handleOrder_select(order.ml_order_id,order.id,order.received_order_id,order.status.id)}>
                                        <div
                                            className={order.ml_order_id === selected_order ? `${className}__Table_Cell_Medium_selected` : `${className}__Table_Cell_Medium`}
                                        >{order.patient_name}</div>
                                        <div
                                            className={order.ml_order_id === selected_order ? `${className}__Table_Cell_Small_selected` : `${className}__Table_Cell_Small`}
                                        >{order.mrn}</div>

                                        <div
                                            className={order.ml_order_id === selected_order ? `${className}__Table_Cell_Medium_selected` : `${className}__Table_Cell_Medium`}
                                        >{order.ml_order_id} </div>
                                        <div
                                            className={order.ml_order_id === selected_order ? `${className}__Table_Cell_Small_selected` : `${className}__Table_Cell_Small`}
                                        >{order.received_order_id} </div>
                                        <div
                                            className={order.ml_order_id === selected_order ? `${className}__Table_Cell_Medium_selected` : `${className}__Table_Cell_Medium`}
                                        >{order.received_date} </div>
                                        <div
                                            className={order.ml_order_id === selected_order ? `${className}__Table_Cell_Medium_selected` : `${className}__Table_Cell_Medium`}
                                        >{order.ordered_by.first_name} {order.ordered_by.last_name} {order.ordered_by.degrees} </div>
                                        <div
                                            className={order.ml_order_id === selected_order ? `${className}__Table_Cell_Medium_selected` : `${className}__Table_Cell_Medium`}
                                        >{get_status_str(order.status.status)} </div>

                                    </div>)
                            )
                            }
                        </div>
                    </div>
                </div> }
            </div>
            <div className={`${className}__Button_Panel`}>
                {editing ?
                    <span>
                            <button value="Save" className="Orders__btn btn-primary" onClick={() => save()}>Save</button>
                            <button value="Cancel" className="Orders__btn btn-primary" onClick={() => cancelEdit()}>Cancel</button>
                        </span> :
                    <span>
                            {selected_test_obj!=null ?
                                <span>
                            <button value="Edit" className="Orders__btn btn-primary" onClick={() => handleEdit()}>Edit</button>

                                </span> : <span></span>
                            }

                       </span>
                }
            </div>

        </Fragment>
    )
}

export default TestDetails;
