import React from "react";
import { FacebookOutlined } from "@ant-design/icons";
import { Row, Col, Divider } from "antd";

const FooterCointainer = () => {
  return (
    <div>
      <div className="row">
        <Row>
          <Col xs={2} sm={4} md={6} lg={8} xl={10}>
            <h5 className="white-text">Red Inmobiliaria</h5>
            <p className="grey-text text-lighten-4">Aviso de privasidad</p>
            <p className="grey-text text-lighten-4">
              Vende y Renta en Menos Tiempo.
            </p>
            <p className="grey-text text-lighten-4">
              Vende y Renta en Menos Tiempo.
            </p>
            <p className="grey-text text-lighten-4">
              Somos el acelerador de negocios
            </p>
            <a href="https://www.w3schools.com">
              <FacebookOutlined />
            </a>

            <a href="https://www.w3schools.com">
              <FacebookOutlined />
            </a>
            <a href="https://www.w3schools.com">
              <FacebookOutlined />
            </a>
          </Col>
          <Col xs={2} sm={4} md={6} lg={8} xl={10}>
            <h5 className="white-text">Contacto</h5>
            <ul className="itemfooter">
              <li>
                <i className="material-icons prefix">email</i>
                correo@gmai.com
              </li>
              <li>
                <i className="material-icons prefix">smartphone</i>
                6688889546
              </li>
              <li>
                <i className="material-icons prefix">call</i>
                6688889546
              </li>
            </ul>
          </Col>
        </Row>

        {/* <div className="col l6 s12">
          
        </div>
        <div className="col l4 offset-l2 s12">
          
        </div> */}
      </div>
    </div>
  );
};
export default FooterCointainer;
