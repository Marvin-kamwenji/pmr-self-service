import React, { useState, useEffect } from 'react';
import '../CSS/landlord.css';
import {connect} from 'react-redux';
import * as ACTIONS from '../../actions/tenantActions';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

function mapStateToProps(state){
    return{
      currentState: {
        tenantEmployer: state.TenantInformationReducer.tenantEmployer
      }
    }
  }

function mapDispatchToProps(dispatch){
    return {
      updateTenantEmployer: (employerDetails) => dispatch(ACTIONS.employer_info(employerDetails))
    }
}

function addOptions(value, name) {
    return <option value={value.id}>{value[name]}</option>
  }

function showField(fieldProperties, tenantEmployers, setTenantEmployers, updateTenantEmployers, props) {
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
                            value={tenantEmployers.hasOwnProperty([fieldProperties.name]) ? tenantEmployers[fieldProperties.name] : null}
                            className='input-field-style pl-4'
                            id={fieldProperties.name}
                            onChange={e => {
                                setTenantEmployers({ ...tenantEmployers, [fieldProperties.name]: e.target.value });
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
                              value={tenantEmployers.hasOwnProperty(fieldProperties.name) ?
                                tenantEmployers[fieldProperties.name].id :
                                  null
                                }
                              className='basis-2/3 input-field-style pl-4'
                              onChange={e => {
                                setTenantEmployers({...tenantEmployers, [fieldProperties.name]: {id: e.target.value, optionName: e.target.selectedOptions[0].label}});
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
                                    value={tenantEmployers.hasOwnProperty([fieldProperties.name]) ? tenantEmployers[fieldProperties.name] : null}
                                    buttonClass='border-none bg-phone-dropdown-bg'
                                    containerClass='w-full h-10 pl-0'
                                    dropdownClass='flex flex-column items-start'
                                    inputClass='h-full w-full'
                                    onChange={number => {
                                        setTenantEmployers({ ...tenantEmployers, [fieldProperties.name]: number });
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

function EmploymentDetails({employmentType, contractType, currentState, updateTenantEmployer, props}){

    const fields = [
        { name: "employmentType", type: 'select', placeholder: 'Employment Type', value: {}, required: true, label: 'Employment Type ' , options: employmentType, field: 'name'},
        { name: "contractType", type: 'select', placeholder: 'Contract Type', value: {}, required: true, label: 'Contract Type ' , options: contractType, field: 'name'},
        { name: "monthlyNetSalary", type: 'text', placeholder: '300,000', value: '', required: true, label: 'Monthly Net Salary ' },
        { name: "employerName", type: 'text', placeholder: 'Employer Name', value: '', required: true, label: 'Employer Name ' },
        { name: "address", type: 'text', placeholder: 'Address', value: '', required: true, label: 'Address ' },
        { name: "mobileNumber", type: 'phone', placeholder: '700 *** ****', value: '', required: true, label: 'Mobile Number ' },
        { name: "emailAddress", type: 'text', placeholder: 'sample@gmail.com', value: '', required: true, label: 'E-mail Address ' },

    ]

    const [tenantEmployer, setTenantEmployer] = useState(currentState.tenantEmployer);

    useEffect(() => {
        updateTenantEmployer(tenantEmployer);
      },[tenantEmployer])


      return (
        <div>
      <div className='flex flex-column'>
        <div className='w-1/2 grid grid-cols-3 mb-4'>
          <h5 className='form-title-style col-span-2 col-start-2'>EMPLOYER DETAILS</h5>
        </div>
        <div className='flex flex-row flex-wrap justify-center space-y-3' >
          {fields.map((field) => { return (showField(field, tenantEmployer, setTenantEmployer, updateTenantEmployer, props)) })}
        </div>
      </div>
      </div>
      )
}

export default connect(mapStateToProps, mapDispatchToProps)(EmploymentDetails);
