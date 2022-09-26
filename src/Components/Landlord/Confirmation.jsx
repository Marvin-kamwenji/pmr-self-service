/**
 * @author Mesh
 * @classdesc Component to display the current entered information from the reducer state
 * This component enables the user to confirm the data to be uploaded
 */
import React from 'react';
import '../CSS/landlord.css';
import {toTitleCase} from './EntityTrackerTable'

/**
 * @function showField to display a label and a value to the label
 * @param {string} key Value to be placed at the label
 * @param {string} value Value of the attribute
 * @returns 
 */
function showField(key, value){
    if (key !== 'index') {
        return (
            <div className='flex flex-row basis-1/2' key={key}>
                <div className='basis-1/3 text-end mr-2 flex justify-start items-center'>
                    <label className='label-style-conf'>{toTitleCase(key)}</label>
                </div>
                <div className='flex basis-2/3 justify-start text-start ml-2 items-center'>
                    <label className='confirm-field'>{value}</label>
                </div>
            </div>
        )
    }    
}

/**
 * @function showDetails takes an object and displays as key value pairs in a section
 * @param {object} object whose properties are to be displayed
 * @param {string} title to be displayed at the section Head
 * @returns A section containig existing details of the passed object
 */
function showDetails(object, title){
    return (
        <div>
            <div className=' grid grid-cols-12'>
                <div className='h-10 w-full mt-4 confirmation-banner col-span-10 col-start-2'>
                    <h5 className='form-title-style-conf'>{title} Information</h5>
                </div>
            </div>
            <div className=' grid grid-cols-12 mt-2'>
                <div className='col-span-10 col-start-3 flex flex-row flex-wrap space-y-1'>
                    {Object.keys(object).map((key) => {
                        switch(typeof object[key]){
                            case 'object':
                                return (showField(key, object[key].optionName))
                            default:
                                return (showField(key, object[key]))
                        }                        
                    })}
                </div>
            </div>
        </div>
        
    )
}

/**
 * @functiion Confirmation To display all properties of the state landlord
 * @param {object} current state of the landlord's object 
 * @returns 
 */
export default function Confirmation({landlord}) {
    return (
        <div>
            {showDetails(landlord.landlordInfo,'Personal')}
            {
                landlord.properties.map((property) => showDetails(property, `${property.index + 1}. Property`))
            }
            
            {
                landlord.paymentDetails.map((bankDetail) => showDetails(bankDetail, `${bankDetail.index + 1}. Payment`))
            }
            {
                landlord.nextOfKins.map((nextOfKin) => showDetails(nextOfKin, `${nextOfKin.index + 1}. Next Of Kin`))
            }

            <div>
                <div className=' grid grid-cols-12'>
                    <div className='h-10 w-full mt-4 confirmation-banner col-span-10 col-start-2'>
                        <h5 className='form-title-style-conf'>Attachment Information</h5>
                    </div>
                </div>
                <div className=' grid grid-cols-12 mt-2'>
                    <div className='flex flex-row flex-wrap col-span-10 col-start-3 space-y-1'>
                        {
                            landlord.attachmentFiles.map((attach) => {
                                return(
                                attach.hasOwnProperty('name') ?
                                showField(attach.attachmentDocumentType.name, attach.name)
                                :
                                showField(attach.attachmentDocumentType.name, 'No File Chosen'))
                            })
                        }
                    </div>
                </div>
            </div>
            
        </div>
        
    )
}
