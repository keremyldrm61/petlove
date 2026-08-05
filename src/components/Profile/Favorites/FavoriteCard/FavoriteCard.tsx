import { useState } from "react";
import type { NoticeType } from "../../../../types";
import { formatBirthday } from "../../../../utils/helpers";
import DetailsModal from "../../../Notices/DetailsModal/DetailsModal";
import { Icon } from "../../../../shared/Icon";
import css from "./FavoriteCard.module.css";

interface FavoriteCardProps {
  notice: NoticeType;
  onRemoveFavorites: (id: string) => void;
  favorites: NoticeType[];
}

const FavoriteCard = ({
  notice,
  onRemoveFavorites,
  favorites,
}: FavoriteCardProps) => {
  const [showDetails, setShowDetails] = useState(false);
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

  const isFavorite = !!favorites?.find((fav) => fav._id === _id);

  const formattedDate = formatBirthday(birthday);

  const details = [
    { label: "Name", value: name },
    { label: "Birthday", value: formattedDate },
    { label: "Sex", value: sex },
    { label: "Species", value: species },
    { label: "Category", value: category },
  ];

  const handleRemoveFavorites = () => onRemoveFavorites(_id);
  const handleLearnMore = () => setShowDetails(true);

  return (
    <>
      {showDetails && (
        <DetailsModal
          setShowDetails={setShowDetails}
          notice={notice}
          showDetails={showDetails}
          isFavorite={isFavorite}
          setIsFavorite={() => {}}
          setShowFirstNotification={() => {}}
        />
      )}
      <li className={css.cardContainer}>
        <div className={css.imageAnimalContainer}>
          <img src={imgURL} alt={title} />
        </div>
        <div style={{ width: "100%" }}>
          <div className={css.titlePopularityBox}>
            <h2>{title}</h2>
            <span className={css.popularity}>
              <Icon id="icon-star" width={16} height={16} /> {popularity}
            </span>
          </div>
          <ul className={css.listInfo}>
            {details.map(({ label, value }) => (
              <li key={label} className={css.infoItem}>
                <p className={css.infoLabel}>
                  {label} <span className={css.infoValue}>{value}</span>
                </p>
              </li>
            ))}
          </ul>
          <p className={css.commentText}>{comment}</p>
        </div>
        <div className={css.buttonsCardBox}>
          <button
            className={css.buttonLearnMore}
            type="button"
            onClick={handleLearnMore}
          >
            Learn more
          </button>
          <button
            className={css.btnRemove}
            type="button"
            onClick={handleRemoveFavorites}
          >
            <Icon id="icon-trash" width={18} height={18} />
          </button>
        </div>
      </li>
    </>
  );
};

export default FavoriteCard;
