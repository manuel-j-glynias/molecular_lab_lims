import * as React from 'react';
import {GetUserQuery} from '../../generated/graphql';
import {useState} from "react";
import { Redirect } from 'react-router-dom';

interface Props {
    data: GetUserQuery;
    logged_in: boolean;
    set_logged_in: (newloggedIn: boolean) => void;
    set_user_name: (name: string) => void;
    set_user_graph_id: (graph_id:string)=> void;
    set_user_can_qc: (can:boolean) => void;
    set_user_can_edit_orders: (can:boolean) => void;
    set_user_can_edit_physicians: (can:boolean) => void;
    set_user_can_edit_tests: (can:boolean) => void;
    set_user_can_edit_users: (can:boolean) => void;
}

const className = 'LogIn'

const LogIn: React.FC<Props> = ({data, logged_in,
                                    set_logged_in,set_user_name,set_user_graph_id,set_user_can_qc,set_user_can_edit_users,set_user_can_edit_tests,set_user_can_edit_orders,set_user_can_edit_physicians}) => {
    const [formData, setFormData] = useState({
        name: '',
        password: '',
    });

    const {name, password} = formData;





    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (data.Molecular_Lab_User && data.Molecular_Lab_User.length > 0) {
            for (let i = 0; i < data.Molecular_Lab_User.length; i++) {
                if (data.Molecular_Lab_User[i]) {
                    const user = data.Molecular_Lab_User[i]
                    if (user && user['user_name']) {
                        if (user['user_name'].toLowerCase() === name.toLowerCase() && user['password'] === password) {
                            set_logged_in(true);
                            set_user_name(user.user_name);
                            set_user_graph_id(user.id);
                            set_user_can_qc(user.canQC);
                            set_user_can_edit_orders(user.canEditOrders);
                            set_user_can_edit_physicians(user.canEditPhysicians);
                            set_user_can_edit_tests(user.canEditTests);
                            set_user_can_edit_users(user.canEditUsers)
                            break;
                        }
                    }
                }
            }
        }
    };

    if (!data.Molecular_Lab_User) {
        return <div>No Users</div>
    }
    if (!data.Molecular_Lab_User[0]) {
        return <div>No Users</div>
    }
    if (logged_in) {
        return <Redirect to="/" />
    }
    return (
        <div className={className}>
            <h1 className={"large text-primary"}>Log In</h1>
            <p className="lead"><i className="fas fa-user"></i> Log Into Your Account</p>
            <form className="form" onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                    <input type="text" placeholder="Username" value={name}
                           onChange={e => setFormData({...formData, name: e.target.value})} required/>
                </div>
                <div className="form-group">
                    <input type="password" placeholder="Password" required value={password}
                           onChange={e => setFormData({...formData, password: e.target.value})}/>
                </div>
                <div className="form-group">
                    <input type="submit" value="Login" className="Login__btn btn-primary"/>
                </div>
            </form>

        </div>
    )
}

export default LogIn;