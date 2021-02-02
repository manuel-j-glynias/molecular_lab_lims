import React, {Fragment, useState} from 'react'
import {AcceptedStatus, AcceptedOrdersListQuery, useAcceptedOrdersListQuery} from '../../../generated/graphql';
import '../styles.css'


interface Props {
    data: AcceptedOrdersListQuery;
    filter_term: string;
    set_filter_term: (b: string) => void;
    keyPressed: (event: React.KeyboardEvent<HTMLDivElement>) => void;
    handleNameFilter: () => void;
    handleReset: () => void;
    user_name: string;
    user_graph_id: string;
    refetch: () => void;
    selected_order_graph_id:string;
    set_selected_order_graph_id: (s:string) => void;
    set_selected_order_received_order_id: (s:string) => void;
    set_selected_order_status_graph_id: (s:string) => void;

}

const className = 'CaseCreate';


const AcceptedOrders: React.FC<Props> = ({data, filter_term, set_filter_term,
                                             keyPressed, handleNameFilter, handleReset,user_name,user_graph_id,refetch,
                                             selected_order_graph_id,set_selected_order_graph_id,set_selected_order_received_order_id,set_selected_order_status_graph_id}) => {
    const [selected_order, set_selected_order] = useState('');
    // const [selected_order_graph_id, set_selected_order_graph_id] = useState('');

    function handleOrder_select(ml_order_id: string, id: string,received_order_id:string,status_id:string) {
        set_selected_order(ml_order_id);
        set_selected_order_graph_id(id);
        set_selected_order_received_order_id(received_order_id);
        set_selected_order_status_graph_id(status_id);
    }

    return (
        <Fragment>
            <div className={className}></div>
            <div className={`${className}__Panel_Wrapper`}>
                <div className={`${className}__Panel`}>

                    <span className={`${className}__Filter`}>
                            <span>Search: </span>
                            <input className={`${className}__filter_text_input`} type="text"
                                   placeholder="Order contains..."
                                   name="subString" value={filter_term}
                                   onChange={e => set_filter_term(e.target.value)}
                                   onKeyPress={keyPressed}
                            />

                            <button className={'btn btn-primary'} onClick={handleNameFilter}>Filter</button>
                            <button className={'btn btn-primary'} onClick={handleReset}>Reset</button>
                        </span>
                </div>


                <div className={'Vertical_Spacer_10'}></div>
                <div className={`${className}__Table`}>
                    <div className={`${className}__Header_Row`}>
                        <div className={`${className}__Table_Cell_Medium`}>Patient Name</div>
                        <div className={`${className}__Table_Cell_Small`}>MRN</div>
                        <div className={`${className}__Table_Cell_Large`}>Ordered By</div>
                        <div className={`${className}__Table_Cell_Medium`}>ML Order ID</div>
                        <div className={`${className}__Table_Cell_Medium`}>Received Order ID</div>
                        <div className={`${className}__Table_Cell_Medium`}>Date Received</div>
                        <div className={`${className}__Table_Cell_Medium`}>Tests Ordered</div>
                    </div>
                </div>

                <div className={`${className}__Table_Container`}>

                    <div className={`${className}__Table`}>
                        {!!data.Order && data.Order.map((order, i: number) =>
                            !!order && order.status.status==AcceptedStatus.Accepted && (
                                <div key={i} className={`${className}__Row`}
                                     onClick={() => handleOrder_select(order.ml_order_id,order.id,order.received_order_id,order.status.id)}>
                                    <div
                                        className={order.ml_order_id === selected_order ? `${className}__Table_Cell_Medium_selected` : `${className}__Table_Cell_Medium`}
                                    >{order.patient_name}</div>
                                    <div
                                        className={order.ml_order_id === selected_order ? `${className}__Table_Cell_Small_selected` : `${className}__Table_Cell_Small`}
                                    >{order.mrn}</div>
                                    <div
                                        className={order.ml_order_id === selected_order ? `${className}__Table_Cell_Large_selected` : `${className}__Table_Cell_Large`}
                                    >{order.ordered_by.first_name} {order.ordered_by.last_name} {order.ordered_by.degrees}</div>
                                    <div
                                        className={order.ml_order_id === selected_order ? `${className}__Table_Cell_Medium_selected` : `${className}__Table_Cell_Medium`}
                                    >{order.ml_order_id} </div>
                                    <div
                                        className={order.ml_order_id === selected_order ? `${className}__Table_Cell_Medium_selected` : `${className}__Table_Cell_Medium`}
                                    >{order.received_order_id} </div>
                                    <div
                                        className={order.ml_order_id === selected_order ? `${className}__Table_Cell_Medium_selected` : `${className}__Table_Cell_Medium`}
                                    >{order.received_date} </div>
                                    <div
                                        className={order.ml_order_id === selected_order ? `${className}__Table_Cell_Medium_selected` : `${className}__Table_Cell_Medium`}
                                    >{order.test_ordered.name} </div>

                                </div>)
                        )
                        }
                    </div>
                </div>
            </div>

        </Fragment>
            )
}

export default AcceptedOrders;
