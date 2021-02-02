import React, {Fragment, useEffect, useState} from 'react'
import {Maybe, Sample, AcceptedSamplesListQuery, AcceptedStatus} from "../../../generated/graphql"
import '../styles.css'
import PhysicianSelectContainer from "../../common/PhysicianSelect";
import DatePicker from "react-modern-calendar-datepicker";
import TestSelectContainer from "../../common/TestSelect";
import SexSelect from "../../common/SexSelect/SexSelect";


interface Props {
    data: AcceptedSamplesListQuery;
    filter_term: string;
    set_filter_term: (b: string) => void;
    keyPressed: (event: React.KeyboardEvent<HTMLDivElement>) => void;
    handleNameFilter: () => void;
    handleReset: () => void;
    user_name: string;
    user_graph_id: string;
    refetch: () => void;
    selected_sample_graph_id:string;
    set_selected_sample_graph_id: (s:string) => void;
    received_order_id:string;
    set_selected_sample_status_graph_id: (s:string) => void;
}

const className = 'CaseCreate';


const AcceptedSamples: React.FC<Props> = ({data,filter_term,set_filter_term,keyPressed,handleNameFilter,
                                     handleReset,user_name,user_graph_id,refetch,selected_sample_graph_id,set_selected_sample_graph_id,received_order_id,set_selected_sample_status_graph_id}) => {
    const [selected_sample, set_selected_sample] = useState('');
    const [selected_sample_obj, set_selected_sample_obj] = useState<Maybe<Sample>>(null);
    const [editing, set_editing] = React.useState(false);


    function handleSample_select(sample_id: string, sample_graph_id: string,status_id:string) {
        set_selected_sample(sample_id);
        set_selected_sample_graph_id(sample_graph_id);
        if (data != null && data.Sample != null && data.Sample.length > 0) {
            let index: number;
            for (index = 0; index < data.Sample.length; index++) {
                 let sample = data.Sample[index];
                if (sample != null && sample.id === sample_graph_id) {
                    // @ts-ignore
                    set_selected_sample_obj(sample);
                    set_selected_sample_graph_id(sample.id);
                    set_selected_sample_status_graph_id(sample.status.id)
                }
            }
        }
    }
    const select_by_received_order_id = (received_order_id:string):void => {
        let setit = false
        if (data != null && data.Sample != null && data.Sample.length > 0) {
            let index: number;
            for (index = 0; index < data.Sample.length; index++) {
                let sample = data.Sample[index];
                if (sample != null && sample.received_order_id === received_order_id) {
                    // @ts-ignore
                    set_selected_sample_obj(sample);
                    set_selected_sample(sample.sample_id);
                    set_selected_sample_graph_id(sample.id);
                    set_selected_sample_status_graph_id(sample.status.id)
                    setit = true;
                    break
                }
            }
        }
        if (!setit){
            set_selected_sample('');
            set_selected_sample_graph_id('');
            set_selected_sample_obj(null);
        }
    }
    useEffect(() => {
        select_by_received_order_id(received_order_id)
    },[received_order_id]);

    return (
        <Fragment>
            <div className={className}></div>
            <div className={`${className}__Panel_Wrapper`}>
                <div className={`${className}__Samples_Panel`}>

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
                        <div className={`${className}__Table_Cell_Small`}>Sample ID</div>
                        <div className={`${className}__Table_Cell_Large`}>Ordered By</div>
                        <div className={`${className}__Table_Cell_Medium`}>Received Order ID</div>
                        <div className={`${className}__Table_Cell_Medium`}>Date Received</div>
                        <div className={`${className}__Table_Cell_Medium`}>Sample Type</div>
                    </div>
                </div>

                <div className={`${className}__Table_Container`}>

                    <div className={`${className}__Table`}>
                        {!!data.Sample && data.Sample.map((sample, i: number) =>
                            !!sample && sample.status.status==AcceptedStatus.Accepted && (
                                <div key={i} className={`${className}__Row`}
                                     onClick={() => handleSample_select(sample.sample_id,sample.id,sample.status.id)}>
                                    <div
                                        className={sample.sample_id === selected_sample ? `${className}__Table_Cell_Medium_selected` : `${className}__Table_Cell_Medium`}
                                    >{sample.patient_name}</div>
                                    <div
                                        className={sample.sample_id === selected_sample ? `${className}__Table_Cell_Small_selected` : `${className}__Table_Cell_Small`}
                                    >{sample.mrn}</div>
                                    <div
                                        className={sample.sample_id === selected_sample ? `${className}__Table_Cell_Small_selected` : `${className}__Table_Cell_Small`}
                                    >{sample.sample_id} </div>
                                    <div
                                        className={sample.sample_id === selected_sample ? `${className}__Table_Cell_Large_selected` : `${className}__Table_Cell_Large`}
                                    >{sample.ordered_by.first_name} {sample.ordered_by.last_name} {sample.ordered_by.degrees} </div>
                                    <div
                                        className={sample.sample_id === selected_sample ? `${className}__Table_Cell_Medium_selected` : `${className}__Table_Cell_Medium`}
                                    >{sample.received_order_id} </div>
                                    <div
                                        className={sample.sample_id === selected_sample ? `${className}__Table_Cell_Medium_selected` : `${className}__Table_Cell_Medium`}
                                    >{sample.received_date} </div>
                                    <div
                                        className={sample.sample_id === selected_sample ? `${className}__Table_Cell_Medium_selected` : `${className}__Table_Cell_Medium`}
                                    >{sample.sample_type.name} </div>

                                </div>)

                        )
                        }
                    </div>
                </div>
             </div>

        </Fragment>
    )


}

export default AcceptedSamples;
