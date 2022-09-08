import React from 'react';
import '../CSS/tenantregistration.css';

function Confirmation() {
    return ( 
        <div>
        {/* ============================================================================ */}
        {/* ========================= PERSONAL INFORMATION ============================= */}
        {/* ============================================================================ */}
          <div class="d-flex p-2 headers mt-2">Personal Information</div>
          
          <form>

          <div class="form-group row">
            <label for="staticTenantFirstName" className="col-sm-2 col-form-label">First Name </label>
               <div className="col-sm-4">
                  
              </div>
            </div>

            <div class="form-group row">
            <label for="staticTenantLastName" className="col-sm-2 col-form-label">Last Name</label>
               <div className="col-sm-4">
                  
              </div>
            </div>

            <div class="form-group row">
            <label for="staticTenantNationality" className="col-sm-2 col-form-label">Nationality</label>
               <div className="col-sm-4">
                  
              </div>
              </div>


            <div class="form-group row">
            <label for="staticTenantDateOfBirth" className="col-sm-2 col-form-label">Date of Birth</label>
               <div className="col-sm-4">
                  
              </div>
            </div>


            <div class="form-group row">
            <label for="staticTenantAddress" className="col-sm-2 col-form-label">Address</label>
               <div className="col-sm-4">
                  
              </div>
            </div>


            <div class="form-group row">
            <label for="staticTenantMobileNumber" className="col-sm-2 col-form-label">Mobile Number</label>
               <div className="col-sm-4">
                  
              </div>
            </div>


            <div class="form-group row">
            <label for="staticTenantEmail" className="col-sm-2 col-form-label">E-Mail Address</label>
               <div className="col-sm-4">
                  
              </div>
            </div>

          </form>

          {/* =================================================================================================== */}
          {/* ========================================== EMPLOYER INFORMATION =================================== */}
          {/* =================================================================================================== */}
          <div class="d-flex p-2 headers">Employer Information</div>

          
          <form>

          <div class="form-group row">
            <label for="staticEmployerType" className="col-sm-2 col-form-label">Employment Type</label>
               <div className="col-sm-4">
                  
              </div>
            </div>

            <div class="form-group row">
            <label for="staticEmployerName" className="col-sm-2 col-form-label">Employer Name</label>
               <div className="col-sm-4">
                  
              </div>
            </div>

            <div class="form-group row">
            <label for="staticEmployerAddress" className="col-sm-2 col-form-label">Address</label>
               <div className="col-sm-4">
                  
              </div>
              </div>


            <div class="form-group row">
            <label for="staticEmployerContactNumber" className="col-sm-2 col-form-label">Contact Number</label>
               <div className="col-sm-4">
                  
              </div>
            </div>


            <div class="form-group row">
            <label for="staticEmployerEmailAddress" className="col-sm-2 col-form-label">E-Mail Address</label>
               <div className="col-sm-4">
                  
              </div>
            </div>


            <div class="form-group row">
            <label for="staticEmployerSalary" className="col-sm-2 col-form-label">Current Net Salary</label>
               <div className="col-sm-4">
                  
              </div>
            </div>


          </form>

          {/* ================================================================================================== */}
          {/* ============================================ PAYMENT MODE ======================================== */}
          {/* ================================================================================================== */}
          <div class="d-flex p-2 headers">Payment Mode</div>

           <form>

          <div class="form-group row">
            <label for="staticModeOfPayment" className="col-sm-2 col-form-label">Mode Of Payment</label>
               <div className="col-sm-4">
                  
              </div>
            </div>

            <div class="form-group row">
            <label for="staticBankName" className="col-sm-2 col-form-label">Bank Name</label>
               <div className="col-sm-4">
                  
              </div>
            </div>

            <div class="form-group row">
            <label for="staticBankBranch" className="col-sm-2 col-form-label">Branch</label>
               <div className="col-sm-4">
                  
              </div>
              </div>


            <div class="form-group row">
            <label for="staticAccountNumber" className="col-sm-2 col-form-label">Account Number</label>
               <div className="col-sm-4">
                  
              </div>
            </div>

          </form>

          {/* ================================================================================================== */}
          {/* ============================================ NEXT OF KIN ========================================= */}
          {/* ================================================================================================== */}
          <div class="d-flex p-2 headers">Next Of Kin</div>

          <form>

          <div class="form-group row">
            <label for="staticKinFirstName" className="col-sm-2 col-form-label">First Name</label>
               <div className="col-sm-4">
                  
              </div>
            </div>

            <div class="form-group row">
            <label for="staticKinLastName" className="col-sm-2 col-form-label">Last Name</label>
               <div className="col-sm-4">
                  
              </div>
            </div>

            <div class="form-group row">
            <label for="staticKinNationality" className="col-sm-2 col-form-label">Nationality</label>
               <div className="col-sm-4">
                  
              </div>
              </div>


            <div class="form-group row">
            <label for="staticKinDateOfBirth" className="col-sm-2 col-form-label">Date Of Birth</label>
               <div className="col-sm-4">
                  
              </div>
            </div>


            <div class="form-group row">
            <label for="staticKinAddress" className="col-sm-2 col-form-label">Address</label>
               <div className="col-sm-4">
                  
              </div>
            </div>


            <div class="form-group row">
            <label for="staticKinMobileNumber" className="col-sm-2 col-form-label">Mobile Number</label>
               <div className="col-sm-4">
                  
              </div>
            </div>


            <div class="form-group row">
            <label for="staticKinEmailAddress" className="col-sm-2 col-form-label">E-Mail Address</label>
               <div className="col-sm-4">
                  
              </div>
            </div>


          </form>


        </div>
     );

}

export default Confirmation;