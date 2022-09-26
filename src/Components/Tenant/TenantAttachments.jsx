
import React from 'react';
import '../CSS/landlord.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudUpload } from '@fortawesome/free-solid-svg-icons'
import {PostFile} from '../Landlord/ApiUtil';
import {connect} from 'react-redux';
import * as ACTIONS from '../../actions/tenantActions'

function mapStateToProps(state){
    return {
      currentState: {
        attachments: state.TenantInformationReducer.attachments
      }
    }
  }
  
  function mapDispatchToProps(dispatch){
    return{
      updateAttachments: (attachs) => dispatch(ACTIONS.attachment_info(attachs))
    }
  }

function showField(fieldProperties, updateAttachments, currentFiles, props) {
    return (
        <div className='flex flex-row w-1/2 ' key={fieldProperties.name}>
            <div className='basis-1/3 text-end mr-2 flex justify-end items-center'>
                <label className='label-style'>{fieldProperties.label}</label>
                {fieldProperties.required ? <label className='asterisk-field'>*</label> : null}
            </div>
            <label className='basis-5/12 file-field-style flex items-center' for={fieldProperties.name}>
                <FontAwesomeIcon icon={faCloudUpload} size='2x' className='pl-2 pr-2 cloud-upload-icon'/>
                <input 
                    id={fieldProperties.name} className='invisible-field w-full'
                    name = 'uploadedFile'
                    type={fieldProperties.type}
                    onChange={e => {
                        postFile(e.target.files[0])
                            .then(refData => {
                                let tempFiles = [...currentFiles];
                                let indexToUpdate = tempFiles.findIndex((file) => file.attachmentDocumentType.id === fieldProperties.id)
                                tempFiles[indexToUpdate] = {
                                    attachmentDocumentType: {
                                        id: fieldProperties.id,
                                        name: fieldProperties.name
                                    },
                                    uploadedFile: refData.fileRef,
                                    name: refData.name
                                }
                                updateAttachments(tempFiles)
                                console.log(currentFiles)
                            });
                        props.handleChange(e);
                    }
                    }
                />
                <span className='pl-2'>{!fieldProperties.value ? 'Choose File' : fieldProperties.value} </span>
            </label>
            <div className='basis-3/12 flex items-center ml-2'>
                {/* {props.errors[fieldProperties.name] && <label className='validation-style'>{props.errors[fieldProperties.name] }</label>} */}
                {!fieldProperties.value ? <label className='validation-style'>No File Chosen</label>: null}
            </div>
        </div>
    )
}


const postFile = (file) => {
    let formData = new FormData();
    formData.append("file", file);
    return PostFile(formData);
} 

function TenantAttachments({attachmentOwner, currentState, updateAttachments, props}) {
    const fields = [];
    currentState.attachments.map(attach => {
        const field = { 
            name: attach.attachmentDocumentType.name, type: 'file', 
            placeholder: 'Choose File', 
            value: attach.hasOwnProperty('uploadedFile') ? attach.name : null, 
            required: true, label:attach.attachmentDocumentType.name,
            id: attach.attachmentDocumentType.id
        }
        fields.push(field);
    })
  return (
      <div className='flex flex-column '>
          <div className='w-1/2 grid grid-cols-3 mb-4'>
              <h5 className='form-title-style col-span-2 col-start-2'>{attachmentOwner} Attachments</h5>
          </div>
          <div className='w-full space-y-3 flex flex-row flex-wrap' >
              {fields.map((field) => showField(field, updateAttachments, currentState.attachments, props))}
          </div>
          
      </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(TenantAttachments)