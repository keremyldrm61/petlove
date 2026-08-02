import React, { type Dispatch, type SetStateAction } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../../../redux/store";
import { useAuth } from "../../../../hooks/useAuth";
import { type NoticeDetails } from "../DetailsModal";
import {
  AddToFavorites,
  RemoveFromFavorites,
} from "../../../../redux/notices/noticesOperations";
import { Icon } from "../../../../shared/Icon";
import css from "./Buttons.module.css";

interface ButtonsProps {
  isFavorite: boolean;
  id: string;
  setIsFavorite: Dispatch<SetStateAction<boolean>>;
  setShowFirstNotification: Dispatch<SetStateAction<boolean>>;
}

const Buttons: React.FC<ButtonsProps> = ({
  isFavorite,
  id,
  setIsFavorite,
  setShowFirstNotification,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const { favoritesNotices } = useAuth() as {
    favoritesNotices?: NoticeDetails[];
  };

  const handleAddFavorites = () => {
    if (favoritesNotices?.length === 0) {
      setShowFirstNotification(true);
    }
    dispatch(AddToFavorites(id));
    setIsFavorite(true);
  };

  const handleRemoveFavorites = () => {
    dispatch(RemoveFromFavorites(id));
    setIsFavorite(false);
  };

  return (
    <div className={css.buttonsContainer}>
      <button
        className={css.addRemoveBtn}
        type="button"
        onClick={isFavorite ? handleRemoveFavorites : handleAddFavorites}
      >
        {isFavorite ? "Remove from" : "Add to"}
        <Icon id="icon-heart" width={18} height={18} />
      </button>
      <Link
        className={css.contactBtn}
        to={"mailto:biggest5family@gmail.com"}
        target="_blank"
      >
        Contact
      </Link>
    </div>
  );
};

export default Buttons;
