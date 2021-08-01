import React, { Suspense } from 'react';
import 'antd/dist/antd.less';
import Layout from '../hoc/Layout/Layout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from '../pages/Login/Login';
import { createUrqlClient } from '../utils/createUrqlClient';
import { Provider } from 'urql';
import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute';
import { Loader } from '../components';
import { ModalProvider } from '../context/ModalContext/ModalContext';
import './App.less';

const Home = React.lazy(() => import('../pages/Home/Home'));
const Repositories = React.lazy(() =>
  import('../pages/Repositories/Repositories')
);

const Articles = React.lazy(() => import('../pages/Articles/Articles'));
const Bookmarks = React.lazy(() => import('../pages/Bookmarks/Bookmarks'));
const Profile = React.lazy(() => import('../pages/Profile/Profile'));
const Page404 = React.lazy(() => import('../pages/Page404/Page404'));

export const App: React.FC = () => {
  return (
    <Suspense fallback={<Loader />}>
      <ModalProvider>
        <Router basename={process.env.REACT_APP_BASENAME}>
          <Provider value={createUrqlClient}>
            <Switch>
              <Route exact component={Login} path="/" />
              <ProtectedRoute component={Home} path="/home" />
              <ProtectedRoute component={Repositories} path="/repositories" />
              <ProtectedRoute component={Articles} path="/articles" />
              <ProtectedRoute component={Bookmarks} path="/bookmarks" />
              <ProtectedRoute component={Profile} path="/profile" />
              <Route component={Page404} />
            </Switch>
          </Provider>
        </Router>
      </ModalProvider>
    </Suspense>
  );
};

export default App;
