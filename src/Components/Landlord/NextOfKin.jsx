import React from 'react';
import '../CSS/landlord.css'

const fields = [
  {name: "firstName", type: 'text', placeholder: 'First Name', value: '', required: true, label: 'First Name '},
  {name: "middleName", type: 'text', placeholder: 'Middle Name', value: '', required: false, label: 'Middle Name '},
  {name: "lastName", type: 'text', placeholder: 'Last Name', value: '', required: true, label: 'Last Name '},
  {name: "address", type: 'text', placeholder: 'Address', value: '', required: true, label: 'Address '},
  {name: "mobileNo", type: 'text', placeholder: '7743****', value: '', required: true, label: 'Registered Mobile Number '},
  {name: "email", type: 'text', placeholder: 'sample@example.com', value: '', required: false, label: 'Email '}
]

function showField(fieldProperties) {
  return (
    <div className='flex flex-row basis-1/2'>
      <div className='basis-1/3 text-end mr-2 flex justify-end items-center'>
        <label className='label-style'>{fieldProperties.label}</label>
        {fieldProperties.required ? <label className='asterisk-field'>*</label>:null}
      </div>     
      <input placeholder={fieldProperties.placeholder} className='basis-2/3 input-field-style pl-4' id={fieldProperties.name}/>
    </div>
  )
}

export default function NextOfKin() {
  return (
    <div className='flex flex-column'>
      <div className='w-1/2 grid grid-cols-3 mb-4'>
        <h5 className='form-title-style col-span-1 col-start-2'>Landlord Next Of Kin</h5>
      </div>
      <div className='flex flex-row flex-wrap justify-center space-y-3' >
        {fields.map(showField)}
      </div>        
    </div>
  )
}


