import type { NewsItemType } from "../../../types";
import { formatDate } from "../../../utils/helpers";

import css from "./NewsItem.module.css";

interface Props {
  item: NewsItemType;
}

const NewsItem = ({ item }: Props) => {
  const { imgUrl, text, title, date, url } = item;
  const formattedDate = formatDate(date);

  return (
    <li className={css.itemContainer}>
      <img src={imgUrl} alt={title} />
      <h2>{title}</h2>
      <p>{text}</p>
      <div className={css.dateReadBox}>
        <span>{formattedDate}</span>
        <a href={url} target="_blank" rel="noreferrer">
          Read more
        </a>
      </div>
    </li>
  );
};

export default NewsItem;
