import React from "react";
import { Icon } from "../../../../shared/Icon";
import css from "./SexButtons.module.css";

interface SexButtonsProps {
  setSexPet: (value: string) => void;
  sexPet: string;
}

const SexButtons = ({ setSexPet, sexPet }: SexButtonsProps) => {
  const handleChooseSex = (e: React.MouseEvent<HTMLLIElement>) => {
    const choosenValue = e.currentTarget.dataset.value;
    if (choosenValue) {
      setSexPet(choosenValue);
    }
  };

  return (
    <ul className={css.listItems}>
      <li
        data-value="female"
        onClick={handleChooseSex}
        className={`${css.listItem} ${css.female} ${sexPet === "female" ? css.active : ""}`}
      >
        <Icon id="icon-female" width={24} height={24} />
      </li>
      <li
        data-value="male"
        onClick={handleChooseSex}
        className={`${css.listItem} ${css.male} ${sexPet === "male" ? css.active : ""}`}
      >
        <Icon id="icon-male" width={24} height={24} />
      </li>
      <li
        data-value="multiple"
        onClick={handleChooseSex}
        className={`${css.listItem} ${css.multiple} ${sexPet === "multiple" ? css.active : ""}`}
      >
        <Icon id="icon-sex" width={24} height={24} />
      </li>
    </ul>
  );
};

export default SexButtons;
