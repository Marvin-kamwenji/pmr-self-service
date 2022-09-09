import React from 'react';
import '../CSS/landlord.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faCloudUpload } from '@fortawesome/free-solid-svg-icons'


const fields = [
    { name: "profilePhoto", type: 'file', placeholder: 'Choose File', value: '', required: true, label: 'Photo' },
    { name: "idOrPassportFront", type: 'file', placeholder: 'Choose File', value: '', required: false, label: 'Id/Passport Front ' },
    { name: "idOrPassportBack", type: 'file', placeholder: 'Choose File', value: '', required: true, label: 'Id/Passprt Back ' }
]


function showField(fieldProperties) {
    return (
        <div className='flex flex-row basis-1/2'>
            <div className='basis-1/3 text-end mr-2 flex justify-end items-center'>
                <label className='label-style'>{fieldProperties.label}</label>
                {fieldProperties.required ? <label className='asterisk-field'>*</label> : null}
            </div>
            <label className='basis-5/12 file-field-style flex items-center' for={fieldProperties.name}>
                <FontAwesomeIcon icon={faCloudUpload} size='2x' className='pl-2 cloud-upload-icon'/>
                <input id={fieldProperties.name} className='invisible-field' type={fieldProperties.type} placeholder={fieldProperties.placeholder} id={fieldProperties.name} />
                <span className='pl-2'>some-file.name</span>
            </label>
            <div className='basis-3/12 flex items-center ml-2'>
                <label>No File Chosen</label>
            </div>
        </div>
    )
}



export default function Attachment({attachmentOwner}) {
  return (
      <div className='flex flex-column'>
          <div className='w-1/2 grid grid-cols-3 mb-4'>
              <h5 className='form-title-style col-span-2 col-start-2'>{attachmentOwner} Attachments</h5>
          </div>
          <div className='w-1/2 space-y-3' >
              {fields.map(showField)}
          </div>
      </div>
  )
}
