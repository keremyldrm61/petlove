import { useAppSelector } from "../redux/hooks";
import {
  selectCategories,
  selectNotices,
  selectIsError,
  selectIsLoading,
  selectGender,
  selectSpecies,
  selectCities,
  selectTotalPagesNotices,
} from "../redux/notices/noticesSelectors";

export const useNotices = () => {
  const categories = useAppSelector(selectCategories);
  const genders = useAppSelector(selectGender);
  const species = useAppSelector(selectSpecies);
  const cities = useAppSelector(selectCities);
  const notices = useAppSelector(selectNotices);
  const isErrorNotices = useAppSelector(selectIsError);
  const isLoadNotices = useAppSelector(selectIsLoading);
  const totalPagesNotices = useAppSelector(selectTotalPagesNotices);

  return {
    categories,
    isLoadNotices,
    isErrorNotices,
    notices,
    genders,
    species,
    cities,
    totalPagesNotices,
  };
};
