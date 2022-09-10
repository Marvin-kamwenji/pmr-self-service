import React, {useState, Fragment} from "react";
import '../CSS/tenantregistration.css';
import NavBar from "../Common/NavBar";
import IndividualPersonalInformation from "../Tenant/IndividualPersonalInformation";
import Confirmation from "../Tenant/Confirmation";
import CorporatePersonalInformation from "../Tenant/CorporatePersonalInformation";
import LandlordAndProperty from "../Tenant/LandlordAndProperty";
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';




function TenantRegistration() {

/*========================================================================================= */
/*==========================================================================================*/
/* ================================= USE STATES ============================================*/
/*========================================================================================= */ 

  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});

  const steps = ['Personal Information', 'Landlord & Property', 'Confirmation']

  const [formData, setFormData] = useState({
    firstName: "",   identificationDocumentNo: "",
    middleName: "",  tin: "",
    lastName: "",    tenantAddress: "",
    nationality: "", tenantMobileNumber: "",
    identificationDocuments: "", tenantEmailAddress: "",
    kinFirstName: "", kinAddress: "",
    kinMiddleName: "", kinMobileNumber: "",
    kinLastName: "", kinEmailAddress: "",
    bankName: "", serviceProviders: "",
    bankPhoneNumber: "",
    bankAccountNumber: "",
    employerAddress: "",
    employerMobileNumber: "",
    monthlyNetSalary: "", employerEmailAddress: "",
    employerName: "",
    landlordFirstName: "",
    
  });

  /*======================================================================================================== */
  /*=========================================================================================================*/
  /*=================================================FUNCTIONS===============================================*/
  /*=========================================================================================================*/

  const stepsDisplayed = () => {
    if (activeStep === 0) {
      return <IndividualPersonalInformation formData={formData} setFormData={setFormData}/>;
    }
  
    else if (activeStep === 1) {
      return <LandlordAndProperty />;
      // return <CorporatePersonalInformation />
    } 
  
     else {
    return <Confirmation />;
    }
  
  }
  

  // shows total steps in a stepper
  const totalSteps = () => {
    return steps.length;
  };

  // returns completed steps
  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  //checks if its the last step
  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  //retuns true if all steps are completed
  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };
  //handles next event by incrementing active step
  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
        // find the first step that has been completed
        steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  //handles back event by decrementing  active step
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  //sets complete to a stepper when done
  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };
  //handles reset to a stepper
  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };
  return (
    <div className="bg-all py-5">
      <div className="container py-3 all_tenant"> 
        <Box sx={{ width: '100%' }} className="">
          <Stepper activeStep={activeStep}
            sx={{
              "& .MuiStepConnector-line": {
                border: "0",
              },

            }}>
            {steps.map((label, index) => (
              <Step key={label} completed={completed[index]}>
                <StepButton color="stepperColor" onClick={handleStep(index)}>
                  {label}
                </StepButton>
              </Step>
            ))}
          </Stepper>

          <form onSubmit={e => {
            e.preventDefault();
          }}>

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

                {/* ========================================================================================== */}
                {/* ====================================THIS DISPLAYS THE FORMS=============================== */}
                {/* ========================================================================================== */}
               
               {stepsDisplayed()};
              
                
                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Box sx={{ flex: '1 1 auto' }} />

                  {/* ======================================================================================== */}
                  {/*===================handles back event and its disabled on the first step================= */}
                  {/* ======================================================================================== */}
                  
                  <Button
                    color="inherit"
                    disabled={ activeStep === 0}
                    hidden={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1 }}
                  >
                    Back
                  </Button>

                  {/* ============================================================================================= */}
                  {/* handles next event and shows completed when all steps are completed or current step completed */}
                  {/* ============================================================================================= */}

                  <Button hidden={isLastStep()}
                          onClick={handleNext} sx={{ mr: 1 }}>
                    Next
                  </Button>
                  {activeStep !== steps.length &&
                    (completed[activeStep] ? (
                      <Typography variant="caption" sx={{ display: 'inline-block' }}>
                        Step {activeStep + 1} already completed
                      </Typography>
                    ) : (
                      <Button onClick={handleComplete}>
                        {isLastStep()
                        // completedSteps() === totalSteps() - 1
                          ? 'Finish'
                          : ''}
                      </Button>
                    ))}
                </Box>
              </Fragment>
            )}
          </div>
          </form>
        </Box>
      </div>
    </div>
  );
}

export default TenantRegistration;
