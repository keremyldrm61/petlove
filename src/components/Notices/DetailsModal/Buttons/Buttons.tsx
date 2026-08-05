import type { Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../../../redux/store";
import { useAuth } from "../../../../hooks/useAuth";
import type { NoticeType } from "../../../../types";
import {
  AddToFavorites,
  RemoveFromFavorites,
} from "../../../../redux/notices/noticesOperations";
import { Icon } from "../../../../shared/Icon";
import css from "./Buttons.module.css";

interface ButtonsProps {
  isFavorite: boolean;
  notice: NoticeType;
  setShowFirstNotification: Dispatch<SetStateAction<boolean>>;
}

const Buttons = ({
  isFavorite,
  notice,
  setShowFirstNotification,
}: ButtonsProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const { favoritesNotices } = useAuth() as {
    favoritesNotices?: NoticeType[];
  };

  const handleAddFavorites = () => {
    if (!favoritesNotices || favoritesNotices.length === 0) {
      setShowFirstNotification(true);
    }
    // ARTIK HATA YOK: Thunk'ın beklediği gibi tam objeyi gönderiyoruz!
    dispatch(AddToFavorites(notice));
  };

  const handleRemoveFavorites = () => {
    // Silme işlemi operasyonlarda string bekliyor, bu yüzden ID yolluyoruz
    dispatch(RemoveFromFavorites(notice._id));
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
