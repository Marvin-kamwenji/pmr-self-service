import React from 'react';
import AnimatedCheckmark, { MODES } from 'react-animated-checkmark';
import { Link } from 'react-router-dom';

const clearStorage = () => {
    localStorage.removeItem('tenant_state')
  }

function TenantSuccess(){
    return (
        <div className='flex justify-center success-container items-center'>
          <div className='w-1/3 h-fit space-y-3'>
            <h5 className='success-title'>Successfully Submitted!</h5>
            <div className='flex justify-center'>
              <AnimatedCheckmark mode={MODES.SUCCESS} breathingCollapse={true} collapseFactor={1} />
            </div>
            <p className='success-message'>The tenant has been successfully registered.
             
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

export default TenantSuccess;