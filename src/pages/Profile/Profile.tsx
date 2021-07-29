import React, { useEffect, useState } from 'react';
import {
  PageHeader,
  Divider,
  Row,
  Col,
  Avatar,
  Input,
  Form,
  Select,
  Tag,
  Button,
} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import {
  useGetLanguageQuery,
  useMeQuery,
  usePatchProfileMutation,
} from '../../generated/graphql';
import { updateObject } from '../../utils';

interface ProfileProps {}

// const options = [
//   { value: 'javascript', text: 'JavaScript', color: '#F0DB4F' },
//   { value: 'php', text: 'PHP', color: '#474A8A' },
//   { value: 'java', text: 'Java', color: '#f89820' },
//   { value: 'ruby', text: 'Ruby', color: '#E0115F' },
// ];

const Profile: React.FC<ProfileProps> = ({}) => {
  const form = Form.useForm();
  const [{ data: meData, fetching: meQueryFetching }] = useMeQuery();
  const [
    { data: languageData, fetching: languageDataFetching },
  ] = useGetLanguageQuery();
  const [, patchProfile] = usePatchProfileMutation();
  const [onUpdateState, setOnUpdateState] = useState<boolean>(false);
  const [onProcessForm, setOnProcessForm] = useState<boolean>(false);
  const [profileForm, setProfileForm] = useState({
    email: meData?.me?.email,
    first_name: meData?.me?.first_name,
    last_name: meData?.me?.last_name,
    interests: meData?.me?.interests.map(interest => interest.interest),
  });

  const tagRender = (props: any) => {
    const { label, value, closable, onClose, color, text } = props;
    // const selectedTag = { interest: value };
    // setTags([...tags, selectedTag]);
    const onPreventMouseDown = (event: any) => {
      event.preventDefault();
      event.stopPropagation();
    };
    return (
      <Tag
        color={
          (languageData as any)?.getLanguages[
            (languageData as any)?.getLanguages.findIndex(
              (option: any) => option.value === value
            )
          ].color
        }
        onMouseDown={onPreventMouseDown}
        closable={closable}
        onClose={onClose}
        style={{ marginRight: 3 }}
      >
        {/* {
          options[options.findIndex((option: any) => option.value === value)]
            .text
        } */}
        {
          (languageData as any)?.getLanguages[
            (languageData as any)?.getLanguages.findIndex(
              (option: any) => option.value === value
            )
          ].language
        }
      </Tag>
    );
  };

  const onChangeSelectedInterests = (evt: any) => {
    const updatedInterests: any = updateObject(profileForm, {
      interests: evt,
    });
    setProfileForm(updatedInterests);
  };

  const onSubmitUpdatedProfileForm = async () => {
    if (!onUpdateState) {
      setOnUpdateState(!onUpdateState);
    } else {
      setOnProcessForm(true);
      await patchProfile({
        options: {
          ...(profileForm as any),
        },
      });
      setOnProcessForm(false);
      setOnUpdateState(!onUpdateState);
      // console.log(tags);
    }
  };

  const onChangeProfileForm = (evt: any, key: string) => {
    // const updatedProfileForm =
    // console.log(evt);
    // if(!onUpdateState) {
    //   setOnUpdateState(!onUpdateState);
    // } else {
    //   setOnUpdateState(!onUpdateState);
    // }
    const updatedForm: any = updateObject(profileForm, {
      [key]: evt.target.value,
    });
    setProfileForm(updatedForm);
  };

  return (
    <div>
      <PageHeader className="site-page-header" title="Profile" />
      <Divider />
      <Row>
        <Col offset={2} span={16}>
          <Form layout="vertical" onFinish={() => onSubmitUpdatedProfileForm()}>
            <Row>
              <Col span={4}>
                <Avatar
                  size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                  shape="square"
                  icon={<UserOutlined />}
                />
              </Col>
              <Col span={12}>
                <Row>
                  <Col span={24}>
                    <Form.Item
                      name={['user', 'email']}
                      label="Email"
                      //   rules={[{ required: true }]}
                    >
                      <Input
                        size="middle"
                        readOnly={true}
                        defaultValue={meData?.me?.email}
                        value={profileForm?.email}
                      />
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <Form.Item
                      name={['user', 'firstname']}
                      label="First Name"
                      //   rules={[{ required: true }]}
                    >
                      <Input
                        size="middle"
                        readOnly={onUpdateState ? false : true}
                        defaultValue={meData?.me?.first_name}
                        value={profileForm?.first_name}
                        onChange={(evt: any) =>
                          onChangeProfileForm(evt, 'firstname')
                        }
                      />
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <Form.Item
                      name={['user', 'lastname']}
                      label="Last Name"
                      //   rules={[{ required: true }]}
                    >
                      <Input
                        // size="large"
                        readOnly={onUpdateState ? false : true}
                        defaultValue={meData?.me?.last_name}
                        value={profileForm?.last_name}
                        onChange={(evt: any) =>
                          onChangeProfileForm(evt, 'lastname')
                        }
                      />
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <Form.Item
                      name={['user', 'interested']}
                      label="Interested in"
                      //   rules={[{ required: true }]}
                    >
                      <Select
                        mode="multiple"
                        showArrow
                        tagRender={tagRender}
                        defaultValue={meData?.me?.interests?.map(
                          (interest: any) => interest.interest
                        )}
                        value={(profileForm as any)?.interests.map(
                          (interest: any) => interest.interest
                        )}
                        onChange={evt => onChangeSelectedInterests(evt)}
                        style={{ width: '100%' }}
                        options={languageData?.getLanguages.map(
                          (language: any) => {
                            return {
                              text: language.language,
                              value: language.value,
                            };
                          }
                        )}
                        // size="large"
                        disabled={onUpdateState ? false : true}
                      />
                    </Form.Item>
                  </Col>

                  <Col span={24}>
                    <Form.Item
                      name={['user', 'interested']}
                      //   rules={[{ required: true }]}
                    >
                      <Button
                        type="primary"
                        htmlType="submit"
                        loading={onProcessForm}
                      >
                        {onUpdateState ? 'Save changes' : 'Edit profile'}
                      </Button>
                    </Form.Item>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </div>
  );
};
export default Profile;
