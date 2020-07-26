import React from "react";
import "./App.css";

//redux
import { Provider } from "react-redux";
import store from "./store";

import { BrowserRouter as Ruter, Route, Switch } from "react-router-dom";

import { Layout } from "antd";

import TitleRout from "./Components/Container/TitleRoute";
import HeaderContainer from "./Components/Container/Header";
import Footter from "./Components/Container/FooterCointainer";

import LoginFomr from "./Components/Auth/LoginForm";
import AdvisorList from "./Components/Account/Advisor/AdvisorList";
import Advisor from "./Components/Account/Advisor/Advisor";
import AdvisorCreate from "./Components/Account/Advisor/AdvisorCreate";
import AdvisorEdit from "./Components/Account/Advisor/AadvisorEdit";

import Register from "./Components/Registre/Steps";
// import AccountFinaliza from "./Components/Registre/Finaliza";
import AccountConfirm from "./Components/Registre/ConfirmAccount";

import Bussines from "./Components/Company/Services";
import Publication from "./Components/Account/Publications";

import ResetPassword from "./Components/Registre/RecoveryPassword";
import RecoveryPassword from "./Components/Registre/RecoveryPassword";

function App() {
  const { Header, Content, Footer } = Layout;

  return (
    <Provider store={store}>
      <Layout>
        <Ruter>
          <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
            <HeaderContainer />
          </Header>

          <Switch>
            <Content
              className="site-layout"
              style={{ padding: "0 50px", marginTop: 60, alignItems: "center" }}
            >
              {/* <Breadcrumb style={{ margin: "16px " }}>
                <Breadcrumb.Item>Titulo</Breadcrumb.Item>
              </Breadcrumb> */}
              <TitleRout />
              <div
                className="site-layout-background"
                style={{ padding: 24, minHeight: "100vh" }}
              >
                {/* <Route exact path="/" component={LoginFomr} /> */}

                <Route exact path="/" component={Bussines} />
                <Route exact path="/publications" component={Publication} />
                <Route exact path="/login" component={LoginFomr} />
                <Route exact path="/advisor/list" component={AdvisorList} />
                <Route exact path="/advisor/create" component={AdvisorCreate} />
                <Route exact path="/advisor/edit/:id" component={AdvisorEdit} />
                <Route
                  exact
                  path="/account/resetpassword/:id"
                  component={RecoveryPassword}
                />

                <Route exact path="/register" component={Register} />
                <Route
                  exact
                  path="/account/confirm/:id"
                  component={AccountConfirm}
                />
              </div>
            </Content>
          </Switch>
          <Footer>
            <Footter />
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Ruter>
      </Layout>
    </Provider>
  );
}

export default App;
