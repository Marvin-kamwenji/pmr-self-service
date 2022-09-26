import React, { useState, useEffect } from 'react';
import '../CSS/landlord.css';
import {connect} from 'react-redux';
import * as ACTIONS from '../../actions/tenantActions';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'


function mapStateToProps(state){
    return{
      currentState: {
        landlordInformation: state.TenantInformationReducer.landlordInformation
      }
    }
  }

function mapDispatchToProps(dispatch){
    return {
      updateLandlordInformation: (landlordInformation) => dispatch(ACTIONS.landlord_info(landlordInformation))
    }
}

function addOptions(value, name) {
    return <option value={value.id}>{value[name]}</option>
  }


  function showField(fieldProperties, landlordInformation, setLandlordInformation, updateLandlordInformation, props) {
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
                            value={landlordInformation.hasOwnProperty([fieldProperties.name]) ? landlordInformation[fieldProperties.name] : null}
                            className='input-field-style pl-4'
                            id={fieldProperties.name}
                            onChange={e => {
                                setLandlordInformation({ ...landlordInformation, [fieldProperties.name]: e.target.value });
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
                              value={landlordInformation.hasOwnProperty(fieldProperties.name) ?
                                landlordInformation[fieldProperties.name].id :
                                  null
                                }
                              className='basis-2/3 input-field-style pl-4'
                              onChange={e => {
                                setLandlordInformation({...landlordInformation, [fieldProperties.name]: {id: e.target.value, optionName: e.target.selectedOptions[0].label}});
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
                                    value={landlordInformation.hasOwnProperty([fieldProperties.name]) ? landlordInformation[fieldProperties.name] : null}
                                    buttonClass='border-none bg-phone-dropdown-bg'
                                    containerClass='w-full h-10 pl-0'
                                    dropdownClass='flex flex-column items-start'
                                    inputClass='h-full w-full'
                                    onChange={number => {
                                        setLandlordInformation({ ...landlordInformation, [fieldProperties.name]: number });
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


function TenantLandlordInformation({currentState, updateLandlordInformation, props}){

    const fields = [
        { name: "firstName", type: 'text', placeholder: 'First Name', value: '', required: true, label: 'First Name ' },
        { name: "middleName", type: 'text', placeholder: 'Middle Name', value: '', required: false, label: 'Middle Name ' },
        { name: "lastName", type: 'text', placeholder: 'Last Name', value: '', required: true, label: 'Last Name ' },
        { name: "address", type: 'text', placeholder: 'Address', value: '', required: true, label: 'Address ' },
        { name: "mobileNumber", type: 'phone', placeholder: '700 *** ****', value: '', required: true, label: 'Mobile Number ' },
        { name: "emailAddress", type: 'text', placeholder: 'sample@gmail.com', value: '', required: false, label: 'E-mail Address ' },

    ]

    const [landlordInformation, setLandlordInformation] = useState(currentState.landlordInformation);

    useEffect(() => {
        updateLandlordInformation(landlordInformation);
      },[landlordInformation])

return(
    <div>
    <div className='flex flex-column'>
      <div className='w-1/2 grid grid-cols-3 mb-4'>
        <h5 className='form-title-style col-span-2 col-start-2'>LANDLORD INFORMATION</h5>
      </div>
      <div className='flex flex-row flex-wrap justify-center space-y-3' >
        {fields.map((field) => { return (showField(field, landlordInformation, setLandlordInformation,  updateLandlordInformation, props)) })}
      </div>
    </div>
    </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(TenantLandlordInformation);