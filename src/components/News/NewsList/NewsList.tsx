import { useNews } from "../../../hooks/useNews";
import NewsItem from "../NewsItem/NewsItem";
import type { NewsItemType } from "../../../types";
import PaginationGeneral from "../../Pagination/Pagination";
import css from "./NewsList.module.css";

interface Props {
  setCurrentPage: (val: number) => void;
  currentPage: number;
}

const NewsList = ({ setCurrentPage, currentPage }: Props) => {
  const { news, totalPages } = useNews();

  return (
    <>
      {news?.length === 0 && (
        <p className={css.text}>
          Sorry, <b className={css.highlight}>no find</b> any news with these
          search parameter
        </p>
      )}
      <ul className={css.list}>
        {news.map((item: NewsItemType) => (
          <NewsItem key={item._id} item={item} />
        ))}
      </ul>
      <PaginationGeneral
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </>
  );
};

export default NewsList;
