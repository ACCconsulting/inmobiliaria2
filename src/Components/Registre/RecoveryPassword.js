import React, { Fragment,useEffect } from "react";
import { Form, Input, Button, Row, Col, Spin, Alert } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import imgReset from "../../img/reset.png";

import { useDispatch, useSelector } from "react-redux";

import { updateRecoveryPasswordAction } from "../../_Actions/Auth";
import useNotification from "../Helper/Hooks/useNotification";



const RecoveryPassword = (props) => {
  const dispatch = useDispatch();
  const { notificacion } = useNotification();

  const objUser = useSelector((state) => state.Auth);
  const { mensaje, cargando, mensajeRecovery, recoveryPass } = objUser;

  useEffect(() => {
   if(recoveryPass===true)
   {
     props.history.push("/");
      notificacion("success", "Datos Actualziados", mensajeRecovery);
   }
  }, [recoveryPass]);


  const onFinish = (values) => {
    const objSendo = {
      Password: values.Password,
      Token: props.match.params.id,
    };
    const updateRecoveryPas = () => dispatch(updateRecoveryPasswordAction(objSendo));
    updateRecoveryPas();
    
  };
  return (
    <Fragment>
      <Row justify="center">
        <img src={imgReset} alt="Reset" width="100" height="100"></img>
      </Row>
      <Row justify="center">
        <Col>
          <Spin spinning={cargando}>
            <Form
              name="normal_login"
              className="login-form"
              onFinish={onFinish}
            >
              <Form.Item
                label="Nuevo password"
                style={{ display: "inline-block", width: "100%" }}
                name="Password"
                rules={[{ required: true, message: "contraseña obligatoria" }]}
                hasFeedback
              >
                <Input.Password
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="nueva contraseña"
                />
              </Form.Item>
              <Form.Item
                style={{ display: "inline-block", width: "100%" }}
                name="confirm"
                label="Confirm Password"
                dependencies={["Password"]}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "el campo es obligatorio!",
                  },
                  ({ getFieldValue }) => ({
                    validator(rule, value) {
                      if (!value || getFieldValue("Password") === value) {
                        return Promise.resolve();
                      }

                      return Promise.reject("Las contraseñas son diferentes!");
                    },
                  }),
                ]}
              >
                <Input.Password
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Confirmar contraseña"
                />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  Aceptar
                </Button>
              </Form.Item>
            </Form>
          </Spin>
        </Col>
      </Row>
      {mensaje ? (
        <Row justify="center">
          <Alert description={mensaje} type="error" showIcon />
        </Row>
      ) : null}
    </Fragment>
  );
};
export default RecoveryPassword;
