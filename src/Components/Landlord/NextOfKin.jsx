import React from 'react';
import { useState, useEffect } from 'react';
import '../CSS/landlord.css'


import {connect} from 'react-redux';
import * as ACTIONS from '../../actions/actions'
import { AddButton, EntityTrackerTableNextOfKin } from './EntityTrackerTable';


function mapStateToProps(state){
  return {
    currentState: {
      nextOfKins: state.landlordInfoReducer.nextOfKins
    }
  }
}

function mapDispatchToProps(dispatch){
  return{
    updateNextOfKins: (next_of_kins) => dispatch(ACTIONS.next_of_kins(next_of_kins))
  }
}

function showField(fieldProperties, nextOfKin, setNextOfKin, nextOfKins, updateNextOfKins, props) {
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
}

function NextOfKin({ currentState, updateNextOfKins, props}) {
  const fields = [
    {name: "kinFirstName", type: 'text', placeholder: 'First Name', value: '', required: true, label: 'First Name '},
    {name: "kinMiddleName", type: 'text', placeholder: 'Middle Name', value: '', required: false, label: 'Middle Name '},
    {name: "kinLastName", type: 'text', placeholder: 'Last Name', value: '', required: true, label: 'Last Name '},
    {name: "kinAddress", type: 'text', placeholder: 'Address', value: '', required: true, label: 'Address '},
    {name: "kinMobileNo", type: 'text', placeholder: '7743****', value: '', required: true, label: 'Registered Mobile Number '},
    {name: "kinEmail", type: 'text', placeholder: 'sample@example.com', value: '', required: false, label: 'Email '}
  ]

  const [kinIndex, setKinIndex] = useState(0);
  const [kin, setNextOfKin] = useState({});

  useEffect(() => {
    var kinFromState = currentState.nextOfKins.find(k => k.index === kinIndex);
    if (typeof kinFromState === 'undefined') {
      kinFromState = { index: kinIndex };
    }
    setNextOfKin(kinFromState);
  },[kinIndex])
  
  useEffect(() => {
    let nextKins = [...currentState.nextOfKins];
    let indexToReplace = kin.index
    nextKins[indexToReplace] = kin;
    updateNextOfKins(nextKins); 
  },[kin])

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


