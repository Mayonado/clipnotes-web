import React, { useState } from 'react';
import {
  Menu,
  Layout as AntdLayout,
  Avatar,
  Dropdown,
  Popover,
  Button,
  Divider,
} from 'antd';
import { NavLink, useLocation } from 'react-router-dom';
import './Nav.less';
import {
  LogoutOutlined,
  UserOutlined,
  SettingOutlined,
  BookOutlined,
  ProfileOutlined,
} from '@ant-design/icons';
import { useLogoutMutation, useMeQuery } from '../../generated/graphql';

const { Header } = AntdLayout;
const { SubMenu } = Menu;

interface NavProps {
  menus: any;
}

export const Nav: React.FC<NavProps> = ({ menus, ...props }) => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [{ fetching: logoutFetching }, logout] = useLogoutMutation();
  const [{ data: meData, fetching: meQueryFetching }] = useMeQuery();

  const onLogoutUser = async () => {
    await logout();
    window.location.reload();
  };

  const onClickAvatar = () => {
    setOpen(!open);
  };
  return (
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />
      <Menu
        mode="horizontal"
        defaultSelectedKeys={
          menus.some((menu: any) => menu.link === location.pathname)
            ? menus[
                menus.findIndex((menu: any) => menu.link === location.pathname)
              ].label
            : 'bookmarks'
        }
        {...(menus.findIndex((menu: any) => menu.link === location.pathname) >
        -1
          ? {
              activeKey:
                menus[
                  menus.findIndex(
                    (menu: any) => menu.link === location.pathname
                  )
                ].label,
            }
          : {})}
      >
        {menus.map((menu: any) => (
          <Menu.Item key={menu.label} icon={menu.icon}>
            <NavLink to={menu.link}>{menu.label}</NavLink>
          </Menu.Item>
        ))}
        <SubMenu
          key="SubMenu"
          icon={<UserOutlined />}
          title={`${meData?.me?.first_name} ${meData?.me?.last_name}`}
          style={{
            float: 'right',
          }}
        >
          <Menu.Item key="profile">
            <NavLink to="/profile">
              <ProfileOutlined /> My profile
            </NavLink>
          </Menu.Item>
          <Menu.Item key="bookmarks">
            <NavLink to="/bookmarks">
              <BookOutlined /> My bookmarks
            </NavLink>
          </Menu.Item>
          <Menu.Item key="setting:4" onClick={() => onLogoutUser()}>
            <LogoutOutlined /> Logout
          </Menu.Item>
        </SubMenu>

        {/* <div
          style={{
            float: 'right',
            // marginRight: '20px',
          }}
          // icon={<LogoutOutlined />}
          // onClick={onLogoutUser}
        >
          <Popover
            style={{ width: '250px' }}
            content={
              <div style={{ width: '150px' }}>
                <NavLink to="/bookmarks">
                  <Button block type="text">
                    Bookmarks
                  </Button>
                </NavLink>
                <Divider style={{ margin: '4px 0' }} />
                <Button block type="text">
                  Logout
                </Button>
              </div>
            }
            // title="Title"
            trigger="click"
            placement="bottomRight"
            visible={open}
            onVisibleChange={onClickAvatar}
          >
            <Button type="text">
              <Avatar icon={<UserOutlined />} />
            </Button>
          </Popover>
        </div> */}
        {/* <div style={{ textAlign: 'right' }}>
        </div> */}
      </Menu>
    </Header>
  );
};
export default Nav;
