import React from 'react';
import '../CSS/landlord.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudUpload } from '@fortawesome/free-solid-svg-icons'

export default function Playgroung() {
  return (
      <div>
          <input type='file' className='invisible-field'/>
          <label className='basis-5/12 file-field-style flex items-center' for='uploadedFile'>
              <FontAwesomeIcon icon={faCloudUpload} size='2x' className='pl-2 cloud-upload-icon' />
              <input
                  name='uploadedFile' 
                  className='invisible-field'
                  type='file' placeholder='Choose File'
              //   onChange={e =>
              //       console.log(e.target.files)
              //   }
              />
          </label>
      </div>
    
  )
}
