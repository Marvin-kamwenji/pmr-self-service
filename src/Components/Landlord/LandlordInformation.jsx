import React from 'react';
import '../CSS/landlord.css'



const fields = [
    { name: "firstName", type: 'text', placeholder: 'First Name', value: '', required: true, label: 'First Name ' },
    { name: "middleName", type: 'text', placeholder: 'Middle Name', value: '', required: false, label: 'Middle Name ' },
    { name: "lastName", type: 'text', placeholder: 'Last Name', value: '', required: true, label: 'Last Name ' },
    { name: "address", type: 'text', placeholder: 'Address', value: '', required: true, label: 'Address ' },
    { name: "mobileNo", type: 'text', placeholder: '7743****', value: '', required: true, label: 'Registered Mobile Number ' },
    { name: "email", type: 'text', placeholder: 'sample@example.com', value: '', required: false, label: 'Email ' },
    { name: "nationality", type: 'text', placeholder: '', value: '', required: true, label: 'Nationality ' },
    { name: "tin", type: 'text', placeholder: 'TIN', value: '', required: true, label: 'TIN ' },
    { name: "identificationDocument", type: 'text', placeholder: 'Identification Document', value: '', required: true, label: 'Identification Document ' },
    { name: "identificationNo", type: 'text', placeholder: 'Identification No', value: '', required: true, label: 'Identification Number '},
]

function showField(fieldProperties) {
    return (
        <div className='flex flex-row basis-1/2'>
            <div className='basis-1/3 text-end mr-2 flex justify-end items-center'>
                <label className='label-style'>{fieldProperties.label}</label>
                {fieldProperties.required ? <label className='asterisk-field'>*</label> : null}
            </div>
            <input placeholder={fieldProperties.placeholder} className='basis-2/3 input-field-style pl-4' id={fieldProperties.name} />
        </div>
    )
}


export default function LandlordInformation() {
    return (
        <div className='flex flex-column'>
            <div className='w-1/2 grid grid-cols-3 mb-4'>
                <h5 className='form-title-style col-span-2 col-start-2'>Individual Landlord Information</h5>
            </div>
            <div className='grid grid-cols-3 mb-2 w-1/2'>
                <div className='text-start mr-2 flex justify-end items-center'>
                    <label className='label-style'>Landlord Type</label>
                    <label className='asterisk-field'>*</label>
                </div>
                <div>
                    <input type='radio' id='individual' name='landlordType' className='radio-style'/>
                    <label for='individual' className='label-style pl-2 pr-2'>Individual</label>
                    <input type='radio' id='corporate' name='landlordType' className='radio-style'/>
                    <label for='corporate' className='label-style pl-2 pr-2' >Corporate</label>
                </div>
            </div>
            <div className='flex flex-row flex-wrap justify-center space-y-3' >
                {fields.map(showField)}
            </div>
        </div>
    )
}
