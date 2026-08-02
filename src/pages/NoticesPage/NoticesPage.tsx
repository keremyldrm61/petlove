import { useEffect, useState } from "react";
import { useNotices } from "../../hooks/useNotices";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../redux/store";
import SearchBarNotices from "../../components/Notices/SearchBarNotices/SearchBarNotices";
import {
  fetchCategories,
  fetchGenders,
} from "../../redux/notices/noticesOperations";
import PetsList from "../../components/Notices/PetsList/PetsList";
import FallbackLoader from "../../components/UI/FallbackLoader/FallbackLoader";
import PaginationGeneral from "../../components/Pagination/Pagination";
import css from "./NoticesPage.module.css";

const NoticesPage = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { totalPagesNotices, isLoadNotices } = useNotices();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchGenders());
  }, [dispatch]);

  return (
    <section className={css.noticesPageSection}>
      <h1 className={css.titleOfPage}>Find your favorite pet</h1>
      <SearchBarNotices
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      {isLoadNotices ? (
        <FallbackLoader />
      ) : (
        <>
          <PetsList />
          <PaginationGeneral
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={totalPagesNotices}
          />
        </>
      )}
    </section>
  );
};

export default NoticesPage;
