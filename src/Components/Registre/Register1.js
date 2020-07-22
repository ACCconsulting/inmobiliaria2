import React from "react";

import { Form, Input, Button } from "antd";
import {
  UserOutlined,
  SolutionOutlined,
  MailOutlined,
  HomeOutlined,
  CodeOutlined,
} from "@ant-design/icons";

const Register1 = ({ props }) => {
  const { nextStep, changeValues, company } = props;

  const onFinish = (values) => {
    nextStep(0);
  };

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  return (
    <Form
      {...layout}
      name="Register1"
      className="login-form"
      initialValues={company}
      onFinish={onFinish}
      // onValuesChange={changeValueC}
      size="large"
    >
      <Form.Item
        name="Name"
        rules={[{ required: true, message: "Ingresa el nombre!" }]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          onChange={changeValues}
          placeholder="Nombre"
          name="Name"
        />
      </Form.Item>
      <Form.Item
        name="Email"
        rules={[
          { required: true, message: "Ingresa un correo!" },
          {
            type: "email",
            message: "El texto no es un correo valido!",
          },
        ]}
      >
        <Input
          prefix={<MailOutlined className="site-form-item-icon" />}
          type="email"
          placeholder="Correo"
          onChange={changeValues}
          name="Email"
        />
      </Form.Item>
      <Form.Item name="BusinessName">
        <Input
          prefix={<HomeOutlined className="site-form-item-icon" />}
          type="text"
          placeholder="Razon social"
          onChange={changeValues}
          name="BusinessName"
        />
      </Form.Item>
      <Form.Item name="Rfc">
        <Input
          prefix={<SolutionOutlined className="site-form-item-icon" />}
          type="text"
          placeholder="RFC"
          onChange={changeValues}
          name="Rfc"
        />
      </Form.Item>
      <Form.Item
        name="MembershipCode"
        rules={[{ required: true, message: "El codigo es requerido" }]}
      >
        <Input
          prefix={<CodeOutlined className="site-form-item-icon" />}
          type="text"
          placeholder="Codigo de subcripcion"
          onChange={changeValues}
          name="MembershipCode"
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Siguiente
        </Button>
      </Form.Item>
    </Form>
  );
};
export default Register1;
