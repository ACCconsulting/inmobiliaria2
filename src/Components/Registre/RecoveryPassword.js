import React, { Fragment } from "react";
import { Form, Input, Button, Row, Col, Spin } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import imgReset from "../../img/reset.png";

const RecoveryPassword = () => {
  const onFinish = () => {};
  return (
    <Fragment>
      <Row justify="center">
        <img src={imgReset} alt="Reset" width="100" height="100"></img>
      </Row>
      <Row justify="center">
        <Col>
          <Spin spinning={false}>
            <Form
              name="normal_login"
              className="login-form"
              onFinish={onFinish}
            >
              <Form.Item
                label="Nuevo password"
                style={{ display: "inline-block", width: "100%" }}
                name="NewPassword"
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
                dependencies={["NewPassword"]}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "el campo es obligatorio!",
                  },
                  ({ getFieldValue }) => ({
                    validator(rule, value) {
                      if (!value || getFieldValue("NewPassword") === value) {
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

              {/* {mensaje ? (
              <AlertCustom type="error" title="Error" description={mensaje} />
            ) : null} */}
            </Form>
          </Spin>
        </Col>
      </Row>
    </Fragment>
  );
};
export default RecoveryPassword;
