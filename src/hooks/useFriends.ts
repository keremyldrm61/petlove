import { useAppSelector } from "../redux/hooks";
import {
  selectFriends,
  selectIsErrorFriends,
  selectIsLoadingFriends,
} from "../redux/friends/friendsSelectors";

export const useFriends = () => {
  const friends = useAppSelector(selectFriends);
  const isLoadFriends = useAppSelector(selectIsLoadingFriends);
  const isErrorFriends = useAppSelector(selectIsErrorFriends);

  return {
    friends,
    isLoadFriends,
    isErrorFriends,
  };
};
