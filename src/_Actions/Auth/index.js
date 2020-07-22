import {
  LOGIN_BEGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  GET_USERINFO,
  CHANGE_PASSWORD,
  LOGON,
} from "../../Types";

import clienteAxios from "../../Config/axios";

export function Login(data) {
  return async (dispatch) => {
    dispatch(beginLogin(data));
    const response = await clienteAxios
      .post("api/User/Login", data)
      .then((response) => {
        console.log(response.data);
        if (response.data.Result === "Ok") {
          const { ObjResult } = response.data;
          console.log(ObjResult);
          dispatch(loginSuccess(ObjResult));
        } else if (response.data.Result === "Validation") {
          dispatch(loginError(response.data.Message));
        } else if (response.data.Result === "RequireChangePwd") {
          dispatch(changePassword(response.data.Message));
        } else if (response.data.Result === "Error") {
          dispatch(loginError(response.data.Message));
        } else if (response.data.Result === "NoData") {
          dispatch(loginError(response.data.Message));
        } else
          dispatch(
            loginError(
              "Ocurrio un error al tratar de loguearse. Intentelo mas tarde"
            )
          );
      })
      .catch((err) => {
        if (err.response) {
          console.log("Errorde tipo response");
          dispatch(loginError(err.response.data.Message));
        } else if (err.request) {
          console.log("Errorde tipo request");
          dispatch(loginError("Error de tipo request"));
        } else {
          console.log("otro error");
          dispatch(
            loginError(
              "Ocurrio un error al tratar de loguearse. Intentelo mas tarde"
            )
          );
        }
      });
  };
}
const beginLogin = (data) => ({
  type: LOGIN_BEGIN,
  payload: data,
});
const loginSuccess = (data) => ({
  type: LOGIN_SUCCESS,
  payload: data,
});
const loginError = (error) => ({
  type: LOGIN_ERROR,
  payload: error,
});

const changePassword = (error) => ({
  type: CHANGE_PASSWORD,
  payload: error,
});
