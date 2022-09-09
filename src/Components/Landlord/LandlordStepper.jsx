import { useState, Fragment } from "react";
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LandlordInformation from './LandlordInformation'
import PropertyInformation from "./PropertyInformation";
import NextOfKin from './NextOfKin';
import Attachment from './Attachment';
import PropertyPaymentInformation from './PropertyPaymentInformation';
import Confirmation from "./Confirmation";
import SegmentSeparator from "./SegmentSeparator";
import { useEffect } from "react";
import {ApiUtil} from "./ApiUtil";

const steps = ['Personal Information', 'Property Information', 'Confirmation']

function LandlordStepper() {
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});
  const [landlord, setLandlord] = useState({});
  const [nextOfKins, setNextOfKins] = useState([{}]);
  const [bankDetails, setBankDetails] = useState([{}]);
  const [properties, setProperties] = useState([{}]);
  const [attachments, setAttachments] = useState([{}]);
  const [countries, setCountries] = useState([]);
  const [idDocuments, setIdDocuments] = useState([]);
  const [propertyTypes, setPropertyTypes] = useState([]);
  const [bedrooms, setBedrooms] = useState([]);
  const [banks, setBanks] = useState([]);
  const [geographicRegions, setRegions] = useState([]);
  const [serviceProviders, setProviders] = useState([]);
  const [documentTypes, setDocumentTypes] = useState([]);
  const [postResponse, setResponse] = useState({});

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

  useEffect(() => {
    ApiUtil(
      setCountries,
      setIdDocuments,
      setPropertyTypes,
      setBedrooms,
      setBanks,
      setRegions,
      setProviders,
      setDocumentTypes
    );
  });

  const showComponent = (step) => {
      switch (step) {
        case 0:
          return (
            <div className="col-10">
              <LandlordInformation
                landlord={landlord}
                setLandlord={setLandlord}
                countries={countries}
                idDocuments={idDocuments}
              />
              <SegmentSeparator />
              {nextOfKins.map((kin, index) => {
                return (
                  <NextOfKin
                    nextOfKin={kin}
                    kins={nextOfKins}
                    index={index}
                  />
                )
              })}
              <SegmentSeparator />
              <Attachment
                attachments={attachments}
                documentTypes = {documentTypes}
                attachmentOwner={'Landlord'}
              />
            </div>            
          )
        case 1:
          return (
            <div className='col-10'>
              <SegmentSeparator border= {false}/>
              {properties.map((property, index) => {
                return (
                  <PropertyInformation
                    properties={properties}
                    property={property}
                    index={index}
                    propertyTypes={propertyTypes}
                    bedrooms={bedrooms}
                    regions= {geographicRegions}
                  />
                )
              })}
              <SegmentSeparator/>
              {bankDetails.map((bankDetail, index) => {
                return (
                  <PropertyPaymentInformation
                    bankDetail={bankDetail}
                    bankDetails={bankDetails}
                    providers={serviceProviders}
                    index={index}
                    banks={banks}
                  />
                )
              })}
            </div>
          )  
        case 2:
          return (
            <Confirmation
              landlord={landlord}
              properties={properties}
              bankDetails={bankDetails}
              nextOfKins={nextOfKins}
              attachments={attachments}
            />
          )
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

                  <div className="container">
                    <div className='row justify-content-center'>
                      {showComponent(activeStep)}
                    </div>
                  </div>



                  <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                    {/* handles back event and its disabled on the first step */}
                    <Button
                      color="inherit"
                      hidden={activeStep === 0}
                      onClick={handleBack}
                      sx={{ mr: 1 }}
                    >
                      Back
                    </Button>
                    <Box sx={{ flex: '1 1 auto' }} />
                    {/* handles next event and shows completed when all steps are completed or current step completed */}

                    <Button onClick={handleNext} sx={{ mr: 1 }}>
                      Next
                    </Button>
                    {activeStep !== steps.length &&
                      (completed[activeStep] ? (
                        <Typography variant="caption" sx={{ display: 'inline-block' }}>
                          Step {activeStep + 1} already completed
                        </Typography>
                      ) : (
                        <Button onClick={handleComplete}>
                          {completedSteps() === totalSteps() - 1
                            ? 'Finish'
                            : 'Complete Step'}
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
  )
}

export default LandlordStepper