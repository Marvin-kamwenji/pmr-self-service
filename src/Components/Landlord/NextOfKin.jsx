/**
 * @classdesc Functional component to display the next of kin form
 */
import React from 'react';
import { useState, useEffect } from 'react';
import '../CSS/landlord.css'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'


import {connect} from 'react-redux';
import * as ACTIONS from '../../actions/actions'
import { AddButton, EntityTrackerTableNextOfKin } from './EntityTrackerTable';

/**
 * @function mapStateToProps 
 * @param {object} state 
 * @returns current state from reducer
 */
function mapStateToProps(state){
  return {
    currentState: {
      nextOfKins: state.landlordInfoReducer.nextOfKins
    }
  }
}
/**
 * @function mapDispatchToProps
 * @param {function} dispatch 
 * @returns function to map dispatch
 */
function mapDispatchToProps(dispatch){
  return{
    updateNextOfKins: (next_of_kins) => dispatch(ACTIONS.next_of_kins(next_of_kins))
  }
}

/**
 * @function showField 
 * @param {object} fieldProperties object of field attributes
 * @param {object} nextOfKin current state of object
 * @param {function} setNextOfKin update state
 * @param {array} nextOfKins kins from global object
 * @param {function} updateNextOfKins update global object
 * @param {object} props state from formik
 * @returns field based on the props
 */
function showField(fieldProperties, nextOfKin, setNextOfKin, nextOfKins, updateNextOfKins, props) {
  switch(fieldProperties.type){
    case 'text':
      return (
        <div className='flex flex-row col-6' key={fieldProperties.name}>
          <div className='w-1/3 text-end mr-2 flex justify-end items-center'>
            <label className='label-style'>{fieldProperties.label}</label>
            {fieldProperties.required ? <label className='asterisk-field'>*</label>:null}
          </div>    
          <div className='w-2/3'>
            <input placeholder={fieldProperties.placeholder}
            className='input-field-style pl-4' id={fieldProperties.name}
            value={nextOfKin.hasOwnProperty([fieldProperties.name]) ? nextOfKin[fieldProperties.name] : null}
            onChange={(e) => {          
              setNextOfKin({ ...nextOfKin, [fieldProperties.name]: e.target.value });
              props.handleChange(e)
            }} />
            {props.errors[fieldProperties.name] && <div className='validation-style'>{props.errors[fieldProperties.name] }</div>}
          </div> 
          
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
}

/**
 * @function NextOfKin component 
 * @param {object} currentState state from reducer
 * @param {function} updateNextOfKins dispatch update action to reducer
 * @param {object} props object from formik, for validation
 * @returns Section form for next of kins
 */
function NextOfKin({ currentState, updateNextOfKins, props}) {
  /**
   * Fields to be displayed by show field button
   */
  const fields = [
    {name: "kinFirstName", type: 'text', placeholder: 'First Name', value: '', required: true, label: 'First Name '},
    {name: "kinMiddleName", type: 'text', placeholder: 'Middle Name', value: '', required: false, label: 'Middle Name '},
    {name: "kinLastName", type: 'text', placeholder: 'Last Name', value: '', required: true, label: 'Last Name '},
    {name: "kinAddress", type: 'text', placeholder: 'Address', value: '', required: true, label: 'Address '},
    {name: "kinMobileNo", type: 'phone', placeholder: '7743****', value: '', required: true, label: 'Registered Mobile Number '},
    {name: "kinEmail", type: 'text', placeholder: 'sample@example.com', value: '', required: false, label: 'Email '}
  ]

  /**
   * index to keep track of kin
   * kin used as current state being edited
   */
  const [kinIndex, setKinIndex] = useState(0);
  const [kin, setNextOfKin] = useState({});

  /**
   * Update the state of kin to be used in the form
   */
  useEffect(() => {
    var kinFromState = currentState.nextOfKins.find(k => k.index === kinIndex);
    if (typeof kinFromState === 'undefined') {
      kinFromState = { index: kinIndex };
    }
    setNextOfKin(kinFromState);
  },[kinIndex])
  
  /**
   * Update state in reducer when state changes
   */
  useEffect(() => {
    let nextKins = [...currentState.nextOfKins];
    let indexToReplace = kin.index
    nextKins[indexToReplace] = kin;
    updateNextOfKins(nextKins); 
  },[kin])
  
  /**
   * @function removeKin To remove a kin from the list
   * @param {number} index 
   */
  const removeKin = (index) => {
    let newkins = currentState.nextOfKins.filter((kin) => kin.index !== index)
    updateNextOfKins(newkins)
    setKinIndex(newkins[0].index)
  }

  return (
    <div>
      <div className='flex flex-column'>
        <div className='w-1/2 grid grid-cols-3 mb-4'>
          <h5 className='form-title-style col-span-2 col-start-2'>Landlord Next Of Kin</h5>
        </div>
        <div className='flex flex-row flex-wrap justify-center space-y-3' >
          {fields.map((field) => { return (showField(field, kin, setNextOfKin, currentState.nextOfKins, updateNextOfKins, props)) })}
        </div>
      </div>
      <AddButton 
        text='Next Of Kin' 
        setIndex={setKinIndex} 
        index={currentState.nextOfKins.length === 0 ? 0 : currentState.nextOfKins.at(-1).index + 1}
      />
      <EntityTrackerTableNextOfKin nextOfKins={currentState.nextOfKins} setIndex={setKinIndex} removeKin={removeKin}/>
    </div>
    
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(NextOfKin);


