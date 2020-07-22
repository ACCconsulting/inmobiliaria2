import {
  LOGIN_BEGIN,
  CHANGE_PASSWORD,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  GET_USERINFO,
  LIMPIAR_USER,
  MENU_OPTION,
} from "../../Types";

const initialState = {
  token: localStorage.getItem("token"),
  UserCode: localStorage.getItem("UserCode"),
  autenticado: null,
  user: null,
  mensaje: null,
  cargando: false,
  firstTime: false,
  optionMenu: "Inicio",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_BEGIN:
      return {
        ...state,
        mensaje: null,
        cargando: true,
        firstTime: false,
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
