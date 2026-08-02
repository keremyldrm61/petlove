import React from "react";
import Select, { type SingleValue } from "react-select";
import { useNotices } from "../../../../hooks/useNotices";
import css from "./ByGenderSelect.module.css";

interface ByGenderSelectProps {
  setGenderQuery: React.Dispatch<React.SetStateAction<string | null>>;
  genderQuery: string | null;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

interface OptionType {
  value: string;
  label: string;
}

const ByGenderSelect: React.FC<ByGenderSelectProps> = ({
  setGenderQuery,
  genderQuery,
  setCurrentPage,
}) => {
  const { genders } = useNotices() as { genders?: string[] };

  const gendersData: OptionType[] = [
    { value: "", label: "Show all" },
    ...(genders?.map((item) => ({
      value: item,
      label: item.charAt(0).toUpperCase() + item.slice(1),
    })) || []),
  ];

  const handleChangeGender = (selectedOption: SingleValue<OptionType>) => {
    setGenderQuery(selectedOption?.value || null);
    setCurrentPage(1);
  };

  const selectValue =
    genderQuery === null
      ? null
      : gendersData.find((option) => option.value === genderQuery) || null;

  return (
    <div className={css.wrapper}>
      <Select
        value={selectValue}
        onChange={handleChangeGender}
        options={gendersData}
        placeholder={"By gender"}
        maxMenuHeight={186}
        isClearable={true}
        styles={{
          control: (baseStyles) => ({
            ...baseStyles,
            border: "1px solid transparent",
            width: "var(--select-width)",
            height: "var(--select-height)",
            outline: "none",
            boxShadow: "none",
            background: "var(--white-color)",
            borderRadius: "30px",
            fontSize: "var(--select-font-size)",
            fontWeight: "500",
            lineHeight: "var(--select-line-height)",
            letterSpacing: "-0.03em",
            color: "var(--dark-color)",
            fontFamily: "Manrope",
            cursor: "pointer",
            transition: "border-color 0.3s ease",
            "&:hover": {
              borderColor: "var(--accent-color)",
            },
            "&:focus-within": {
              borderColor: "var(--accent-color)",
              outline: "none",
            },
          }),
          option: (baseStyles, state) => ({
            ...baseStyles,
            border: "none",
            fontSize: "var(--option-font-size)",
            fontWeight: "500",
            fontFamily: "Manrope",
            lineHeight: "1.25",
            background: "transparent",
            cursor: "pointer",
            color: state.isFocused
              ? "var(--accent-color)"
              : "var(--placeholder-color)",
          }),
          valueContainer: (baseStyles) => ({
            ...baseStyles,
            borderRadius: "30px",
            boxShadow: "0 4px 36px 0 rgba(0, 0, 0, 0.02)",
          }),
          menu: (baseStyles) => ({
            ...baseStyles,
            width: "var(--menu-width)",
            borderRadius: "15px",
          }),
        }}
      />
    </div>
  );
};

export default ByGenderSelect;
