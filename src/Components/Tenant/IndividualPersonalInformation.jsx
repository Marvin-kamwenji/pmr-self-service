import React from 'react';

function IndividualPersonalInformation() {
    return ( 
        <div className="container border border-primary mt-4 rounded-2xl">
        <h1>INDIVIDUAL TENANT INFORMATION</h1>
        <form>
            <div className="flex">
              <h2 className="">Tenant Type</h2>
              <div className="form-check form-check-inline">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" for="exampleCheck1">Check me out</label>
              </div>

              <div className="form-check form-check-inline">
                <input type="checkbox" className="form-check-input" id="exampleCheck2" />
                <label className="form-check-label" for="exampleCheck2">Check me out</label>
              </div>
            </div>
            
        </form>
        </div>  
     );

}

export default IndividualPersonalInformation;