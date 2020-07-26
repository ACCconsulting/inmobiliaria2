import React, { useState } from "react";
import { Button, Modal, Form, Input, Radio } from "antd";

const PasswordRecover = () => {
  return (
    <p>
      Ingresa el correo electrónico asociado a la cuenta, te enviaremos las
      instrucciones para restablecer la contraseña
    </p>
  );
};

function PasswordReSend(opcion) {
  if (opcion === "Recoveri") {
    return (
      <p>
        Ingresa el correo electrónico asociado a la cuenta, te enviaremos las
        instrucciones para restablecer la contraseña.
      </p>
    );
  } else if (opcion === "Resend") {
    return (
      <p>
        Ingresa el correo electrónico asociado a la cuenta, te Reenviaremos las
        informacion al correo que registro al crear la cuenta.
      </p>
    );
  }
}

const ReenviarEmail = ({ visible, onCreate, onCancel, opcion }) => {
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="Reenviar correo"
      okText="Enviar"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {});
      }}
    >
      {PasswordReSend(opcion)}
      {/* <PasswordRecover opcion={opcion} /> */}
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{
          modifier: "public",
        }}
      >
        <Form.Item
          name="email"
          label="Correo"
          rules={[
            {
              required: true,
              message: "Ingrese un correo!",
            },
            {
              type: "email",
              message: "El texto no es un correo valido!",
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ReenviarEmail;
