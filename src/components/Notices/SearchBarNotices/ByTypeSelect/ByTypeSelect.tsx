import React from "react";
import Select, { type SingleValue } from "react-select";
import { useNotices } from "../../../../hooks/useNotices";
import css from "./ByTypeSelect.module.css";

interface ByTypeSelectProps {
  setByTypeQuery: React.Dispatch<React.SetStateAction<string | null>>;
  byTypeQuery: string | null;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

interface OptionType {
  value: string;
  label: string;
}

const ByTypeSelect = ({
  setByTypeQuery,
  byTypeQuery,
  setCurrentPage,
}: ByTypeSelectProps) => {
  const { species } = useNotices() as { species?: string[] };

  const speciesData: OptionType[] = [
    { value: "", label: "Show all" },
    ...(species?.map((item) => ({
      value: item,
      label: item.charAt(0).toUpperCase() + item.slice(1),
    })) || []),
  ];

  const handleByType = (selectedOption: SingleValue<OptionType>) => {
    setByTypeQuery(selectedOption?.value || null);
    setCurrentPage(1);
  };

  const selectValue =
    byTypeQuery === null
      ? null
      : speciesData.find((option) => option.value === byTypeQuery) || null;

  return (
    <div className={css.wrapper}>
      <Select
        value={selectValue}
        onChange={handleByType}
        options={speciesData}
        placeholder={"By type"}
        maxMenuHeight={216}
        isClearable={true}
        styles={{
          control: (baseStyles) => ({
            ...baseStyles,
            border: "1px solid transparent",
            width: "var(--select-width)",
            height: "var(--select-height)",
            background: "var(--white-color)",
            borderRadius: "30px",
            boxShadow: "none",
            fontSize: "var(--select-font-size)",
            outline: "none",
            animation: "appearDown 1400ms ease 1",
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

export default ByTypeSelect;
