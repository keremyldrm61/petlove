import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import catModalImg from "../../../assets/images/modals/cat-modal.webp";
import ModalGeneral from "../../ModalGeneral/ModalGeneral";
import css from "./FirstItemNotification.module.css";

interface FirstItemNotificationProps {
  setShowFirstNotification: React.Dispatch<React.SetStateAction<boolean>>;
  showFirstNotification: boolean;
}

const FirstItemNotification = ({
  setShowFirstNotification,
  showFirstNotification,
}: FirstItemNotificationProps) => {
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (showFirstNotification) setShowFirstNotification(false);
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [setShowFirstNotification, showFirstNotification]);

  useEffect(() => {
    if (showFirstNotification) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showFirstNotification]);

  return (
    <ModalGeneral fn={() => setShowFirstNotification(false)}>
      <div className={css.imgContainer}>
        <div>
          <img src={catModalImg} alt="Cat modal" />
        </div>
        <p>Congrats</p>
      </div>
      <p className={css.textCongrats}>
        The first fluff in the favorites! May your friendship be the happiest
        and filled with fun.
      </p>
      <Link to={"/profile"} className={css.buttonLink}>
        Go to profile
      </Link>
    </ModalGeneral>
  );
};

export default FirstItemNotification;
