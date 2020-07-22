import React from "react";
import { Row, Col } from "antd";
import logo from "../../img/logo.png";
import "../Styles/fondo.css";

import Nav from "./Nav";

const HeaderContainer = () => {
  return (
    <Row>
      <Col flex="20%">
        <div>
          {/* <h1 className="logo1">Logo</h1> */}
          <img
            className="logonav"
            src={logo}
            alt="Logo"
            width="50"
            height="50"
          ></img>
        </div>
      </Col>
      <Col flex="auto">
        <Nav />
      </Col>
    </Row>
  );
};
export default HeaderContainer;
