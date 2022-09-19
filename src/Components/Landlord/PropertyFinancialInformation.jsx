import React from 'react';
import '../CSS/landlord.css';
import {connect} from 'react-redux';
import * as ACTIONS from '../../actions/actions';
import { useState } from 'react';

function mapStateToProps(state){
  return {
    currentState: {
      properties: state.landlordInfoReducer.properties
    }
  }
}

function mapDispatchToProps(dispatch){
  return{
    updateProperties: (properties) => dispatch(ACTIONS.property_info(properties))
  }
}



const selectDummy = ['a','b','c','d']

function addOptions(value) {
  return <option value={value}>{value}</option>
}

function showField(fieldProperties, propertyInfo, setPropertyInfo, properties, updateProperties, props) {
  
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
              value={propertyInfo.hasOwnProperty([fieldProperties.name]) ? propertyInfo[fieldProperties.name] : null}
              onChange={e => {
                setPropertyInfo({ ...propertyInfo, [fieldProperties.name]: e.target.value });
                let propertiesCopy = [...properties];
                propertiesCopy[propertyInfo.index] = propertyInfo;
                updateProperties(propertiesCopy);
                props.handleChange(e)
              }} />
            {props.errors[fieldProperties.name] && <div className='validation-style'>{props.errors[fieldProperties.name]}</div>}
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
            value={propertyInfo.hasOwnProperty(fieldProperties.name) ?
              propertyInfo[fieldProperties.name].id :
                null
              }  
            onChange={e => {
              setPropertyInfo(
                {
                  ...propertyInfo,
                  [fieldProperties.name]: {
                    id: e.target.value,
                  }
                }
              );
              let propertiesCopy = [...properties];
              propertiesCopy[propertyInfo.index]= propertyInfo;
              updateProperties(propertiesCopy);
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

function PropertyFinancialInformation({index, currentState, updateProperties, props}) {
  const fields = [
  {name: "minimumOccupancyPeriod", type: 'text', placeholder: '12 Months', value: '', required: true, label: 'MinimumOccupancyPeriod '},
  {name: "totalDeposit", type: 'text', placeholder: '433000', value: '', required: false, label: 'Total Deposit '},
  {name: "totalYearlyRent", type: 'text', placeholder: '340000', value: '', required: true, label: 'Total Yearly Rent'},
  {name: "loanDisbursementPeriod", type: 'text', placeholder: 'Quaterly', value: '', required: true, label: 'Disbursement Schedule '},
  {name: "oneMonthRent", type: 'text', placeholder: '230000', value: '', required: true, label: 'One Month Rent'},
  {name: "landlordDisbursement", type: 'text', placeholder: '545000', value: '', required: false, label: 'Landlord Disbursemnt '},
]

var propertyFromState = currentState.properties.find(p => p.index === index);
if (typeof propertyFromState === 'undefined'){
  propertyFromState = {index}
}

const [propertyInfo, setPropertyInfo] = useState(propertyFromState);


  return (
    <div className='flex flex-column'>
      <div className='flex flex-row flex-wrap justify-center space-y-3' >
        {fields.map((field) => {return showField(field, propertyInfo, setPropertyInfo, currentState.properties, updateProperties, props)})}
      </div>        
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(PropertyFinancialInformation)