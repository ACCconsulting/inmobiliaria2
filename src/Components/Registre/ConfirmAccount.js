import React, { useEffect } from "react";

import { Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";

import Message from "../Helper/Result";

import { ValidateAccountAction } from "../../_Actions/Register";
import ResultCustom from "../Helper/Result";

const ConfirmAccount = (props) => {
  const { save, messageError, cargando } = useSelector(
    (state) => state.Registro
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const validarCuenta = () =>
      dispatch(ValidateAccountAction(props.match.params.id));
    validarCuenta();
  }, []);

  return (
    <Spin spinning={cargando}>
      {!messageError ? (
        <Message
          type="success"
          title="Gracia por confirmar tu cuenta"
          subtitle="Ya puedes iniciar sesión y disfrutar de los beneficios"
        />
      ) : (
        <ResultCustom
          type="warning"
          title="Ocurrio un problema al activar su cuenta"
          subTitle="Favor de contactar a el administrador "
        />
      )}
    </Spin>
  );
};
export default ConfirmAccount;
