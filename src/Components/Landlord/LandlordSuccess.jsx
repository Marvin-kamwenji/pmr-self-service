/**
 * @author Mesh
 * Page shown after successfull submission of the form
 */
import React from 'react';
import AnimatedCheckmark, { MODES } from 'react-animated-checkmark';
import '../CSS/landlord.css';
import { Link } from 'react-router-dom';

/** 
 * Action to clear the state stored in local storage 
 */
const clearStorage = () => {
  localStorage.removeItem('landlord_state')
}

/**
 * Display successfull page
 */
function LandlordSuccess() {
  return (
    <div className='flex justify-center success-container items-center'>
      <div className='w-1/3 h-fit space-y-3'>
        <h5 className='success-title'>Successfully Submitted!</h5>
        <div className='flex justify-center'>
          <AnimatedCheckmark mode={MODES.SUCCESS} breathingCollapse={true} collapseFactor={1} />
        </div>
        <p className='success-message'>The landlord has been successfully registered.
          We shall send you an SMS with login credentials
          once the property has been certified by the Tracom team
        </p>
        <h6> Thank You!</h6>
        <br/>
        <Link to='/'>
          <button className='btn btn-outline-primary' onClick={clearStorage()}>
            Back Home
          </button>
        </Link>        
      </div>
    </div>
  )
}

export default LandlordSuccess