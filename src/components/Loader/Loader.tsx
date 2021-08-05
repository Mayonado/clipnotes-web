import React from 'react';
import { Spin, Space } from 'antd';
import './Loader.less';

interface LoaderProps {
  open?: boolean;
}

export const Loader: React.FC<LoaderProps> = ({ open }) => {
  return (
    <div className="loader-overlay">
      <div className="loader-container">
        <Spin size="large" />
        <div>Loading...</div>
      </div>
    </div>
  );
};
export default Loader;
