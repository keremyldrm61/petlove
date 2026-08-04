import { useState } from "react";
import { useAuth } from "../../../../hooks/useAuth";
import type { NoticeType } from "../../../../types";
import Card from "../../../Notices/Card/Card";
import css from "./ViewedList.module.css";

const ViewedList = () => {
  const { viewedNotices } = useAuth() as { viewedNotices: NoticeType[] };
  // Card bileşeninin props gereksinimlerine göre boş setter işlevi paslandı
  const [, setShowFirstNotification] = useState<boolean>(false);

  return (
    <ul className={css.listFavorites}>
      {viewedNotices.map((notice) => (
        <Card
          key={notice._id}
          notice={notice}
          setShowAttention={() => {}}
          setShowFirstNotification={setShowFirstNotification}
          onAddFavorites={() => {}}
          onRemoveFavorites={() => {}}
        />
      ))}
    </ul>
  );
};

export default ViewedList;
