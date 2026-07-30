import { useEffect, useState } from "react";
import {
  NextIcon,
  PreviousIcon,
  LastIcon,
  FirstIcon,
} from "./CustomIcons/CustomIcons";
import css from "./Pagination.module.css";

interface Props {
  totalPages: number | null;
  setCurrentPage: (val: number) => void;
  currentPage: number;
}

const PaginationGeneral = ({
  totalPages,
  setCurrentPage,
  currentPage,
}: Props) => {
  const [isDesktopOrTablet, setIsDesktopOrTablet] = useState<boolean>(
    typeof window !== "undefined" ? window.innerWidth >= 768 : true,
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const handleResize = (e: MediaQueryListEvent | MediaQueryList) => {
      setIsDesktopOrTablet(e.matches);
    };

    handleResize(mediaQuery);
    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  if (!totalPages || totalPages <= 1) return null;

  const onPageChanged = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    // Mobil için 2, Tablet/Desktop için 3 sayfa görünürlüğü
    const maxVisible = isDesktopOrTablet ? 3 : 2;

    if (totalPages <= maxVisible + 1) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (isDesktopOrTablet) {
        // Tablet & Desktop (3 rakam görünür: örn. 1, 2, 3)
        if (currentPage <= 2) {
          pages.push(1, 2, 3, "...", totalPages);
        } else if (currentPage >= totalPages - 1) {
          pages.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
        } else {
          pages.push(
            1,
            "...",
            currentPage - 1,
            currentPage,
            currentPage + 1,
            "...",
            totalPages,
          );
        }
      } else {
        // Mobil (2 rakam görünür: örn. 1, 2)
        if (currentPage <= 1) {
          pages.push(1, 2, "...", totalPages);
        } else if (currentPage >= totalPages) {
          pages.push(1, "...", totalPages - 1, totalPages);
        } else {
          pages.push(1, currentPage, "...", totalPages);
        }
      }
    }
    return pages;
  };

  return (
    <div className={css.paginationContainer}>
      <ul className={css.paginationList}>
        <li>
          <button
            type="button"
            className={css.pageBtn}
            onClick={() => onPageChanged(1)}
            disabled={currentPage === 1}
          >
            <FirstIcon />
          </button>
        </li>
        <li>
          <button
            type="button"
            className={css.pageBtn}
            onClick={() => onPageChanged(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <PreviousIcon />
          </button>
        </li>

        {getPageNumbers().map((page, index) => (
          <li key={index} className={page === "..." ? css.dots : ""}>
            {page === "..." ? (
              <span>...</span>
            ) : (
              <button
                type="button"
                className={`${css.pageBtn} ${currentPage === page ? css.active : ""}`}
                onClick={() => onPageChanged(page as number)}
              >
                {page}
              </button>
            )}
          </li>
        ))}

        <li>
          <button
            type="button"
            className={css.pageBtn}
            onClick={() => onPageChanged(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <NextIcon />
          </button>
        </li>
        <li>
          <button
            type="button"
            className={css.pageBtn}
            onClick={() => onPageChanged(totalPages)}
            disabled={currentPage === totalPages}
          >
            <LastIcon />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default PaginationGeneral;
