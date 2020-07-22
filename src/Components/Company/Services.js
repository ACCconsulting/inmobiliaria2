import React from "react";
import "../Styles/company.css";
// import logo from "../../img/logo.png";

const Services = () => {
  return (
    <div className="principal">
      {/* <img
        // className="logonav"
        src={logo}
        alt="Logo"
        width="100"
        height="100"
      ></img> */}
      <p>
        Inmob es la mejor solución para los asesores inmobiliarios que desean
        posicionarse como líderes de su ramo.
      </p>
      <p>Scroll Up and Down this page to see the parallax scrolling effect.</p>

      <div class="parallax"></div>

      <div className="ours">
        La tecnología ya forma parte de todos los aspectos de nuestra vida
        personal y profesional. La forma de comunicarnos con nuestros prospectos
        y clientes ha cambiado y por lo tanto nosotros, los profesionales de la
        industria inmobiliaria estamos obligados a cambiar junto con ella o
        corremos el riesgo de quedarnos rezagados, y no es cuestión de que si va
        a suceder o no, sino cuándo sucederá.
      </div>
      <div class="parallax2"></div>
    </div>
  );
};
export default Services;
