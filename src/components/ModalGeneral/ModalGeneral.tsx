import React, { useRef } from "react";
import { createPortal } from "react-dom";
import { Icon } from "../../shared/Icon";
import css from "./ModalGeneral.module.css";

interface Props {
  children: React.ReactNode;
  fn: (val: boolean) => void;
}

const ModalGeneral = ({ children, fn }: Props) => {
  const modalRoot = document.getElementById("modal-root");
  const backdropRef = useRef<HTMLDivElement>(null);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === backdropRef.current) {
      fn(false);
    }
  };

  if (!modalRoot) return null;

  return createPortal(
    <div
      className={css.backdrop}
      ref={backdropRef}
      onClick={handleBackdropClick}
    >
      <div className={css.modalContainer}>
        <button
          className={css.closeBtn}
          onClick={() => fn(false)}
          type="button"
        >
          <Icon id="icon-close" width={24} height={24} />
        </button>
        {children}
      </div>
    </div>,
    modalRoot,
  );
};

export default ModalGeneral;
