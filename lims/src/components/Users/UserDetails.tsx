import React, {Fragment, useEffect, useState} from 'react'
import {AcceptedStatus, Maybe, Molecular_Lab_User,useUpdate_UserMutation,useCreate_UserMutation} from '../../generated/graphql';
import './styles.css'
import {get_unique_graph_id} from "../common/utils/utils";

interface Props  {
    selected_user_obj: Maybe<Molecular_Lab_User>;
    handleDBUpdate: () => void;
    isNew:boolean;
}

const className = 'Users';

const UserDetails: React.FC<Props> = ({selected_user_obj,isNew,handleDBUpdate}) => {
    const [editing, set_editing] = React.useState(false);
    const [first_name_str, set_first_name_str] = React.useState('');
    const [last_name_str, set_last_name_str] = React.useState('');
    const [password_str, set_password_str] = React.useState('');
    const [username_str, set_username_str] = React.useState('');

    const [can_edit_orders, set_can_edit_orders] = React.useState(false)
    const [can_edit_physicians, set_can_edit_physicians] = React.useState(false)
    const [can_edit_tests, set_can_edit_tests] = React.useState(false)
    const [can_edit_users, set_can_edit_users] = React.useState(false)
    const [can_qc, set_can_qc] = React.useState(false)
    const [can_approve_reagents, set_can_approve_reagents] = React.useState(false)


    const [updateUser, {loading:upLoading, error:upError, data:upData}] = useUpdate_UserMutation({variables:{
            canEditOrders:false,
            canEditPhysicians:false,
            canEditTests:false,
            canEditUsers:false,
            canQC:false,
            canApproveReagent:false,
            first_name:'',
            id:'',
            last_name:'',
            name_lower:'',
            password:'',
            user_name:''
        }});

    const [createUser, {loading:crLoading, error:crError, data:crData}] = useCreate_UserMutation({variables:{
            canEditOrders:false,
            canEditPhysicians:false,
            canEditTests:false,
            canEditUsers:false,
            canQC:false,
            canApproveReagent:false,
            first_name:'',
            id:'',
            last_name:'',
            name_lower:'',
            password:'',
            user_name:''
        }});

    useEffect(() => {
        if (isNew){
            handleEdit();
        }
    },[isNew]);

    const get_roles_as_string = ():string => {
        let roles = '';
        if (selected_user_obj!=null) {
            if (selected_user_obj.canEditOrders) {
                roles += 'Can Edit Orders, '
            }
            if (selected_user_obj.canEditPhysicians) {
                roles += 'Can Edit Physicians, '
            }
            if (selected_user_obj.canEditTests) {
                roles += 'Can Edit Tests, '
            }
            if (selected_user_obj.canApproveReagent) {
                roles += 'Can Approve Reagents, '
            }
            if (selected_user_obj.canEditUsers) {
                roles += 'Can Edit Users, '
            }
            if (selected_user_obj.canQC) {
                roles += 'Can QC, '
            }
        }
        return roles;
    }
    const copy_values = () => {
        if (selected_user_obj!=null){
            set_first_name_str(selected_user_obj.first_name);
            set_last_name_str(selected_user_obj.last_name);
            set_username_str(selected_user_obj.user_name);
            set_password_str(selected_user_obj.password);
            set_can_edit_orders(selected_user_obj.canEditOrders);
            set_can_edit_physicians(selected_user_obj.canEditPhysicians);
            set_can_edit_tests(selected_user_obj.canEditTests);
            set_can_edit_users(selected_user_obj.canEditUsers);
            set_can_qc(selected_user_obj.canQC);
            set_can_approve_reagents(selected_user_obj.canApproveReagent);

        }
        if (isNew){
            set_first_name_str('');
            set_last_name_str('');
            set_username_str('');
            set_password_str('');
            set_can_edit_orders(false);
            set_can_edit_physicians(false);
            set_can_edit_tests(false);
            set_can_edit_users(false);
            set_can_qc(false);
            set_can_approve_reagents(false);
        }
     }

    const handleEdit = () => {
        copy_values();
        set_editing(true);
    }
    const cancelEdit = () => {
        set_editing(false);
    }
    const save = async () => {
        let name_lower = first_name_str + ' ' + last_name_str;
        name_lower = name_lower.toLowerCase();

        if (selected_user_obj!=null) {
            await updateUser({
                variables: {
                    canEditOrders:can_edit_orders,
                    canEditPhysicians:can_edit_physicians,
                    canEditTests:can_edit_tests,
                    canEditUsers:can_edit_users,
                    canQC:can_qc,
                    canApproveReagent:can_approve_reagents,
                    first_name:first_name_str,
                    id:selected_user_obj.id,
                    last_name:last_name_str,
                    name_lower:name_lower,
                    password:password_str,
                    user_name:username_str
                }
            })
        }
        else if (isNew){
            name_lower = name_lower.toLowerCase();
            let graph_id = get_unique_graph_id('user_');
            await createUser(
                {
                    variables: {
                        canEditOrders:can_edit_orders,
                        canEditPhysicians:can_edit_physicians,
                        canEditTests:can_edit_tests,
                        canEditUsers:can_edit_users,
                        canQC:can_qc,
                        canApproveReagent:can_approve_reagents,
                        first_name:first_name_str,
                        id:graph_id,
                        last_name:last_name_str,
                        name_lower:name_lower,
                        password:password_str,
                        user_name:username_str
                    }
                }
            )


        }
        set_editing(false);
        await handleDBUpdate();
        set_first_name_str('');
        set_last_name_str('');
        set_username_str('');
        set_password_str('');
        set_can_edit_orders(false);
        set_can_edit_physicians(false);
        set_can_edit_tests(false);
        set_can_edit_users(false);
        set_can_qc(false);
        set_can_approve_reagents(false);
    }

     return (
        <Fragment>
            <div className={`${className}__Details_Panel`}><h3>User Details:
            </h3>

                <div className={`${className}__DetailsTable`}>

                    <div className={`${className}__DetailsRow`}>
                        <div className={`${className}__DetailsCellLeft`}>First Name:</div>
                        <div className={`${className}__DetailsCellRight`}>{editing ?
                            <span><textarea className={`${className}__ShortTextarea`} name="first_name"
                                            placeholder="First Name..." value={first_name_str} onChange={(e) => {
                                set_first_name_str(e.target.value)
                            }}/></span> : (selected_user_obj!=null ? selected_user_obj.first_name : first_name_str)}</div>

                        <div className={`${className}__DetailsCellLeft`}>Last Name:</div>
                        <div className={`${className}__DetailsCellRight`}> {editing ?
                            <span><textarea className={`${className}__ShortTextarea`} name="last_name"
                                            placeholder="Last Name..." value={last_name_str} onChange={(e) => {
                                set_last_name_str(e.target.value)
                            }}/></span>:  (selected_user_obj!=null ? selected_user_obj.last_name : last_name_str)}
                        </div>


                    </div>

                    {/*second row */}
                    <div className={`${className}__DetailsRow`}>

                        <div className={`${className}__DetailsCellLeft`}>User Name:</div>
                        <div className={`${className}__DetailsCellRight`}> {editing ?
                            <span><textarea className={`${className}__ShortTextarea`} name="username"
                                            placeholder="Email..." value={username_str} onChange={(e) => {
                                set_username_str(e.target.value)
                            }}/></span>:  (selected_user_obj!=null ? selected_user_obj.user_name : username_str)}
                        </div>

                        <div className={`${className}__DetailsCellLeft`}>Password:</div>
                        <div className={`${className}__DetailsCellRight`}>{editing ?
                            <span><textarea className={`${className}__ShortTextarea`} name="password"
                                            placeholder="password..." value={password_str} onChange={(e) => {
                                set_password_str(e.target.value)
                            }}/></span> : (selected_user_obj!=null ? selected_user_obj.password : password_str)}</div>

                    </div>

                </div>
                <div className={`${className}__DetailsTable`}>
                    <div className={`${className}__DetailsRow`}>
                        <div className={`${className}__DetailsCellLeftLong`}>User Roles:</div>
                        <div className={`${className}__DetailsCellRightLong`}>{editing ?
                            <span>
                                <label className={`${className}__radio_choice`}>
                                <input
                                    type="checkbox"
                                    name="orders"
                                    checked={can_edit_orders}
                                    onChange={ () => set_can_edit_orders(!can_edit_orders)}
                                />
                                Can Edit Orders
                              </label>
                                <label className={`${className}__radio_choice`}>
                                <input
                                    type="checkbox"
                                    name="physicians"
                                    checked={can_edit_physicians}
                                    onChange={ () => set_can_edit_physicians(!can_edit_physicians)}
                                />
                                Can Edit Physicians
                              </label>
                                <label className={`${className}__radio_choice`}>
                                <input
                                    type="checkbox"
                                    name="tests"
                                    checked={can_edit_tests}
                                    onChange={ () => set_can_edit_tests(!can_edit_tests)}
                                />
                                Can Edit Tests
                              </label>
                                <label className={`${className}__radio_choice`}>
                                <input
                                    type="checkbox"
                                    name="users"
                                    checked={can_edit_users}
                                    onChange={ () => set_can_edit_users(!can_edit_users)}
                                />
                                Can Edit Users
                              </label>
                               <label className={`${className}__radio_choice`}>
                                <input
                                    type="checkbox"
                                    name="orders"
                                    checked={can_approve_reagents}
                                    onChange={ () => set_can_approve_reagents(!can_approve_reagents)}
                                />
                                Can Approve Reagents
                              </label>
                                <label className={`${className}__radio_choice`}>
                                <input
                                    type="checkbox"
                                    name="qc"
                                    checked={can_qc}
                                    onChange={ () => set_can_qc(!can_qc)}
                                />
                                Can QC
                              </label>
                            </span> : get_roles_as_string()}
                        </div>
                    </div>
                </div>
                <div className="Vertical_Spacer_10" />
                <div className="Vertical_Spacer_10" />


             </div>
            <div className={`${className}__Button_Panel`}>
                {editing ?
                    <span>
                            <button value="Save" className="Orders__btn btn-primary" onClick={() => save()}>Save</button>
                            <button value="Cancel" className="Orders__btn btn-primary" onClick={() => cancelEdit()}>Cancel</button>
                        </span> :
                    <span>
                            {selected_user_obj!=null ?
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

export default UserDetails;
