import React, { createContext, useState } from 'react';

const LoaderContext: any = createContext('');

export const LoaderProvider: React.FC = ({ children }) => {
  const [open, setOpen] = useState<boolean>(false);

  const show = () => {
    setOpen(true);
  };

  const hide = () => {
    setOpen(false);
  };

  return (
    <LoaderContext.Provider
      value={{
        show,
        hide,
        open,
      }}
    >
      {children}
    </LoaderContext.Provider>
  );
};

export default LoaderContext;
