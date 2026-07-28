import { useEffect } from "react";
import { useAppDispatch } from "../../../redux/hooks";
import { logOut } from "../../../redux/auth/authOperations";
import ModalGeneral from "../../ModalGeneral/ModalGeneral";
import imgModal from "../../../assets/images/modals/cat-modal.webp";
import css from "./ModalLogout.module.css";

interface Props {
  showLogout: boolean;
  setShowLogout: (val: boolean) => void;
}

const ModalLogout = ({ setShowLogout, showLogout }: Props) => {
  const dispatch = useAppDispatch();

  const handleCloseModal = () => setShowLogout(false);
  const handleLogout = () => {
    dispatch(logOut());
    setShowLogout(false);
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Escape" && showLogout) {
        setShowLogout(false);
      }
    };
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [setShowLogout, showLogout]);

  useEffect(() => {
    // Inline stil yerine global class atanması en güvenli yöntemdir
    if (showLogout) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [showLogout]);

  return (
    <ModalGeneral fn={setShowLogout}>
      <div className={css.imgContainer}>
        <div className={css.imgWrapper}>
          <img src={imgModal} alt="Animated white-orange cat" />
        </div>
        <p className={css.title}>Already leaving?</p>
      </div>
      <div className={css.btnsBox}>
        <button
          type="button"
          className={css.logoutConfirmBtn}
          onClick={handleLogout}
        >
          Yes
        </button>
        <button
          type="button"
          className={css.cancelBtn}
          onClick={handleCloseModal}
        >
          Cancel
        </button>
      </div>
    </ModalGeneral>
  );
};

export default ModalLogout;
