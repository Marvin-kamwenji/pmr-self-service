import { combineReducers } from "redux";
import landlordInfoReducer from "./landlord_info_reducer";
import landlordSubmissionReducer from "./landlord_submission_outcome_reducer";

const rootReducer = combineReducers(
    {
        landlordInfoReducer,
        landlordSubmissionReducer
    }
)

export default rootReducer;