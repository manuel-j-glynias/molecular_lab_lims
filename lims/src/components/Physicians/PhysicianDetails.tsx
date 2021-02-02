import React, {Fragment, useEffect, useState} from 'react'
import {AcceptedStatus, Maybe, Physician,useUpdate_PhysicianMutation,useCreate_PhysicianMutation} from '../../generated/graphql';
import './styles.css'
import {get_unique_graph_id} from "../common/utils/utils";
import {useAlert} from 'react-alert'

interface Props  {
    selected_physician_obj: Maybe<Physician>;
    handleDBUpdate: () => void;
    isNew:boolean;
    user_can_edit_physicians:boolean;
}

const className = 'Physicians';

const PhysicianDetails: React.FC<Props> = ({selected_physician_obj,isNew,handleDBUpdate,user_can_edit_physicians}) => {
    const [editing, set_editing] = React.useState(false);
    const [first_name_str, set_first_name_str] = React.useState('');
    const [last_name_str, set_last_name_str] = React.useState('');
    const [degrees_str, set_degrees_str] = React.useState('');

    const [email_str, set_email_str] = React.useState('');
    const [phone_number_str, set_phone_number_str] = React.useState('');
    const [badge_id_str, set_badge_id_str] = React.useState('');
    const [selected_order, set_selected_order] = useState('');
    const alert = useAlert();

    const [updatePhysician, {loading:upLoading, error:upError, data:upData}] = useUpdate_PhysicianMutation({variables:{
            badge_id:'',
            degrees:'',
            email:'',
            first_name:'',
            id:'',
            last_name:'',
            name_lower:'',
            phone_number:'',
        }});

    const [createPhysician, {loading:crLoading, error:crError, data:crData}] = useCreate_PhysicianMutation({variables:{
            badge_id:'',
            degrees:'',
            email:'',
            first_name:'',
            id:'',
            last_name:'',
            name_lower:'',
            phone_number:'',
        }});

    useEffect(() => {
            if (isNew) {
                set_first_name_str('');
                set_last_name_str('');
                set_degrees_str('');
                set_email_str('');
                set_phone_number_str('');
                set_badge_id_str('')
                set_editing(true);
            }


    },[isNew]);

    const copy_values = () => {
        if (selected_physician_obj!=null){
            set_first_name_str(selected_physician_obj.first_name);
            set_last_name_str(selected_physician_obj.last_name);
            set_degrees_str(selected_physician_obj.degrees);
            set_email_str(selected_physician_obj.email);
            set_phone_number_str(selected_physician_obj.phone_number);
            set_badge_id_str(selected_physician_obj.badge_id)
        }
        if (isNew){
            set_first_name_str('');
            set_last_name_str('');
            set_degrees_str('');
            set_email_str('');
            set_phone_number_str('');
            set_badge_id_str('')

        }
    }

    const handleEdit = () => {
        if(user_can_edit_physicians){
            copy_values();
            set_editing(true);
        }
        else {
            alert.show("You do not have permission to edit Physicians")
        }
    }
    const cancelEdit = () => {
        set_editing(false);
    }
    const save = async () => {
        if (selected_physician_obj!=null) {
            let name_lower = first_name_str + ' ' + last_name_str + ' ' + degrees_str;
            name_lower = name_lower.toLowerCase();
            await updatePhysician({
                variables: {
                    badge_id: badge_id_str,
                    degrees: degrees_str,
                    email: email_str,
                    first_name: first_name_str,
                    id:selected_physician_obj.id,
                    last_name: last_name_str,
                    name_lower: name_lower,
                    phone_number: phone_number_str,
                }
            })
        }
        else if (isNew){
            let name_lower = first_name_str + ' ' + last_name_str + ' ' + degrees_str;
            name_lower = name_lower.toLowerCase();
            let graph_id = get_unique_graph_id('physician_');
            await createPhysician(
                {
                    variables: {
                        badge_id: badge_id_str,
                        degrees: degrees_str,
                        email: email_str,
                        first_name: first_name_str,
                        id:graph_id,
                        last_name: last_name_str,
                        name_lower: name_lower,
                        phone_number: phone_number_str,
                    }
                }
            )
        }
        set_editing(false);
        await handleDBUpdate();
        set_first_name_str('');
        set_last_name_str('');
        set_degrees_str('');
        set_email_str('');
        set_phone_number_str('');
        set_badge_id_str('')

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

    const contact_ordering = () => {
        if (selected_physician_obj != null){
            let badge_id = selected_physician_obj.badge_id;
            let url_string = 'https://i2proxy.roswellpark.org/people/listing/' + badge_id
            window.open(url_string);
        }
    }
    return (
        <Fragment>
            <div className={`${className}__Details_Panel`}><h3>Physician Details:
                </h3>

                <div className={`${className}__DetailsTable`}>

                    <div className={`${className}__DetailsRow`}>
                        <div className={`${className}__DetailsCellLeft`}>First Name:</div>
                        <div className={`${className}__DetailsCellRight`}>{editing ?
                            <span><textarea className={`${className}__ShortTextarea`} name="first_name"
                                            placeholder="First Name..." value={first_name_str} onChange={(e) => {
                                set_first_name_str(e.target.value)
                            }}/></span> : (selected_physician_obj!=null ? selected_physician_obj.first_name : first_name_str)}</div>

                        <div className={`${className}__DetailsCellLeft`}>Last Name:</div>
                        <div className={`${className}__DetailsCellRight`}> {editing ?
                            <span><textarea className={`${className}__ShortTextarea`} name="last_name"
                                            placeholder="Last Name..." value={last_name_str} onChange={(e) => {
                                set_last_name_str(e.target.value)
                            }}/></span>:  (selected_physician_obj!=null ? selected_physician_obj.last_name : last_name_str)}
                        </div>


                    </div>

                    {/*second row */}
                    <div className={`${className}__DetailsRow`}>

                        <div className={`${className}__DetailsCellLeft`}>Degrees:</div>
                        <div className={`${className}__DetailsCellRight`}> {editing ?
                            <span><textarea className={`${className}__ShortTextarea`} name="degrees"
                                            placeholder="Degrees..." value={degrees_str} onChange={(e) => {
                                set_degrees_str(e.target.value)
                            }}/></span>:  (selected_physician_obj!=null ? selected_physician_obj.degrees : degrees_str)}
                        </div>

                        <div className={`${className}__DetailsCellLeft`}>Email:</div>
                        <div className={`${className}__DetailsCellRight`}>{editing ?
                            <span><textarea className={`${className}__ShortTextarea`} name="email"
                                            placeholder="email..." value={email_str} onChange={(e) => {
                                set_email_str(e.target.value)
                            }}/></span> : (selected_physician_obj!=null ? selected_physician_obj.email : email_str)}</div>

                    </div>
                    {/*third row */}
                    <div className={`${className}__DetailsRow`}>

                        <div className={`${className}__DetailsCellLeft`}>Phone Number:</div>
                        <div className={`${className}__DetailsCellRight`}> {editing ?
                            <span><textarea className={`${className}__ShortTextarea`} name="phone_number"
                                            placeholder="Phone Number..." value={phone_number_str} onChange={(e) => {
                                set_phone_number_str(e.target.value)
                            }}/></span>:  (selected_physician_obj!=null ? selected_physician_obj.phone_number : phone_number_str)}
                        </div>

                        <div className={`${className}__DetailsCellLeft`}>Badge ID:</div>
                        <div className={`${className}__DetailsCellRight`}> {editing ?
                            <span><textarea className={`${className}__ShortTextarea`} name="badge_id"
                                            placeholder="Badge ID..." value={badge_id_str} onChange={(e) => {
                                set_badge_id_str(e.target.value)
                            }}/></span>:  (selected_physician_obj!=null ? selected_physician_obj.badge_id : badge_id_str)}
                            {!editing &&
                            <button className={'btn btn-primary'} onClick={contact_ordering}>Contact</button>
                            }
                        </div>

                    </div>

                </div>

                <div className="Vertical_Spacer_10" />
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
                        <div className={`${className}__Table_Cell_Medium`}>Tests Ordered</div>
                        <div className={`${className}__Table_Cell_Medium`}>Status</div>
                    </div>
                </div>

                <div className={`${className}__Table_Container`}>

                    <div className={`${className}__Table`}>
                        {selected_physician_obj && selected_physician_obj.orders && selected_physician_obj.orders.map((order, i: number) =>
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
                                    >{order.test_ordered.name} </div>
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
                            {selected_physician_obj!=null ?
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

export default PhysicianDetails;
