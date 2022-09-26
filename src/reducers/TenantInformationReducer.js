import * as ACTION_TYPES from '../actions/tenantActionTypes';

const initialState= {
    tenantInformation: {
        tenantType:'INDIVIDUAL'
    },
    nextOfKin: {},
    bankDetail: {},
    tenantEmployer: {},
    attachments: [],
    landlordInformation: {},
    propertyInformation: {}
}

function TenantInformationReducer(state = initialState, action){
    switch (action.type) {
      case ACTION_TYPES.TENANT_INFO:
        return {
          ...state,
          tenantInformation: action.payload,
        };
      case ACTION_TYPES.NEXT_OF_KIN_INFO:
        return {
          ...state,
          nextOfKin: action.payload,
        };
      case ACTION_TYPES.BANK_INFO:
        return {
          ...state,
          bankDetail: action.payload,
        };
      case ACTION_TYPES.EMPLOYER_INFO:
        return {
          ...state,
          tenantEmployer: action.payload,
        };
      case ACTION_TYPES.ATTACHMENT_INFO:
        return {
          ...state,
          attachments: action.payload,
        };
      case ACTION_TYPES.LANDLORD_INFO:
        return {
          ...state,
          landlordInformation: action.payload,
        };
      case ACTION_TYPES.PROPERTY_INFO:
        return {
          ...state,
          propertyInformation: action.payload,
        };
      case ACTION_TYPES.TENANT:
        return action.payload;
      default:
        return state;
    }

}
export default TenantInformationReducer;