import {
  ACOUNT_BEGIN,
  ACOUNT_EXITO,
  ERROR_ACCOUNT,
  CONFIRM_ACCOUNT_BEGIN,
  CONFIRM_ACCOUNT_EXITO,
  LIMPIAR,
  LIMPIAR_USER,
  USER_SUGGESTION,
  BEGIN,
  EXITO,
  RESEND_EMAIL,
} from "../../Types";

import clienteAxios from "../../Config/axios";

export function createAccountAction(accountdata) {
  return async (dispatch) => {
    dispatch(beginAcount(accountdata));
    try {
      //Ejecutamos el api para guardar los datos en labase de datos
      const response = await clienteAxios.post(
        "api/Company/CreateFreeAccount",
        accountdata
      );

      if (response.data.Result === "Ok") {
        console.log("cuando es ok");
        console.log(response.data);
        dispatch(createAccountSucces(response.data.ObjResult));
      } else if (response.data.Result === "UserExists") {
        dispatch(userExists(response.data.Message));
      } else if (response.data.Result === "Validation") {
        dispatch(createAccountError(response.data.Message));
      } else if (response.data.Result === "Error") {
        dispatch(createAccountError(response.data.Message));
      }
    } catch (ex) {
      if (ex.response) {
        dispatch(createAccountError(ex.response.data.Message));
      } else if (ex.request) {
        dispatch(createAccountError("Error de tipo request"));
        console.log(ex);
      } else {
        dispatch(createAccountError("Ocurrio un error al crear su cuenta"));
      }
    }
  };
}
const beginAcount = (data) => ({
  type: ACOUNT_BEGIN,
  payload: data,
});

const createAccountSucces = (data) => ({
  type: ACOUNT_EXITO,
  payload: data,
});
const userExists = (sugg) => ({
  type: USER_SUGGESTION,
  payload: sugg,
});
const createAccountError = (eror) => ({
  type: ERROR_ACCOUNT,
  payload: eror,
});

export function ClearStateAction() {
  return (dispatch) => {
    dispatch(clearState());
    dispatch(clearStateLogin());
  };
}
const clearState = (eror) => ({
  type: LIMPIAR,
});

const clearStateLogin = (eror) => ({
  type: LIMPIAR_USER,
});

export function ValidateAccountAction(userId) {
  return async (dispatch) => {
    dispatch(beginValidateAccount(userId));
    try {
      //Ejecutamos el api para guardar los datos en labase de datos
      const response = await clienteAxios.post(
        `api/User/ConfirmAccount?userId= ${userId}`
      );

      if (response.data.Result === "Ok") {
        console.log(response.data);
        dispatch(ValidateAccontSucces());
      } else if (response.data.Result === "NoData") {
        dispatch(validateAccountError(response.data.Message));
      } else if (response.data.Result === "Validation") {
        dispatch(validateAccountError(response.data.Message));
      } else if (response.data.Result === "Error") {
        dispatch(validateAccountError(response.data.Message));
      }
    } catch (ex) {
      if (ex.response) {
        dispatch(validateAccountError(ex.response.data.Message));
      } else if (ex.request) {
        console.log(ex.request);
        dispatch(validateAccountError("Error de tipo request"));
        console.log(ex);
      } else {
        dispatch(validateAccountError("Ocurrio un eror al crear su cuenta"));
      }
    }
  };
}
const beginValidateAccount = (id) => ({
  type: CONFIRM_ACCOUNT_BEGIN,
  payload: id,
});
const ValidateAccontSucces = () => ({
  type: CONFIRM_ACCOUNT_EXITO,
});
const validateAccountError = (eror) => ({
  type: ERROR_ACCOUNT,
  payload: eror,
});

export function ResendEmailAction(companyId) {
  return async (dispatch) => {
    dispatch(resendEmailBegin());
    try {
      const response = await clienteAxios.post(
        `api/Company/ResendAccountActivationEmail?companyId= ${companyId}`
      );

      switch (response.data.Result) {
        case "Ok":
          dispatch(resendEmailExito(response.data.Message));
          break;
        case "Validation":
        case "Error":
          dispatch(resendEmailError(response.data.Message));
          break;

        default:
          dispatch(
            resendEmailError("Ocurrio un error al intentar reenviar el correo")
          );
          break;
      }
    } catch (error) {
      dispatch(
        resendEmailError("Ocurrio un error al intentar reenviar el correo")
      );
    }
  };
}
const resendEmailBegin = () => ({
  type: BEGIN,
});
const resendEmailExito = (msj) => ({
  type: RESEND_EMAIL,
  payload: "Correo enviado correctamente",
});
const resendEmailError = (err) => ({
  type: ERROR_ACCOUNT,
  payload: err,
});
