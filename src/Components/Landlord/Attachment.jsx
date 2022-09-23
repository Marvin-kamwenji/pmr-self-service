/**
 * @author Mesh
 * @classdesc to display the attachment based on the document types from api call
 */
import React from 'react';
import '../CSS/landlord.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudUpload } from '@fortawesome/free-solid-svg-icons'
import {PostFile} from './ApiUtil';
import {connect} from 'react-redux';
import * as ACTIONS from '../../actions/actions'

/**
 * 
 * @param {object} state  State from landlord reducer
 * @returns current state which has attachment files array
 */
function mapStateToProps(state){
    return {
      currentState: {
        attachmentFiles: state.landlordInfoReducer.attachmentFiles
      }
    }
  }
  
  /**
   * 
   * @param {function} dispatch Dispatcer from landlord reducer
   * @returns functions to update reducer state
   */
  function mapDispatchToProps(dispatch){
    return{
      updateAttachmentFiles: (attachs) => dispatch(ACTIONS.attachments_info(attachs))
    }
  }

/**
 * @function showField to show a field based on the properties object passed
 * @param {object} fieldProperties attributes of the field to be displayed
 * @param {function} updateAttachmentFiles update the reducer with list of attachment files
 * @param {array} currentFiles List of the current attachment files
 * @param {object} props Props from formik for validation
 * @returns An attachment field input of type file
 */

function showField(fieldProperties, updateAttachmentFiles, currentFiles, props) {
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
                                updateAttachmentFiles(tempFiles)
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

/**
 * @function postFile make a post to upload a file to storage
 * @param {*} file 
 * @returns promise to return an object with file reference
 */
const postFile = (file) => {
    let formData = new FormData();
    formData.append("file", file);
    return PostFile(formData);
} 

/**
 * @function Attachment Display fields for attachments to be uploaded
 * @param {string} attachmentOwner String to display at the section header
 * @param {object} currentState Current state from the landlord reducer
 * @param {function} updateAttachmentFiles Change the reducer state of attachment files
 * @param {object} props validation object for Formik
 * @returns 
 */
function Attachment({attachmentOwner, currentState, updateAttachmentFiles, props}) {
    /**
     * Array of objects defining attributes of fields to be displayed
     */
    const fields = [];
    /**
     * Logic appending field properties mapped from the attachment filess requiired
     */
    currentState.attachmentFiles.map(attach => {
        const field = { 
            name: attach.attachmentDocumentType.name, type: 'file', 
            placeholder: 'Choose File', 
            value: attach.hasOwnProperty('uploadedFile') ? attach.name : null, 
            required: true, label:attach.attachmentDocumentType.name,
            id: attach.attachmentDocumentType.id
        }
        fields.push(field);
    })
    /**
     * Return the attachment upload section
     */
  return (
      <div className='flex flex-column '>
          <div className='w-1/2 grid grid-cols-3 mb-4'>
              <h5 className='form-title-style col-span-2 col-start-2'>{attachmentOwner} Attachments</h5>
          </div>
          <div className='w-full space-y-3 flex flex-row flex-wrap' >
              {fields.map((field) => showField(field, updateAttachmentFiles, currentState.attachmentFiles, props))}
          </div>
          
      </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Attachment)