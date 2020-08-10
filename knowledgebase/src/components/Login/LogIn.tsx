import * as React from 'react';
import {GetUserQuery} from '../../generated/graphql';
import {useState} from "react";
import {useUserContentState, UserContentActionTypes} from "../../context/UserContentContext"
import { Redirect } from 'react-router-dom';

interface Props {
    data: GetUserQuery;
    logged_in: boolean;
    set_logged_in: (newloggedIn: boolean) => void;
}

const className = 'LogIn'

const LogIn: React.FC<Props> = ({data, logged_in, set_logged_in}) => {
    const [formData, setFormData] = useState({
        name: '',
        password: '',
    });

    const {name, password} = formData;

    const {
        UserContentState: {}, setUserContentState
    } = useUserContentState();

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (data.User && data.User.length > 0) {
            for (let i = 0; i < data.User.length; i++) {
                if (data.User[i]) {
                    const user = data.User[i]
                    if (user && user['name']) {
                        if (user['name'] === name && user['password'] === password) {
                            setUserContentState({type: UserContentActionTypes.userID, userID: user['id']});
                            setUserContentState({type: UserContentActionTypes.isEditor, isEditor: user['isEditor']});
                            set_logged_in(true);
                            break;
                        }
                    }
                }
            }
        }
    };

    if (!data.User) {
        return <div>No Users</div>
    }
    if (!data.User[0]) {
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
                    <input type="submit" value="Login" className="btn btn-primary"/>
                </div>
            </form>

        </div>
    )
}

export default LogIn;