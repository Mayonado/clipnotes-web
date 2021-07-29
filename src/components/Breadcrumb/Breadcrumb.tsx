import React from 'react';
import { Breadcrumb as AntdBreadcrumb } from 'antd';
import { useLocation } from 'react-router-dom';

interface BreadcrumbProps {
  menus: Array<any>;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ menus }) => {
  const location = useLocation();
  return (
    <AntdBreadcrumb style={{ margin: '16px 0' }}>
      <AntdBreadcrumb.Item>
        <a href="/home">Home</a>
      </AntdBreadcrumb.Item>
      {location.pathname !== '/home' && (
        <AntdBreadcrumb.Item>
          <a href={location.pathname}>
            {!menus.some((menu: any) => menu.link === location.pathname)
              ? 'Bookmarks'
              : menus.find(menu => menu.link === location.pathname).label}
          </a>
        </AntdBreadcrumb.Item>
      )}
    </AntdBreadcrumb>
  );
};
export default Breadcrumb;
