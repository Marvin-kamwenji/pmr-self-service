/**
 * @classdesc A section of the property information for displaying details concerning finance
 */
import React from 'react';
import '../CSS/landlord.css';
import {connect} from 'react-redux';
import * as ACTIONS from '../../actions/actions';
import { useState, useEffect } from 'react';

/**
 * @function mapStateToProps map state to props
 * @param {object} state state from reducer
 * @returns returns the current state
 */
function mapStateToProps(state){
  return {
    currentState: {
      properties: state.landlordInfoReducer.properties
    }
  }
}

/**
 * @function mapDispatchToProps defines the function to dispatch an action
 * @param {function} dispatch 
 * @returns function to dispatch an action
 */
function mapDispatchToProps(dispatch){
  return{
    updateProperties: (properties) => dispatch(ACTIONS.property_info(properties))
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
 * @param {object} propertyInfo with state being updated
 * @param {function} setPropertyInfo to change state
 * @param {array} properties properties from reducer
 * @param {function} updateProperties dispatch properties
 * @param {object} props for formik validation
 * @returns A field
 */
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
                props.handleChange(e)
                console.log(propertyInfo.index)
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
              props.handleChange(e)
            }}>
              <option hidden selected value>--- Select {fieldProperties.placeholder} ---</option>
            {fieldProperties.options.map((option) => {addOptions(option, fieldProperties.name)})}
          </select>
        </div>
      )
    default:
      break;
  }
}

function PropertyFinancialInformation({propertyIndex, currentState, updateProperties, props}) {
  /**
   * Field attributes of fields to display
   */
  const fields = [
  {name: "minimumOccupancyPeriod", type: 'text', placeholder: '12 Months', value: '', required: true, label: 'MinimumOccupancyPeriod '},
  {name: "totalDeposit", type: 'text', placeholder: '433000', value: '', required: false, label: 'Total Deposit '},
  {name: "totalYearlyRent", type: 'text', placeholder: '340000', value: '', required: true, label: 'Total Yearly Rent'},
  {name: "loanDisbursementPeriod", type: 'text', placeholder: 'Quaterly', value: '', required: true, label: 'Disbursement Schedule '},
  {name: "oneMonthRent", type: 'text', placeholder: '230000', value: '', required: true, label: 'One Month Rent'},
  {name: "landlordDisbursement", type: 'text', placeholder: '545000', value: '', required: false, label: 'Landlord Disbursemnt '},
]

/**
 * State to be used in the form
 */
const [propertyInfo, setPropertyInfo] = useState({});

/**
 * Update the correct state when index is changed
 */
useEffect(() => {
  var propertyFromState = currentState.properties.find(p => p.index === propertyIndex);
  if (typeof propertyFromState === 'undefined') {
    propertyFromState = { index: propertyIndex };
  }
  setPropertyInfo(propertyFromState);
},[propertyIndex])

/**
 * Update reducer state when state of the form changes
 */
useEffect(() => {
  let propertiesCopy = [...currentState.properties];
  propertiesCopy[propertyInfo.index]= propertyInfo;
  updateProperties(propertiesCopy);
},[propertyInfo])

/**
 * Display section for financial information
 */
  return (
    <div className='flex flex-column'>
      <div className='flex flex-row flex-wrap justify-center space-y-3' >
        {fields.map((field) => {return showField(field, propertyInfo, setPropertyInfo, currentState.properties, updateProperties, props)})}
      </div>        
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(PropertyFinancialInformation)