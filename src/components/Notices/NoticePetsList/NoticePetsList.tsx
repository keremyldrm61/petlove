import { useState } from "react";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../../redux/store";
import { useNotices } from "../../../hooks/useNotices";
import {
  AddToFavorites,
  RemoveFromFavorites,
} from "../../../redux/notices/noticesOperations";
import type { NoticeType } from "../../../types";
import Card from "../Card/Card";
import Attention from "../Attention/Attention";
import FirstItemNotification from "../FirstItemNotification/FirstItemNotification";
import css from "./NoticePetsList.module.css";

const NoticePetsList = () => {
  const { notices } = useNotices() as { notices?: NoticeType[] };
  const dispatch = useDispatch<AppDispatch>();
  const [showAttention, setShowAttention] = useState<boolean>(false);
  const [showFirstNotification, setShowFirstNotification] =
    useState<boolean>(false);

  const handleAddFavorites = (id: string) => {
    const fullNotice = notices?.find((n) => n._id === id);

    if (fullNotice) {
      dispatch(AddToFavorites(fullNotice));
    }
  };

  const handleRemoveFavorites = (id: string) => {
    dispatch(RemoveFromFavorites(id));
  };

  return (
    <>
      {showFirstNotification && (
        <FirstItemNotification
          setShowFirstNotification={setShowFirstNotification}
          showFirstNotification={showFirstNotification}
        />
      )}
      {showAttention && (
        <Attention
          setShowAttention={setShowAttention}
          showAttention={showAttention}
        />
      )}
      {notices?.length === 0 && (
        <p className={css.text}>
          Sorry, <b>no find</b> any notice for these search parameters!
        </p>
      )}
      <ul className={css.listOfNotices}>
        {notices?.map((notice) => (
          <Card
            notice={notice}
            key={notice?._id}
            setShowAttention={setShowAttention}
            setShowFirstNotification={setShowFirstNotification}
            onAddFavorites={handleAddFavorites}
            onRemoveFavorites={handleRemoveFavorites}
          />
        ))}
      </ul>
    </>
  );
};

export default NoticePetsList;
