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
import {ApiUtil, PostLandlord} from "./ApiUtil";
import { connect } from "react-redux";
import LandlordSuccess from "./LandlordSuccess";
import * as ACTIONS from '../../actions/actions';
import { Formik, Form, Field } from 'formik';
import { LandlordInfoSchema } from "./ValidationSchema";

const steps = ['Personal Information', 'Property Information', 'Confirmation']

function mapStateToProps(state){
  return {
    currentState: {
      landlord: state.landlordInfoReducer,
      submissionSuccess: state.landlordSubmissionReducer
    }
  }
}

function mapDispatchToProps(dispatch){
  return {
    submitSuccessful: () => dispatch(ACTIONS.landlord_success()),
    submitFailed: (failure_cause) => dispatch(ACTIONS.landlord_failure(failure_cause)),
    updateAttachmentFiles: (attachments) => dispatch(ACTIONS.attachments_info(attachments)),
    updateLandlordFromStorage: (landlord) => dispatch(ACTIONS.landlord(landlord)),
  }
}

function LandlordStepper({currentState, submitSuccessful, submitFailed, updateAttachmentFiles, updateLandlordFromStorage}) {


  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});
  const [kinIndex, setKinIndex] = useState([0]);
  const [propertyIndex, setPropertyIndex] = useState([0]);
  const [bankDetailIndex, setBankDetailIndex] = useState([0]);
  const [countries, setCountries] = useState([]);
  const [idDocuments, setIdDocuments] = useState([]);
  const [propertyTypes, setPropertyTypes] = useState([]);
  const [bedrooms, setBedrooms] = useState([]);
  const [banks, setBanks] = useState([]);
  const [geographicRegions, setRegions] = useState([]);
  const [serviceProviders, setProviders] = useState([]);

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
    localStorage.setItem('landlord_state', JSON.stringify(currentState.landlord));
  };

  //handles back event by decrementing  active step
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    localStorage.setItem('landlord_state',  JSON.stringify(currentState.landlord));
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  //sets complete to a stepper when done
  //meshack this is the method note::::
  const handleComplete = () => {
    console.log(currentState.landlord);
    PostLandlord(currentState.landlord)
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
    ApiUtil(
      setCountries,
      setIdDocuments,
      setPropertyTypes,
      setBedrooms,
      setBanks,
      setRegions,
      setProviders,
      updateAttachmentFiles
    );
    
  },[]);
 
// Feature: Retrieve state from local storage

  // useEffect(() => {
  //   try {
  //     const landlord = JSON.parse(localStorage.getItem('landlord_state'));
  //     updateLandlordFromStorage(landlord);
  //   } catch (error) {
  //     console.log(error)
  //   }
  // },[])


  const showComponent = (step, props) => {
      switch (step) {
        case 0:
          return (
            <div className="col-10">
              <LandlordInformation
                countries={countries}
                idDocuments={idDocuments}
                props = {props}
              />
              <SegmentSeparator />
              {kinIndex.map((kin, index) => {
                return (
                  <NextOfKin
                    index={index}
                    props = {props}
                  />
                )
              })}
              <SegmentSeparator />
              <Attachment
                attachmentOwner={'Landlord'}
                props = {props}
              />
            </div>            
          )
        case 1:
          return (
            <div className='col-10'>
              <SegmentSeparator border= {false}/>
              {propertyIndex.map((property, index) => {
                return (
                  <div>
                    <PropertyInformation
                      index={index}
                      propertyTypes={propertyTypes}
                      bedrooms={bedrooms}
                      regions={geographicRegions}
                      props = {props}
                    />
                  </div>
                  
                )
              })}
              <SegmentSeparator/>
              {bankDetailIndex.map((detail, index) => {
                return (<PropertyPaymentInformation
                  providers={serviceProviders}
                  index={index}
                  banks={banks}
                  props={props}
                />)
              })}
            </div>
          )  
        case 2:
          if (currentState.submissionSuccess.submitSuccess) {
            return (
              <LandlordSuccess />
            )
          } else {
            return (
              <Confirmation landlord={currentState.landlord}
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
            initialValues={{...currentState.landlord}}
            onSubmit={handleComplete}
            validationSchema = {LandlordInfoSchema}
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
                            <Button type="submit" disabled = {props.isValid === false}>
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

export default connect(mapStateToProps, mapDispatchToProps)(LandlordStepper)