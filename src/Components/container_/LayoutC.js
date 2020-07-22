import React from "react";

import { Layout, Breadcrumb, Row, Col, Divider } from "antd";

import Nav from "../Container/Nav";
import FooterCointainer from "../Container/FooterCointainer";

import LoginForm from "../Auth/LoginForm";
import AdvisorList from "../Auth/AdvisorList";
const LayoutC = () => {
  const { Header, Content, Footer } = Layout;
  return (
    <Layout>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <Row>
          <Col flex="20%">
            <div>
              <h1 className="logo1">Logo</h1>
            </div>
          </Col>
          <Col flex="auto">
            <Nav />
          </Col>
        </Row>
      </Header>

      <Content
        className="site-layout"
        style={{ padding: "0 50px", marginTop: 60 }}
      >
        <Breadcrumb style={{ margin: "16px " }}>
          {/* <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item> */}
          <Breadcrumb.Item>Login</Breadcrumb.Item>
        </Breadcrumb>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 800 }}
        ></div>
      </Content>
      <Footer>
        <FooterCointainer />
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default LayoutC;
