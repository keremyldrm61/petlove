import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../redux/store";
import { fetchNews } from "../../redux/news/newsOperations";
import { useNews } from "../../hooks/useNews";
import FallbackLoader from "../../components/UI/FallbackLoader/FallbackLoader";
import SearchBar from "../../components/News/SearchBar/SearchBar";
import NewsList from "../../components/News/NewsList/NewsList";
import css from "./NewsPage.module.css";

const NewsPage = () => {
  const { isLoadingNews } = useNews();
  const dispatch = useDispatch<AppDispatch>();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchValue, setSearchValue] = useState<string>("");

  useEffect(() => {
    if (!searchValue || searchValue === "") {
      dispatch(fetchNews({ page: currentPage, searchQuery: undefined }));
    } else {
      dispatch(fetchNews({ page: currentPage, searchQuery: searchValue }));
    }
  }, [currentPage, dispatch, searchValue]);

  return (
    <section className={css.homePageSection}>
      <div className={css.boxTitle}>
        <h1 className={css.titleOfPage}>News</h1>
        <SearchBar
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          setCurrentPage={setCurrentPage}
        />
      </div>
      {isLoadingNews ? (
        <FallbackLoader />
      ) : (
        <NewsList setCurrentPage={setCurrentPage} currentPage={currentPage} />
      )}
    </section>
  );
};

export default NewsPage;
