import React, { useState } from 'react';
import moment from 'moment';
import {
  Row,
  Col,
  Button,
  Tooltip,
  Layout as AntdLayout,
  Typography,
  Input,
  // message as antdMessage,
  notification,
} from 'antd';
import {
  SendOutlined,
  FacebookOutlined,
  TwitterOutlined,
  GoogleOutlined,
  LinkedinOutlined,
} from '@ant-design/icons';
import { usePostFeedbackMutation } from '../../generated/graphql';
import './Footer.less';
import { NavLink } from 'react-router-dom';

const { Footer: AntdFooter } = AntdLayout;
const { Paragraph, Text } = Typography;
const { TextArea } = Input;

const logoImg = `${process.env.REACT_APP_BASENAME}images/logo.png`;

interface FooterProps extends React.HTMLAttributes<HTMLDivElement>  {
  
}

// interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  const [message, setMessage] = useState<string>('');
  const [, postFeedback] = usePostFeedbackMutation();
  const [submitProcessing, setSubmitProcessing] = useState<boolean>(false);

  const onChangeMessageHandler = (evt: any) => {
    setMessage(evt.target.value);
  };
  const onSubmitFeedback = async (evt: any) => {
    evt.preventDefault();
    if (message === '' || message === null || message === undefined) {
      return false;
    }
    setSubmitProcessing(true);
    const result = await postFeedback({
      message,
    });
    setSubmitProcessing(false);
    setMessage('');
    notification[
      result?.data?.postFeedback?.code === 0 ? 'warning' : 'success'
    ]({
      message:
        result?.data?.postFeedback?.code === 0
          ? 'Oops! Your feedback was not sent.'
          : 'Success!',
      description: result?.data?.postFeedback?.message,
    });
    // if (result?.data?.postFeedback?.code === 0) {
    //   // antdMessage.warning(result?.data?.postFeedback?.message);
    //   return;
    // }
    // notification.success({
    //   message: 'Success!',
    //   description: result?.data?.postFeedback?.message,
    // });
  };
  return (
    <>
      <AntdFooter style={{ textAlign: 'center' }}>
        <div className="footer-container">
          <Row>
            <Col span={8} xs={24} md={12} lg={8} className="center">
              <div className="column-container">
                <div className="footer-logo-container">
                  <div className="img-container margin-auto">
                    <img src={logoImg} alt="CLIPNOTES LOGO" />
                  </div>
                </div>
                <div className="clipnotes-footer-description">
                  <Paragraph>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Delectus quos dignissimos veniam ea, corporis repudiandae
                    aperiam animi deserunt nobis nostrum numquam dicta adipisci
                    sint quibusdam quidem itaque repellendus amet illum.
                  </Paragraph>
                  {/* <Paragraph>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Delectus quos dignissimos veniam ea, corporis repudiandae
                            aperiam animi deserunt nobis nostrum numquam dicta adipisci
                            sint quibusdam quidem itaque repellendus amet illum. Lorem
                            ipsum dolor sit amet consectetur adipisicing elit. Delectus
                            quos dignissimos veniam ea, corporis repudiandae aperiam
                            animi deserunt nobis nostrum numquam dicta adipisci sint
                            quibusdam quidem itaque repellendus amet illum.
                        </Paragraph> */}
                </div>
                <div className="social-medias-container">
                  <Tooltip title="Facebook">
                    <Button
                      size="large"
                      type="default"
                      shape="circle"
                      icon={<FacebookOutlined />}
                    />
                  </Tooltip>
                  <Tooltip title="Twitter">
                    <Button
                      size="large"
                      type="default"
                      shape="circle"
                      icon={<TwitterOutlined />}
                    />
                  </Tooltip>
                  <Tooltip title="Gmail">
                    <Button
                      size="large"
                      type="default"
                      shape="circle"
                      icon={<GoogleOutlined />}
                    />
                  </Tooltip>
                  <Tooltip title="LinkedIn">
                    <Button
                      size="large"
                      type="default"
                      shape="circle"
                      icon={<LinkedinOutlined />}
                    />
                  </Tooltip>
                </div>
              </div>
            </Col>
            <Col span={4} xs={24} md={12} lg={4}>
              <div className="column-container footer-text-align">
                <div className="navigate-container">
                  <Text className="navigate-title">Navigate</Text>
                </div>
                <div className="navigate-link">
                  <Text>
                    <NavLink to="/repositories">Repositories</NavLink>
                  </Text>
                </div>
                <div className="navigate-link">
                  <Text>
                    <NavLink to="/articles">Articles</NavLink>
                  </Text>
                </div>
              </div>
            </Col>
            <Col span={12} xs={24} md={12} lg={12}>
              <form onSubmit={onSubmitFeedback}>
                <div className="column-container footer-text-align">
                  <div className="navigate-container">
                    <Text className="navigate-title">Share your thoughts!</Text>
                  </div>
                  <div>
                    <TextArea
                      maxLength={200}
                      rows={5}
                      showCount={false}
                      placeholder="Share me your thoughts about the clipnotes..."
                      onChange={(evt: any) => onChangeMessageHandler(evt)}
                      value={message}
                    />
                  </div>
                  <div className="submit-container">
                    <Button
                      type="default"
                      icon={<SendOutlined />}
                      // size="large"
                      htmlType="submit"
                      loading={submitProcessing}
                    >
                      Submit
                    </Button>
                  </div>
                </div>
              </form>
            </Col>
          </Row>
        </div>
      </AntdFooter>
      <div className="bottom-footer">
        <div className="app-name">
          &#169; {moment().format('YYYY')} CLIPNOTES
        </div>
        {/* <div className="app-dev">Developed by Lizandro Mayonado.</div> */}
      </div>
      {/* </div> */}
    </>
  );
};
export default Footer;
