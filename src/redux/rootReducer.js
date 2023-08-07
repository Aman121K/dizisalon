import { combineReducers } from "redux";
import { reducer } from "./reducer/reducer";
import { usertype } from "./reducer/users";
// usertype
export default combineReducers({
    reducer,
    usertype
})