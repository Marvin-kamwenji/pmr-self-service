import * as ACTION_TYPES from '../actions/action_types';

const initialState = {
    submitSuccess: false,
}

const landlordSubmissionReducer = (state = initialState, action) => {
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

export default landlordSubmissionReducer