import css from "./Logout.module.css";

interface LogoutProps {
  setShowLogout: (show: boolean) => void;
}

const Logout = ({ setShowLogout }: LogoutProps) => {
  return (
    <button
      className={css.logoutBtn}
      type="button"
      onClick={() => setShowLogout(true)}
    >
      Logout
    </button>
  );
};

export default Logout;
