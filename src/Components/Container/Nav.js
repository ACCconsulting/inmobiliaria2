import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Menu } from "antd";

import {
  SettingOutlined,
  LoginOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

import useUser from "../Helper/Hooks/useUser";
import MenuMyAccount from "../Account/Menu";

import { menuOptionAction } from "../../_Actions/menuAction";

const { SubMenu } = Menu;

const Nav = () => {
  const dispatch = useDispatch();

  const { messageError, save } = useSelector((state) => state.Registro);

  const { isLogged, Logon } = useUser();

  const [current, setcurrent] = useState("mail");
  const [accounMenu, setAccontmenu] = useState(false);

  const MenuSelected = (title) => dispatch(menuOptionAction(title));

  const onCloseMyAccountmenu = () => {
    setAccontmenu(false);
  };
  const handleClick = (e) => {
    setcurrent(e.key);
    if (e.key === "myaccount") {
      setAccontmenu(true);
    }
    switch (e.key) {
      case "logon":
        {
          Logon();
        }
        break;
      case "register":
        MenuSelected("Crear cuenta");
        break;
      case "home":
        MenuSelected("Inicio");
        break;
      case "login":
        MenuSelected("Iniciar sesión");
        break;
      default:
        break;
    }
  };

  return (
    <Fragment>
      <Menu
        theme="dark"
        onClick={handleClick}
        selectedKeys={current}
        mode="horizontal"
        style={{ float: "right" }}
      >
        <Menu.Item key="home">
          <Link to="/">Inicio</Link>
        </Menu.Item>
        {isLogged ? (
          <Menu.Item key="myaccount">Mi cuenta</Menu.Item>
        ) : (
          <Menu.Item key="register">
            <Link to="/register">Registrarse</Link>
          </Menu.Item>
        )}

        {/* <SubMenu icon={<SettingOutlined />} title="Propiedades">
        <Menu.Item key="5">Casa</Menu.Item>
        <Menu.Item key="6">Departamento </Menu.Item>
        <Menu.Item key="7">Bodega</Menu.Item>
        <Menu.Item key="8">Terreno</Menu.Item>
      </SubMenu> */}

        {isLogged ? (
          <Menu.Item key="logon" icon={<LogoutOutlined />}>
            Salir
          </Menu.Item>
        ) : (
          <Menu.Item key="login" icon={<LoginOutlined />}>
            <Link to="/login">Ingresar</Link>
          </Menu.Item>
        )}
      </Menu>
      <MenuMyAccount
        show={accounMenu}
        onCloseMyAccountmenu={onCloseMyAccountmenu}
      />
    </Fragment>
  );
};
export default Nav;
