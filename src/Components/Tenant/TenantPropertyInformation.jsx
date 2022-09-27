import React, { useState, useEffect } from 'react';
import '../CSS/landlord.css';
import {connect} from 'react-redux';
import * as ACTIONS from '../../actions/tenantActions';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

function mapStateToProps(state){
    return{
      currentState: {
        propertyInformation: state.TenantInformationReducer.propertyInformation
      }
    }
  }

function mapDispatchToProps(dispatch){
    return {
      updatePropertyInformation: (propertyInformation) => dispatch(ACTIONS.property_info(propertyInformation))
    }
}

function addOptions(value, name) {
    return <option value={value.id}>{value[name]}</option>
  }

  function showField(fieldProperties, propertyInformation, setPropertyInformation, updatePropertyInformation, props) {
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
                            value={propertyInformation.hasOwnProperty([fieldProperties.name]) ? propertyInformation[fieldProperties.name] : null}
                            className='input-field-style pl-4'
                            id={fieldProperties.name}
                            onChange={e => {
                                setPropertyInformation({ ...propertyInformation, [fieldProperties.name]: e.target.value });
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
                              value={propertyInformation.hasOwnProperty(fieldProperties.name) ?
                                propertyInformation[fieldProperties.name].id :
                                  null
                                }
                              className='basis-2/3 input-field-style pl-4'
                              onChange={e => {
                                setPropertyInformation({...propertyInformation, [fieldProperties.name]: {id: e.target.value, optionName: e.target.selectedOptions[0].label}});
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
                                    value={propertyInformation.hasOwnProperty([fieldProperties.name]) ? propertyInformation[fieldProperties.name] : null}
                                    buttonClass='border-none bg-phone-dropdown-bg'
                                    containerClass='w-full h-10 pl-0'
                                    dropdownClass='flex flex-column items-start'
                                    inputClass='h-full w-full'
                                    onChange={number => {
                                        setPropertyInformation({ ...propertyInformation, [fieldProperties.name]: number });
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


function TenantPropertyInformation({propertyType, bedrooms, regions, currentState, updatePropertyInformation, props}){

    const fields = [
        { name: "propertyType", type: 'select', placeholder: 'Apartment', value: {}, required: true, label: 'Property Type ' , options: propertyType, field: 'propertyType'},
        { name: "propertyName", type: 'text', placeholder: 'Property Name', value: '', required: false, label: 'Property Name ' },
        { name: "bedrooms", type: 'select', placeholder: '2 Bedroom', value: {}, required: true, label: 'Bedroom ' , options: bedrooms, field: 'description'},   
        { name: "propertyIdentity", type: 'text', placeholder: 'House Number 10', value: '', required: true, label: 'Property Identity' },
        { name: "region", type: 'select', placeholder: 'Region', value: {}, required: true, label: 'Region ' , options: regions, field: 'geographicRegionName'},   
        { name: "road", type: 'text', placeholder: 'Road A', value: '', required: true, label: 'Road' },
        { name: "landlordRequest", type: 'text', placeholder: '50,000', value: '', required: true, label: 'Landlord Request' },
        { name: "address", type: 'text', placeholder: 'Address', value: '', required: true, label: 'Address ' },
        { name: "mobileNo", type: 'phone', placeholder: '700 *** ****', value: '', required: false, label: 'Registered Mobile Number ' },
        { name: "emailAddress", type: 'text', placeholder: 'sample@gmail.com', value: '', required: true, label: 'E-mail Address ' },

    ]

    const [propertyInformation, setPropertyInformation] = useState(currentState.propertyInformation);

    useEffect(() => {
        updatePropertyInformation(propertyInformation);
      },[propertyInformation])

    return(
        <div>
        <div className='flex flex-column'>
          <div className='w-1/2 grid grid-cols-3 mb-4'>
            <h5 className='form-title-style col-span-2 col-start-2'>PROPERTY INFORMATION</h5>
          </div>
          <div className='flex flex-row flex-wrap justify-center space-y-3' >
            {fields.map((field) => { return (showField(field, propertyInformation, setPropertyInformation, updatePropertyInformation, props)) })}
          </div>
        </div>
        </div>
    )

}


export default connect(mapStateToProps, mapDispatchToProps)(TenantPropertyInformation);