import { createStore, combineReducers } from "redux";
import countReducer from "./reducers/count";

const rootReducer = combineReducers({
  count: countReducer,
});

const store = createStore(rootReducer);

export default store;
