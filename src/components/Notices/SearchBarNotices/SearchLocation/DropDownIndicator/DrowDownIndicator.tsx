import { components, type DropdownIndicatorProps } from "react-select";
import { Icon } from "../../../../../shared/Icon";
import css from "./DropDownIndicator.module.css";

export const DropdownIndicator = (
  props: DropdownIndicatorProps<unknown, false>,
) => {
  return (
    <components.DropdownIndicator {...props}>
      <Icon
        id="icon-search"
        className={css.searchIcon}
        width={18}
        height={18}
      />
    </components.DropdownIndicator>
  );
};
