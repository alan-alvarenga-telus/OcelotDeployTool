import React from 'react';
import { Layout, Menu } from 'antd';


const { Header, Content, Footer, Sider } = Layout;
const Basic = (props) => (
  <Layout>
    <Sider
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
      }}
    >
      <div className="subpixel-antialiased m-3 text-lg text-white text-semibold" >
        <p>Ocelot Deploy Tool</p>
      </div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
        <Menu.Item key="2">
          <span className="nav-text">FOMC Instances</span>
        </Menu.Item>
        <Menu.Item key="3">
          <span className="nav-text">New Instance</span>
        </Menu.Item>
      </Menu>

    </Sider>
    <Layout className="site-layout" style={{ marginLeft: 200 }}>
      <Header className="site-layout-background" style={{ padding: 0 }} />
      <Content className="site-content">

        <div className="site-layout-background" style={{ padding: 24}}>
          {props.children}
        </div>
      </Content>
      <Footer>Ocelot Team - B2B {new Date().getFullYear()}</Footer>
    </Layout>
  </Layout>
)

export default Basic;