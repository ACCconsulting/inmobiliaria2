import { combineReducers } from "redux";
import authReduxer from "./Auth";
import Registro from "./Register";

export default combineReducers({
  Auth: authReduxer,
  Registro: Registro,
});
