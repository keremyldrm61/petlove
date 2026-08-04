import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../../redux/store";
import CategorySelect from "./CategorySelect/CategorySelect";
import ByGenderSelect from "./ByGenderSelect/ByGenderSelect";
import ByTypeSelect from "./ByTypeSelect/ByTypeSelect";
import SearchLocation from "./SearchLocation/SearchLocation";
import TextInput from "./TextInput/TextInput";
import RadioSection, { type RadioOption } from "./RadioSection/RadioSection";
import { fetchNotices } from "../../../redux/notices/noticesFiltration";
import css from "./SearchBarNotices.module.css";

interface SearchBarNoticesProps {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const SearchBarNotices = ({
  currentPage,
  setCurrentPage,
}: SearchBarNoticesProps) => {
  const [radioSearch, setRadioSearch] = useState<RadioOption | null>(null);
  const [categoryQuery, setCategoryQuery] = useState<string | null>(null);
  const [genderQuery, setGenderQuery] = useState<string | null>(null);
  const [byTypeQuery, setByTypeQuery] = useState<string | null>(null);
  const [locationQuery, setLocationQuery] = useState<string | null>(null);
  const [textQuery, setTextQuery] = useState<string>("");
  const [inputValue, setInputValue] = useState<string>("");

  const dispatch = useDispatch<AppDispatch>();

  const handleResetSearch = () => {
    setRadioSearch(null);
    setCategoryQuery(null);
    setGenderQuery(null);
    setByTypeQuery(null);
    setLocationQuery(null);
    setTextQuery("");
    setInputValue("");
    setCurrentPage(1);
  };

  useEffect(() => {
    dispatch(
      fetchNotices({
        page: currentPage,
        keyword: textQuery,
        category: categoryQuery ?? undefined,
        species: byTypeQuery ?? undefined,
        locationId: locationQuery ?? undefined,
        radioSearch: radioSearch ?? undefined,
        sex: genderQuery ?? undefined,
      }),
    );
  }, [
    byTypeQuery,
    categoryQuery,
    currentPage,
    dispatch,
    genderQuery,
    locationQuery,
    radioSearch,
    textQuery,
  ]);

  return (
    <div className={css.searchContainer}>
      <TextInput
        setTextQuery={setTextQuery}
        textQuery={textQuery}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      <div className={css.selectContainer}>
        <CategorySelect
          setCategoryQuery={setCategoryQuery}
          categoryQuery={categoryQuery}
          setCurrentPage={setCurrentPage}
        />
        <ByGenderSelect
          setGenderQuery={setGenderQuery}
          genderQuery={genderQuery}
          setCurrentPage={setCurrentPage}
        />
      </div>
      <ByTypeSelect
        setByTypeQuery={setByTypeQuery}
        byTypeQuery={byTypeQuery}
        setCurrentPage={setCurrentPage}
      />
      <SearchLocation
        setLocationQuery={setLocationQuery}
        locationQuery={locationQuery}
        setCurrentPage={setCurrentPage}
      />
      <RadioSection
        setRadioSearch={setRadioSearch}
        radioSearch={radioSearch}
        setCurrentPage={setCurrentPage}
      />
      {(radioSearch ||
        categoryQuery ||
        genderQuery ||
        byTypeQuery ||
        locationQuery ||
        textQuery !== "") && (
        <button
          type="button"
          onClick={handleResetSearch}
          className={css.resetFilterBtn}
        >
          Reset
        </button>
      )}
    </div>
  );
};

export default SearchBarNotices;
