import React from 'react';
import { useState, useEffect } from 'react';
import '../CSS/landlord.css'
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'


import {connect} from 'react-redux';
import * as ACTIONS from '../../actions/tenantActions'


function mapStateToProps(state){
  return {
    currentState: {
      nextOfKin: state.TenantInformationReducer.nextOfKin
    }
  }
}

function mapDispatchToProps(dispatch){
  return{
    updateNextOfKin: (next_of_kin) => dispatch(ACTIONS.next_of_kin_info(next_of_kin))
  }
}

function addOptions(value, name) {
  return <option value={value.id}>{value[name]}</option>
}

function showField(fieldProperties, nextOfKin, setNextOfKin, nextOfKins, updateNextOfKins, props) {
  // return (
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
              value={nextOfKin.hasOwnProperty([fieldProperties.name]) ? nextOfKin[fieldProperties.name] : null}
              className='input-field-style pl-4'
              id={fieldProperties.name}
              onChange={e => {
                setNextOfKin({ ...nextOfKin, [fieldProperties.name]: e.target.value });
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
                value={nextOfKin.hasOwnProperty(fieldProperties.name) ?
                  nextOfKin[fieldProperties.name].id :
                    null
                  }
                className='basis-2/3 input-field-style pl-4'
                onChange={e => {
                  setNextOfKin({...nextOfKin, [fieldProperties.name]: {id: e.target.value, optionName: e.target.selectedOptions[0].label}});
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
              value={nextOfKin.hasOwnProperty([fieldProperties.name]) ? nextOfKin[fieldProperties.name] : null}
              buttonClass='border-none bg-phone-dropdown-bg'
              containerClass='w-full h-10 pl-0'
              dropdownClass='flex flex-column items-start'
              inputClass='h-full w-full'
              onChange={number => {
                setNextOfKin({ ...nextOfKin, [fieldProperties.name]: number });
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
    // <div className='flex flex-row col-6' key={fieldProperties.name}>
    //   <div className='w-1/3 text-end mr-2 flex justify-end items-center'>
    //     <label className='label-style'>{fieldProperties.label}</label>
    //     {fieldProperties.required ? <label className='asterisk-field'>*</label>:null}
    //   </div>    
    //   <div className='w-2/3'>
    //     <input placeholder={fieldProperties.placeholder}
    //     className='input-field-style pl-4' id={fieldProperties.name}
    //     value={nextOfKin.hasOwnProperty([fieldProperties.name]) ? nextOfKin[fieldProperties.name] : null}
    //     onChange={(e) => {          
    //       setNextOfKin({ ...nextOfKin, [fieldProperties.name]: e.target.value });
    //       props.handleChange(e)
    //     }} />
    //     {props.errors[fieldProperties.name] && <div className='validation-style'>{props.errors[fieldProperties.name] }</div>}
    //   </div> 
      
    // </div>
  // )
}

function TenantNextOfKin({ currentState, updateNextOfKin, props}) {
  const fields = [
    {name: "kinFirstName", type: 'text', placeholder: 'First Name', value: '', required: true, label: 'First Name '},
    {name: "kinMiddleName", type: 'text', placeholder: 'Middle Name', value: '', required: false, label: 'Middle Name '},
    {name: "kinLastName", type: 'text', placeholder: 'Last Name', value: '', required: true, label: 'Last Name '},
    {name: "kinAddress", type: 'text', placeholder: 'Address', value: '', required: true, label: 'Address '},
    {name: "kinMobileNo", type: 'phone', placeholder: '7743****', value: '', required: true, label: 'Registered Mobile Number '},
    {name: "kinEmail", type: 'text', placeholder: 'sample@example.com', value: '', required: false, label: 'Email '}
  ]

  const [kin, setKin] = useState(currentState.nextOfKin);

  useEffect(() => {
    updateNextOfKin(kin);
  }, [kin]);


  return (
    <div>
      <div className='flex flex-column'>
        <div className='w-1/2 grid grid-cols-3 mb-4'>
          <h5 className='form-title-style col-span-2 col-start-2'>Tenant Next Of Kin</h5>
        </div>
        <div className='flex flex-row flex-wrap justify-center space-y-3' >
          {fields.map((field) => { return (showField(field, kin, setKin, currentState.nextOfKin, updateNextOfKin, props)) })}
        </div>
      </div>
    </div>
    
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(TenantNextOfKin);


