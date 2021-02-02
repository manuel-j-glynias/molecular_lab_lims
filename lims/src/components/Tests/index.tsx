import React, {Fragment, useState} from 'react'
import {Maybe, Molecular_Lab_Test, useTestsListQuery} from '../../generated/graphql';
import Tests from "./Tests";
import { useAlert } from 'react-alert'
import {Redirect} from "react-router-dom";
import TestDetails from "./TestDetails";



interface Props {
    logged_in: boolean;
}
const className = 'Tests';

const TestsContainer = ({ logged_in }: Props) => {
    const [search_string, set_search_string] = useState('');
    const [filter_term, set_filter_term] = useState('');
    const [selected_test, set_selected_test] = React.useState('');
    const [selected_test_obj, set_selected_test_obj] = useState<Maybe<Molecular_Lab_Test>>(null);
    const [isNew, setIsNew] = useState(false)
    const [add_test, set_add_test] = useState('');
    const alert = useAlert()

    const { data, error, loading, refetch } = useTestsListQuery(
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
        setIsNew(true);
    }
    const handleDBUpdate = () => {
        setIsNew(false);
        set_selected_test('');
        set_selected_test_obj(null);
        refetch();
    }
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>ERROR</div>;
    }

    if (!data) {
        return <div>Error</div>;
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
                    <div className={`${className}__Title`}>Tests</div>

                    <div className={`${className}__Buttons`}>

                        <button className={'btn btn-primary'} onClick={handleAdd}>Add Test</button>
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
                <Tests data={data} selected_test={selected_test} set_selected_test={set_selected_test} set_selected_test_obj={set_selected_test_obj} />
            </div>
        </div>
            <div className={`${className}__DetailsContainer`}>
                <TestDetails selected_test_obj={selected_test_obj} handleDBUpdate={handleDBUpdate} isNew={isNew} />
            </div>
        </div>
    </Fragment>
    )
    // return <Physicians data={data}  />;
};

export default TestsContainer;

