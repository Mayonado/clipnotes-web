import { Layout as AntdLayout } from 'antd';
import './Layout.less';
import { Breadcrumb, Nav } from '../../components';
import moment from 'moment';
import { HomeOutlined, GithubOutlined, ReadOutlined } from '@ant-design/icons';
import { ModalProvider } from '../../context/ModalContext/ModalContext';

const { Content, Footer } = AntdLayout;

interface Layout {}

const menus = [
  {
    label: 'Home',
    link: '/home',
    icon: <HomeOutlined />,
  },
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

export const Layout: React.FC = props => {
  return (
    <AntdLayout>
      <ModalProvider>
        <Nav menus={menus} />
        <Content
          className="site-layout"
          style={{ padding: '0 50px', marginTop: 64 }}
        >
          <Breadcrumb menus={menus} />
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 380 }}
          >
            {props.children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          &#169;bkmrk {moment().format('YYYY')}
        </Footer>
      </ModalProvider>
    </AntdLayout>
  );
};

export default Layout;
