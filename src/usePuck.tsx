import { useState, useEffect, useContext, useRef } from "react";
import { Context, IModal } from "./Provider";

//type guard
interface IUseModalReturn {
  isOpen: boolean;
  open: (data?: any) => void;
  close: () => void;
}

type TUseModal = (key: string) => IUseModalReturn;

// State hook
export const usePuck: TUseModal = (key) => {
  //consume context
  const { modals, setModals } = useContext(Context);
  var { current: modal } = useRef<IModal>();

  useEffect(() => {
    const isExist = modals.has(key);

    if (!isExist) {
      modals.set(key, {
        isOpen: false,
      });
    }

    modal = modals.get(key);
  }, [modals]);

  // isOpen
  const isOpen = () => {
    return modals.get(key)?.isOpen || false;
  };

  // open the modal
  const open = (data: any) => {
    setModals((prev) => {
      return new Map(
        prev.set(key, {
          ...modal,
          isOpen: true,
          data,
        })
      );
    });
  };

  // close the modal
  const close = () => {
    setModals((prev) => {
      return new Map(
        prev.set(key, {
          ...modal,
          isOpen: false,
        })
      );
    });
  };

  return {
    isOpen: isOpen(),
    open: open,
    close: close,
  };
};
