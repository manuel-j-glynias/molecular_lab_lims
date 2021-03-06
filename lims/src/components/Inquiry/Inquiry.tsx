import React, {Fragment, useState} from 'react'
import {AcceptedStatus, InquiryListQuery} from '../../generated/graphql';
import './styles.css'


interface Props {
    data: InquiryListQuery;
    filter_term: string;
    set_filter_term: (b: string) => void;
    keyPressed: (event: React.KeyboardEvent<HTMLDivElement>) => void;
    handleNameFilter: () => void;
    handleReset: () => void;
}

const className = 'Inquiry';


const Inquiry: React.FC<Props> = ({data, filter_term, set_filter_term,
                                             keyPressed, handleNameFilter, handleReset}) => {
    const [selected_order, set_selected_order] = useState('');
    // const [selected_order_graph_id, set_selected_order_graph_id] = useState('');

    function handleOrder_select(ml_order_id: string, id: string,received_order_id:string,status_id:string) {
        set_selected_order(ml_order_id);
    }

    const get_status_str = (status: AcceptedStatus) => {
        let s= ''
        if (status==AcceptedStatus.NotReady){
            s = "Order Received"
        }
        else if (status==AcceptedStatus.Accepted){
            s = "Order Accepted"
        }
        else if (status==AcceptedStatus.ReadyForQc){
            s = "Slide QC"
        }
        else if (status==AcceptedStatus.CaseCreated){
            s = "Case Created"
        }
        else if (status==AcceptedStatus.Rejected){
            s = "Order Rejected"
        }
        return s;
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
                        <div className={`${className}__Table_Cell_Small`}>Received Order ID</div>
                        <div className={`${className}__Table_Cell_Medium`}>Date Received</div>
                        <div className={`${className}__Table_Cell_Medium`}>Tests Ordered</div>
                        <div className={`${className}__Table_Cell_Medium`}>Status</div>
                    </div>
                </div>

                <div className={`${className}__Table_Container`}>

                    <div className={`${className}__Table`}>
                        {!!data.Order && data.Order.map((order, i: number) =>
                            !!order &&  (
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
                                        className={order.ml_order_id === selected_order ? `${className}__Table_Cell_Small_selected` : `${className}__Table_Cell_Small`}
                                    >{order.received_order_id} </div>
                                    <div
                                        className={order.ml_order_id === selected_order ? `${className}__Table_Cell_Medium_selected` : `${className}__Table_Cell_Medium`}
                                    >{order.received_date} </div>
                                    <div
                                        className={order.ml_order_id === selected_order ? `${className}__Table_Cell_Medium_selected` : `${className}__Table_Cell_Medium`}
                                    >{order.test_ordered.name} </div>
                                    <div
                                        className={order.ml_order_id === selected_order ? `${className}__Table_Cell_Medium_selected` : `${className}__Table_Cell_Medium`}
                                    >{get_status_str(order.status.status)} </div>

                                </div>)
                        )
                        }
                    </div>
                </div>
            </div>

        </Fragment>
    )
}

export default Inquiry;
