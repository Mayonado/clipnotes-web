import React from 'react';
import './Page404.less';
import { Button, Typography } from 'antd';
import { NavLink } from 'react-router-dom';

const img404 = `${process.env.REACT_APP_BASENAME}svgs/404.svg`;
const { Title, Text } = Typography;
const Page404: React.FC = ({}) => {
  return (
    <div className="empty-container">
      <img src={img404} alt="Page not found!" />
      <div className="empty-text-container">
        <Title level={4}>Page not found</Title>
        <Text>
          Can't found this page. Please, click button to redirect in
          repositories
        </Text>
        <div className="redirect-container">
          <NavLink to="/repositories">
            <Button type="primary">Go to repositories</Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default Page404;
