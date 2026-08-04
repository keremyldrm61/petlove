import { useEffect, type Dispatch, type SetStateAction } from "react";
import type { NoticeType } from "../../../types";
import ModalGeneral from "../../ModalGeneral/ModalGeneral";
import Rating from "./Rating/Rating";
import Info from "./Info/Info";
import Buttons from "./Buttons/Buttons";
import css from "./DetailsModal.module.css";

interface DetailsModalProps {
  setShowDetails: Dispatch<SetStateAction<boolean>>;
  notice: NoticeType;
  showDetails: boolean;
  isFavorite: boolean;
  setIsFavorite: Dispatch<SetStateAction<boolean>>;
  setShowFirstNotification: Dispatch<SetStateAction<boolean>>;
}

const DetailsModal = ({
  setShowDetails,
  notice,
  showDetails,
  isFavorite,
  setIsFavorite,
  setShowFirstNotification,
}: DetailsModalProps) => {
  const { imgURL, title, popularity, comment, category, _id } = notice;

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (showDetails) setShowDetails(false);
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [setShowDetails, showDetails]);

  useEffect(() => {
    if (showDetails) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showDetails]);

  return (
    <ModalGeneral fn={() => setShowDetails(false)}>
      <div className={css.containerModal}>
        <div className={css.imgBox}>
          <img src={imgURL} alt={`Animal ${title}`} />
          <span>{category}</span>
        </div>
        <h2>{title}</h2>
        <Rating popularity={popularity} />
        <Info notice={notice} />
        <p>{comment}</p>
        <Buttons
          isFavorite={isFavorite}
          id={_id}
          setIsFavorite={setIsFavorite}
          setShowFirstNotification={setShowFirstNotification}
        />
      </div>
    </ModalGeneral>
  );
};

export default DetailsModal;
