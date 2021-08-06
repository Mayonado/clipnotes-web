import React from 'react';
import { Modal as AntModal, Button } from 'antd';

interface ModalProps {
  toggleModal: Function;
  onCancel: Function;
  title?: string;
  open: any;
  content: string;
}

export const Modal: React.FC<ModalProps> = ({
  toggleModal,
  onCancel,
  title,
  open,
  content,
}) => {
  return (
    <AntModal
      {...(title ? { title: title } : {})}
      visible={open}
      onCancel={() => onCancel()}
      footer={[
        <Button onClick={() => toggleModal()} key="okay">
          OK
        </Button>,
      ]}
    >
      <p>{content}</p>
    </AntModal>
  );
};
export default Modal;
