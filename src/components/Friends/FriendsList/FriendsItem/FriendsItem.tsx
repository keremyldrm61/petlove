import React from "react";
import { Link } from "react-router-dom";
import { workHours } from "../../../../utils/helpers";
import type { FriendType } from "../../../../types";
import css from "./FriendsItem.module.css";

interface FriendItemProps {
  friend: FriendType;
}

const FriendsItem: React.FC<FriendItemProps> = ({ friend }) => {
  const { address, addressUrl, email, imageUrl, phone, title, url, workDays } =
    friend;
  const workingHours = workHours(workDays);

  return (
    <li className={css.cardContainer}>
      <Link to={url} target="_blank" className={css.logoCompany}>
        <img src={imageUrl} alt={`Logo of ${title}`} />
      </Link>

      <div className={css.infoCompany}>
        <h2>{title}</h2>
        <ul className={css.listDetails}>
          <li>
            <p>Email: </p>
            <Link to={email ? `mailto:${email}` : "#"} className={css.infoLink}>
              {email || "website only"}
            </Link>
          </li>
          <li>
            <p>Address: </p>
            <Link
              to={addressUrl ? addressUrl : "#"}
              target={addressUrl ? "_blank" : "_self"}
              className={css.infoLink}
            >
              {address || "website only"}
            </Link>
          </li>
          <li>
            <p>Phone: </p>
            <Link to={phone ? `tel:${phone}` : "#"} className={css.infoLink}>
              {phone || "website only"}
            </Link>
          </li>
        </ul>
      </div>

      <span className={css.workHoursBadge}>
        {workingHours || "Day and night"}
      </span>
    </li>
  );
};

export default FriendsItem;
