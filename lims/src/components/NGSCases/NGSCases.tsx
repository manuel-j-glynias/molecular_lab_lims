import React, {Fragment, useState} from 'react'
import {AcceptedStatus, CasesListQuery} from '../../generated/graphql';
import './styles.css'


interface Props {
    data: CasesListQuery;
    filter_term: string;
    set_filter_term: (b: string) => void;
    keyPressed: (event: React.KeyboardEvent<HTMLDivElement>) => void;
    handleNameFilter: () => void;
    handleReset: () => void;
    user_name: string;
    user_graph_id: string;
    refetch: () => void;
}

const className = 'NGSCases';


const NGSCases: React.FC<Props> = ({data, filter_term, set_filter_term,
                                             keyPressed, handleNameFilter, handleReset,user_name,user_graph_id,refetch}) => {
    const [selected_case, set_selected_case] = useState('');

    function handleCase_select(graph_id: string) {
        set_selected_case(graph_id);
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
                        {!!data.Case && data.Case.map((c, i: number) =>
                            !!c && c.order.test_ordered.ngsBased && (
                                <div key={i} className={`${className}__Row`}
                                     onClick={() => handleCase_select(c.id)}>
                                    <div
                                        className={c.id === selected_case ? `${className}__Table_Cell_Medium_selected` : `${className}__Table_Cell_Medium`}
                                    >{c.order.patient_name}</div>
                                    <div
                                        className={c.id === selected_case ? `${className}__Table_Cell_Small_selected` : `${className}__Table_Cell_Small`}
                                    >{c.order.mrn}</div>
                                    <div
                                        className={c.id === selected_case ? `${className}__Table_Cell_Large_selected` : `${className}__Table_Cell_Large`}
                                    >{c.order.ordered_by.first_name} {c.order.ordered_by.last_name} {c.order.ordered_by.degrees}</div>
                                    <div
                                        className={c.id === selected_case ? `${className}__Table_Cell_Medium_selected` : `${className}__Table_Cell_Medium`}
                                    >{c.order.ml_order_id} </div>
                                    <div
                                        className={c.id === selected_case ? `${className}__Table_Cell_Medium_selected` : `${className}__Table_Cell_Medium`}
                                    >{c.order.received_order_id} </div>
                                    <div
                                        className={c.id === selected_case ? `${className}__Table_Cell_Medium_selected` : `${className}__Table_Cell_Medium`}
                                    >{c.order.received_date} </div>
                                    <div
                                        className={c.id === selected_case ? `${className}__Table_Cell_Medium_selected` : `${className}__Table_Cell_Medium`}
                                    >{c.order.test_ordered.name} </div>

                                </div>)
                        )
                        }
                    </div>
                </div>
            </div>

        </Fragment>
    )
}

export default NGSCases;