import {ADD_ADDRESS, DEL_ADDRESS} from "./action-type";

export const addUserAddress = (address: string) => {
    return {
        type: ADD_ADDRESS,
        payload: address
    }
};

export const delUserAddress = (address: string) => {
    return {
        type: DEL_ADDRESS,
        payload: address
    }
};
