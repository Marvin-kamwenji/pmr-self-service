import React from 'react';
import '../CSS/tenantregistration.css';

function CorporatePersonalInformation() {
    return ( 
        <div>
            <h1 className="contentHeadings">CORPORATE TENANT INFORMATION</h1>

            <form>

         {/* ============================================================================================= */}
         {/* ======================================= TENANT TYPE ROW ===================================== */}
         {/* ============================================================================================= */}

             <div className="row g-3 mt-3 mb-3">
               <label className="col-sm-2 col-form-label tenantlabels">Tenant type
                     <label className="tenantAsteriks ml-1">*</label>
               </label>
               <div className="col-sm-3">
                 <div className="form-check form-check-inline">
                   <input className="form-check-input tenanttyperadio" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                   <label className="form-check-label tenanttyperadiolabel" for="inlineRadio1">Individual</label>
                 </div>

                <div className="form-check form-check-inline ">
                  <input className="form-check-input tenanttyperadio" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                  <label className="form-check-label tenanttyperadiolabel" for="inlineRadio2">Corporate</label>
                </div>
                </div>
             </div>

         {/* ============================================================================================= */}
         {/* ======================================  COMPANY NAME ROW ==================================== */}
         {/* ============================================================================================= */}

              <div className="form-group row g-3 mb-3">

                  <label className="col-sm-2 col-form-label tenantlabels">Company Name
                       <label className="tenantAsteriks ml-1">*</label>
                  </label>
                     <div className="col-sm-4">
                         <input type="text" className="form-control" placeholder="Search Company" 
                               aria-label="Company name" />
                    </div>

                    <label className="col-sm-2 col-form-label tenantlabels">Address
                         <label className="tenantAsteriks ml-1">*</label>
                    </label>
                     <div className="col-sm-4">
                         <input type="text" className="form-control" placeholder="Address" 
                               aria-label="Address" />
                    </div>

              </div>

              {/* ================================================================================================= */}
              {/* =========================================== COUNTRY NAME =========================================*/}
              {/* ================================================================================================= */}

               <div className="form-group row g-3 mb-3">

                    <label className="col-sm-2 col-form-label tenantlabels">Country
                         <label className="tenantAsteriks ml-1">*</label>
                    </label>
                    <div className="col-sm-4">
                     <select id="inputState" class="form-select">
                        <option value="default" selected disabled>Select Country</option>
                        <option>...</option>
                     </select>  
                    </div>

                    <label className="col-sm-2 col-form-label tenantlabels">Mobile Number
                         <label className="tenantAsteriks ml-1">*</label>
                    </label>
                     <div className="col-sm-4">
                         <input type="text" className="form-control" placeholder="700 *** ****" 
                               aria-label="Mobile Number" />
                    </div>

               </div>


         {/* ============================================================================================= */}
         {/* ==================================== REGISTRATION DATE ROW ================================== */}
         {/* ============================================================================================= */}

              <div className="form-group row g-3 mb-3">

                  <label className="col-sm-2 col-form-label tenantlabels">Registration Date
                       <label className="tenantAsteriks ml-1">*</label>
                  </label>
                     <div className="col-sm-4">
                         <input type="text" className="form-control" placeholder="DD/MM/YYYY" 
                               aria-label="Company Registration Date" />
                    </div>

                    <label className="col-sm-2 col-form-label tenantlabels">E-Mail Address</label>
                     <div className="col-sm-4">
                         <input type="text" className="form-control" placeholder="sample@gmail.com" 
                               aria-label="Email Address" />
                    </div>

              </div>

              
         {/* ============================================================================================= */}
         {/* =========================================== TIN ROW ========================================= */}
         {/* ============================================================================================= */}

              <div className="form-group row g-3 mb-3">

                  <label className="col-sm-2 col-form-label tenantlabels">TIN
                       <label className="tenantAsteriks ml-1">*</label>
                  </label>
                     <div className="col-sm-4">
                         <input type="text" className="form-control" placeholder="GH000023" 
                               aria-label="Company Tin" />
                    </div>
              </div>

              <hr />

              <h1 className="contentHeadings">ATTACHMENTS</h1>

              <label>
               <input type="file" multiple />
               </label>
              
            </form>

        </div>
     );
 
}

export default CorporatePersonalInformation;