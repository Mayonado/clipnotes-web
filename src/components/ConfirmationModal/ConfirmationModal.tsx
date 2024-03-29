import React from 'react';
import { Modal as AntdModal, Button } from 'antd';

interface ConfirmationModalProps {
  title: string;
  content: string;
  open: any;
  onOkFunction: Function;
  onCancelFunction: Function;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  title,
  content,
  open,
  onOkFunction,
  onCancelFunction,
}) => {
  //   const confirm = () => {
  //     Modal.confirm({
  //       title: title,
  //       icon: <CloseCircleOutlined />,
  //       content: 'Bla bla ...',
  //       okText: 'Yes',
  //       okType: 'danger',
  //       onOk: () => onOkFunction(),
  //       cancelText: 'Cancel',
  //       onCancel: () => onCancelFunction()
  //     });
  //   };
  // const thisFunc = () => {
  //   console.log('this is onClick function...');
  // };
  return (
    // <Space>
    //   <Button onClick={() => confirm()}>Confirm</Button>
    // </Space>
    <AntdModal
      {...(title ? { title: title } : {})}
      visible={open}
      onCancel={() => onCancelFunction()}
      footer={[
        <Button onClick={() => onCancelFunction()} key="cancel">
          Cancel
        </Button>,
        <Button onClick={() => onOkFunction()} key="okay" danger>
          Yes
        </Button>,
      ]}
    >
      <p>{content}</p>
    </AntdModal>
  );
};

export default ConfirmationModal;
