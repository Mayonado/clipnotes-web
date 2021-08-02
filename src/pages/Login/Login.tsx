import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, Row, Col, Typography } from 'antd';
import axios from 'axios';
import './Login.less';
import {
  UserOutlined,
  LockOutlined,
  GoogleOutlined,
  LoginOutlined,
} from '@ant-design/icons';
import { Input as InputField, Loader } from '../../components';

import { updateObject } from '../../utils';
import { useLoginMutation, useMeQuery } from '../../generated/graphql';
import { Redirect } from 'react-router-dom';
import GoogleLogin from 'react-google-login';

const { Title } = Typography;

interface LoginProps {
  history: any;
}

const logoImg = `${process.env.REACT_APP_BASENAME}images/textlogo.png`;

export const Login: React.FC<LoginProps> = ({ history }) => {
  const [form, setForm] = useState({
    email: null,
    tokenId: null,
  });

  const [, login] = useLoginMutation();
  const [{ data: me, fetching }] = useMeQuery();

  if (!fetching) {
    if (me?.me) {
      return <Redirect to="/home" />;
    }
  } else {
    return <Loader />;
  }

  // const OnFieldChange = (evt: any, key: any) => {
  //   const updatedForm: any = updateObject(form, {
  //     [key]: evt.target.value,
  //   });

  //   setForm(updatedForm);
  // };

  // const onSubmitLoginForm = async () => {
  //   const result = await login({ options: form });
  //   console.log(result);
  // };

  const onSuccessGoogleLogin = async (response: any) => {
    const { tokenId, profileObj, accessToken } = response;
    // setForm({
    //   email: profileObj.email,
    //   tokenId,
    // });

    login({
      options: {
        email: profileObj.email,
        tokenId,
      },
    });
  };

  const onFailedGoogleLogin = () => {};

  return (
    <div className="login-container">
      <div className="login-header"></div>
      <div className="login-form-container">
        <div className="logo-container">
          <img src={logoImg} />
          {/* <Title level={4}>Clip Book</Title> */}
        </div>
        <div className="login-google">
          <div className="login-note">
            Please sign-in using your google account.
          </div>
          <div className="btn-container">
            {/* <Button
              type="primary"
              // danger
              block
              size="large"
              icon={<GoogleOutlined />}
            >
              Login via google
            </Button> */}
            <GoogleLogin
              clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID as any}
              onSuccess={onSuccessGoogleLogin}
              onFailure={onFailedGoogleLogin}
              render={renderProps => (
                // <Button
                // 	onClick={renderProps.onClick}
                // 	className="google-button full-button"
                // 	disabled={renderProps.disabled}
                // >
                // 	<div className="google-button-logo">
                // 		<img
                // 			src={googleLogo}
                // 			alt="Google Logo"
                // 		/>
                // 	</div>
                // 	<div
                // 		style={{ paddingLeft: '50px' }}
                // 	>
                // 		Login with Google account
                // 	</div>
                // </Button>
                <Button
                  type="primary"
                  // danger
                  block
                  size="large"
                  icon={<GoogleOutlined />}
                  disabled={renderProps.disabled}
                  onClick={renderProps.onClick}
                >
                  Sign in with google
                </Button>
              )}
              buttonText="Login"
              cookiePolicy={'single_host_origin'}
            />
          </div>
        </div>
      </div>
      <div className="login-footer">C</div>
    </div>
    // <div className="login-container">
    //   <Row>
    //     <Col span={6} offset={9}>
    //       <Form
    //         name="normal_login"
    //         className="login-form"
    //         initialValues={{ remember: true }}
    //         onFinish={onSubmitLoginForm}
    //       >
    //         <InputField
    //           label="Username"
    //           name="username"
    //           rules={{ required: true, message: 'Please input your username' }}
    //           type="input"
    //           value={form.username}
    //           onChange={evt => OnFieldChange(evt, 'username')}
    //           maxLength={20}
    //           autoFocus
    //         />
    //         <InputField
    //           label="Password"
    //           name="password"
    //           width="100%"
    //           type="password"
    //           rules={{ required: true, message: 'Please input your password' }}
    //           value={form.password}
    //           onChange={evt => OnFieldChange(evt, 'password')}
    //           maxLength={20}
    //         />
    //         <Form.Item>
    //           <Form.Item name="remember" valuePropName="checked" noStyle>
    //             <Checkbox>Remember me</Checkbox>
    //           </Form.Item>
    //         </Form.Item>

    //         <Form.Item>
    //           <Button
    //             type="primary"
    //             block
    //             size="large"
    //             icon={<LoginOutlined />}
    //             htmlType="submit"
    //           >
    //             Login
    //           </Button>
    //         </Form.Item>
    //         <Form.Item>
    //           <Button
    //             type="primary"
    //             danger
    //             block
    //             size="large"
    //             icon={<GoogleOutlined />}
    //           >
    //             Login via google
    //           </Button>
    //         </Form.Item>
    //       </Form>
    //     </Col>
    //   </Row>
    // </div>
  );
};
export default Login;
