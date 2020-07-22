import React, { Fragment, useState } from "react";
import { Steps, Button, Divider } from "antd";

import Step1 from "./Register1";
import Step2 from "./Register2";
import Step3 from "./Finaliza";

const { Step } = Steps;
const StepsRegistro = () => {
  const [company, SetCompany] = useState({
    paso: 1,
    Name: "",
    Email: "",
    BusinessName: "",
    Phone: "",
    WhatsApp: "",
    Facebook: "",
    Twitter: "",
    Mobile: "",
    LastName1: "",
    LastName2: "",
    Code: "",
    AdvisorUserName: "",
    MembershipCode: "",
  });

  const [pasostate, setStep] = useState(0);

  const nextStep = (paso) => {
    setStep(paso + 1);
  };

  const prevtStep = (paso) => {
    setStep(paso - 1);
  };

  const changeValues = (e) => {
    SetCompany({
      ...company,
      [e.target.name]: e.target.value,
    });
  };

  const props = {
    nextStep,
    prevtStep,
    changeValues,
    company,
  };

  return (
    <Fragment>
      <Steps current={pasostate}>
        <Step title="Empresa" description="Datos de la empresa" />
        <Step
          title="contacto"
          // subTitle="Left 00:00:08"
          description="Datos de contacto"
        />
        <Step title="Finalizar" description="Registo completo" />
      </Steps>
      <Divider />
      {pasostate === 0 ? (
        <Step1 props={props} />
      ) : pasostate === 1 ? (
        <Step2 props={props} />
      ) : (
        <Step3 props={props} />
      )}
    </Fragment>
  );
};
export default StepsRegistro;
