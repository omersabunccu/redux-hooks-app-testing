import { createStore, combineReducers } from "redux";

import reducer from "./reducers/reducer";
import reducerForSubmit from "./reducers/reducerSubmit";
const allReducers = combineReducers({
    votingApp: reducer,
    submitResult: reducerForSubmit
})

const store = createStore(allReducers); // {funct, ...hidden voting app data}
export default store;
