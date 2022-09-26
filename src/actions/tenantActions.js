import * as ACTION_TYPES from './tenantActionTypes';

export const tenant_info = (tenant_info) => {
    return {
        type : ACTION_TYPES.TENANT_INFO,
        payload: tenant_info
    }
}

export const next_of_kin_info = (next_of_kin_info) => {
    return {
        type : ACTION_TYPES.NEXT_OF_KIN_INFO,
        payload : next_of_kin_info,
    }
}

export const bank_info = (bank_info) => {
    return {
        type : ACTION_TYPES.BANK_INFO,
        payload : bank_info,
    }
}

export const employer_info = (employer_info) => {
    return {
        type : ACTION_TYPES.EMPLOYER_INFO,
        payload : employer_info,
    }
}

export const attachment_info = (attachment_info) => {
    return {
        type : ACTION_TYPES.ATTACHMENT_INFO,
        payload : attachment_info,
    }
}


export const landlord_info = (landlord_info) => {
    return {
        type : ACTION_TYPES.LANDLORD_INFO,
        payload : landlord_info,
    }
}


export const property_info = (property_info) => {
    return {
        type : ACTION_TYPES.PROPERTY_INFO,
        payload : property_info,
    }
}

export const tenant_success = () => {
    return {
        type : ACTION_TYPES.SUBMIT_SUCCESS
    }
}

export const tenant_failure = (failure_cause) => {
    return {
        type: ACTION_TYPES.SUBMIT_FAILURE,
        payload: failure_cause
    }
}

export const tenant = (tenant) => {
    return {
        type: ACTION_TYPES.TENANT,
        payload: tenant
    }
}

