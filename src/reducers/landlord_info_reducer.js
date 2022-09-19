import * as ACTION_TYPES from '../actions/action_types'

const initialState = {
    landlordInfo:{
        landlordType: 'INDIVIDUAL'
    },
    nextOfKins:[],
    properties: [],
    paymentDetails: [],
    attachmentFiles: []
}

const landlordInfoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.LANDLORD_INFO:
            return {
                ...state,
                landlordInfo: action.payload
            }
        case ACTION_TYPES.NEXT_OF_KIN_INFO:
            return {
                ...state,
                nextOfKins: action.payload
            }
            
        case ACTION_TYPES.PROPERTY_INFO:
            return {
                ...state,
                properties: action.payload    
            }

        case ACTION_TYPES.PAYMENT_INFO:
            return {
                ...state,
                paymentDetails: action.payload
            }
        case ACTION_TYPES.ATTACHMENT_INFO:
            return {
                ...state,
                attachmentFiles: action.payload
        }
        case ACTION_TYPES.LANDLORD:
            return action.payload
        default:
            return state;
    }
}

export default landlordInfoReducer