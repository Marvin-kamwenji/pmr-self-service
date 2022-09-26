import { combineReducers } from "redux";
import landlordInfoReducer from "./landlord_info_reducer";
import landlordSubmissionReducer from "./landlord_submission_outcome_reducer";
import TenantInformationReducer from "./TenantInformationReducer";
import TenantSubmissionOutcome from "./TenantSubmissionOutcomeReducer";

const rootReducer = combineReducers(
    {
        landlordInfoReducer,
        landlordSubmissionReducer,
        TenantInformationReducer,
        TenantSubmissionOutcome
    }
)

export default rootReducer;