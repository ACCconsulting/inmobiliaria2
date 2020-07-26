import {
  LOGIN_BEGIN,
  CHANGE_PASSWORD,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  GET_USERINFO,
  LIMPIAR_USER,
  MENU_OPTION,
  BEGIN,
  RECOVERY_PAS_SUCCESS,
  RECOVERY_PAS_ERROR,
} from "../../Types";

const initialState = {
  token: localStorage.getItem("token"),
  UserCode: localStorage.getItem("UserCode"),
  autenticado: null,
  user: null,
  mensaje: null,
  mensajeRecovery: null,
  cargando: false,
  firstTime: false,
  optionMenu: "Inicio",
  recoveryPass: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case BEGIN:
    case LOGIN_BEGIN:
      return {
        ...state,
        mensaje: null,
        mensajeRecovery: null,
        cargando: true,
        firstTime: false,
        recoveryPass: false,
      };
    case MENU_OPTION:
      return {
        ...state,
        optionMenu: action.payload,
      };

    case CHANGE_PASSWORD:
      return {
        ...state,
        mensaje: action.payload,
        cargando: false,
        firstTime: true,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.Token);
      localStorage.setItem("UserCode", action.payload.UserInfo.UserName);
      return {
        ...state,
        token: action.payload.Token,
        UserCode: action.payload.UserInfo.UserName,
        autenticado: true,
        mensaje: null,
        cargando: false,
        user: action.payload.UserInfo,
      };
    case RECOVERY_PAS_ERROR:
    case LOGIN_ERROR:
      localStorage.removeItem("token");
      localStorage.removeItem("UserCode");
      return {
        ...state,
        token: null,
        mensaje: action.payload,
        cargando: false,
      };
    case GET_USERINFO:
      return {
        ...state,
        user: action.payload,
        cargando: false,
      };

    // case RECOVERY_PAS_ERROR:
    //   return {
    //     ...state,
    //     mensajeRecovery: action.payload,
    //     cargando: false,
    //     recoveryPass: false,
    //   };
    case RECOVERY_PAS_SUCCESS:
      return {
        ...state,
        mensajeRecovery: action.payload,
        cargando: false,
        recoveryPass: true,
      };

    case LIMPIAR_USER:
      localStorage.removeItem("token");
      localStorage.removeItem("UserCode");
      return {
        state: null,
      };

    default:
      return state;
  }
}
