import * as ACTION_TYPES from './action_types';

export const landlord_info = (landlord_info) => {
    return {
        type : ACTION_TYPES.LANDLORD_INFO,
        payload: landlord_info
    }
}

export const next_of_kins = (next_if_kins) => {
    return {
        type : ACTION_TYPES.NEXT_OF_KIN_INFO,
        payload : next_if_kins,
    }
}

export const property_info = (property_info) => {
    return {
        type : ACTION_TYPES.PROPERTY_INFO,
        payload : property_info
    }
}

export const payment_info = (payment_info) => {
    return {
        type: ACTION_TYPES.PAYMENT_INFO,
        payload : payment_info
    }
}

export const attachment_info = (attachment_info) => {
    return {
        type : ACTION_TYPES.ATTACHMENT_INFO,
        payload: attachment_info
    }
}