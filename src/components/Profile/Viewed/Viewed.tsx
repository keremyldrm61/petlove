import { useAuth } from "../../../hooks/useAuth";
import ViewedList from "./ViewedList/ViewedList";
import type { NoticeType } from "../../../types";
import css from "./Viewed.module.css";

const Viewed = () => {
  const { viewedNotices } = useAuth() as { viewedNotices: NoticeType[] };

  return (
    <div>
      {viewedNotices?.length === 0 ? (
        <p className={css.text}>
          Oops, <b>looks like there aren't any furries</b> on our adorable page
          yet. Do not worry! When you open notices, they will appear here.
        </p>
      ) : (
        <ViewedList />
      )}
    </div>
  );
};

export default Viewed;
