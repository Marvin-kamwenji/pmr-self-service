import React from 'react';
import '../CSS/tenantregistration.css';

function Confirmation(props) {
    return ( 
        <div>
        {/* ============================================================================ */}
        {/* ========================= PERSONAL INFORMATION ============================= */}
        {/* ============================================================================ */}
          <div className="d-flex p-2 headers mt-2">Personal Information</div>
          
          {/* <form> */}

          <div className="form-group row">
            <label htmlFor="staticTenantFirstName" className="col-sm-2 col-form-label">First Name </label>
               <div className="col-sm-4">
                  <h3>{props.tenant.tenantInformation.tenantFirstName}</h3>
              </div>
            </div>
         
            <div className="form-group row">
            <label htmlFor="staticTenantLastName" className="col-sm-2 col-form-label">Last Name</label>
               <div className="col-sm-4">
               <h3>{props.tenant.tenantInformation.tenantLastName}</h3>
              </div>
            </div>

            <div className="form-group row">
            <label htmlFor="staticTenantNationality" className="col-sm-2 col-form-label">Nationality</label>
               <div className="col-sm-4">
               {/* <h3>{props.tenant.tenantInformation.country}</h3> */}
              </div>
              </div>


            {/* <div className="form-group row">
            <label htmlFor="staticTenantDateOfBirth" className="col-sm-2 col-form-label">Date of Birth</label>
               <div className="col-sm-4">
               <h3>{props.formData.nationality}</h3>
              </div>
            </div> */}


            <div className="form-group row">
            <label htmlFor="staticTenantAddress" className="col-sm-2 col-form-label">Address</label>
               <div className="col-sm-4">
                  <h3>{props.tenant.tenantInformation.address}</h3>
              </div>
            </div>


            <div className="form-group row">
            <label htmlFor="staticTenantMobileNumber" className="col-sm-2 col-form-label">Mobile Number</label>
               <div className="col-sm-4">
                 <h3>{props.tenant.tenantInformation.mobileNo}</h3>
              </div>
            </div>


            <div className="form-group row">
            <label htmlFor="staticTenantEmail" className="col-sm-2 col-form-label">E-Mail Address</label>
               <div className="col-sm-4">
                  <h3>{props.tenant.tenantInformation.email}</h3>
              </div>
            </div>

          {/* </form> */}

          {/* =================================================================================================== */}
          {/* ========================================== EMPLOYER INFORMATION =================================== */}
          {/* =================================================================================================== */}
          <div className="d-flex p-2 headers">Employer Information</div>

          
          {/* <form> */}

          <div className="form-group row">
            <label htmlFor="staticEmployerType" className="col-sm-2 col-form-label">Employment Type</label>
               <div className="col-sm-4">
                 
              </div>
            </div>

            <div className="form-group row">
            <label htmlFor="staticEmployerName" className="col-sm-2 col-form-label">Employer Name</label>
               <div className="col-sm-4">
                  <h3>{props.tenant.tenantEmployer.employerName}</h3>
              </div>
            </div>

            <div className="form-group row">
            <label htmlFor="staticEmployerAddress" className="col-sm-2 col-form-label">Address</label>
               <div className="col-sm-4">
                 <h3>{props.tenant.tenantEmployer.address}</h3>
              </div>
              </div>


            <div className="form-group row">
            <label htmlFor="staticEmployerContactNumber" className="col-sm-2 col-form-label">Contact Number</label>
               <div className="col-sm-4">
                  <h3>{props.tenant.tenantEmployer.mobileNumber}</h3>
              </div>
            </div>


            <div className="form-group row">
            <label htmlFor="staticEmployerEmailAddress" className="col-sm-2 col-form-label">E-Mail Address</label>
               <div className="col-sm-4">
                  <h3>{props.tenant.tenantEmployer.emailAddress}</h3>
              </div>
            </div>


            <div className="form-group row">
            <label htmlFor="staticEmployerSalary" className="col-sm-2 col-form-label">Current Net Salary</label>
               <div className="col-sm-4">
                  <h3>{props.tenant.tenantEmployer.monthlyNetSalary}</h3>
              </div>
            </div>


          {/* </form> */}

          {/* ================================================================================================== */}
          {/* ============================================ PAYMENT MODE ======================================== */}
          {/* ================================================================================================== */}
          <div className="d-flex p-2 headers">Payment Mode</div>

           {/* <form> */}

          <div className="form-group row">
            <label htmlFor="staticModeOfPayment" className="col-sm-2 col-form-label">Mode Of Payment</label>
               <div className="col-sm-4">
                  
              </div>
            </div>

            <div className="form-group row">
            <label htmlFor="staticBankName" className="col-sm-2 col-form-label">Bank Name</label>
               <div className="col-sm-4">
                  
              </div>
            </div>

            <div className="form-group row">
            <label htmlFor="staticBankBranch" className="col-sm-2 col-form-label">Branch</label>
               <div className="col-sm-4">
                  
              </div>
              </div>


            <div className="form-group row">
            <label htmlFor="staticAccountNumber" className="col-sm-2 col-form-label">Account Number</label>
               <div className="col-sm-4">
                 <h3>{props.tenant.bankDetail.accountNumber}</h3>
              </div>
            </div>

          {/* </form> */}

          {/* ================================================================================================== */}
          {/* ============================================ NEXT OF KIN ========================================= */}
          {/* ================================================================================================== */}
          <div className="d-flex p-2 headers">Next Of Kin</div>

          {/* <form> */}

          <div className="form-group row">
            <label htmlFor="staticKinFirstName" className="col-sm-2 col-form-label">First Name</label>
               <div className="col-sm-4">
                 <h3>{props.tenant.nextOfKin.kinFirstName}</h3>
              </div>
            </div>

            <div className="form-group row">
            <label htmlFor="staticKinLastName" className="col-sm-2 col-form-label">Last Name</label>
               <div className="col-sm-4">
                  <h3>{props.tenant.nextOfKin.kinLastName}</h3>
              </div>
            </div>

            <div className="form-group row">
            <label htmlFor="staticKinNationality" className="col-sm-2 col-form-label">Nationality</label>
               <div className="col-sm-4">
                  
              </div>
              </div>


            <div className="form-group row">
            <label htmlFor="staticKinDateOfBirth" className="col-sm-2 col-form-label">Date Of Birth</label>
               <div className="col-sm-4">
                  
              </div>
            </div>


            <div className="form-group row">
            <label htmlFor="staticKinAddress" className="col-sm-2 col-form-label">Address</label>
               <div className="col-sm-4">
                  <h3>{props.tenant.nextOfKin.kinAddress}</h3>
              </div>
            </div>


            <div className="form-group row">
            <label htmlFor="staticKinMobileNumber" className="col-sm-2 col-form-label">Mobile Number</label>
               <div className="col-sm-4">
                  <h3>{props.tenant.nextOfKin.kinMobileNo}</h3>
              </div>
            </div>


            <div className="form-group row">
            <label htmlFor="staticKinEmailAddress" className="col-sm-2 col-form-label">E-Mail Address</label>
               <div className="col-sm-4">
                  <h3>{props.tenant.nextOfKin.kinEmail}</h3>
              </div>
            </div>


          {/* </form> */}


        </div>
     );

}

export default Confirmation;