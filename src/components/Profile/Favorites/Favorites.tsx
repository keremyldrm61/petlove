import { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../../redux/store";
import { useAuth } from "../../../hooks/useAuth";
import type { NoticeType } from "../../../types";
import { refreshUser } from "../../../redux/auth/authOperations";
import { RemoveFromFavorites } from "../../../redux/notices/noticesOperations";
import FavoriteCard from "./FavoriteCard/FavoriteCard";
import NoCollectionText from "../NoCollectionText/NoCollectionText";
import css from "./Favorites.module.css";

const Favorites = () => {
  const { favoritesNotices } = useAuth() as { favoritesNotices: NoticeType[] };
  const dispatch = useDispatch<AppDispatch>();

  // Redux verisini doğrudan referans alarak gereksiz yerel state kopyasından ve ESLint hatasından kurtulduk
  const favorites = favoritesNotices || [];

  // TypeScript'in beklediği initial value (başlangıç değeri) tanımlandı
  const prevFavoritesLength = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (
      prevFavoritesLength.current !== undefined &&
      prevFavoritesLength.current !== favorites.length
    ) {
      dispatch(refreshUser());
    }
    prevFavoritesLength.current = favorites.length;
  }, [dispatch, favorites.length]);

  const handleRemoveFavorites = (id: string) => {
    dispatch(RemoveFromFavorites(id));
  };

  return (
    <>
      {favorites?.length > 0 ? (
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
