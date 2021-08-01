import React from 'react';
import './Empty.less';
import { Typography } from 'antd';

const { Title, Text } = Typography;

const emptyImg = `${process.env.REACT_APP_BASENAME}svgs/empty.svg`;

interface Empty {
  title?: string;
  subtitle?: string;
}

const Empty: React.FC<Empty> = ({ title, subtitle }) => {
  console.log('this is the title', title);
  return (
    <div className="empty-data-container">
      <div className="emptyImg-container">
        <img src={emptyImg} />
        <div className="empty-text">
          <Title level={5}>{title ? title : 'No data found!'}</Title>
          <Text type="secondary">
            {subtitle
              ? subtitle
              : "We can't found any articles that you bookmark."}
          </Text>
        </div>
      </div>
    </div>
  );
};
export default Empty;
