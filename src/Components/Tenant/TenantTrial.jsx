import { useState, Fragment } from "react";
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TenantInformation from './TenantInformation'
import EmploymentDetails from "./EmploymentDetails";
import TenantNextOfKin from './TenantNextOfKin';
import TenantAttachments from './TenantAttachments';
import BankDetails from './BankDetails';
import TenantPropertyInformation from './TenantPropertyInformation';
import TenantLandlordInformation from './TenantLandlordInformation';
import Confirmation from "./Confirmation";
import SegmentSeparator from "../Landlord/SegmentSeparator";
import { useEffect } from "react";
import {TenantApiUtil, PostTenant} from "../Landlord/ApiUtil";
import { connect } from "react-redux";
import TenantSuccess from "./TenantSuccess";
import * as ACTIONS from '../../actions/tenantActions';
import { Formik } from 'formik';
import { TenantInfoSchema} from "./ValidationSchema";


const steps = ['Personal Information', 'Landlord & Property', 'Confirmation']

function mapStateToProps(state){
  return {
    currentState: {
      tenant: state.TenantInformationReducer,
      submissionSuccess: state.TenantSubmissionOutcome
    }
  }
}

function mapDispatchToProps(dispatch){
  return {
    submitSuccessful: () => dispatch(ACTIONS.tenant_success()),
    submitFailed: (failure_cause) => dispatch(ACTIONS.tenant_failure(failure_cause)),
    updateAttachmentFiles: (attachments) => dispatch(ACTIONS.attachment_info(attachments)),
    updateTenantFromStorage: (tenant) => dispatch(ACTIONS.tenant(tenant)),
  }
}

function TenantTrial({currentState, submitSuccessful, submitFailed, updateAttachmentFiles, updateTenantFromStorage}) {


  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});
  const [countries, setCountries] = useState([]);
  const [idDocuments, setIdDocuments] = useState([]);
  const [employmentTypes, setEmploymentTypes] = useState([]);
  const [contractTypes, setContractTypes] = useState([]);
  const [banks, setBanks] = useState([]);
  const [serviceProviders, setProviders] = useState([]);
  const [propertyTypes, setPropertyTypes] = useState([]);
  const [bedrooms, setBedrooms] = useState([]);
  const [geographicRegions, setGeographicRegions] = useState([]);


  // shows total steps in a stepper
  const totalSteps = () => {
    return steps.length;
  };

  // returns completed steps
  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
        // find the first step that has been completed
        steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
    localStorage.setItem('tenant_state', JSON.stringify(currentState.tenant));
  };

  //handles back event by decrementing  active step
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    localStorage.setItem('tenant_state',  JSON.stringify(currentState.tenant));
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  //sets complete to a stepper when done
  //meshack this is the method note::::
  const handleComplete = () => {
    console.log(currentState.tenant);
    PostTenant(currentState.tenant)
    .then((res) => {
      console.log(res)
      if(res.status === 200 && res.data.code === 200){
        submitSuccessful();
      } else {
        submitFailed(res.data)
      }
    }
    )
    .catch((error) => {
      console.log('contact administrator')
    });
  };
  //handles reset to a stepper
  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  useEffect(() => {
    TenantApiUtil(
      setCountries,
      setIdDocuments,
      setEmploymentTypes,
      setContractTypes,
      setBanks,
      setProviders,
      setPropertyTypes,
      setBedrooms,
      setGeographicRegions,
      updateAttachmentFiles
    );
    
  },[updateAttachmentFiles]);
 
// Feature: Retrieve state from local storage

  // useEffect(() => {
  //   try {
  //     const tenant = JSON.parse(localStorage.getItem('tenant_state'));
  //     updateTenantFromStorage(tenant);
  //   } catch (error) {
  //     console.log(error)
  //   }
  // },[])


  const showComponent = (step, props) => {
      switch (step) {
        case 0:
          return (
            <div className="col-10">
              <TenantInformation
                countries={countries}
                idDocuments={idDocuments}
                props = {props}
              />
              <SegmentSeparator />
              <TenantNextOfKin
                props = {props}
              />
              <SegmentSeparator />
              <BankDetails 
                bankName={banks}
                serviceProviders={serviceProviders}
                props={props}
              />

              <SegmentSeparator />
              <EmploymentDetails 
                employmentType={employmentTypes}
                contractType={contractTypes}
                props={props}
                />
              <SegmentSeparator />
              <TenantAttachments
                attachmentOwner={'Tenant'}
                props = {props}
              />
            </div>            
          )
        case 1:
          return (
            <div className='col-10'>
              <SegmentSeparator border= {false}/>

              <TenantLandlordInformation props={props}/>
              <SegmentSeparator/>
              <TenantPropertyInformation
                propertyType={propertyTypes}
                bedrooms={bedrooms}
                regions={geographicRegions}
                props = {props}
              />
              
            </div>
           
          )  
        case 2:
          if (currentState.submissionSuccess.submitSuccess) {
            return (
              <TenantSuccess />
            )
          } else {
            return (
              <Confirmation 
              tenant={currentState.tenant}
              />
            )
          }
          
        default:
          break;
      }
  }

  return (
    <div className="bg-all py-5">
      <div className="container py-3 all_tenant">
        <Box sx={{ width: '100%' }} className="">
          <Stepper activeStep={activeStep}
            sx={{
              "& .MuiStepConnector-line": {
                border: "0",
              }
            }}>
            {steps.map((label, index) => (
              <Step key={label} completed={completed[index]}>
                <StepButton color="stepperColor" onClick={handleStep(index)}>
                  {label}
                </StepButton>
              </Step>
            ))}
          </Stepper>
          <Formik
            initialValues={{...currentState.tenant}}
            onSubmit={handleComplete}
            validationSchema={TenantInfoSchema}
          >
            {props => (
              <form onSubmit={props.handleSubmit}>
                <div>
                  {allStepsCompleted() ? (
                    <Fragment>
                      <Typography sx={{ mt: 2, mb: 1 }}>
                        {/* displayy this when steps are finished */}
                        All steps completed - you&apos;re finished
                      </Typography>
                      {/* handle reset by clicking reset btn */}
                      <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button onClick={handleReset}>Reset</Button>
                      </Box>
                    </Fragment>
                  ) : (
                    <Fragment>

                      <div className="container">
                        <div className='row justify-content-center'>
                          {showComponent(activeStep, props)}
                        </div>
                      </div>



                      <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        {/* handles back event and its disabled on the first step */}

                        <Box sx={{ flex: '1 1 auto' }} />
                        {/* handles next event and shows completed when all steps are completed or current step completed */}
                        <Button

                          hidden={activeStep === 0}
                          onClick={handleBack}
                          sx={{ mr: 1 }}
                        >
                          Back
                        </Button>
                        <Button
                          hidden={isLastStep()}
                          onClick={handleNext} sx={{ mr: 1 }}
                        >

                          Next
                        </Button>
                        {activeStep !== steps.length &&
                          (completed[activeStep] ? (
                            <Typography variant="caption" sx={{ display: 'inline-block' }}>
                              Step {activeStep + 1} already completed
                            </Typography>
                          ) : (
                            <Button type="submit" 
                            disabled = {props.isValid === false}
                            >
                              {isLastStep()
                                ? 'Finish'
                                : ''}
                            </Button>
                          ))}
                      </Box>
                    </Fragment>
                  )
                  }
                </div>
              </form>
            )}
            
          </Formik>
          
          
        </Box>
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(TenantTrial)