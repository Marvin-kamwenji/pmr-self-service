import React from 'react';
import '../CSS/landlord.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudUpload } from '@fortawesome/free-solid-svg-icons'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

export default function Playground() {
  return (
      <div className='flex justify-center items-center w-full'>        
        <PhoneInput
            country={'us'}
            placeholder='Enter Phone No'
            buttonClass='border-none bg-phone-dropdown-bg'
            containerClass='w-fit'
            dropdownClass='flex flex-column items-start'
        />
      </div>
    
  )
}
