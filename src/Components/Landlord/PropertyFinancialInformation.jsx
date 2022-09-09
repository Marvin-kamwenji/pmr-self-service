import React from 'react'
import '../CSS/landlord.css'

const fields = [
  {name: "minimumOccupancyPeriod", type: 'text', placeholder: '12 Months', value: '', required: true, label: 'MinimumOccupancyPeriod '},
  {name: "totalDeposit", type: 'text', placeholder: '433000', value: '', required: false, label: 'Total Deposit '},
  {name: "totalYearlyRent", type: 'text', placeholder: '340000', value: '', required: true, label: 'Total Yearly Rent'},
  {name: "loanDisbursementPeriod", type: 'text', placeholder: 'Quaterly', value: '', required: true, label: 'Disbursement Schedule '},
  {name: "oneMonthRent", type: 'text', placeholder: '230000', value: '', required: true, label: 'One Month Rent'},
  {name: "landlordDisbursement", type: 'text', placeholder: '545000', value: '', required: false, label: 'Landlord Disbursemnt '},
]

const selectDummy = ['a','b','c','d']

function addOptions(value) {
  return <option value={value}>{value}</option>
}

function showField(fieldProperties, propertyInfo, setPropertyInfo, properties, index) {
  switch (fieldProperties.type) {
    case 'text':
      return (
        <div className='flex flex-row col-6'>
          <div className='basis-1/3 text-end mr-2 flex justify-end items-center'>
            <label className='label-style'>{fieldProperties.label}</label>
            {fieldProperties.required ? <label className='asterisk-field'>*</label> : null}
          </div>
          <input placeholder={fieldProperties.placeholder}
            className='basis-2/3 input-field-style pl-4' id={fieldProperties.name}
            value={propertyInfo[fieldProperties.name]}
            onChange={e => {
              setPropertyInfo({ ...propertyInfo, [fieldProperties.name]: e.target.value });
              properties[index] = propertyInfo
            }} />
        </div>
      )
    case 'select':
      return (
        <div className='flex flex-row col-6'>
          <div className='basis-1/3 text-end mr-2 flex justify-end items-center'>
            <label className='label-style'>{fieldProperties.label}</label>
            {fieldProperties.required ? <label className='asterisk-field'>*</label> : null}
          </div>
          <select name={fieldProperties.name} className='basis-2/3 input-field-style pl-4'
            value={propertyInfo[fieldProperties.name]}  
            onChange={e => {
              setPropertyInfo({ ...propertyInfo, [fieldProperties.name]: e.target.value });
              properties[index] = propertyInfo
            }}>
              <option hidden disabled selected value>--- Select {fieldProperties.placeholder} ---</option>
            {selectDummy.map(addOptions)}
          </select>
        </div>
      )
    default:
      break;
  }
}

export default function PropertyFinancialInformation({property, setPropertyInfo, properties, index}) {
  return (
    <div className='flex flex-column'>
      <div className='flex flex-row flex-wrap justify-center space-y-3' >
        {fields.map((field) => {return showField(field, property, setPropertyInfo, properties, index)})}
      </div>        
    </div>
  )
}
