import React from 'react';

// antd components
import { Button } from 'antd';

// react-router
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  useRouteMatch,
} from 'react-router-dom';

// pages
import Login from '../pages/Login/Login';
import Dashboard from '../pages/Dashboard/Dashboard';
import Repositories from '../pages/Repositories/Repositories';
import Page404 from '../pages/Page404/Page404';

const App = () => {
  return (
    <Router basename={process.env.REACT_APP_BASE_NAME}>
      <Switch>
        <Route exact path="/" component={Login}></Route>
        <Route component={Page404} />
      </Switch>
      {/* {!user && <Redirect to="/" />} */}
    </Router>
  );
};

export default App;
