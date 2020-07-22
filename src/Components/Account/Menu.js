import React, { useState } from "react";
import { Drawer, List, Menu } from "antd";
import { Link } from "react-router-dom";
import useMenuOption from "../Helper/Hooks/useMenuOption";

const MenuAccount = ({ show, onCloseMyAccountmenu }) => {
  // const [current2, setcurrent2] = useState("mail");
  const { SetTitleRoute } = useMenuOption();

  const handleClick = (e) => {
    // console.log("click ", e);
    // setcurrent2(e.key);

    SetTitleRoute(e.key);
    onCloseMyAccountmenu(false);
  };

  const onClose = () => {
    onCloseMyAccountmenu(false);
  };
  return (
    <Drawer
      title="Gustavo Carreño Nevarez"
      placement="left"
      closable={false}
      onClose={onClose}
      visible={show}
    >
      <Menu
        onClick={handleClick}
        style={{ width: 256 }}
        // defaultOpenKeys={["sub1"]}
        // selectedKeys={current2}
        mode="vertical"
      >
        <Menu.Item key="perfil">Perfil</Menu.Item>
        <Menu.Item key="Asesores">
          {" "}
          <Link to="/advisor/list"> Asesores</Link>
        </Menu.Item>
        <Menu.Item key="publicacion">Publicaciones</Menu.Item>
        <Menu.Item key="plan">Plan</Menu.Item>
      </Menu>
    </Drawer>
  );
};
export default MenuAccount;
