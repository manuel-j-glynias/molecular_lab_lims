import React, {Fragment, useState} from 'react'
import {useAcceptedOrdersListQuery} from '../../../generated/graphql';
import AcceptedOrdersSelect from "./AcceptedOrdersSelect";
import './styles.css'

interface Props {
    set_name_str: (s:string) => void;
    set_mrn_str: (s:string) => void;
    set_ordering_physician: (s:string) => void;
    set_ordering_physician_graph_id: (s:string) => void;
    set_received_order_id_str: (s:string) => void;
    set_test_str: (s:string) => void;

}

const className = 'AcceptedOrdersSelect';

const AcceptedOrdersSelectContainer = ({  set_name_str,set_mrn_str,set_ordering_physician,set_ordering_physician_graph_id,set_received_order_id_str,set_test_str}: Props) => {
    const [search_string, set_search_string] = useState('');
    const { data, error, loading, refetch } = useAcceptedOrdersListQuery(
        { variables: { str: search_string } });

    React.useEffect(() => {
        refetch();
    }, [refetch]);


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
                <span><strong>Accepted Orders:</strong>

                <AcceptedOrdersSelect data={data} set_name_str={set_name_str} set_mrn_str={set_mrn_str} set_ordering_physician={set_ordering_physician}
                                      set_ordering_physician_graph_id={set_ordering_physician_graph_id} set_received_order_id_str={set_received_order_id_str}
                                      set_test_str={set_test_str}
                />
                </span>
            </div>
        </Fragment>
    )
};

export default AcceptedOrdersSelectContainer;

