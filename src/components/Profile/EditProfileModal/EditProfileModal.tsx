import { useState, useEffect } from "react";
import ModalGeneral from "../../ModalGeneral/ModalGeneral";
import { useAuth } from "../../../hooks/useAuth";
import { Icon } from "../../../shared/Icon";
import FormEditUser from "./FormEditUser/FormEditUser";
import css from "./EditProfileModal.module.css";

interface EditProfileModalProps {
  setShowEditForm: (show: boolean) => void;
  showEditForm: boolean;
}

const EditProfileModal = ({
  setShowEditForm,
  showEditForm,
}: EditProfileModalProps) => {
  const { user } = useAuth();
  const [imageURL, setImageURL] = useState<string>(user?.avatar || "");

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (showEditForm) setShowEditForm(false);
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [setShowEditForm, showEditForm]);

  useEffect(() => {
    if (showEditForm) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showEditForm]);

  return (
    <ModalGeneral fn={setShowEditForm}>
      <div className={css.editModalContainer}>
        <h1>Edit information</h1>
        <div className={css.avatarBox}>
          {imageURL !== "" ? (
            <img src={imageURL} alt="user's avatar" />
          ) : (
            <Icon id="icon-user" width={40} height={40} />
          )}
        </div>
        <FormEditUser
          setImageURL={setImageURL}
          setShowEditForm={setShowEditForm}
        />
      </div>
    </ModalGeneral>
  );
};

export default EditProfileModal;
