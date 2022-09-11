import { combineReducers } from "redux";
import landlordInfoReducer from "./landlord_info_reducer";

const rootReducer = combineReducers(
    {
        landlordInfoReducer
    }
)

export default rootReducer;