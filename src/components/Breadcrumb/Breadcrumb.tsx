import React from 'react';
import { Breadcrumb as AntdBreadcrumb } from 'antd';
import { useLocation } from 'react-router-dom';

interface BreadcrumbProps {
  menus: Array<any>;
  submenus: Array<any>;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ menus, submenus }) => {
  const location: any = useLocation();
  return (
    <AntdBreadcrumb style={{ margin: '16px 0' }}>
      <AntdBreadcrumb.Item>
        {/* <a href="/">Home</a> */}
        Home
      </AntdBreadcrumb.Item>
      {location.pathname !== '/' && (
        <AntdBreadcrumb.Item>
          <a href={location.pathname}>
            {!menus.some((menu: any) => menu.link === location.pathname)
              ? submenus.find(menu => menu.link === location.pathname).label
              : menus.find(menu => menu.link === location.pathname).label}
          </a>
        </AntdBreadcrumb.Item>
      )}
    </AntdBreadcrumb>
  );
};
export default Breadcrumb;
