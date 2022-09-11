import React, {useState} from 'react';
import '../CSS/landlord.css';

import {connect} from 'react-redux';
import * as ACTIONS from '../../actions/actions'

function mapStateToProps(state){
  return {
    currentState: {
      paymentDetails: state.landlordInfoReducer.paymentDetails
    }
  }
}

function mapDispatchToProps(dispatch){
  return{
    updatePaymentDetails: (paymentDetails) => dispatch(ACTIONS.payment_info(paymentDetails))
  }
}

function addOptions(value, name) {
  return <option value={value.id}>{value[name]}</option>
}

function showField(fieldProperties, payDetail, setPayDetail, payDetails, updatePayDetails, setBranches) {
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
            value={payDetail.hasOwnProperty([fieldProperties.name]) ? payDetail[fieldProperties.name] : null}
            onChange={e => {
              setPayDetail({ ...payDetail, [fieldProperties.name]: e.target.value });
              let payDetailsCopy = [...payDetails];
              payDetailsCopy[payDetail.index]= payDetail;
              updatePayDetails(payDetailsCopy);
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
            value={payDetail.hasOwnProperty([fieldProperties.name]) ? payDetail[fieldProperties.name].id : null}
            onChange={e => {
              if(fieldProperties.name === 'bank'){
                setBranches(fieldProperties.options.find(bank => bank.id === e.target.value).bankBranches)
              }
              setPayDetail({ ...payDetail, [fieldProperties.name]:{id: e.target.value} });
              let payDetailsCopy = [...payDetails];
              payDetailsCopy[payDetail.index]= payDetail;
              updatePayDetails(payDetailsCopy);
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

function PropertyPaymentInformation({index, banks, providers, currentState, updatePaymentDetails}) {  
  const [bankBranches, setBranches] = useState([]);
  const fields = [
    { name: "bank", type: 'select', placeholder: 'Bank Name', value: '', required: true, label: 'Bank Name ',options: banks, field:'name' },
    { name: "serviceProvider", type: 'select', placeholder: 'Service Name', value: '', required: false, label: 'Mobile Network ', options: providers, field: 'name' },
    { name: "bankBranch", type: 'select', placeholder: 'Branch Name', value: '', required: true, label: 'Bank Branch ', options: bankBranches, field:'bankBranchName' },
    { name: "accountName", type: 'text', placeholder: 'Account Name', value: '', required: true, label: 'Account Name ' },
    { name: "accountNo", type: 'text', placeholder: 'Account No', value: '', required: false, label: 'Account No ' },
    { name: "accountNoMobile", type: 'text', placeholder: 'Account No', value: '', required: false, label: 'Account No ' },
]

var payDetailFromState = currentState.paymentDetails.find(p => p.index === index);
if (typeof payDetailFromState === 'undefined'){
  payDetailFromState = {index}
}

const [payDetail, setPayDetail] = useState(payDetailFromState);


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
              {fields.map((field) => {return (showField(field, payDetail, setPayDetail, currentState.paymentDetails, updatePaymentDetails, setBranches))})}
          </div>
      </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(PropertyPaymentInformation)