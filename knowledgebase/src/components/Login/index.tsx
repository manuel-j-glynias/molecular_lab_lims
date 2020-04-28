import * as React from 'react';
import {useGetUserQuery} from '../../generated/graphql';
import LogIn from './LogIn'
import {Fragment} from "react";

interface OwnProps {
    logged_in: boolean;
    set_logged_in: (newloggedIn: boolean) => void;
}

const className = 'LogIn'

const LogInContainer = ({set_logged_in, logged_in}: OwnProps) => {
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
            <LogIn data={data} set_logged_in={set_logged_in} logged_in={logged_in}/>
            </div>
        </Fragment>)
}
export default LogInContainer;