import React, { useState, useEffect } from 'react';
import '../CSS/landlord.css';
import PhoneInput from 'react-phone-input-2';
import * as ACTIONS from '../../actions/tenantActions';
import {connect} from 'react-redux';
import 'react-phone-input-2/lib/style.css'


function mapStateToProps(state){
    return{
      currentState: {
        tenantInformation: state.TenantInformationReducer.tenantInformation
      }
    }
  }

  function mapDispatchToProps(dispatch){
    return {
      updateTenantInformation: (tenantInformation) => dispatch(ACTIONS.tenant_info(tenantInformation))
    }
  }
  
  function addOptions(value, name) {
    return <option value={value.id}>{value[name]}</option>
  }

  function showField(fieldProperties, tenantInformation, setTenantInformation, updateTenantInformation, props) {
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
                value={tenantInformation.hasOwnProperty([fieldProperties.name]) ? tenantInformation[fieldProperties.name] : null}
                className='input-field-style pl-4'
                id={fieldProperties.name}
                onChange={e => {
                    setTenantInformation({ ...tenantInformation, [fieldProperties.name]: e.target.value });
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
                  value={tenantInformation.hasOwnProperty(fieldProperties.name) ?
                    tenantInformation[fieldProperties.name].id :
                      null
                    }
                  className='basis-2/3 input-field-style pl-4'
                  onChange={e => {
                    setTenantInformation({...tenantInformation, [fieldProperties.name]: {id: e.target.value, optionName: e.target.selectedOptions[0].label}});
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
                value={tenantInformation.hasOwnProperty([fieldProperties.name]) ? tenantInformation[fieldProperties.name] : null}
                buttonClass='border-none bg-phone-dropdown-bg'
                containerClass='w-full h-10 pl-0'
                dropdownClass='flex flex-column items-start'
                inputClass='h-full w-full'
                onChange={number => {
                    setTenantInformation({ ...tenantInformation, [fieldProperties.name]: number });
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

function TenantInformation ({countries, idDocuments, currentState, updateTenantInformation, props}) {

    const individualTenantFields = [
        { name: "tenantFirstName", type: 'text', placeholder: 'Search or Enter Tenant', value: '', required: true, label: 'First Name ' },
        { name: "tenantMiddleName", type: 'text', placeholder: 'Middle Name', value: '', required: false, label: 'Middle Name ' },
        { name: "tenantLastName", type: 'text', placeholder: 'Last Name', value: '', required: true, label: 'Last Name ' },
        { name: "country", type: 'select', placeholder: 'Country', value: {}, required: true, label: 'Nationality ' , options: countries, field: 'countryName'},
        { name: "tin", type: 'text', placeholder: 'GH00000023', value: '', required: true, label: 'TIN ' },
        { name: "identificationType", type: 'select', placeholder: 'Identification Document', value: {}, required: true, label: 'Identification Document ', options: idDocuments, field: 'identificationName'},
        { name: "identificationNo", type: 'text', placeholder: '709790609', value: '', required: true, label: 'Identification Number '},
        { name: "address", type: 'text', placeholder: 'Address', value: '', required: true, label: 'Address ' },
        { name: "mobileNo", type: 'phone', placeholder: '700*** ****', value: '', required: true, label: 'Mobile Number ' },
        { name: "email", type: 'text', placeholder: 'sample@example.com', value: '', required: false, label: 'Email ' },
    ]

    const fieldsCorporate = [
        { name: "companyName", type: 'text', placeholder: 'Search Company', value: '', required: true, label: 'Company Name ' },
        { name: "country", type: 'select', placeholder: 'Select Country', value: {}, required: true, label: 'Nationality ' , options: countries, field: 'countryName'},
        { name: "registrationDate", type: 'date', placeholder: 'DD/MM/YYYY', value: '', required: true, label: 'Registration Date '},
        { name: "tin", type: 'text', placeholder: 'GH00000023', value: '', required: true, label: 'TIN ' },
        { name: "address", type: 'text', placeholder: 'Address', value: '', required: true, label: 'Address ' },
        { name: "mobileNo", type: 'text', placeholder: '700*** ****', value: '', required: true, label: 'Registered Mobile Number ' },
        { name: "email", type: 'text', placeholder: 'sample@example.com', value: '', required: false, label: 'Email ' },
    ]

    const [tenantInformation, setTenantInformation] = useState(currentState.tenantInformation);

    useEffect(() => {
        updateTenantInformation(tenantInformation);
      },[tenantInformation])


      return (
        <div className='flex flex-column mt-4'>
            <div className='w-1/2 grid grid-cols-3 mb-4'>
                <h5 className='form-title-style col-span-2 col-start-2'>Individual Tenant Information</h5>
            </div>

            <div className='grid grid-cols-3 mb-2 w-1/2'>
                <div className='text-start mr-2 flex justify-end items-center'>
                    <label className='label-style'>Tenant Type</label>
                    <label className='asterisk-field'>*</label>
                </div>
                <div className='col-span-2'>
                  <input type='radio' id='individual' name='tenantType'
                    className='radio-style' value='INDIVIDUAL'
                    checked={tenantInformation.tenantType === 'INDIVIDUAL'}
                    onChange={e => {
                        setTenantInformation({ ...tenantInformation, [e.target.name]: e.target.value });
                        updateTenantInformation(tenantInformation);
                    }}
                  />
                  <label for='individual' className='label-style pl-2 pr-2' >Individual</label>
                  <input type='radio' id='corporate' name='tenantType'
                    className='radio-style' value='CORPORATE'
                    checked={tenantInformation.tenantType === 'CORPORATE'}
                    onChange={e => {
                        setTenantInformation({ ...tenantInformation, [e.target.name]: e.target.value });
                        updateTenantInformation(tenantInformation);
                    }}
                  />
                  <label for='corporate' className='label-style pl-2 pr-2' >Corporate</label>
                </div>
            </div>
            <div className='flex flex-row flex-wrap justify-center space-y-3' >
              {tenantInformation.tenantType === 'INDIVIDUAL' ? 
                individualTenantFields.map((field) => { return (showField(field, tenantInformation, setTenantInformation, updateTenantInformation, props))})
                :
                fieldsCorporate.map((field) => { return (showField(field, tenantInformation, setTenantInformation, updateTenantInformation, props))})
              }
            </div>
        </div>
      )
}

export default connect(mapStateToProps, mapDispatchToProps)(TenantInformation);