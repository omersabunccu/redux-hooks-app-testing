import { createStore, combineReducers } from "redux";

import reducer from "./reducer";
import reducerForSubmit from "./reducerSubmit";
const allReducers = combineReducers({
    votingApp: reducer,
    submitResult: reducerForSubmit
})

const store = createStore(allReducers); // {funct, ...hidden voting app data}
export default store;
