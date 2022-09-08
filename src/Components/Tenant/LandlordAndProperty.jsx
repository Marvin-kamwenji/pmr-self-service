import React from 'react';
import '../CSS/tenantregistration.css';

function LandlordAndProperty() {
    return ( 
        <div>
            <h1 className="contentHeadings mb-2 mt-2">LANDLORD INFORMATION</h1>

            <form>
            {/* ============================================================================================== */}
            {/* ============================= LANDLORD FIRST NAME ROW ======================================== */}
            {/* ============================================================================================== */}

              <div className="form-group row g-3 mb-3">

                  <label className="col-sm-2 col-form-label tenantlabels">First Name
                        <label className="tenantAsteriks ml-1">*</label>
                  </label>
                      <div className="col-sm-4">
                          <input type="text" className="form-control" placeholder="First Name"
                               aria-label="Landlord First name" />
                      </div>

                  <label className="col-sm-2 col-form-label tenantlabels">Address 
                        <label className="tenantAsteriks ml-1">*</label>
                  </label>
                     <div className="col-sm-4">
                         <input type="text" className="form-control" placeholder="Address" 
                              aria-label="landlordAddress"  />
                     </div>
              </div>

              {/* ============================================================================================= */}
              {/* ======================================= MIDDLE NAME ROW ===================================== */}
              {/* ============================================================================================= */}

               <div className="form-group row g-3 mb-3">

                  <label className="col-sm-2 col-form-label tenantlabels">Middle Name</label>
                      <div className="col-sm-4">
                          <input type="text" className="form-control" placeholder="Middle Name"
                               aria-label="Landlord Middle name" />
                      </div>

                  <label className="col-sm-2 col-form-label tenantlabels">Mobile Number
                        <label className="tenantAsteriks ml-1">*</label>
                  </label>
                     <div className="col-sm-4">
                         <input type="text" className="form-control" placeholder="700 *** ****" 
                            aria-label="Landlord Mobile Number"  />   
                    </div>
               </div>

              {/* ============================================================================================= */}
              {/* ======================================== LAST NAME ROW ====================================== */}
              {/* ============================================================================================= */}

               <div className="form-group row g-3 mb-3">

                  <label className="col-sm-2 col-form-label tenantlabels">Last Name
                        <label className="tenantAsteriks ml-1">*</label>
                  </label>
                      <div className="col-sm-4">
                          <input type="text" className="form-control" placeholder="Last Name"
                               aria-label="Landlord Last name" />
                      </div>

                  <label className="col-sm-2 col-form-label tenantlabels">E-Mail Address</label>
                     <div className="col-sm-4">
                         <input type="text" className="form-control" placeholder="sample@gmail.com" 
                            aria-label="Landlord Email Address"  />   
                    </div>
               </div>

               <hr />

               <h1 className="contentHeadings mb-2 mt-2">PROPERTY INFORMATION</h1>

                {/* ============================================================================================= */}
                {/* ==================================PROPERTY TYPE ROW ========================================= */}
                {/* ============================================================================================= */}

               <div className="form-group row g-3 mb-3">

               <label className="col-sm-2 col-form-label tenantlabels">Property Type
                     <label className="tenantAsteriks ml-1">*</label>
               </label>
                    <div className="col-sm-4">
                        <select id="inputState" class="form-select">
                             <option value="default" selected>Apartment</option>
                             <option>...</option>
                        </select>
                   </div>

                  <label className="col-sm-2 col-form-label tenantlabels">Address
                        <label className="tenantAsteriks ml-1">*</label>
                  </label>
                     <div className="col-sm-4">
                         <input type="text" className="form-control" placeholder="Address" 
                            aria-label="Property Address"  />   
                    </div>
               </div>


               {/* ============================================================================================= */}
               {/* ======================================== PROPERTY NAME ROW ================================== */}
               {/* ============================================================================================= */}


             <div className="form-group row g-3 mb-3">

               <label className="col-sm-2 col-form-label tenantlabels">Property Name</label>
                    <div className="col-sm-4">
                         <input type="text" className="form-control" placeholder="Property Name" 
                            aria-label="Property Name"  />   
                    </div>

                  <label className="col-sm-2 col-form-label tenantlabels">Mobile Number
                        <label className="tenantAsteriks ml-1">*</label>
                  </label>
                     <div className="col-sm-4">
                         <input type="text" className="form-control" placeholder="700 *** *****" 
                            aria-label="Property Mobile Number"  />   
                    </div>
             </div>


             {/* ============================================================================================= */}
             {/* ====================================== BEDROOM NUMBER ROW =================================== */}
             {/* ============================================================================================= */}

              <div className="form-group row g-3 mb-3">

               <label className="col-sm-2 col-form-label tenantlabels">Bedroom
                     <label className="tenantAsteriks ml-1">*</label>
               </label>
                    <div className="col-sm-4">
                        <select id="inputState" class="form-select">
                             <option value="default" selected>2 Bedroom</option>
                             <option>...</option>
                        </select>
                   </div>

                  <label className="col-sm-2 col-form-label tenantlabels">E-mail Address</label>
                     <div className="col-sm-4">
                         <input type="text" className="form-control" placeholder="sample@gmail.com" 
                            aria-label="Property emailAddress"  />   
                    </div>
               </div>

             {/* ============================================================================================= */}
             {/* ===================================== PROPERTY identity ROW ================================= */}
             {/* ============================================================================================= */}

             <div className="form-group row g-3 mb-3">
             <label className="col-sm-2 col-form-label tenantlabels">Property Identity
                   <label className="tenantAsteriks ml-1">*</label>
             </label>
                     <div className="col-sm-4">
                         <input type="text" className="form-control" placeholder="House Number 10" 
                            aria-label="Property emailAddress"  />   
                    </div>
             </div>


              {/* ============================================================================================= */}
              {/* ========================================== REGION ROW ======================================= */}
              {/* ============================================================================================= */}

             <div className="form-group row g-3 mb-3">
             <label className="col-sm-2 col-form-label tenantlabels">Region
                  <label className="tenantAsteriks ml-1">*</label>
             </label>
                   <div className="col-sm-4">
                        <select id="inputState" class="form-select">
                             <option value="default" selected disabled>Region</option>
                             <option>...</option>
                        </select>
                   </div>
             </div>

              {/* ============================================================================================= */}
              {/* ============================================ ROAD ROW ======================================= */}
              {/* ============================================================================================= */}

             <div className="form-group row g-3 mb-3">
             <label className="col-sm-2 col-form-label tenantlabels">Road
                   <label className="tenantAsteriks ml-1">*</label>
             </label>
                     <div className="col-sm-4">
                         <input type="text" className="form-control" placeholder="Road A" 
                            aria-label="Property road"  />   
                    </div>
             </div>

              {/* ============================================================================================= */}
              {/* ====================================== LANDLORD REQUEST ROW ================================= */}
              {/* ============================================================================================= */}

              <div className="form-group row g-3 mb-3">
             <label className="col-sm-2 col-form-label tenantlabels">Landlord Request
                   <label className="tenantAsteriks ml-1">*</label>
             </label>
                     <div className="col-sm-4">
                         <input type="text" className="form-control" placeholder="50,000" 
                            aria-label="Property road"  />   
                    </div>
             </div>

            </form>
        </div>
     );

}

export default LandlordAndProperty;