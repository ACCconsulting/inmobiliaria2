import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Fragment } from "react";
import { Form, Input, Button, Spin, Space } from "antd";
import {
  SolutionOutlined,
  PhoneOutlined,
  WhatsAppOutlined,
  FacebookOutlined,
  TwitterOutlined,
} from "@ant-design/icons";

import "../Styles/register.css";

import { createAccountAction } from "../../_Actions/Register";
import useNotification from "../Helper/Hooks/useNotification";

const Advisor = {
  Name: "",
  Email: "",
  Phone: "",
  WhatsApp: "",
  Facebook: "",
  Twitter: "",
  Mobile: "",
  LastName1: "",
  LastName2: "",
  StatusId: 1,
};
const Account = {
  Company: [],
  Advisor: [],
  AdvisorUserName: "",
};

const Register2 = ({ props }) => {
  const { nextStep, prevtStep, changeValues, company } = props;
  const dispatch = useDispatch();
  const { notificacion } = useNotification();

  const creacuenta = () => dispatch(createAccountAction(Account));

  const save = useSelector((state) => state.Registro.save);
  const { messageError, cargando, userSuggestion } = useSelector(
    (state) => state.Registro
  );

  useEffect(() => {
    if (save === true) {
      // const limpiarState = () => dispatch(ClearStateAction());
      // limpiarState();
      nextStep(1);
    }
    if (messageError && !save)
      notificacion("error", "Error al crear cuenta", messageError);
  }, [save, messageError]);

  const onFinish = (values) => {
    const {
      Name,
      Email,
      Phone,
      WhatsApp,
      Facebook,
      Twitter,
      AdvisorUserName,
    } = company;

    Advisor.Name = Name;
    Advisor.UserName = AdvisorUserName;
    Advisor.Email = Email;
    Advisor.Phone = Phone;
    Advisor.Mobile = WhatsApp;
    Advisor.WhatsApp = WhatsApp;
    Advisor.Facebook = Facebook;
    Advisor.Twitter = Twitter;
    Advisor.LastName1 = "NA";
    Advisor.LastName2 = "NA";

    Account.Advisor = Advisor;
    Account.Company = company;

    creacuenta(Account);

    // nextStep(1);
  };

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  return (
    <Fragment>
      <Spin spinning={cargando}>
        <Form
          {...layout}
          name="Register2"
          className="login-form"
          initialValues={company}
          onFinish={onFinish}
          size="large"
        >
          <Form.Item
            name="Phone"
            rules={[{ min: 10, message: "El telefono contiene 10 digitos" }]}
          >
            <Input
              prefix={<PhoneOutlined className="site-form-item-icon" />}
              type="number"
              placeholder="Telefono"
              onChange={changeValues}
              name="Phone"
            />
          </Form.Item>
          <Form.Item
            name="WhatsApp"
            rules={[{ min: 10, message: "El telefono contiene 10 digitos" }]}
          >
            <Input
              prefix={<WhatsAppOutlined className="site-form-item-icon" />}
              type="number"
              placeholder="WhatsApp"
              onChange={changeValues}
              name="WhatsApp"
            />
          </Form.Item>
          <Form.Item name="Facebook">
            <Input
              prefix={<FacebookOutlined className="site-form-item-icon" />}
              type="text"
              placeholder="FaceBook"
              onChange={changeValues}
              name="Facebook"
            />
          </Form.Item>
          <Form.Item name="Twitter">
            <Input
              prefix={<TwitterOutlined className="site-form-item-icon" />}
              type="text"
              placeholder="Twitter"
              onChange={changeValues}
              name="Twitter"
            />
          </Form.Item>
          <Form.Item
            name="AdvisorUserName"
            rules={[{ required: true, message: "El Usuario es Requerido" }]}
          >
            <Input
              prefix={<SolutionOutlined className="site-form-item-icon" />}
              type="text"
              placeholder="Usuario"
              onChange={changeValues}
              name="AdvisorUserName"
            />
          </Form.Item>
          {userSuggestion ? (
            <h4 className="suggestion">
              El usuario ya existe, sugerencia: (
              <span className="usersuggestion">{userSuggestion}</span>)
            </h4>
          ) : null}
          <Form.Item>
            <Space>
              <Button type="secudary" onClick={() => prevtStep(1)}>
                Anterior
              </Button>

              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Guardar
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Spin>
    </Fragment>
  );
};
export default Register2;
