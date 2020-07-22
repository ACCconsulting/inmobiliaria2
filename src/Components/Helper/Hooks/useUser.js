import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { ClearStateAction } from "../../../_Actions/Register";

export default function useUser() {
  const history = useHistory(); //Habilitar histori para redireccion

  const dispatch = useDispatch();
  const objUser = useSelector((state) => state.Auth);
  const { token } = objUser;

  const Login = useCallback(() => {}, []);
  const Logon = useCallback(() => {
    const limpiarState = () => dispatch(ClearStateAction());
    limpiarState();
    history.push("/");
    window.location.reload();
  }, [token]);

  return {
    isLogged: Boolean(token),
    Login,
    Logon,
  };
}
