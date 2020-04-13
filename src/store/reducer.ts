import {ADD_ADDRESS, DEL_ADDRESS} from "./action-type";
import {IState, IAction} from "./interface";

let defaultState: IState = {
  addressList: []
}

export default (state: IState = defaultState, action: IAction) => {
  switch (action.type) {
    case ADD_ADDRESS:
      return {
        addressList: [...state.addressList, action.payload]
      }
    case DEL_ADDRESS:
      return {
        addressList: state.addressList.filter(address => address !== action.payload)
      }
    default:
      return state
  }
}
