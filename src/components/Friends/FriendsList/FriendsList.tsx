import { useFriends } from "../../../hooks/useFriends";
import type { FriendItem } from "../../../types";
import FriendsItem from "./FriendsItem/FriendsItem";
import css from "./FriendsList.module.css";

const FriendsList = () => {
  const { friends } = useFriends() as { friends: FriendItem[] };

  return (
    <ul className={css.cardsListContainer}>
      {friends.map((friend) => (
        <FriendsItem key={friend._id} friend={friend} />
      ))}
    </ul>
  );
};

export default FriendsList;
