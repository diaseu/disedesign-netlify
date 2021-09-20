import 'antd/dist/antd.css'
import './App.css'
import React from 'react';
import { Navbar } from './components'
import { Start } from './pages'
import { Layout } from 'antd';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default class App extends React.Component {


  render() {

    return (
      <Router>
        <Switch>
          <Layout style={{ minHeight: '100vh' }}>
            <Navbar />
            <Layout className="site-layout">
              {/* <Header className="site-layout-background" style={{ padding: 0 }} /> */}

              <Route exact path="/">
                <Start
                  page='Start'
                />
              </Route>

              {/* <Route path="/about">
                <Content>
                  <About
                    page='About'
                  />
                </Content>
              </Route>
              <Route path="/work">
                <Portfolio
                  page='Work'
                />
              </Route>
              <Route path="/contact">
                <Contact
                  page='Contact'
                />
              </Route> */}

            </Layout>
            {/* <Footer style={{ textAlign: 'center', fontSize: 10 }}> &hearts; Made by Dia Seu 2021</Footer> */}
          </Layout>
        </Switch>
      </Router>
    );
  }
}