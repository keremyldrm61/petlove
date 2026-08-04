import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import dogModalImg from "../../../assets/images/modals/dog-modal.webp";
import ModalGeneral from "../../ModalGeneral/ModalGeneral";
import css from "./Attention.module.css";

interface AttentionProps {
  setShowAttention: React.Dispatch<React.SetStateAction<boolean>>;
  showAttention: boolean;
}

const Attention = ({ setShowAttention, showAttention }: AttentionProps) => {
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (showAttention) setShowAttention(false);
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [setShowAttention, showAttention]);

  useEffect(() => {
    if (showAttention) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showAttention]);

  return (
    <ModalGeneral fn={() => setShowAttention(false)}>
      <div className={css.imgContainer}>
        <div>
          <img src={dogModalImg} alt="Dog modal" />
        </div>
        <span>Attention</span>
        <p>
          We would like to remind you that certain functionality is available
          only to authorized users.If you have an account, please log in with
          your credentials. If you do not already have an account, you must
          register to access these features.
        </p>
      </div>
      <div className={css.btnsBox}>
        <Link
          className={css.toLogin}
          to={"/login"}
          onClick={() => setShowAttention(false)}
        >
          Log in
        </Link>
        <Link
          className={css.toRegistration}
          to={"/register"}
          onClick={() => setShowAttention(false)}
        >
          Registration
        </Link>
      </div>
    </ModalGeneral>
  );
};

export default Attention;
