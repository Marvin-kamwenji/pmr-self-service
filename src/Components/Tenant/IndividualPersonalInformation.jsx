import React from 'react';
import '../CSS/tenantregistration.css';
import CountryList from "../EntityLists/CountryList";
import IdentificationDocumentsList from '../EntityLists/IdentificationDocumentsList';
import EmploymentTypeList from '../EntityLists/EmploymentTypeList';
import ContractTypeList from '../EntityLists/ContractTypeList';
import BankList from '../EntityLists/BankList';
import BankBranchList from '../EntityLists/BankBranchList';


function IndividualPersonalInformation({formData, setFormData}) {

    return ( 
        <div>
        <h1 className="contentHeadings mt-2 mb-2">INDIVIDUAL TENANT INFORMATION</h1>
        <form>

         {/* ============================================================================================= */}
         {/* ======================================= TENANT TYPE ROW ===================================== */}
         {/* ============================================================================================= */}

             <div className="row g-3 mb-3">
               <label className="col-sm-2 col-form-label tenantlabels">Tenant type 
                    <label className="tenantAsteriks ml-1">*</label>
               </label>
               <div className="col-sm-3">
                 <div className="form-check form-check-inline">
                   <input className="form-check-input tenanttyperadio" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                   <label className="form-check-label tenanttyperadiolabel" for="inlineRadio1">Individual</label>
                 </div>

                <div className="form-check form-check-inline ">
                  <input className="form-check-input tenanttyperadio" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                  <label className="form-check-label tenanttyperadiolabel" for="inlineRadio2">Corporate</label>
                </div>
                </div>
              
             </div>


         {/* ============================================================================================= */}
         {/* =======================================  FIRST NAME ROW ===================================== */}
         {/* ============================================================================================= */}

              <div className="form-group row g-3 mb-3">

                  <label className="col-sm-2 col-form-label tenantlabels">First Name
                       <label className="tenantAsteriks ml-1">*</label>
                  </label>
                     <div className="col-sm-4">
                         <input type="text" className="form-control" placeholder="Search or Enter Tenant" 
                               aria-label="First name" value={formData.firstName}
                               onChange={(event) => setFormData({...formData, firstName: event.target.value})} required/>
                    </div>

                    <label className="col-sm-2 col-form-label tenantlabels">Identification Document</label>
                    <div className="col-sm-4">
                         <IdentificationDocumentsList />
                    </div>

              </div>
             
         {/* ============================================================================================= */}
         {/* =======================================  MIDDLE NAME ROW ==================================== */}
         {/* ============================================================================================= */}

              <div className="form-group row g-3 mb-3">

                   <label className="col-sm-2 col-form-label tenantlabels">Middle Name </label>
                     <div className="col-sm-4">
                       <input type="text" className="form-control" placeholder="Middle Name" 
                         aria-label="Middle name" value={formData.middleName}
                         onChange={(event) => setFormData({...formData, middleName: event.target.value})}/>
                     </div>

                     <label className="col-sm-2 col-form-label tenantlabels">Identification Docs No 
                           <label className="tenantAsteriks ml-1">*</label>
                     </label>
                     <div className="col-sm-4">
                         <input type="text" className="form-control" placeholder="709790609" 
                              aria-label="Identification Document No" value={formData.identificationDocumentNo}
                              onChange={(event) => setFormData({...formData, identificationDocumentNo: event.target.value})} />
                     </div>


              </div>

         {/* ============================================================================================= */}
         {/* =========================================  LAST NAME ROW ==================================== */}
         {/* ============================================================================================= */}

              <div className="form-group row g-3 mb-3">

                
               <label className="col-sm-2 col-form-label tenantlabels">Last Name
                     <label className="tenantAsteriks ml-1">*</label>
               </label>
                  <div className="col-sm-4">
                     <input type="text" className="form-control" placeholder="Last Name" 
                     aria-label="Last name" value={formData.lastName}
                     onChange={(event) => setFormData({...formData, lastName: event.target.value})} required/>
                 </div>

                
               <label className="col-sm-2 col-form-label tenantlabels">Address 
                      <label className="tenantAsteriks ml-1">*</label>
               </label>
                  <div className="col-sm-4">
                    <input type="text" className="form-control" placeholder="Address"
                       aria-label="Address" value={formData.tenantAddress}
                       onChange={(event) => setFormData({...formData, tenantAddress: event.target.value})} required/>
                  </div>

              </div>

         {/* ============================================================================================= */}
         {/* ========================================  NATIONALITY ROW =================================== */}
         {/* ============================================================================================= */}

              <div className="form-group row g-3 mb-3">

                
                  <label className="col-sm-2 col-form-label tenantlabels">Nationality 
                       <label className="tenantAsteriks ml-1">*</label>
                  </label>
                    <div className="col-sm-4">
                    <CountryList />           
                   </div>

                  <label className="col-sm-2 col-form-label tenantlabels">Mobile Number
                        <label className="tenantAsteriks ml-1">*</label>
                  </label>
                    <div className="col-sm-4">
                       <input type="text" className="form-control" placeholder="700 *** ****" 
                          aria-label="Registered Mobile Number" value={formData.tenantMobileNumber}
                          onChange={(event) => setFormData({...formData, tenantMobileNumber: event.target.value})} required />   
                    </div>

              </div>


         {/* ============================================================================================= */}
         {/* ============================================= TIN ROW ======================================= */}
         {/* ============================================================================================= */}

              <div className="form-group row g-3 mb-3">



                 <label className="col-sm-2 col-form-label tenantlabels">TIN 
                       <label className="tenantAsteriks ml-1">*</label>
                 </label>
                    <div className="col-sm-4">
                     <input type="text" className="form-control" placeholder="GH00000023" 
                       aria-label="TIN" value={formData.tin}
                       onChange={(event) => setFormData({...formData, tin: event.target.value})} required/>
                   </div>

                
                  <label className="col-sm-2 col-form-label tenantlabels">E-mail Address</label>
                  <div className="col-sm-4">
                    <input type="text" className="form-control" placeholder="sample@gmail.com" 
                        aria-label="Email Address" value={formData.tenantEmailAddress}
                        onChange={(event) => setFormData({...formData, tenantEmailAddress: event.target.value})} />
                 </div>
   
              </div>


              <hr />

              <h1 className="contentHeadings mt-2 mb-2">NEXT OF KIN</h1>

         {/* ============================================================================================= */}
         {/* ======================================== KIN FIRST NAME ROW ================================= */}
         {/* ============================================================================================= */}

              <div className="form-group row g-3 mb-3">

                
                  <label className="col-sm-2 col-form-label tenantlabels">First Name
                        <label className="tenantAsteriks ml-1">*</label>
                  </label>
                  <div className="col-sm-4">
                     <input type="text" className="form-control" placeholder="First Name" 
                        aria-label="Kin First name" value={formData.kinFirstName}
                        onChange={(event) => setFormData({...formData, kinFirstName: event.target.value})} required/>
                  </div>

                
                   <label className="col-sm-2 col-form-label tenantlabels">Address
                         <label className="tenantAsteriks ml-1">*</label>
                   </label>
                   <div className="col-sm-4">
                      <input type="text" className="form-control" placeholder="Address" 
                           aria-label="Kin Last name" value={formData.kinAddress}
                           onChange={(event) => setFormData({...formData, kinAddress: event.target.value})} required/>   
                     </div>

              </div>

         {/* ============================================================================================= */}
         {/* ======================================== KIN MIDDLE NAME ROW ================================= */}
         {/* ============================================================================================= */}

              <div className="form-group row g-3 mb-3">


                  <label className="col-sm-2 col-form-label tenantlabels">Middle Name</label>
                  <div className="col-sm-4">
                     <input type="text" className="form-control" placeholder="Middle Name" 
                        aria-label="Middle name" value={formData.kinMiddleName}
                        onChange={(event) => setFormData({...formData, kinMiddleName: event.target.value})}/> 
                  </div>

                
                  <label className="col-sm-2 col-form-label tenantlabels">Mobile Number
                        <label className="tenantAsteriks ml-1">*</label>
                  </label>
                  <div className="col-sm-4">
                    <input type="text" className="form-control" placeholder="700 *** ****" 
                       aria-label="Kin Mobile number" value={formData.kinMobileNumber}
                       onChange={(event) => setFormData({...formData, kinMobileNumber: event.target.value})} required/>
                  </div>

              </div>

         {/* ============================================================================================= */}
         {/* ========================================= KIN LAST NAME ROW ================================= */}
         {/* ============================================================================================= */}

              <div className="form-group row g-3 mb-3">

                
                   <label className="col-sm-2 col-form-label tenantlabels">Last Name
                         <label className="tenantAsteriks ml-1">*</label>
                   </label>
                   <div className="col-sm-4">
                       <input type="text" className="form-control" placeholder="Last Name" 
                         aria-label="Kin Last name" value={formData.kinLastName}
                         onChange={(event) => setFormData({...formData, kinLastName: event.target.value})} required/> 
                   </div>

                
                   <label className="col-sm-2 col-form-label tenantlabels">E-mail Address</label>
                   <div className="col-sm-4">
                       <input type="text" className="form-control" placeholder="sample@gmail.com" 
                            aria-label="Kin Email Address" value={formData.kinEmailAddress}
                            onChange={(event) => setFormData({...formData, kinEmailAddress: event.target.value})} />   
                   </div>
 
              </div>

              <hr />





              <h1 className="contentHeadings mt-2 mb-2">BANK DETAILS</h1>

         {/* ============================================================================================= */}
         {/* ========================================= BANK NAME ROW ===================================== */}
         {/* ============================================================================================= */}

              <div className="form-group row g-3 mb-3">

                
                   <label className="col-sm-2 col-form-label tenantlabels">Bank Name
                        <label className="tenantAsteriks ml-1">*</label>
                   </label>
                   <div className="col-sm-4">
                    <BankList />
                    
                   </div>

                  <label className="col-sm-2 col-form-label tenantlabels">Service Provider
                        <label className="tenantAsteriks ml-1">*</label>
                  </label>
                  <div className="col-sm-4">
                     <select id="inputState" class="form-select">
                         <option value="default" selected>MTN</option>
                         <option>...</option>
                      </select>
                 </div>

              </div>


         {/* ============================================================================================= */}
         {/* ======================================== BANK BRANCH ROW ==================================== */}
         {/* ============================================================================================= */}

              <div className="form-group row g-3 mb-3">

                
                  <label className="col-sm-2 col-form-label tenantlabels">Bank Branch
                  <label className="tenantAsteriks ml-1">*</label>
                  </label>
                  <div className="col-sm-4">
                    <BankBranchList />

                     {/* <select id="inputState" class="form-select">
                         <option selected disabled>Bank Branch</option>
                         <option>...</option>
                     </select>  */}
                     
                 </div>

                 
                   <label className="col-sm-2 col-form-label tenantlabels">Phone Number
                         <label className="tenantAsteriks ml-1">*</label>
                   </label>
                    <div className="col-sm-4">
                      <input type="text" className="form-control" placeholder="0700000000" 
                          aria-label="Phone Number" value={formData.bankPhoneNumber}
                          onChange={(event) => setFormData({...formData, bankPhoneNumber: event.target.value})} required/>  
                    </div>

              </div>

         {/* ============================================================================================= */}
         {/* ====================================== ACCOUNT NUMBER ROW =================================== */}
         {/* ============================================================================================= */}

              <div className="form-group row g-3 mb-3">
                
                   <label className="col-sm-2 col-form-label tenantlabels">Account Number
                        <label className="tenantAsteriks ml-1">*</label>
                   </label>
                    <div className="col-sm-4">
                      <input type="text" className="form-control" placeholder="Account Number" 
                         aria-label="Account Number" value={formData.bankAccountNumber}
                         onChange={(event) => setFormData({...formData, bankAccountNumber: event.target.value})} required/>
                    </div>

              </div>

              <hr />


             <h1 className="contentHeadings mb-2 mt-2">EMPLOYMENT</h1>

             
         {/* ============================================================================================= */}
         {/* ====================================== EMPLOYMENT TYPE ROW ================================== */}
         {/* ============================================================================================= */}

              <div className="form-group row g-3 mb-3">

                   <label className="col-sm-2 col-form-label tenantlabels">Employment Type
                         <label className="tenantAsteriks ml-1">*</label>
                   </label>
                   <div className="col-sm-4">
                    <EmploymentTypeList />
                   </div>

                  <label className="col-sm-2 col-form-label tenantlabels">Address
                        <label className="tenantAsteriks ml-1">*</label>
                  </label>
                  <div className="col-sm-4">
                     <input type="text" className="form-control" placeholder="Address" 
                         aria-label="Employer Address" value={formData.employerAddress}
                         onChange={(event) => setFormData({...formData, employerAddress: event.target.value})} required/>
                  </div>

              </div>


         {/* ============================================================================================= */}
         {/* ======================================= CONTRACT TYPE ROW =================================== */}
         {/* ============================================================================================= */}

              <div className="form-group row g-3 mb-3">
                   <label className="col-sm-2 col-form-label tenantlabels">Contract Type
                         <label className="tenantAsteriks ml-1">*</label>
                   </label>
                   <div className="col-sm-4">
                    <ContractTypeList />
                    </div>

                     <label className="col-sm-2 col-form-label tenantlabels">Mobile Number
                         <label className="tenantAsteriks ml-1">*</label>
                     </label>
                     <div className="col-sm-4">
                        <input type="text" className="form-control" placeholder="700 *** ****" 
                            aria-label="Employer Mobile Number" value={formData.employerMobileNumber}
                            onChange={(event) => setFormData({...formData, employerMobileNumber: event.target.value})} required/>
                     </div>

              </div>


         {/* ============================================================================================= */}
         {/* ===================================== MONTHLY NET SALARY ROW ================================ */}
         {/* ============================================================================================= */}

              <div className="form-group row g-3 mb-3">

                
                   <label className="col-sm-2 col-form-label tenantlabels">Monthly Net Salary
                         <label className="tenantAsteriks ml-1">*</label>
                   </label>

                   <div className="col-sm-4">
                      <input type="text" className="form-control" placeholder="300,000" 
                        aria-label="Monthly Net Salary" value={formData.monthlyNetSalary}
                        onChange={(event) => setFormData({...formData, monthlyNetSalary: event.target.value})} required/>  
                   </div>

                 
                    <label className="col-sm-2 col-form-label tenantlabels">E-mail Address</label>
                    <div className="col-sm-4">
                        <input type="text" className="form-control" placeholder="sample@gmail.com" 
                           aria-label="Last name" value={formData.employerEmailAddress}
                           onChange={(event) => setFormData({...formData, employerEmailAddress: event.target.value})} />
                     </div>

              </div>

         {/* ============================================================================================= */}
         {/* ======================================= EMPLOYER NAME ROW =================================== */}
         {/* ============================================================================================= */}       

              <div className="form-group row g-3 mb-3">

                    <label className="col-sm-2 col-form-label tenantlabels">Employer Name
                          <label className="tenantAsteriks ml-1">*</label>
                    </label>
                    <div className="col-sm-4">
                       <input type="text" className="form-control" placeholder="Employer Name" 
                           aria-label="Employer Name" value={formData.employerName}
                           onChange={(event) => setFormData({...formData, employerName: event.target.value})} required/>
                    </div>

              </div>

              <hr />

              <div>
               <h1 className="contentHeadings mb-2 mt-2">ATTACHMENTS</h1>

               <label>
               <input type="file" multiple />
               </label>
               
              </div>



            
        </form>
        </div>  
     );

}

export default IndividualPersonalInformation;