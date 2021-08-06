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
  message,
} from 'antd';
// import { UserOutlined } from '@ant-design/icons';
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
  const [form] = Form.useForm();
  const [{ data: meData }] = useMeQuery();
  const [{ data: languageData }] = useGetLanguageQuery();
  const [, patchProfile] = usePatchProfileMutation();
  const [onUpdateState, setOnUpdateState] = useState<boolean>(false);
  const [onProcessForm, setOnProcessForm] = useState<boolean>(false);
  const [profileForm, setProfileForm] = useState({
    email: meData?.me?.email,
    first_name: meData?.me?.first_name,
    last_name: meData?.me?.last_name,
    interests: meData?.me?.interests.map(interest => interest.interest),
    languageId: meData?.me?.language?.id,
  });

  useEffect(() => {
    form.setFieldsValue({
      email: meData?.me?.email,
      first_name: meData?.me?.first_name,
      last_name: meData?.me?.last_name,
      languageId: meData?.me?.language?.id,
      // interests: meData?.me?.interests.map(interest => interest.interest),
    });
    // console.log(meData);
  }, []);

  const tagRender = (props: any) => {
    const { value, closable, onClose } = props;
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
      message.success('Your profile was successfully updated.');
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
      [key]: key === 'languageId' ? evt : evt.target.value,
    });
    setProfileForm(updatedForm);
  };

  return (
    <div>
      <PageHeader className="site-page-header" title="Profile" />
      <Divider />
      <Row>
        <Col offset={2} span={16}>
          <Form
            layout="vertical"
            onFinish={() => onSubmitUpdatedProfileForm()}
            form={form}
          >
            <Row>
              <Col span={4}>
                <Avatar
                  size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                  shape="square"
                  // icon={<UserOutlined />}
                  src={meData?.me?.avatar}
                />
              </Col>
              <Col span={12}>
                <Row>
                  <Col span={24}>
                    <Form.Item
                      name={'email'}
                      label="Email"
                      //   rules={[{ required: true }]}
                    >
                      <Input
                        size="middle"
                        readOnly={true}
                        // defaultValue={meData?.me?.email}
                        value={meData?.me?.email}
                        onChange={(evt: any) =>
                          onChangeProfileForm(evt, 'email')
                        }
                      />
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <Form.Item
                      name={'first_name'}
                      label="First Name"
                      //   rules={[{ required: true }]}
                    >
                      <Input
                        size="middle"
                        readOnly
                        // defaultValue={meData?.me?.first_name}
                        value={profileForm?.first_name}
                        onChange={(evt: any) =>
                          onChangeProfileForm(evt, 'firstname')
                        }
                      />
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <Form.Item
                      name={'last_name'}
                      label="Last Name"
                      //   rules={[{ required: true }]}
                    >
                      <Input
                        // size="large"
                        readOnly
                        // defaultValue={meData?.me?.last_name}
                        value={profileForm?.last_name}
                        onChange={(evt: any) =>
                          onChangeProfileForm(evt, 'lastname')
                        }
                      />
                    </Form.Item>
                  </Col>

                  <Col span={24}>
                    <Form.Item
                      name={'languageId'}
                      // name={'interests'}
                      label="Interested in"
                      // label="Repository language"
                      //   rules={[{ required: true }]}
                    >
                      <Select
                        showSearch
                        style={{ width: '100%' }}
                        placeholder="Select programming language for repositories"
                        optionFilterProp="children"
                        disabled={!onUpdateState}
                        value={profileForm?.languageId}
                        onChange={(evt: any) =>
                          onChangeProfileForm(evt, 'languageId')
                        }
                        // onChange={onChange}
                        // onFocus={onFocus}
                        // onBlur={onBlur}
                        // onSearch={onSearch}
                        // filterOption={(input, option) => {
                        //   console.log(option);
                        //   return [];
                        // }}
                      >
                        {/* <Select.Option value="jack">Jack</Select.Option>
                        <Select.Option value="lucy">Lucy</Select.Option>
                        <Select.Option value="tom">Tom</Select.Option> */}
                        {languageData?.getLanguages.map((language: any) => {
                          // return {
                          //   text: language.language,
                          //   value: language.value,
                          // };
                          return (
                            <Select.Option
                              value={language.id}
                              key={language.id}
                            >
                              {language.language}
                            </Select.Option>
                          );
                        })}
                      </Select>
                    </Form.Item>
                  </Col>

                  {/* <Col span={24}>
                    <Form.Item
                      name={'interests'}
                      // label="Interested in"
                      //   rules={[{ required: true }]}
                    >
                      <Select
                        mode="multiple"
                        showArrow
                        tagRender={tagRender}
                        placeholder="Select programming language for articles"
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
                        disabled={!onUpdateState}
                      />
                    </Form.Item>
                  </Col> */}

                  <Col span={24}>
                    <Form.Item
                    // name={['user', 'interested']}
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
