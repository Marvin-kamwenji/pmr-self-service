import React, { useState, useEffect } from 'react';
import '../CSS/landlord.css';
import {connect} from 'react-redux';
import * as ACTIONS from '../../actions/tenantActions';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

function mapStateToProps(state){
    return{
      currentState: {
        bankDetail: state.TenantInformationReducer.bankDetail
      }
    }
  }

function mapDispatchToProps(dispatch){
    return {
      updateBankDetail: (bankDetail) => dispatch(ACTIONS.bank_info(bankDetail))
    }
  }

function addOptions(value, name) {
    return <option value={value.id}>{value[name]}</option>
  }


function showField(fieldProperties, bankDetails, setBankDetails, updateBankDetails, props, setBranches) {
    switch (fieldProperties.type) {
        case 'text':
        case 'date':
                return (
                  <div className='flex flex-row col-6' key={fieldProperties.name}>
                    <div className='w-1/3 text-end mr-2 flex justify-end items-center'>
                      <label className='label-style'>{fieldProperties.label}</label>
                      {fieldProperties.required ? <label className='asterisk-field'>*</label> : null}
                    </div>
                    <div className='w-2/3'>
                      <input placeholder={fieldProperties.placeholder}
                        type = {fieldProperties.type}
                        value={bankDetails.hasOwnProperty([fieldProperties.name]) ? bankDetails[fieldProperties.name] : null}
                        className='input-field-style pl-4'
                        id={fieldProperties.name}
                        onChange={e => {
                            setBankDetails({ ...bankDetails, [fieldProperties.name]: e.target.value });
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
                        <select name={fieldProperties.name}
                          value={bankDetails.hasOwnProperty(fieldProperties.name) ?
                            bankDetails[fieldProperties.name].id :
                              null
                            }
                          className='basis-2/3 input-field-style pl-4'
                          onChange={e => {
                            if(fieldProperties.name === 'Bank'){
                              setBranches(fieldProperties.options.find(bank => bank.id === e.target.value).bankBranches)
                            }
                            setBankDetails({...bankDetails, [fieldProperties.name]: {id: e.target.value, optionName: e.target.selectedOptions[0].label}});
                            props.handleChange(e)
                          }}
                        >
                          <option hidden selected value>--- Select {fieldProperties.placeholder} ---</option>
                          {fieldProperties.options.map(option => addOptions(option, fieldProperties.field))}
                        </select>
                      </div>
                    )

        case 'phone':
                        return (
                          <div className='flex flex-row col-6' key={fieldProperties.name}>
                            <div className='w-1/3 text-end mr-2 flex justify-end items-center'>
                              <label className='label-style'>{fieldProperties.label}</label>
                              {fieldProperties.required ? <label className='asterisk-field'>*</label> : null}
                            </div>
                            <div className='w-2/3'>
                              <PhoneInput
                                country={'us'}
                                placeholder={fieldProperties.placeholder}
                                value={bankDetails.hasOwnProperty([fieldProperties.name]) ? bankDetails[fieldProperties.name] : null}
                                buttonClass='border-none bg-phone-dropdown-bg'
                                containerClass='w-full h-10 pl-0'
                                dropdownClass='flex flex-column items-start'
                                inputClass='h-full w-full'
                                onChange={number => {
                                    setBankDetails({ ...bankDetails, [fieldProperties.name]: number });
                                }}
                                inputProps={{required:true}}
                              /> 
                              {props.errors[fieldProperties.name] && <div className='validation-style'>{props.errors[fieldProperties.name] }</div>}
                            </div>
                            
                          </div>
                        )
        default:
          break;

    }
}

  

function BankDetails({bankName, serviceProviders,currentState, updateBankDetail, props}){

    const [bankBranches, setBranches] = useState([]);
    const fields = [
        { name: "Bank", type: 'select', placeholder: 'Bank Name', value: {}, required: true, label: 'Bank Name ' , options: bankName, field: 'name'},
        { name: "bankBranch", type: 'select', placeholder: 'Bank Branch', value: {}, required: true, label: 'Bank Branch ' , options: bankBranches, field: 'bankBranchName'},
        { name: "accountNumber", type: 'text', placeholder: 'Account Number', value: '', required: true, label: 'Account Number ' },
        { name: "serviceProvider", type: 'select', placeholder: 'Mobile Network Provider', value: {}, required: true, label: 'Network Provider ' , options: serviceProviders, field: 'name'},
        { name: "mobileNo", type: 'phone', placeholder: '700 *** ****', value: '', required: true, label: 'Registered Mobile Number ' },

    ]

    const [bankDetail, setBankDetail] = useState(currentState.bankDetail);

    useEffect(() => {
        updateBankDetail(bankDetail);
      },[bankDetail])

      return (
        <div>
      <div className='flex flex-column'>
        <div className='w-1/2 grid grid-cols-3 mb-4'>
          <h5 className='form-title-style col-span-2 col-start-2'>BANK DETAILS</h5>
        </div>
        <div className='flex flex-row flex-wrap justify-center space-y-3' >
          {fields.map((field) => { return (showField(field, bankDetail, setBankDetail, updateBankDetail, props, setBranches)) })}
        </div>
      </div>
      </div>
      )

}


export default connect(mapStateToProps, mapDispatchToProps)(BankDetails);