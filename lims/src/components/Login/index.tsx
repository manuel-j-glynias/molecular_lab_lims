import * as React from 'react';
import {useGetUserQuery} from '../../generated/graphql';
import LogIn from './LogIn'
import {Fragment} from "react";

interface OwnProps {
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

const LogInContainer = ({set_logged_in, logged_in,set_user_graph_id,set_user_name,set_user_can_qc,set_user_can_edit_orders,set_user_can_edit_physicians,set_user_can_edit_tests,set_user_can_edit_users}: OwnProps) => {
    const {data, error, loading} = useGetUserQuery();
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>ERROR</div>;
    }

    if (!data) {
        return <div>Error</div>;
    }

    return (
        <Fragment>
            <div className={`${className}__Container`}>
            <LogIn data={data} set_logged_in={set_logged_in} logged_in={logged_in} set_user_name={set_user_name} set_user_graph_id={set_user_graph_id}
            set_user_can_qc={set_user_can_qc} set_user_can_edit_orders={set_user_can_edit_orders} set_user_can_edit_physicians={set_user_can_edit_physicians}
            set_user_can_edit_tests={set_user_can_edit_tests} set_user_can_edit_users={set_user_can_edit_users}/>
            </div>
        </Fragment>)
}
export default LogInContainer;