import { Layout, Menu, Breadcrumb } from 'antd';
import './App.css';
import React, { Component } from 'react';


import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,

} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    return (
      <Layout style={{ minHeight: '0vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              Top Offer
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined  />}>
             Grocery
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="Fashion">
              <Menu.Item key="3"><a className="nav-link" href="/MenCompo">Men's
                        </a></Menu.Item>
              <Menu.Item key="4">Women</Menu.Item>
              <Menu.Item key="5">Kids</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Electronics">
              <Menu.Item key="6">Computer</Menu.Item>
              <Menu.Item key="7">Camera</Menu.Item>
              <Menu.Item key="8">Mobile</Menu.Item>
            </SubMenu>
            <SubMenu key="sub1" icon={<UserOutlined />} title="Home">
              <Menu.Item key="9">Living Room</Menu.Item>
              <Menu.Item key="10">Kitchen & Dining</Menu.Item>
              <Menu.Item key="11">Bed Room</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<DesktopOutlined />} title="Appliance">
              <Menu.Item key="12">Team 1</Menu.Item>
              <Menu.Item key="13">Team 2</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<UserOutlined />} title="Beauty Toy & more">
              <Menu.Item key="14">Gromming</Menu.Item>
              <Menu.Item key="15">Baby Care</Menu.Item>
            </SubMenu>
            <Menu.Item key="16" icon={<FileOutlined />}>
              Travel
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} ><h>Contactless delivery **********   Free shipping  **************   24*7 Support</h></Header>
          
          <Content style={{ margin: '0 16px' }}>
            <Menu style={{ margin: '16px 0' }} mode="horizontal">
              <Menu.Item>Online Shoppig Portal</Menu.Item>
              <input type ="text"/><Menu.Item>Search</Menu.Item>
              <Menu.Item>  <a className="nav-link" href="/Login">Login
                        </a></Menu.Item>
              <Menu.Item>My Account </Menu.Item>
              <Menu.Item>Cart </Menu.Item>
            </Menu>
            
          </Content>
          
        </Layout>
      </Layout>
    );
  }
}

export default SiderDemo;
