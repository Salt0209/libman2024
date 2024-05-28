import React from "react";
const { Header, Footer, Sider, Content } = Layout;
import { Breadcrumb, Layout, Menu, theme, ConfigProvider } from "antd";
import Headers from "../home/header";
import Sidebars from "../home/sidebar";
import CustomFooter from "../home/footer"
import { Outlet } from "react-router-dom";
const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: '100%',
  paddingInline: 48,
  lineHeight: '64px',
};
const App = () => (
    <ConfigProvider
    theme={{
      components: {
        Layout: {
          /* here is your component tokens */
          headerBg:'#ffffff',
          siderBg: '#ffffff',
          footerBg: '#ffffff',
        },
      },
    }}
  >
    <Layout>
      <Header style={headerStyle}>
        <Headers />
      </Header>
      <Layout>
        <Sider width="400px">
          <Sidebars />
        </Sider>
        <Content> <Outlet /></Content>
      </Layout>
      <Footer>
        <CustomFooter />
      </Footer>
    </Layout>
  </ConfigProvider>
);
export default App;
