import { Icon } from "../../../shared/Icon";
import css from "./CustomIcons.module.css";

export const NextIcon = () => <Icon id="icon-right" width={18} height={18} />;

export const PreviousIcon = () => (
  <Icon id="icon-left" width={18} height={18} />
);

export const LastIcon = () => (
  <div className={css.iconContainer}>
    <Icon id="icon-right" width={18} height={18} />
    <Icon id="icon-right" width={18} height={18} />
  </div>
);

export const FirstIcon = () => (
  <div className={css.iconContainer}>
    <Icon id="icon-left" width={20} height={20} />
    <Icon id="icon-left" width={20} height={20} />
  </div>
);
