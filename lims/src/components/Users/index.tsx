import React, {Fragment, useState} from 'react'
import {Maybe, Molecular_Lab_User, useUsersListQuery} from '../../generated/graphql';
import Users from "./Users";
import {Redirect} from "react-router-dom";
import UserDetails from "./UserDetails";



interface Props {
    logged_in: boolean;
}
const className = 'Users';

const UsersContainer = ({ logged_in }: Props) => {
    const [search_string, set_search_string] = useState('');
    const [filter_term, set_filter_term] = useState('');
    const [selected_user, set_selected_user] = React.useState('');
    const [selected_user_obj, set_selected_user_obj] = useState<Maybe<Molecular_Lab_User>>(null);
    const [isNew, setIsNew] = useState(false)


    // const alert = useAlert()

    const { data, error, loading, refetch } = useUsersListQuery(
        { variables: { str: search_string } });
    React.useEffect(() => {
        refetch();
    }, [search_string, refetch]);

    const handleNameFilter = () => {
        set_search_string(filter_term.toLowerCase())
    }
    const keyPressed = async (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "Enter") {
            handleNameFilter()
        }
    }
    const handleReset = () => {
        set_search_string('')
        set_filter_term('')
    }
    const handleAdd = () => {
        set_selected_user('');
        set_selected_user_obj(null);
        setIsNew(true);
    }
    const handleDBUpdate = async () => {
        setIsNew(false);
        set_selected_user('');
        set_selected_user_obj(null);
        await refetch();
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>ERROR</div>;
    }

    if (!data) {
        return <div>Please select a gene from the panel</div>;
    }
    if (!logged_in) {
        return <Redirect to="/"/>
    }

    return (
        <Fragment>
            <div className={`${className}__ContainerContainer`}>
                <div className={`${className}__Container`}>

                    <div className={`${className}__Panel_Wrapper`}>
                        <div className={`${className}__Panel`}>
                            <div className={`${className}__Title`}>Users</div>

                            <div className={`${className}__Buttons`}>

                                <button className={'btn btn-primary'} onClick={handleAdd}>Add User</button>
                            </div>
                            <div className={`${className}__Filter`}>
                                <input className={'filter_text_input'} type="text"
                                       placeholder="Name contains..."
                                       name="subString" value={filter_term}
                                       onChange={e => set_filter_term(e.target.value)}
                                       onKeyPress={keyPressed}
                                />

                                <button className={'btn btn-primary'} onClick={handleNameFilter}>Filter</button>
                                <button className={'btn btn-primary'} onClick={handleReset}>Reset</button>
                            </div>
                        </div>

                    </div>
                    <div>
                        <Users data={data}  selected_user={selected_user} set_selected_user={set_selected_user}
                                    set_selected_user_obj={set_selected_user_obj}/>
                    </div>
                </div>
                <div className={`${className}__DetailsContainer`}>
                    <UserDetails selected_user_obj={selected_user_obj} handleDBUpdate={handleDBUpdate} isNew={isNew}/>
                </div>
            </div>
        </Fragment>

    )
    // return <Physicians data={data}  />;
};

export default UsersContainer;

