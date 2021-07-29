import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { useMeQuery } from '../../generated/graphql';
import Layout from '../../hoc/Layout/Layout';
import { Loader } from '../../components';

interface ProtectedRouteProps {
  component: any;
  path: string;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  component: Component,
  path,
}) => {
  const [{ data, fetching }] = useMeQuery();

  if (fetching) {
    // * Return loader if request is processing
    return <Loader />;
  } else if (!data?.me) {
    // * Redirect to login when user not logged in
    return <Redirect to="/" />;
  }

  // * Return high order component if user already logged-in
  return (
    <Layout>
      <Route path={path} component={Component} />
    </Layout>
  );
};
export default ProtectedRoute;
