import React, {Fragment} from 'react'
import Select from 'react-select';
import {Order_Information_Request_Fields, Sample_Rejection_Reason_Fields} from "../../generated/graphql";

interface Props {
    handle_sample_rejection_reason: (field:Sample_Rejection_Reason_Fields,s: string) => void;
    sample_rejection_reason_field: Sample_Rejection_Reason_Fields;
    sample_rejection_reason_field_label: string;
}
const className = 'NewSamples';
const SampleRejectionReasonFieldsSelect : React.FC<Props> = ({handle_sample_rejection_reason,sample_rejection_reason_field,sample_rejection_reason_field_label}) => {
    const options = [
        { value: Sample_Rejection_Reason_Fields.None, label: 'None' },
        { value: Sample_Rejection_Reason_Fields.QuantityNotSufficient, label: 'Quantity Not Sufficient' },
        { value: Sample_Rejection_Reason_Fields.WrongSampleType, label: 'Wrong Sample Type' },
        { value: Sample_Rejection_Reason_Fields.MissingHAndE, label: 'Missing H&E' },
        { value: Sample_Rejection_Reason_Fields.NoOrder, label: 'No Order' },
        { value: Sample_Rejection_Reason_Fields.SampleExpired, label: 'Sample Expired' },
         { value: Sample_Rejection_Reason_Fields.Other, label: 'Other' },
    ];
    const state  = {
        selectedOption: { value: sample_rejection_reason_field, label: sample_rejection_reason_field_label },
    };
    const handleChange = async (event:any) => {
        const value : Sample_Rejection_Reason_Fields = event.value;
        const label : string = event.label as string;

        state.selectedOption.value = value;
        state.selectedOption.label = label;
        handle_sample_rejection_reason(value,label);
    }

    // const save = async () => {
    //     let field = state.selectedOption.value;
    //     if (field===Sample_Rejection_Reason_Fields.None){
    //         alert.show("Please select a field from the menu.  ")
    //     }
    //     else {
    //         // mutation first, then
    //         let label = state.selectedOption.label;
    //         handle_sample_rejection_reason(field,label);
    //     }
    // }



    return (

            <Fragment>
            <Select className={`${className}__select`}  options = {options} onChange={handleChange}
                    value={state.selectedOption}
            />
            {/*<div  className={`${className}__selectButton`}>*/}
            {/*    <button value="Save" className="NewSamples__btn btn-primary my-1" onClick={() => save()}>Reject Sample</button>*/}
            {/*</div>*/}

            </Fragment>

    )
}

export default SampleRejectionReasonFieldsSelect;