import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../../redux/store";
import { useAuth } from "../../../hooks/useAuth";
import type { NoticeType } from "../../../types";
import { RemoveFromFavorites } from "../../../redux/notices/noticesOperations";
import FavoriteCard from "./FavoriteCard/FavoriteCard";
import NoCollectionText from "../NoCollectionText/NoCollectionText";
import css from "./Favorites.module.css";

interface AuthContextData {
  favoritesNotices?: NoticeType[];
  noticesFavorites?: NoticeType[];
}

const Favorites = () => {
  const auth = useAuth() as AuthContextData;
  const dispatch = useDispatch<AppDispatch>();

  // Hem useAuth'dan gelen olası yanlış isimlendirmeyi hem de Redux asıl isimlendirmesini yakalıyoruz
  const favorites: NoticeType[] =
    auth.favoritesNotices || auth.noticesFavorites || [];

  const handleRemoveFavorites = (id: string) => {
    dispatch(RemoveFromFavorites(id));
  };

  return (
    <>
      {favorites.length > 0 ? (
        <ul className={css.listFavorites}>
          {favorites.map((notice) => (
            <FavoriteCard
              key={notice._id}
              notice={notice}
              onRemoveFavorites={handleRemoveFavorites}
              favorites={favorites}
            />
          ))}
        </ul>
      ) : (
        <NoCollectionText />
      )}
    </>
  );
};

export default Favorites;
