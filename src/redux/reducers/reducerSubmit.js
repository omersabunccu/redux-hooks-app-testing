import { bindActionCreators } from "redux";
import { submitResult } from "../../assets/submitResultData";
import { submit, restart } from "../actions";
// import * as action from "../redux/actions"
function reducerForSubmit(state = submitResult, action) {
  switch(action.type){
    case submit:
      return action.payload.message
    case restart:
      return action.payload.message
    default:
      return state
  }
}

export default reducerForSubmit;
