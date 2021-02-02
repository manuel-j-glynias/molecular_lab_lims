import React, {Fragment, useState} from 'react'
import {Maybe, Physician, usePhysicianListQuery} from '../../generated/graphql';
import Physicians from "./Physicians";
// import { useAlert } from 'react-alert'
import {Redirect} from "react-router-dom";
import PhysicianDetails from "./PhysicianDetails";
import {useAlert} from "react-alert";


interface Props {
    logged_in: boolean;
    user_can_edit_physicians: boolean;

}

const className = 'Physicians';

const PhysiciansContainer = ({logged_in, user_can_edit_physicians}: Props) => {
    const [search_string, set_search_string] = useState('');
    const [filter_term, set_filter_term] = useState('');
    const [selected_physician, set_selected_physician] = React.useState('');
    const [selected_physician_obj, set_selected_physician_obj] = useState<Maybe<Physician>>(null);
    const [isNew, setIsNew] = useState(false)
    const alert = useAlert();


    // const alert = useAlert()

    const {data, error, loading, refetch} = usePhysicianListQuery(
        {variables: {str: search_string}});
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
        if (user_can_edit_physicians) {
            setIsNew(true);
        } else {
            alert.show("You do not have permission to edit Physicians")
        }

    }
    const handleDBUpdate = () => {
        setIsNew(false);
        set_selected_physician('');
        set_selected_physician_obj(null);
        refetch();
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
                            <div className={`${className}__Title`}>Physicians</div>

                            <div className={`${className}__Buttons`}>

                                <button className={'btn btn-primary'} onClick={handleAdd}>Add Physician</button>
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
                        <Physicians data={data} selected_physician={selected_physician}
                                    set_selected_physician={set_selected_physician}
                                    set_selected_physician_obj={set_selected_physician_obj}/>
                    </div>
                </div>
                <div className={`${className}__DetailsContainer`}>
                    <PhysicianDetails selected_physician_obj={selected_physician_obj} handleDBUpdate={handleDBUpdate}
                                      isNew={isNew} user_can_edit_physicians={user_can_edit_physicians}/>
                </div>
            </div>
        </Fragment>

    )
    // return <Physicians data={data}  />;
};

export default PhysiciansContainer;

