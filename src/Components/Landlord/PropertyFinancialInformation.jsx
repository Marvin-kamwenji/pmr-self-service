import React from 'react'
import '../CSS/landlord.css'

const fields = [
  {name: "minimumOccupancyPeriod", type: 'text', placeholder: '12 Months', value: '', required: true, label: 'MinimumOccupancyPeriod '},
  {name: "totalDeposit", type: 'text', placeholder: '433000', value: '', required: false, label: 'Total Deposit '},
  {name: "totalYearlyRent", type: 'text', placeholder: '340000', value: '', required: true, label: 'Total Yearly Rent'},
  {name: "loanDisbursementPeriod", type: 'text', placeholder: 'Quaterly', value: '', required: true, label: 'Disbursement Schedule '},
  {name: "oneMonthRent", type: 'text', placeholder: '230000', value: '', required: true, label: 'One Month Rent'},
  {name: "landlordDisbursement", type: 'text', placeholder: '545000', value: '', required: false, label: 'Landlord Disbursemnt '},
  {name: "threeMonthRent", type: 'text', placeholder: '5000000', value: '', required: false, label: '3 Month rent '},
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

export default function PropertyFinancialInformation() {
  return (
    <div className='flex flex-column'>
      <div className='flex flex-row flex-wrap justify-center space-y-3' >
        {fields.map(showField)}
      </div>        
    </div>
  )
}
