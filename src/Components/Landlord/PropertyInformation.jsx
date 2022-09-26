/**
 * @author Mesh
 * @classdesc Component displaying basic information of the class
 */
import React from 'react';
import '../CSS/landlord.css';
import SegmentSeparator from './SegmentSeparator';
import PropertyFinancialInformation from './PropertyFinancialInformation';
import { useState, useEffect } from 'react';
import { AddButton, EntityTrackerTableProperty } from './EntityTrackerTable';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import {connect} from 'react-redux';
import * as ACTIONS from '../../actions/actions'

/**
 * @function mapStateToProps to get state from reducer
 * @param {object} state from reducer
 * @returns state in the reducer
 */
function mapStateToProps(state){
  return {
    currentState: {
      properties: state.landlordInfoReducer.properties
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
function showField(fieldProperties, propertyInfo, setPropertyInfo, props) {
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
            value={propertyInfo.hasOwnProperty(fieldProperties.name) ?
              propertyInfo[fieldProperties.name].id :
               null}
            onChange={e => {
              setPropertyInfo(
                {
                  ...propertyInfo,
                  [fieldProperties.name]: {
                    id: e.target.value,
                    optionName: e.target.selectedOptions[0].label
                  }
                }
              );
              props.handleChange(e);
            }}>
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
              value={propertyInfo.hasOwnProperty([fieldProperties.name]) ? propertyInfo[fieldProperties.name] : null}
              buttonClass='border-none bg-phone-dropdown-bg'
              containerClass='w-full h-10 pl-0'
              dropdownClass='flex flex-column items-start'
              inputClass='h-full w-full'
              onChange={number => {
                setPropertyInfo({ ...propertyInfo, [fieldProperties.name]: number });
              }}
              inputProps={{ required: true }}
            />
            {props.errors[fieldProperties.name] && <div className='validation-style'>{props.errors[fieldProperties.name]}</div>}
          </div>

        </div>
      )
    default:
      break;
  }
  
}

/**
 * @function PropertyInformation to display property information section
 * @param {array} propertyTypes to be displayed in the dropdown 
 * @param {array} bedrooms to be displayed in the dropdown 
 * @param {array} regions to be displayed in the dropdown 
 * @param {object} currentState from reducer
 * @param {function} updateProperties to dispatch to reducer
 * @returns Section of property information
 */
function PropertyInformation({ propertyTypes, bedrooms, regions, currentState, updateProperties, props}) {
  /**
   * Displays attributes of fields to ne displayed
   */
  const fields = [
    {name: "propertyType", type: 'select', placeholder: 'Type', value: '', required: true, label: 'Property Type ', options: propertyTypes, field: 'propertyType'},
    {name: "address", type: 'text', placeholder: 'Address', value: '', required: true, label: 'Address '},
    {name: "propertyName", type: 'text', placeholder: 'Property Name', value: '', required: true, label: 'Property Name '},
    {name: "mobile", type: 'phone', placeholder: '700*****', value: '', required: true, label: 'Registered Mobile No '},
    {name: "bedroom", type: 'select', placeholder: 'No of Bedrooms', value: '', required: true, label: 'Bedroom', options: bedrooms, field: 'description'},
    {name: "email", type: 'text', placeholder: 'sample@example.com', value: '', required: false, label: 'Email '},
    {name: "propertyIdentity", type: 'text', placeholder: 'House 10', value: '', required: true, label: 'Property Identity '},
    {name: "region", type: 'select', placeholder: 'Region', value: '', required: true, label: 'Region ', options: regions, field:'geographicRegionName'},
    {name: "road", type: 'text', placeholder: 'Road A', value: '', required: true, label: 'Road '},
    {name: "landlordRequest", type: 'text', placeholder: '50,000', value: '', required: true, label: 'Landlord Request '},
    {name: "gpsLocation", type: 'text', placeholder: 'GPS Location', value: '', required: true, label: 'GPS Location '},
    {name: "threeMonthRent", type: 'text', placeholder: '5000000', value: '', required: false, label: '3 Month rent '},
  ] ;

  /**
   * Index of the property being updated
   */
  const [propertyIndex, setPropertyIndex] = useState(0);
  /**
   * State of property to edited in the form
   */
  const [propertyInfo, setPropertyInfo] = useState({});

  /**
   * Update state when index changes
   */
  useEffect(() => {
    var propertyFromState = currentState.properties.find(p => p.index === propertyIndex);
    if (typeof propertyFromState === 'undefined') {
      propertyFromState = { index: propertyIndex };
    }
    setPropertyInfo(propertyFromState);
  },[propertyIndex])

  /**
   * Update state in reducer
   */
  useEffect(() => {
    let propertiesCopy = [...currentState.properties];
    propertiesCopy[propertyInfo.index]= propertyInfo;
    updateProperties(propertiesCopy);
  },[propertyInfo])

/**
 * @function removeProperty remove a property from displayed table
 * @param {number} index of property to be removed
 * @param {array} properties from reducer
 * @param {function} updateProperties dispatch update function
 */
  const removeProperty = (index) => {
    let properties = currentState.properties.filter((p) => p.index !== index)
    updateProperties(properties)
    setPropertyIndex(properties[0].index)
  }

  return (
    <div>
      <div className='flex flex-column'>
        <div className='w-1/2 grid grid-cols-3 mb-4'>
          <h5 className='form-title-style col-span-2 col-start-2'>Property Information</h5>
        </div>
        <div className='flex flex-row flex-wrap justify-center space-y-3' >
          {fields.map((field) => { return showField(field, propertyInfo, setPropertyInfo, props) })}
        </div>
        <SegmentSeparator />
        <PropertyFinancialInformation propertyIndex={propertyIndex} props={props} />
      </div>
      <AddButton text='Property' 
              setIndex={setPropertyIndex} 
              index={currentState.properties.length === 0 ? 0 : currentState.properties.at(-1).index + 1} 
      />
      <EntityTrackerTableProperty
        properties={currentState.properties}
        setIndex={setPropertyIndex}
        removeProperty={removeProperty}
      />
    </div>
    
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(PropertyInformation)