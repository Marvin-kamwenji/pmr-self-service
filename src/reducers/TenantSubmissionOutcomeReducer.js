import * as ACTION_TYPES from '../actions/tenantActionTypes';

const initialState = {
    submitSuccess: false,
}

function TenantSubmissionOutcome(state = initialState, action){
    switch (action.type){
        case ACTION_TYPES.SUBMIT_SUCCESS:
            return{
                ...state,
                submitSuccess: true
            }

        case ACTION_TYPES.SUBMIT_FAILURE:
            return{
                ...state,
                submitSuccess: false,
                failureCause: action.payload
            }

        default:
            return state;
    }

}
export default TenantSubmissionOutcome;