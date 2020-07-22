import React, { Children } from "react";
import { Form, Input, Button, Select, Space, Tag } from "antd";
import { Link } from "react-router-dom";

import {
  UserOutlined,
  SolutionOutlined,
  MailOutlined,
  HomeOutlined,
} from "@ant-design/icons";

const AdvisorCreate = () => {
  const { Option } = Select;
  const onFinish = (values) => {};

  const options = [];
  const children1 = { value: 1, descripcion: "Mexico" };
  const children2 = { value: 2, descripcion: "Estados unidos" };
  const children3 = { value: 3, descripcion: "Colombia" };
  options.push(children1);
  options.push(children2);
  options.push(children3);

  // for (let i = 0; i < 10; i++) {
  //   const value = `${i.toString(36)}${i}`;
  //   options.push({
  //     value,
  //     disabled: i === 10,
  //   });
  // }

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  return (
    <Form
      name="Register2"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      // size="large"
    >
      <Form.Item style={{ marginBottom: 0 }}>
        <Form.Item
          label="Nombre"
          name="Name"
          rules={[{ required: true, message: "El campo es obligatorio" }]}
          style={{ display: "inline-block", width: "calc(25% - 8px)" }}
        >
          <Input type="text" placeholder="Nombre" name="Name" />
        </Form.Item>
        <Form.Item
          label="Apellido Materno"
          name="LastName1"
          rules={[{ required: true, message: "El Campo es obligatorio" }]}
          style={{
            display: "inline-block",
            width: "calc(25% - 8px)",
            margin: "0 8px",
          }}
        >
          <Input type="text" placeholder="Apellido paterno" name="LastName1" />
        </Form.Item>
        <Form.Item
          label="Apellido Paterno"
          name="LastName2"
          rules={[{ required: true, message: "El Campo es obligatorio" }]}
          style={{ display: "inline-block", width: "calc(25% - 8px)" }}
        >
          <Input type="text" placeholder="Apellido materno" name="LastName2" />
        </Form.Item>
        <Form.Item
          label="Email"
          name="Email"
          rules={[
            { required: true, message: "Ingresa un correo!" },
            { type: "email", message: "El texto no es un correo valido!" },
          ]}
          style={{
            display: "inline-block",
            width: "calc(25% - 8px)",
            margin: "0 8px",
          }}
        >
          <Input type="text" placeholder="Correo" name="Email" />
        </Form.Item>
      </Form.Item>
      <Form.Item style={{ marginBottom: 0 }}>
        <Form.Item
          label="Telefono"
          name="Phone"
          style={{ display: "inline-block", width: "calc(25% - 8px)" }}
        >
          <Input type="text" placeholder="Telefono" name="Phone" />
        </Form.Item>
        <Form.Item
          label="Celular"
          name="Mobile"
          style={{
            display: "inline-block",
            width: "calc(25% - 8px)",
            margin: "0 8px",
          }}
        >
          <Input type="text" placeholder="Celular" name="Mobile" />
        </Form.Item>
        <Form.Item
          label="WhatsApp"
          name="WhatsApp"
          style={{ display: "inline-block", width: "calc(25% - 8px)" }}
        >
          <Input type="text" placeholder="WhatsApp" name="WhatsApp" />
        </Form.Item>
      </Form.Item>
      <Form.Item style={{ marginBottom: 0 }}>
        <Form.Item
          label="Facebook"
          name="Facebook"
          style={{ display: "inline-block", width: "calc(25% - 8px)" }}
        >
          <Input type="text" placeholder="Facebook" name="Facebook" />
        </Form.Item>
        <Form.Item
          label="Twitter"
          name="Twitter"
          style={{
            display: "inline-block",
            width: "calc(25% - 8px)",
            margin: "0 8px",
          }}
        >
          <Input type="text" placeholder="Twitter" name="Twitter" />
        </Form.Item>
        <Form.Item
          label="YouTube"
          name="YouTube"
          style={{ display: "inline-block", width: "calc(25% - 8px)" }}
        >
          <Input type="text" placeholder="YouTube" name="YouTube" />
        </Form.Item>
      </Form.Item>
      <Form.Item>
        <Form.Item
          label="Usuario"
          name="Usuario"
          style={{ display: "inline-block", width: "calc(25% - 8px)" }}
        >
          <Input type="text" placeholder="Usuario" name="Usuario" />
        </Form.Item>
        <Form.Item
          label="Rol"
          name="Rol"
          style={{
            display: "inline-block",
            width: "calc(25% - 8px)",
            margin: "0 8px",
          }}
        >
          <Select defaultValue="1" onChange={handleChange}>
            <Option value="1">
              <Tag color="blue">Coordinador</Tag>{" "}
            </Option>
            <Option value="2">
              {" "}
              <Tag color="blue">Mantenimiento</Tag>{" "}
            </Option>
            <Option value="3">
              <Tag color="blue">Lectura</Tag>
            </Option>
          </Select>
        </Form.Item>
      </Form.Item>
      <Form.Item>
        <Space>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Guardar
          </Button>
          <Link to="/advisor/list">
            <Button className="login-form-button">Cancelar</Button>
          </Link>
        </Space>
      </Form.Item>
    </Form>
  );
};
export default AdvisorCreate;
