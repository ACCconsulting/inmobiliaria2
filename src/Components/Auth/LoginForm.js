import React, { Fragment, useState, useEffect } from "react";
import imgKey from "../../img/key.png";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Form, Input, Button, Row, Col, Spin, Alert } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

import { Login, RecoveryPassword } from "../../_Actions/Auth";
import AlertCustom from "../Helper/Alert";

import ReenviarEmail from "../Registre/ReenviarEmail";

const LoginForm = (props) => {
  const dispatch = useDispatch();

  //Recuperar contraseña
  const [visible, setVisible] = useState(false);
  //Metodo del aceptar modal
  const onCreate = (values) => {
    console.log(values);
    const Recovery = () => dispatch(RecoveryPassword(values));
    Recovery();

    setVisible(false);
  };

  const objUser = useSelector((state) => state.Auth);
  const {
    autenticado,
    mensaje,
    cargando,
    firstTime,
    mensajeRecovery,
    recoveryPass,
  } = objUser;

  // useEffect(() => {
  //   if (recoveryPass) {
  //     setVisible(false);
  //   }
  // }, [mensajeRecovery]);

  // fin recuperar contraseña

  const inisiarSession = (usuario) => dispatch(Login(usuario));

  useEffect(() => {
    if (autenticado) {
      props.history.push("/publications");
    }
  }, [autenticado]);

  const onFinish = (values) => {
    inisiarSession(values);
  };

  return (
    <Fragment>
      <Row justify="center">
        <img src={imgKey} alt="Login" width="100" height="100"></img>
      </Row>
      <Row justify="center">
        <Col span={8}>
          <Spin spinning={cargando}>
            <Form
              name="normal_login"
              className="login-form"
              onFinish={onFinish}
            >
              <Form.Item
                style={{ display: "inline-block", width: "100%" }}
                label="Usuario"
                name="UserName"
                rules={[
                  { required: true, message: "Porfavor ingrese el usuario" },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Usuario"
                />
              </Form.Item>
              <Form.Item
                label="Password"
                style={{ display: "inline-block", width: "100%" }}
                name="Password"
                rules={[{ required: true, message: "contraseña obligatoria" }]}
              >
                <Input.Password
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              {firstTime === true ? (
                <Fragment>
                  <Form.Item
                    label="Nuevo password"
                    style={{ display: "inline-block", width: "100%" }}
                    name="NewPassword"
                    rules={[
                      {
                        required: firstTime,
                        message: "contraseña obligatoria",
                      },
                    ]}
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
                    dependencies={["NewPassword"]}
                    hasFeedback
                    rules={[
                      {
                        required: firstTime,
                        message: "el campo es obligatorio!",
                      },
                      ({ getFieldValue }) => ({
                        validator(rule, value) {
                          if (
                            !value ||
                            getFieldValue("NewPassword") === value
                          ) {
                            return Promise.resolve();
                          }

                          return Promise.reject(
                            "Las contraseñas son diferentes!"
                          );
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
                </Fragment>
              ) : null}

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  Iniciar Sesion
                </Button>
                <Button
                  type="link"
                  onClick={() => setVisible(true)}
                  className="login-form-button"
                >
                  ¿Olvidaste la contraseña?
                </Button>
              </Form.Item>

              {mensaje ? (
                <AlertCustom type="error" title="Error" description={mensaje} />
              ) : null}
            </Form>
          </Spin>
        </Col>

        <ReenviarEmail
          visible={visible}
          onCreate={onCreate}
          onCancel={() => {
            setVisible(false);
          }}
          opcion="Recoveri"
        />
      </Row>

      {recoveryPass ? (
        <Row justify="center">
          <Alert
            className="AlertClass"
            description={mensajeRecovery}
            type="success"
            showIcon
          />
        </Row>
      ) : null}
    </Fragment>
  );
};

export default LoginForm;
