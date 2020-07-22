import React from "react";
import { Alert } from "antd";
const AlertCustom = ({ type, title, description }) => {
  return (
    <Alert message={title} description={description} type={type} showIcon />
  );
};
export default AlertCustom;
