import React, {useState} from 'react';
import '../CSS/landlord.css';

const selectDummy = ['a','b','c','d']

function addOptions(value, name) {
  return <option value={value.id}>{value[name]}</option>
}

function showField(fieldProperties, bankDetail, setBankDetail, bankDetails, index, setBranches) {
  switch (fieldProperties.type) {
    case 'text':
      return (
        <div className='flex flex-row col-6' key={fieldProperties.name}>
          <div className='basis-1/3 text-end mr-2 flex justify-end items-center'>
            <label className='label-style'>{fieldProperties.label}</label>
            {fieldProperties.required ? <label className='asterisk-field'>*</label> : null}
          </div>
          <input placeholder={fieldProperties.placeholder}
            className='basis-2/3 input-field-style pl-4' id={fieldProperties.name}
            value={bankDetail[fieldProperties.name]}
            onChange={e => {
              setBankDetail({ ...bankDetail, [fieldProperties.name]: e.target.value });
              bankDetails[index] = bankDetail
            }} />
        </div>
      )
    case 'select':
      return (
        <div className='flex flex-row col-6' key={fieldProperties.name}>
          <div className='basis-1/3 text-end mr-2 flex justify-end items-center'>
            <label className='label-style'>{fieldProperties.label}</label>
            {fieldProperties.required ? <label className='asterisk-field'>*</label> : null}
          </div>
          <select name={fieldProperties.name} className='basis-2/3 input-field-style pl-4'
            value={bankDetail.hasOwnProperty([fieldProperties.name]) ? bankDetail[fieldProperties.name].id : null}
            onChange={e => {
              if(fieldProperties.name === 'bank'){
                setBranches(fieldProperties.options.find(bank => bank.id == e.target.value).bankBranches)
              }
              setBankDetail({ ...bankDetail, [fieldProperties.name]:{id: e.target.value} });
              bankDetails[index] = bankDetail
            }}>
              <option hidden disabled selected value>--- Select {fieldProperties.placeholder} ---</option>
            {fieldProperties.options.map(option => addOptions(option, fieldProperties.field))}
          </select>
        </div>
      )
    default:
      break;
  }
}

export default function PropertyPaymentInformation({bankDetail, bankDetails, index, banks, providers}) {  
  const [bankBranches, setBranches] = useState([]);
  const fields = [
    { name: "bank", type: 'select', placeholder: 'Bank Name', value: '', required: true, label: 'Bank Name ',options: banks, field:'name' },
    { name: "serviceProvider", type: 'select', placeholder: 'Service Name', value: '', required: false, label: 'Mobile Network ', options: providers, field: 'name' },
    { name: "bankBranch", type: 'select', placeholder: 'Branch Name', value: '', required: true, label: 'Bank Branch ', options: bankBranches, field:'bankBranchName' },
    { name: "accountName", type: 'text', placeholder: 'Account Name', value: '', required: true, label: 'Account Name ' },
    { name: "accountNo", type: 'text', placeholder: 'Account No', value: '', required: false, label: 'Account No ' },
    { name: "accountNoMobile", type: 'text', placeholder: 'Account No', value: '', required: false, label: 'Account No ' },
]
  const [bank, setBank] = useState(bankDetail);
  return (
      <div className='flex flex-column'>
          <div className='flex'>
              <div className='w-1/2 grid grid-cols-3 mb-4'>
                  <h5 className='form-title-style col-span-2 col-start-2'>Property Bank Details</h5>
              </div>
              <div className='w-1/2 grid grid-cols-3 mb-4'>
                  <h5 className='form-title-style col-span-2 col-start-2'>Mobile Payment Details</h5>
              </div>
          </div>
          <div className='flex flex-row flex-wrap justify-center space-y-3' >
              {fields.map((field) => {return (showField(field, bank, setBank, bankDetails, index, setBranches))})}
          </div>
      </div>
  )
}
