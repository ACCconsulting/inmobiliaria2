import React, { Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { Result, Button } from "antd";
import ReenviarEmail from "./ReenviarEmail";

import { ResendEmailAction, ClearStateAction } from "../../_Actions/Register";
import useNotification from "../Helper/Hooks/useNotification";

// Email
const Finaliza = () => {
  const history = useHistory(); //Habilitar histori para redireccion

  const dispatch = useDispatch();
  const { notificacion } = useNotification();
  const { Email, Id } = useSelector(
    (state) => state.Registro.objRturnBeforSave
  );
  const { messageError, save } = useSelector((state) => state.Registro);

  useEffect(() => {
    if (messageError) notificacion("warning", "Notificación", messageError);
  }, [messageError]);

  // const [visible, setVisible] = useState(false);
  // const onCreate = (values) => {
  //   console.log("Received values of form: ", values);
  //   setVisible(false);
  // };
  const ReSend = () => {
    const reSendEmail = () => dispatch(ResendEmailAction(Id));
    reSendEmail();
  };
  const onFinish = () => {
  history.push("/");
    window.location.reload();
     
  };
  let subtitle = `Enviamos un correo a la cuenta: ${Email} con los datos de acceso`;
  return (
    <Fragment>
      <Result
        status="success"
        title="Su registro fue creado con exito!"
        subTitle={subtitle}
        extra={[
          <Button key="again" type="" onClick={() => ReSend()}>
            Reenviar
          </Button>,
          <Button key="Finish" type="primary" onClick={() => onFinish()}>
            Terminar
          </Button>,
        ]}
      />

      {/* <ReenviarEmail
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
        opcion="Resend"
      /> */}
    </Fragment>
  );
};
export default Finaliza;
