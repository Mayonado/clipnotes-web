import React from 'react';
import './PageLoader.less';

interface PageLoaderProps {}
const logoImg = `${process.env.REACT_APP_BASENAME}images/logo.png`;

const PageLoader: React.FC<PageLoaderProps> = ({}) => {
  return (
    <div className="page-loader-container">
      <div className="page-loader">
        <img src={logoImg} alt="CLIPNOTES" />
        <div className="sk-circle">
          <div className="sk-circle1 sk-child"></div>
          <div className="sk-circle2 sk-child"></div>
          <div className="sk-circle3 sk-child"></div>
          <div className="sk-circle4 sk-child"></div>
          <div className="sk-circle5 sk-child"></div>
          <div className="sk-circle6 sk-child"></div>
          <div className="sk-circle7 sk-child"></div>
          <div className="sk-circle8 sk-child"></div>
          <div className="sk-circle9 sk-child"></div>
          <div className="sk-circle10 sk-child"></div>
          <div className="sk-circle11 sk-child"></div>
          <div className="sk-circle12 sk-child"></div>
        </div>
      </div>
    </div>
  );
};
export default PageLoader;
