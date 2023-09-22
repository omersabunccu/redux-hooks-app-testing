import { bindActionCreators } from "redux";
import { submitResult } from "../assets/submitResultData";
import { submit } from "../redux/actions";
// import * as action from "../redux/actions"
function reducerForSubmit(state = submitResult, action) {
  if (action.type === submit){
    return action.payload.message
  }
  return state
}

export default reducerForSubmit;
