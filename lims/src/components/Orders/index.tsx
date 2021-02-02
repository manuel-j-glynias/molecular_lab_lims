import React, {Fragment, useState} from 'react'
import {Redirect} from "react-router-dom";
import {useAlert} from "react-alert";
import {useOrdersListQuery} from '../../generated/graphql';
import Orders from "./Orders"

interface Props {
    logged_in: boolean;
    user_name: string;
    user_graph_id: string;
    user_can_edit_orders: boolean;

}
const className = 'Orders';

const OrdersContainer = ({ logged_in,user_name,user_graph_id, user_can_edit_orders }: Props) => {
    const [use_ir_filter, set_use_ir_filter] = useState('');
    const [search_string, set_search_string] = useState('');
    const [filter_term, set_filter_term] = useState('');
    const [add_order, set_add_order] = useState('');
    const alert = useAlert()
    const { data, error, loading, refetch } = useOrdersListQuery(
        { variables: { str: search_string, str2: use_ir_filter } });

    React.useEffect(() => {
        refetch();
    }, [search_string, use_ir_filter,refetch]);

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
            <div className={`${className}__Container`}>
                <h2>New Orders</h2>

                <Orders data={data} filter_term={filter_term} user_name={user_name} user_graph_id={user_graph_id} refetch={refetch}
                set_filter_term={set_filter_term} keyPressed={keyPressed} handleNameFilter={handleNameFilter} handleReset={handleReset} use_ir_filter={use_ir_filter} set_use_ir_filter={set_use_ir_filter}
                user_can_edit_orders={user_can_edit_orders}/>
            </div>
        </Fragment>
    )
};

export default OrdersContainer;
