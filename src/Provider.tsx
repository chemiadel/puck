import React, { createContext, useState, Dispatch } from "react";

export interface IModal {
  isOpen: boolean;
  data?: any;
}

export interface IContext {
  modals: Map<string, IModal>;
  setModals: React.Dispatch<React.SetStateAction<Map<string, IModal>>>;
}

export const Context = createContext<IContext>({
  modals: new Map(),
  setModals: () => {},
});

interface IProps {
  children?: JSX.Element[] | JSX.Element;
}

export const Provider = (props: IProps) => {
  const [modals, setModals] = useState<Map<string, IModal>>(new Map());

  return (
    <Context.Provider
      value={{
        modals,
        setModals,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
