import React, { useState } from "react";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../../redux/store";
import toast from "react-hot-toast";
import { Icon } from "../../../shared/Icon";
import { fetchNews } from "../../../redux/news/newsOperations";
import css from "./SearchBar.module.css";

interface Props {
  searchValue: string;
  setSearchValue: (val: string) => void;
  setCurrentPage: (val: number) => void;
}

const SearchBar = ({ setSearchValue, setCurrentPage, searchValue }: Props) => {
  const [inputValue, setInputValue] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      setSearchValue(inputValue);
      setCurrentPage(1);
    } else {
      toast("You can't put an empty field", {
        icon: "⚠️",
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleCancelSearch = async () => {
    setInputValue("");
    setSearchValue("");
    setCurrentPage(1);
    await dispatch(fetchNews({ page: 1, searchQuery: undefined }));
  };

  return (
    <form className={css.searchForm} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search"
        value={inputValue}
        onChange={handleInputChange}
        disabled={searchValue !== ""}
      />
      {inputValue !== "" && (
        <button
          type="button"
          className={css.cancelSearchBtn}
          onClick={handleCancelSearch}
        >
          <Icon id="icon-close" width={18} height={18} />
        </button>
      )}
      <button type="submit" className={css.submitSearchBtn}>
        <Icon id="icon-search" width={18} height={18} />
      </button>
    </form>
  );
};

export default SearchBar;
