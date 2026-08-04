import React, { useRef } from "react";
import { createPortal } from "react-dom";
import { useLocation } from "react-router-dom";
import css from "./Modal.module.css";

interface Props {
  children: React.ReactNode;
  setIsShowMobileMenu?: (val: boolean) => void;
}

const Modal = ({ children, setIsShowMobileMenu }: Props) => {
  const modalRoot = document?.getElementById("modal-root");
  const backdropRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const isHomepage = location.pathname === "/home" || location.pathname === "/";

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === backdropRef.current) {
      setIsShowMobileMenu?.(false);
    }
  };

  if (!modalRoot) return null;

  return createPortal(
    <div
      className={css.backdrop}
      ref={backdropRef}
      onClick={handleBackdropClick}
    >
      <div
        className={`${css.modalContainer} ${
          isHomepage ? css.containerHomepage : css.containerDefault
        }`}
      >
        {children}
      </div>
    </div>,
    modalRoot,
  );
};

export default Modal;
