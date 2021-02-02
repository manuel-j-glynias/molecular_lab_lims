import React from 'react'
import Select from 'react-select';
import {useAlert} from 'react-alert'
import {Order_Information_Request_Fields} from "../../generated/graphql";

interface Props {
    selected_order:string;
    handle_information_request: (field:Order_Information_Request_Fields,s: string) => void;
    info_request_field: Order_Information_Request_Fields;
    set_info_request_field: (s: Order_Information_Request_Fields) => void;
}
//https://i2proxy.roswellpark.org/people/listing/23626
const className = 'Orders';

const InformationRequestFieldSelect : React.FC<Props> = ({selected_order,handle_information_request,info_request_field,set_info_request_field}) => {

    const options = [
        { value: Order_Information_Request_Fields.None, label: 'None' },
        { value: Order_Information_Request_Fields.PatientName, label: 'Patient Name' },
        { value: Order_Information_Request_Fields.DateOfBirth, label: 'Date of Birth' },
        { value: Order_Information_Request_Fields.Sex, label: 'Sex' },
        { value: Order_Information_Request_Fields.Mrn, label: 'MRN' },
        { value: Order_Information_Request_Fields.Diagnosis, label: 'Diagnosis' },
        { value: Order_Information_Request_Fields.AttendingPhysician, label: 'Attending Physician' },
        { value: Order_Information_Request_Fields.OrderedBy, label: 'Ordered By' },
        { value: Order_Information_Request_Fields.TestsOrdered, label: 'Tests Ordered' },
        { value: Order_Information_Request_Fields.Other, label: 'Other' },
    ];
    const state  = {
        selectedOption: { value: info_request_field, label: 'None' },
    };

    const handleChange = async (event:any) => {
        const value : Order_Information_Request_Fields = event.value;
        const label : string = event.label as string;

        state.selectedOption.value = value
        state.selectedOption.label = label
    }
    const alert = useAlert();
    const save = async () => {
        let field = state.selectedOption.value;
        if (field===Order_Information_Request_Fields.None){
            alert.show("Please select a field from the menu.  ")
        }
        else {
            // mutation first, then
            let label = state.selectedOption.label;
            handle_information_request(field,label);

        }
     }



    return (
        <div>
            <span>New Information Request Field: </span>

            <Select className={`${className}__select`}  options = {options} onChange={handleChange}
                    value={state.selectedOption}
            />
            <div  className={`${className}__selectButton`}>
                <button value="Save" className="Orders__btn btn-primary my-1" onClick={() => save()}>Request Information</button>
            </div>


        </div>
    )
}

export default InformationRequestFieldSelect;