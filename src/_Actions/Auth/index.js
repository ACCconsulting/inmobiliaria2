import {
  LOGIN_BEGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  GET_USERINFO,
  CHANGE_PASSWORD,
  LOGON,
  BEGIN,
  RECOVERY_PAS_SUCCESS,
  RECOVERY_PAS_ERROR,
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

export function RecoveryPassword(email) {
  return async (dispatch) => {
    dispatch(beginRecoveryPass());
    try {
      const response = await clienteAxios.post(
        `api/User/RequestPasswordChange?email=${email.email}`
      );

      switch (response.data.Result) {
        case "Ok":
          dispatch(recoveryPassExito(response.data.Message));
          break;
        case "Validation":
        case "Error":
          dispatch(recoveryPassError(response.data.Message));
          break;
        case "NoData":
          dispatch(
            recoveryPassError(
              "el correo que ingreso no esta vinculado a ninguna cuenta"
            )
          );
          break;

        default:
          dispatch(
            recoveryPassError("Ocurrio un error al intentar reenviar el correo")
          );
          break;
      }
    } catch (error) {
      dispatch(
        recoveryPassError("Ocurrio un error al intentar recuperar contraseña")
      );
    }
  };
}
const beginRecoveryPass = () => ({
  type: BEGIN,
});
const recoveryPassExito = (msj) => ({
  type: RECOVERY_PAS_SUCCESS,
  payload: msj,
});
const recoveryPassError = (msj) => ({
  type: RECOVERY_PAS_ERROR,
  payload: msj,
});

export function updateRecoveryPasswordAction(data) {
  return async (dispatch) => {
    dispatch(beginRecoveryPass());
    try {
      const response = await clienteAxios.post(
        "api/User/ConfirmPasswordChange",
        data
      );

      switch (response.data.Result) {
        case "Ok":
          dispatch(recoveryPassExito(response.data.Message));
          break;
        case "Validation":
        case "Error":
          dispatch(recoveryPassError(response.data.Message));
          break;
        case "NoData":
          dispatch(
            recoveryPassError(
              "el correo que ingreso no esta vinculado a ninguna cuenta"
            )
          );
          break;

        default:
          dispatch(
            recoveryPassError("Ocurrio un error al intentar reenviar el correo")
          );
          break;
      }
    } catch (error) {
      dispatch(
        recoveryPassError("Ocurrio un error al intentar recuperar contraseña")
      );
    }
  };
}
