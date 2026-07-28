import { useState } from "react";
import ModalLogout from "../../Profile/ModalLogout/ModalLogout";
import css from "./LogoutHeader.module.css";

const LogoutHeader = () => {
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  return (
    <>
      {showLogoutModal && (
        <ModalLogout
          showLogout={showLogoutModal}
          setShowLogout={setShowLogoutModal}
        />
      )}
      <button
        type="button"
        className={css.logoutButton}
        onClick={() => setShowLogoutModal(true)}
      >
        Log Out
      </button>
    </>
  );
};

export default LogoutHeader;
