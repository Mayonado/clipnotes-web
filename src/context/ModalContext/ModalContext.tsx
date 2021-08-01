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
        open,
        show,
        hide,
        setModalConfig,
        modalConfig,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContext;
