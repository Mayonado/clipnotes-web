import React from 'react';
import { Layout as AntdLayout, Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
const { Content, Footer } = AntdLayout;

// props mapping
import PropTypes from 'prop-types';

import './Login.less';

const Login = (props) => {
  return (
    <AntdLayout>
      <Content className="login-layout">
        <div className="login-background">
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
          >
            <Form.Item
              name="username"
              rules={[
                { required: true, message: 'Please input your Username!' },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: 'Please input your Password!' },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <a className="login-form-forgot" href="">
                Forgot password
              </a>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                onClick={() => props.history.push('/dashboard')}
              >
                Log in
              </Button>
              <Button
                type="primary"
                danger
                className="login-form-button"
                onClick={() => props.history.push('/dashboard')}
              >
                Sign-in with Google
              </Button>
              Or <a href="">register now!</a>
            </Form.Item>
          </Form>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Bookmrk</Footer>
    </AntdLayout>
  );
};

Login.propTypes = {
  history: PropTypes.any,
};

export default Login;
