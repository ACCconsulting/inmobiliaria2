import React from "react";
import { Result, Button } from "antd";
const ResultCustom = ({ type, title, subtitle }) => {
  //   const { type, title, subtitle } = props;
  return <Result status={type} title={title} subTitle={subtitle} />;
};

export default ResultCustom;
