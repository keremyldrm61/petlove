import { useEffect } from "react";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../redux/store";
import { useFriends } from "../../hooks/useFriends";
import { fetchFriends } from "../../redux/friends/friendsOperations";
import FriendsList from "../../components/Friends/FriendsList/FriendsList";
import FallbackLoader from "../../components/UI/FallbackLoader/FallbackLoader";
import css from "./FriendsPage.module.css";

const FriendsPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoadFriends } = useFriends();

  useEffect(() => {
    dispatch(fetchFriends());
  }, [dispatch]);

  return (
    <section className={css.friendsPageSection}>
      <h1 className={css.titleOfPage}>Our friends</h1>
      {isLoadFriends ? <FallbackLoader /> : <FriendsList />}
    </section>
  );
};

export default FriendsPage;
