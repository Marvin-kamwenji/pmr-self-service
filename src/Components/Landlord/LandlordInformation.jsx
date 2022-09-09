import React from 'react';
import '../CSS/landlord.css'


const selectDummy = ['a','b','c','d']

function addOptions(value, name) {
    return <option value={value.id}>{value[name]}</option>
  }

  function showField(fieldProperties, object, setObject) {
    switch (fieldProperties.type) {
      case 'text':
        return (
          <div className='flex flex-row col-6' key={fieldProperties.name}>
            <div className='basis-1/3 text-end mr-2 flex justify-end items-center'>
              <label className='label-style'>{fieldProperties.label}</label>
              {fieldProperties.required ? <label className='asterisk-field'>*</label> : null}
            </div>
            <input placeholder={fieldProperties.placeholder}
              value={object[fieldProperties.name]}
              className='basis-2/3 input-field-style pl-4'
              id={fieldProperties.name}
              onChange={e => {
                setObject({ ...object, [fieldProperties.name]: e.target.value });
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
            <select name={fieldProperties.name}
              value={object.hasOwnProperty(fieldProperties.name) ?
                object[fieldProperties.name].id :
                  null
                }
              className='basis-2/3 input-field-style pl-4'
              onChange={e => {
                setObject({ ...object, [fieldProperties.name]:{id: e.target.value} });
              }}
            >
              <option hidden disabled selected value>--- Select {fieldProperties.placeholder} ---</option>
              {fieldProperties.options.map(option => addOptions(option, fieldProperties.field))}
            </select>
          </div>
        )
      default:
        break;
    }

  }


export default function LandlordInformation({landlord, setLandlord, countries, idDocuments}) {
    const fields = [
        { name: "firstName", type: 'text', placeholder: 'First Name', value: '', required: true, label: 'First Name ' },
        { name: "middleName", type: 'text', placeholder: 'Middle Name', value: '', required: false, label: 'Middle Name ' },
        { name: "lastName", type: 'text', placeholder: 'Last Name', value: '', required: true, label: 'Last Name ' },
        { name: "address", type: 'text', placeholder: 'Address', value: '', required: true, label: 'Address ' },
        { name: "mobileNo", type: 'text', placeholder: '7743****', value: '', required: true, label: 'Registered Mobile Number ' },
        { name: "email", type: 'text', placeholder: 'sample@example.com', value: '', required: false, label: 'Email ' },
        { name: "country", type: 'select', placeholder: 'Country', value: {}, required: true, label: 'Nationality ' , options: countries, field: 'countryName'},
        { name: "tin", type: 'text', placeholder: 'TIN', value: '', required: true, label: 'TIN ' },
        { name: "identificationType", type: 'select', placeholder: 'Identification Document', value: {}, required: true, label: 'Identification Document ', options: idDocuments, field: 'identificationName'},
        { name: "identificationNo", type: 'text', placeholder: 'Identification No', value: '', required: true, label: 'Identification Number '},
    ]
    
    return (
        <div className='flex flex-column mt-4'>
            <div className='w-1/2 grid grid-cols-3 mb-4'>
                <h5 className='form-title-style col-span-2 col-start-2'>Individual Landlord Information</h5>
            </div>
            <div className='grid grid-cols-3 mb-2 w-1/2'>
                <div className='text-start mr-2 flex justify-end items-center'>
                    <label className='label-style'>Landlord Type</label>
                    <label className='asterisk-field'>*</label>
                </div>
                <div className='col-span-2'>
                    <input type='radio' id='individual' name='landlordType' className='radio-style' value='INDIVIDUAL'
                        onChange={e => {
                            setLandlord({ ...landlord, [e.target.id]: e.target.value });
                        }}
                    />
                    <label for='individual' className='label-style pl-2 pr-2' >Individual</label>
                    <input type='radio' id='corporate' name='landlordType' className='radio-style' value='CORPORATE'
                        onChange={e => {
                            setLandlord({ ...landlord, [e.target.id]: e.target.value });
                        }}
                    />
                    <label for='corporate' className='label-style pl-2 pr-2' >Corporate</label>
                </div>
            </div>
            <div className='flex flex-row flex-wrap justify-center space-y-3' >
                {fields.map((field) => { return (showField(field, landlord, setLandlord))})}
            </div>
        </div>
    )
}
