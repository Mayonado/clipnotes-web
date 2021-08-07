import React from 'react';
import { Spin } from 'antd';
import './Loader.less';

interface LoaderProps {
  open?: boolean;
}

export const Loader: React.FC<LoaderProps> = ({ open }) => {
  return open ? (
    <div className="loader-overlay">
      <div className="loader-container">
        <Spin size="large" />
        <div>Loading...</div>
      </div>
    </div>
  ) : null;
};
export default Loader;
