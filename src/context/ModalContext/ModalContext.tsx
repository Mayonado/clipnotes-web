import React, { createContext, useContext, useState } from 'react';
import { Modal as AntdModal, Button, Space } from 'antd';

const ModalContext: any = createContext(null);
export const ModalProvider: React.FC<{}> = ({ children }) => {
  const [open, setOpen] = useState<Boolean>(false);
  const [modalConfig, setModalConfig] = useState({
    title: null,
    content: null,
    onCancelFunction: () => {},
    onOkFunction: () => {},
  });

  const show = () => {
    setOpen(true);
  };

  const hide = () => {
    setOpen(false);
  };
  return (
    <ModalContext.Provider
      value={{
        show,
        hide,
        setModalConfig,
      }}
    >
      <AntdModal
        {...(modalConfig.title ? { title: modalConfig.title } : {})}
        visible={open as any}
        onCancel={() => modalConfig.onCancelFunction()}
        footer={[
          <Button onClick={() => modalConfig.onCancelFunction()} key="cancel">
            Cancel
          </Button>,
          <Button onClick={() => modalConfig.onOkFunction()} key="okay" danger>
            Yes
          </Button>,
        ]}
      >
        <p>{modalConfig.content}</p>
      </AntdModal>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContext;
