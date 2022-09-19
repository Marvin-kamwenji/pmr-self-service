import React from 'react';
import '../CSS/landlord.css'

const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

function showField(key, object){
    return (
        <div className='flex flex-row basis-1/2' key={key}>
            <div className='basis-1/3 text-end mr-2 flex justify-start items-center'>
                <label className='label-style-conf'>{key}</label>
            </div>
            <div className='flex basis-2/3 justify-start text-start ml-2 items-center'>
                <label className='confirm-field'>{object[key]}</label>
            </div>
        </div>
    )
}

function showObject(object, title){
    return (
        <div>
            <div className=' grid grid-cols-12'>
                <div className='h-10 w-full mt-4 confirmation-banner col-span-10 col-start-2'>
                    <h5 className='form-title-style-conf'>{title} Information</h5>
                </div>
            </div>
            <div className=' grid grid-cols-16 mt-2'>
                <div className='flex flex-row flex-wrap col-span-10 col-start-3 space-y-1'>
                    {Object.keys(object).map((key) => showField(key, object))}
                </div>
            </div>
        </div>
        
    )
}

export default function Confirmation({landlord}) {
    return (
        <div> Confirm
            {/* {showObject(landlord.landlordInfo,'Personal')} */}
            {/* {
                landlord.properties.map((property) => showObject(property, 'Property'))
            } */}
            
            {/* {
                landlord.paymentDetails.map((bankDetail) => showObject(bankDetail, 'Payment'))
            } */}
            {/* {
                landlord.nextOfKins.map((nextOfKin) => showObject(nextOfKin, 'Next Of Kin'))
            } */}

            {/* <div>
                <div className=' grid grid-cols-12'>
                    <div className='h-10 w-full mt-4 confirmation-banner col-span-10 col-start-2'>
                        <h5 className='form-title-style-conf'>Attachment Information</h5>
                    </div>
                </div>
                <div className=' grid grid-cols-16 mt-2'>
                    <div className='flex flex-row flex-wrap col-span-10 col-start-3 space-y-1'>
                        {
                            landlord.attachmentFiles.map((attach) => attach.hasOwnProperty(attach.name) ?
                            showField(attach.attachmentDocumentType.name, attach.name):null)
                        }
                    </div>
                </div>
            </div> */}
            
        </div>
        
    )
}
