import React from "react";
import { useFriends } from "../../../hooks/useFriends";
import type { FriendType } from "../../../types";
import FriendsItem from "./FriendsItem/FriendsItem";
import css from "./FriendsList.module.css";

const FriendsList: React.FC = () => {
  const { friends } = useFriends() as { friends: FriendType[] };

  return (
    <ul className={css.cardsListContainer}>
      {friends.map((friend) => (
        <FriendsItem key={friend._id} friend={friend} />
      ))}
    </ul>
  );
};

export default FriendsList;
