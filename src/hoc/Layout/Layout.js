import React from 'react';
import { Layout as AntdLayout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = AntdLayout;

// components
import Navbar from '../../components/Navbar/Navbar';

// props mapping
import PropTypes from 'prop-types';

// layout styles
import './Layout.less';

const menus = [
  {
    label: 'Dashboard',
    link: '/dashboard',
  },
  {
    label: 'Repositories',
    link: '/repository',
  },
];

const Layout = ({ children }) => {
  return (
    <AntdLayout>
      <Navbar menus={menus} />
      <Content
        className="layout-container"
        // style={{ padding: '0 50px', marginTop: 64 }}
      >
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          {/* <Breadcrumb.Item>App</Breadcrumb.Item> */}
        </Breadcrumb>
        <div
          className="layout-background"
          //   style={{ padding: 24, minHeight: 380 }}
        >
          {children}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Bookmrk</Footer>
    </AntdLayout>
  );
};

Layout.propTypes = {
  children: PropTypes.any,
};

export default Layout;
