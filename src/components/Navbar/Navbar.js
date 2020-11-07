import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;

// react-router
import { Link } from 'react-router-dom';

// props mapping
import PropTypes from 'prop-types';

// navbar style
import './Navbar.less';

const Navbar = ({ menus }) => {
  return (
    <Header className="nav-header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['0']}>
        {menus.map((menu, menuKey) => {
          return (
            <Menu.Item key={menuKey}>
              <Link to={menu.link}>{menu.label}</Link>
            </Menu.Item>
          );
        })}
      </Menu>
    </Header>
  );
};

Navbar.propTypes = {
  menus: PropTypes.array,
};

export default Navbar;
