import React from 'react';
import { PageHeader } from 'antd';
import { ConfirmationModal, List, Loader } from '../../components';

interface HomeProps {}

const Home: React.FC<HomeProps> = ({}) => {
  return (
    <div>
      <PageHeader className="site-page-header" title="Home" />
      {/* <List /> */}
    </div>
  );
};
export default Home;
