import React, { useContext } from 'react';
import { Layout as AntdLayout } from 'antd';
import './Layout.less';
import {
  GithubOutlined,
  ReadOutlined,
  ProfileOutlined,
  BookOutlined,
} from '@ant-design/icons';
import {
  Breadcrumb,
  ConfirmationModal,
  Nav,
  Footer,
  Loader,
} from '../../components';
import ModalContext from '../../context/ModalContext/ModalContext';
import LoaderContext from '../../context/LoaderContext/LoaderContext';

const { Content } = AntdLayout;
// const { Paragraph, Text } = Typography;
// const { TextArea } = Input;

// const logoImg = `${process.env.REACT_APP_BASENAME}images/logo.png`;

const menus = [
  // {
  //   label: 'Home',
  //   link: '/home',
  //   icon: <HomeOutlined />,
  // },
  {
    label: 'Repositories',
    link: '/repositories',
    icon: <GithubOutlined />,
  },
  {
    label: 'Articles',
    link: '/articles',
    icon: <ReadOutlined />,
  },
];

const subMenus = [
  {
    link: '/profile',
    label: 'Profile',
    icon: <ProfileOutlined />,
  },
  {
    link: '/clipped-notes',
    label: 'Clipped notes',
    icon: <BookOutlined />,
  },
];

export const Layout: React.FC<{}> = props => {
  const modal: any = useContext(ModalContext);
  const loader: any = useContext(LoaderContext);
  return (
    <div>
      <Loader open={loader.open} />
      <AntdLayout>
        <ConfirmationModal open={modal.open} {...modal.modalConfig} />
        <Nav menus={menus} submenus={subMenus} />
        <Content
          className="site-layout"
          style={{ padding: '0 50px', marginTop: 64 }}
        >
          <Breadcrumb menus={menus} submenus={subMenus} />
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 380 }}
          >
            {props.children}
          </div>
        </Content>
      </AntdLayout>
      <Footer />
    </div>
  );
};

export default Layout;
