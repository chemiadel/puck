import React, { useContext, createContext, useState, useEffect } from "react";

interface IContext {
  state: any;
}

export const Context = createContext({});

interface IProps {
  children?: JSX.Element[] | JSX.Element;
}

export const Provider = (props: IProps) => {
  const [modals, setModal] = useState(new Map());

  const addModal = (key) => {
    setModal((prev) => {
      prev.has();
    });
  };

  return (
    <Context.Provider value={[modals, addModal]}>
      {props.children}
    </Context.Provider>
  );
};

export const useModal = (key: string) => {
  const {
    state,
  }: {
    state: [Map<any, any>, React.Dispatch<React.SetStateAction<Map<any, any>>>];
  } = useContext(Context);

  const modals = new Map();

  useEffect(() => {
    isExist = 
  }, []);

  const addModal = () => {};
};
