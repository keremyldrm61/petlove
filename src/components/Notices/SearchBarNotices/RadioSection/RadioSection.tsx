import React from "react";
import { Icon } from "../../../../shared/Icon";
import css from "./RadioSection.module.css";

export type RadioOption = "Popular" | "Unpopular" | "Cheap" | "Expensive";

interface RadioSectionProps {
  setRadioSearch: React.Dispatch<React.SetStateAction<RadioOption | null>>;
  radioSearch: RadioOption | null;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const RadioSection = ({
  setRadioSearch,
  radioSearch,
  setCurrentPage,
}: RadioSectionProps) => {
  const handleClick = (value: RadioOption) => {
    setRadioSearch(value);
    setCurrentPage(1);
  };

  const handleCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setRadioSearch(null);
    setCurrentPage(1);
  };

  const radioOptions: RadioOption[] = [
    "Popular",
    "Unpopular",
    "Cheap",
    "Expensive",
  ];

  return (
    <div className={css.containerRadioBtns}>
      <ul className={css.optionsList}>
        {radioOptions.map((option) => (
          <li
            key={option}
            onClick={() => handleClick(option)}
            className={`${css.radioItem} ${
              radioSearch === option ? css.active : ""
            }`}
          >
            <p>{option}</p>
            {radioSearch === option && (
              <button type="button" onClick={handleCancel}>
                <Icon id="icon-close" width={18} height={18} />
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RadioSection;
