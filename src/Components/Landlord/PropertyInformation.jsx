import React from 'react';
import '../CSS/landlord.css';
import SegmentSeparator from './SegmentSeparator';
import PropertyFinancialInformation from './PropertyFinancialInformation';
import { useState } from 'react';

import {connect} from 'react-redux';
import * as ACTIONS from '../../actions/actions'

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

function addOptions(value, name) {
  return <option value={value.id}>{value[name]}</option>
}

function showField(fieldProperties, propertyInfo, setPropertyInfo, properties, updateProperties) {
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
            value={propertyInfo.hasOwnProperty([fieldProperties.name]) ? propertyInfo[fieldProperties.name] : null}
            onChange={e => {
              setPropertyInfo({ ...propertyInfo, [fieldProperties.name]: e.target.value });
              let propertiesCopy = [...properties];
              propertiesCopy[propertyInfo.index]= propertyInfo;
              updateProperties(propertiesCopy);
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
            value={propertyInfo.hasOwnProperty(fieldProperties.name) ?
              propertyInfo[fieldProperties.name].id :
               null}
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
            {fieldProperties.options.map(option => addOptions(option, fieldProperties.field))}
          </select>
        </div>
      )
    default:
      break;
  }
  
}

function PropertyInformation({index, propertyTypes, bedrooms, regions, currentState, updateProperties}) {
  const fields = [
    {name: "propertyType", type: 'select', placeholder: 'Type', value: '', required: true, label: 'Property Type ', options: propertyTypes, field: 'propertyType'},
    {name: "address", type: 'text', placeholder: 'Address', value: '', required: true, label: 'Address '},
    {name: "propertyName", type: 'text', placeholder: 'Property Name', value: '', required: true, label: 'Property Name '},
    {name: "mobile", type: 'text', placeholder: '700*****', value: '', required: true, label: 'Registered Mobile No '},
    {name: "bedroom", type: 'select', placeholder: 'No of Bedrooms', value: '', required: true, label: 'Bedroom', options: bedrooms, field: 'description'},
    {name: "email", type: 'text', placeholder: 'sample@example.com', value: '', required: false, label: 'Email '},
    {name: "propertyIdentity", type: 'text', placeholder: 'House 10', value: '', required: true, label: 'Property Identity '},
    {name: "region", type: 'select', placeholder: 'Region', value: '', required: true, label: 'Region ', options: regions, field:'geographicRegionName'},
    {name: "road", type: 'text', placeholder: 'Road A', value: '', required: true, label: 'Road '},
    {name: "landlordRequest", type: 'text', placeholder: '50,000', value: '', required: true, label: 'Landlord Request '},
    {name: "gpsLocation", type: 'text', placeholder: 'GPS Location', value: '', required: true, label: 'GPS Location '},
    {name: "threeMonthRent", type: 'text', placeholder: '5000000', value: '', required: false, label: '3 Month rent '},
  ] ;

  var propertyFromState = currentState.properties.find(p => p.index === index);
  if (typeof propertyFromState === 'undefined'){
    propertyFromState = {index}
  }

  const [propertyInfo, setPropertyInfo] = useState(propertyFromState);


  return (
    <div className='flex flex-column'>
      <div className='w-1/2 grid grid-cols-3 mb-4'>
        <h5 className='form-title-style col-span-2 col-start-2'>Property Information</h5>
      </div>
      <div className='grid grid-cols-3 mb-2 w-1/2'>
        <div className='text-start mr-2 flex justify-end items-center'>
          <label className='label-style'>Property Type</label>
          <label className='asterisk-field'>*</label>
        </div>
        <div className='col-span-2'>
          <input type='radio' id='individual' name='landlordType' className='radio-style'
            value='INDIVIDUAL'
            onChange={e => {
              setPropertyInfo({ ...propertyInfo, [e.target.id]: e.target.value });
              let properties = [...currentState.properties];
              properties[propertyInfo.index]= propertyInfo;
              updateProperties(properties);
            }}
          />
          <label for='individual' className='label-style pl-2 pr-2'>Individual</label>
          <input type='radio' id='corporate' name='landlordType' className='radio-style'
            value='CORPORATE'
            onChange={e => {
              setPropertyInfo({ ...propertyInfo, [e.target.id]: e.target.value });
              let properties = [...currentState.properties];
              properties[propertyInfo.index]= propertyInfo;
              updateProperties(properties);
            }}
          />
          <label for='corporate' className='label-style pl-2 pr-2' >Corporate</label>
        </div>
      </div>
      <div className='flex flex-row flex-wrap justify-center space-y-3' >
        {fields.map((field) => {return showField(field, propertyInfo, setPropertyInfo, currentState.properties, updateProperties)})}
      </div>
      <SegmentSeparator/>
      <PropertyFinancialInformation index={index}/>        
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(PropertyInformation)