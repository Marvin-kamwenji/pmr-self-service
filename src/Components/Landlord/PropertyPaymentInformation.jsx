/**
 * @author Mesh
 * @classdesc Component displaying payment information of the landlord
 */
import React, {useState, useEffect} from 'react';
import '../CSS/landlord.css';

import {connect} from 'react-redux';
import * as ACTIONS from '../../actions/actions'
import { EntityTrackerTableBankDetail, AddButton } from './EntityTrackerTable';

/**
 * @function mapStateToProps to get state from reducer
 * @param {object} state from reducer
 * @returns state in the reducer
 */
function mapStateToProps(state){
  return {
    currentState: {
      paymentDetails: state.landlordInfoReducer.paymentDetails
    }
  }
}

/**
 * @function mapDispatchToProps get dispatcher function
 * @param {function} dispatch changes to reducer
 * @returns a reducer function
 */
function mapDispatchToProps(dispatch){
  return{
    updatePaymentDetails: (paymentDetails) => dispatch(ACTIONS.payment_info(paymentDetails))
  }
}

/**
 * @function addOptions to display option
 * @param {object} value 
 * @param {string} name of property to be displayed
 * @returns option field
 */
function addOptions(value, name) {
  return <option value={value.id}>{value[name]}</option>
}

/**
 * @function showField to display a field based on properties
 * @param {object} fieldProperties containing attributes of field to be displayed
 * @param {object} payDetail with state being updated
 * @param {function} setPayDetail to change state
 * @deprecated @param {array} payDetails properties from reducer
 * @deprecated @param {function} updatePayDetails dispatch properties
 * @param {function} setBranches update branches to be displayed in the dropdown
 * @param {object} props for formik validation
 * @returns A field
 */
function showField(fieldProperties, payDetail, setPayDetail, payDetails, updatePayDetails, setBranches, props) {
  switch (fieldProperties.type) {
    case 'text':
      return (
        <div className='flex flex-row col-6' key={fieldProperties.name}>
          <div className='w-1/3 text-end mr-2 flex justify-end items-center'>
            <label className='label-style'>{fieldProperties.label}</label>
            {fieldProperties.required ? <label className='asterisk-field'>*</label> : null}
          </div>
          <div className='w-2/3'>
            <input placeholder={fieldProperties.placeholder}
            className='input-field-style pl-4' id={fieldProperties.name}
            value={payDetail.hasOwnProperty([fieldProperties.name]) ? payDetail[fieldProperties.name] : null}
            onChange={e => {
              setPayDetail({ ...payDetail, [fieldProperties.name]: e.target.value });
              props.handleChange(e);
            }} />
            {props.errors[fieldProperties.name] && <div className='validation-style'>{props.errors[fieldProperties.name] }</div>}
          </div>
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
              if(fieldProperties.name === 'Bank'){
                setBranches(fieldProperties.options.find(bank => bank.id === e.target.value).bankBranches)
              }
              setPayDetail({ ...payDetail,
                 [fieldProperties.name]:{id: e.target.value, optionName: e.target.selectedOptions[0].label},
                 [`${fieldProperties.name}T`]: e.target.selectedOptions[0].label
                 });
              console.log(e)
              props.handleChange(e);
            }}>
              <option hidden selected value>--- Select {fieldProperties.placeholder} ---</option>
            {fieldProperties.options.map(option => addOptions(option, fieldProperties.field))}
          </select>
        </div>
      )
    default:
      break;
  }
}

/**
 * @function PropertyPaymentInformation to display property information section
 * @param {array} banks to be displayed in the dropdown 
 * @param {array} providers to be displayed in the dropdown 
 * @param {object} currentState state from reducer
 * @param {function} updatePaymentDetails dispatch update to reducer
 * @param {object} props to update formik
 * @returns Section of property information
 */
function PropertyPaymentInformation({banks, providers, currentState, updatePaymentDetails, props}) {  
  const [bankBranches, setBranches] = useState([]);
  const fields = [
    { name: "Bank", type: 'select', placeholder: 'Bank Name', value: '', required: true, label: 'Bank Name ',options: banks, field:'name' },
    { name: "serviceProvider", type: 'select', placeholder: 'Service Name', value: '', required: false, label: 'Mobile Network ', options: providers, field: 'name' },
    { name: "bankBranch", type: 'select', placeholder: 'Branch Name', value: '', required: true, label: 'Bank Branch ', options: bankBranches, field:'bankBranchName' },
    { name: "accountName", type: 'text', placeholder: 'Account Name', value: '', required: true, label: 'Account Name ' },
    { name: "accountNo", type: 'text', placeholder: 'Account No', value: '', required: false, label: 'Account No ' },
    { name: "accountNoMobile", type: 'text', placeholder: 'Account No', value: '', required: false, label: 'Account No ' },
]

/**
 * update Index to change state
 */
  const [payIndex, setPayIndex] = useState(0);
/**
 * Update state of the pay detail to edit
 */
  const [payDetail, setPayDetail] = useState({});

  /**
   * Update State to edit based on Change in index
   */
  useEffect(() => {
    var payDetailFromState = currentState.paymentDetails.find(p => p.index === payIndex);
    if (typeof payDetailFromState === 'undefined') {
      payDetailFromState = { index: payIndex };
    }
    setPayDetail(payDetailFromState);
  }, [payIndex])

  /**
   * Update the state of pay detail
   */
  useEffect(() => {
    let payDetailsCopy = [...currentState.paymentDetails];
    payDetailsCopy[payDetail.index]= payDetail;
    updatePaymentDetails(payDetailsCopy);
  }, [payDetail])

/**
 * Update bank branches on refresh
 */
  useEffect(() => {
    try {
      setBranches(banks.find(bank => bank.id === payDetail.Bank.id).bankBranches)
    } catch (error) {
      console.log(error)
    }
  },[])

  /**
   * @function removePayDetail to remove an item from detail
   * @param {number} index to be removed
   */
  const removePayDetail = (index) => {
    let payDetails = currentState.paymentDetails.filter((p) => p.index !== index)
    updatePaymentDetails(payDetails)
    setPayIndex(payDetails[0].index)
  }

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
              {fields.map((field) => {return (showField(field, payDetail, setPayDetail, currentState.paymentDetails, updatePaymentDetails, setBranches, props))})}
          </div>
          <AddButton text='Payment Detail' setIndex={setPayIndex} 
            index={currentState.paymentDetails.length === 0 ? 0 : currentState.paymentDetails.at(-1).index + 1}
          />
          <EntityTrackerTableBankDetail bankDetails={currentState.paymentDetails} setIndex={setPayIndex} removePayDetail={removePayDetail}/>  
      </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(PropertyPaymentInformation)