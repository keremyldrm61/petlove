import React from "react";
import { Icon } from "../../../../shared/Icon";
import css from "./Rating.module.css";

interface RatingProps {
  popularity: number;
}

const Rating: React.FC<RatingProps> = ({ popularity }) => {
  const maxStars = 5;
  const filledStars = Math.ceil((popularity / 37) * maxStars);

  const stars = Array.from({ length: maxStars }, (_, index) => (
    <Icon
      key={index}
      id={index < filledStars ? "icon-star" : "icon-starGray"}
      width={16}
      height={16}
    />
  ));

  return (
    <div className={css.ratingContainer}>
      {stars} {popularity}
    </div>
  );
};

export default Rating;
