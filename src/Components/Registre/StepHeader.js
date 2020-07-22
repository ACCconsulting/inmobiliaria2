import React, { Fragment } from "react";

const StepHeader = () => {
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
      {}

      <Step1 props={props} />
      <Step2 props={props} />
      {/* <div className="steps-action">
        <Button type="primary" onClick={() => Next(pasostate)}>
          Siguiente
        </Button>
        <Button type="secudary" onClick={() => Previus(pasostate)}>
          Anterior
        </Button>
      </div> */}
    </Fragment>
  );
};
export default StepHeader;
