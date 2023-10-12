import handleCart from "./handleCart";
import handleUserDetails from "./handleUserDetails";
import { combineReducers } from "redux";
const rootReducers = combineReducers({
  handleCart,
  handleUserDetails,
});
export default rootReducers;
