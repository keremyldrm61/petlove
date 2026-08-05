import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../../redux/store";
import { useAuth } from "../../../hooks/useAuth";
import { viewedPet } from "../../../redux/auth/authOperations";
import type { NoticeType } from "../../../types";
import { formatBirthday } from "../../../utils/helpers";
import DetailsModal from "../DetailsModal/DetailsModal";
import { Icon } from "../../../shared/Icon";
import css from "./Card.module.css";

interface CardProps {
  notice: NoticeType;
  setShowAttention: React.Dispatch<React.SetStateAction<boolean>>;
  setShowFirstNotification: React.Dispatch<React.SetStateAction<boolean>>;
  onAddFavorites: (id: string) => void;
  onRemoveFavorites: (id: string) => void;
}

const Card = ({
  notice,
  setShowAttention,
  setShowFirstNotification,
  onAddFavorites,
  onRemoveFavorites,
}: CardProps) => {
  const location = useLocation();
  const dispatch = useDispatch<AppDispatch>();
  const [showDetails, setShowDetails] = useState<boolean>(false);

  const isViewedPage = location?.pathname === "/profile/viewed";

  const {
    imgURL,
    name,
    title,
    birthday,
    sex,
    species,
    popularity,
    comment,
    category,
    _id,
  } = notice;

  const { isLoggedIn, favoritesNotices } = useAuth();

  const isFavorite = !!favoritesNotices?.some((fav) => fav._id === _id);

  const formattedDate = formatBirthday(birthday);

  const details = [
    { label: "Name", value: name },
    { label: "Birthday", value: formattedDate },
    { label: "Sex", value: sex },
    { label: "Species", value: species },
    { label: "Category", value: category },
  ];

  useEffect(() => {
    if (showDetails && !isViewedPage) {
      dispatch(viewedPet(_id));
    }
  }, [_id, isViewedPage, showDetails, dispatch]);

  const handleAddFavorites = () => {
    if (!isLoggedIn) {
      setShowAttention(true);
      return;
    }

    if (!favoritesNotices || favoritesNotices.length === 0) {
      setShowFirstNotification(true);
    }
    onAddFavorites(_id);
  };

  const handleRemoveFavorites = () => {
    onRemoveFavorites(_id);
  };

  const handleLearnMore = () =>
    !isLoggedIn ? setShowAttention(true) : setShowDetails(true);

  return (
    <>
      {showDetails && (
        <DetailsModal
          setShowDetails={setShowDetails}
          notice={notice}
          showDetails={showDetails}
          isFavorite={isFavorite}
          setShowFirstNotification={setShowFirstNotification}
        />
      )}
      <li
        className={`${css.cardContainer} ${isViewedPage ? css.isViewedPage : ""}`}
      >
        <div
          className={`${css.imageAnimalContainer} ${isViewedPage ? css.isViewedPage : ""}`}
        >
          <img src={imgURL} alt={title} />
        </div>
        <div style={{ width: "100%" }}>
          <div className={css.titlePopularityBox}>
            <h2>{title}</h2>
            <span>
              <Icon id="icon-star" width={16} height={16} /> {popularity}
            </span>
          </div>
          <ul className={css.listInfo}>
            {details.map(({ label, value }) => (
              <li key={label}>
                <p>
                  {label} <span>{value}</span>
                </p>
              </li>
            ))}
          </ul>
          <p className={css.commentText}>{comment}</p>
        </div>
        <div className={css.buttonsCardBox}>
          <button
            type="button"
            onClick={handleLearnMore}
            className={css.buttonLearnMore}
          >
            Learn more
          </button>
          {!isViewedPage && (
            <button
              type="button"
              className={css.btnLike}
              onClick={isFavorite ? handleRemoveFavorites : handleAddFavorites}
            >
              <Icon
                id={isFavorite ? "icon-trash" : "icon-heart"}
                width={18}
                height={18}
              />
            </button>
          )}
        </div>
      </li>
    </>
  );
};

export default Card;
