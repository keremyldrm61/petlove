import { useAppSelector } from "../redux/hooks";
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectIsLoading,
  selectFavoritesNotices,
  selectViewedNotices,
  selectPets,
} from "../redux/auth/authSelectors";

export const useAuth = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const isRefreshing = useAppSelector(selectIsRefreshing);
  const isLoading = useAppSelector(selectIsLoading);
  const user = useAppSelector(selectUser);
  const favoritesNotices = useAppSelector(selectFavoritesNotices);
  const viewedNotices = useAppSelector(selectViewedNotices);
  const pets = useAppSelector(selectPets);

  return {
    isLoggedIn,
    isRefreshing,
    isLoading,
    user,
    favoritesNotices,
    viewedNotices,
    pets,
  };
};
