import {
  ACOUNT_BEGIN,
  ACOUNT_EXITO,
  ERROR_ACCOUNT,
  CONFIRM_ACCOUNT_BEGIN,
  CONFIRM_ACCOUNT_EXITO,
  LIMPIAR,
  USER_SUGGESTION,
  RESEND_EMAIL,
} from "../../Types";

const initialState = {
  company: [],
  avanzo: false,
  messageError: null,
  save: false,
  cargando: false,
  idConfirm: null,
  userSuggestion: null,
  objRturnBeforSave: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ACOUNT_BEGIN:
      return {
        ...state,
        company: action.payload,
        messageError: null,
        userSuggestion: null,
        cargando: true,
      };
    case ACOUNT_EXITO:
      return {
        ...state,
        cargando: false,
        save: true,
        objRturnBeforSave: action.payload,
        company: [],
        avanzo: false,
        messageError: null,
      };

    case CONFIRM_ACCOUNT_BEGIN:
      return {
        ...state,
        cargando: true,
        save: false,
        messageError: null,
        idConfirm: action.payload,
      };
    case CONFIRM_ACCOUNT_EXITO:
      return {
        ...state,
        cargando: false,
        save: true,
        messageError: null,
      };
    case LIMPIAR:
      localStorage.removeItem("token");
      localStorage.removeItem("UserCode");
      return {
        ...state,
        company: [],
        avanzo: false,
        messageError: null,
        save: false,
        cargando: false,
        idConfirm: null,
        userSuggestion: null,
        objRturnBeforSave: {},
        optionMenu: "",
      };

    case ERROR_ACCOUNT:
      return {
        ...state,
        messageError: action.payload,
        cargando: false,
      };
    case USER_SUGGESTION:
      return {
        ...state,
        userSuggestion: action.payload,
        cargando: false,
      };
    case RESEND_EMAIL:
      return {
        ...state,
        cargando: false,
        save: true,
        messageError: action.payload,
      };

    default:
      return state;
  }
}
