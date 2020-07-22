import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Breadcrumb, Typography } from "antd";

const { Text } = Typography;

const TitleRoute = () => {
  const { optionMenu } = useSelector((state) => state.Auth);

  return (
    <Breadcrumb style={{ margin: "16px " }}>
      <Breadcrumb.Item>
        {" "}
        <h3>{optionMenu}</h3>
      </Breadcrumb.Item>
    </Breadcrumb>
  );
};
export default TitleRoute;
