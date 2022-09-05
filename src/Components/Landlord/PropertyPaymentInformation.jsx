import React from 'react';
import '../CSS/landlord.css'

const fields = [
    { name: "bankName", type: 'text', placeholder: 'Bank Name', value: '', required: true, label: 'Bank Name ' },
    { name: "serviceProvider", type: 'text', placeholder: 'Service Name', value: '', required: false, label: 'Servcie Provider ' },
    { name: "bankBranch", type: 'text', placeholder: 'Branch Name', value: '', required: true, label: 'Bank Branch ' },
    { name: "accountName", type: 'text', placeholder: 'Account Name', value: '', required: true, label: 'Account Name ' },
    { name: "accountNo", type: 'text', placeholder: 'Account No', value: '', required: false, label: 'Account No ' },
    { name: "accountNo", type: 'text', placeholder: 'Account No', value: '', required: false, label: 'Account No ' },
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

export default function PropertyPaymentInformation() {
  return (
      <div className='flex flex-column'>
          <div className='flex'>
              <div className='w-1/2 grid grid-cols-3 mb-4'>
                  <h5 className='form-title-style col-span-1 col-start-2'>Property Bank Details</h5>
              </div>
              <div className='w-1/2 grid grid-cols-3 mb-4'>
                  <h5 className='form-title-style col-span-1 col-start-2'>Mobile Payment Details</h5>
              </div>
          </div>
          <div className='flex flex-row flex-wrap justify-center space-y-3' >
              {fields.map(showField)}
          </div>
      </div>
  )
}
