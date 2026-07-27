import { useAppSelector } from "../redux/hooks";
import {
  selectNews,
  selectIsErrorNews,
  selectIsLoadingNews,
  selectTotalPages,
} from "../redux/news/newsSelectors";

export const useNews = () => {
  const news = useAppSelector(selectNews);
  const totalPages = useAppSelector(selectTotalPages);
  const isLoadingNews = useAppSelector(selectIsLoadingNews);
  const isErrorNews = useAppSelector(selectIsErrorNews);

  return {
    news,
    isErrorNews,
    isLoadingNews,
    totalPages,
  };
};
