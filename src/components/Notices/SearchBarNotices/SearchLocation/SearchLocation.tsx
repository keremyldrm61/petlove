import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../../../redux/store";
import Select, {
  type SingleValue,
  type DropdownIndicatorProps,
  type GroupBase,
  type InputActionMeta,
} from "react-select";
import { DropdownIndicator } from "./DropDownIndicator/DrowDownIndicator";
import { fetchCities } from "../../../../redux/notices/noticesOperations";
import css from "./SearchLocation.module.css";

interface SearchLocationProps {
  setLocationQuery: React.Dispatch<React.SetStateAction<string | null>>;
  locationQuery: string | null;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

interface OptionType {
  value: string;
  label: string;
}

const SearchLocation = ({
  setLocationQuery,
  locationQuery,
  setCurrentPage,
}: SearchLocationProps) => {
  const [inputValue, setInputValue] = useState<string>("");
  const cities = useSelector((state: RootState) => state.notices.cities);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (inputValue.trim().length >= 3) {
        dispatch(fetchCities(inputValue.trim()));
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [inputValue, dispatch]);

  // Redux store'daki 'cities' güncellendikçe seçenekler otomatik yansıyacak
  const options: OptionType[] = (cities || []).map((city) => ({
    value: city._id,
    label: `${city.stateEn}, ${city.cityEn}`,
  }));

  const formatOptionLabel = ({ label }: OptionType) => {
    const parts = label.split(new RegExp(`(${inputValue})`, "gi"));
    return (
      <div>
        {parts.map((part, index) =>
          part.toLowerCase() === inputValue.toLowerCase() ? (
            <strong key={index}>{part}</strong>
          ) : (
            part
          ),
        )}
      </div>
    );
  };

  const handleInputChange = (newValue: string, actionMeta: InputActionMeta) => {
    // Sadece kullanıcı klavyeden bir şey yazdığında input state'ini güncelle
    if (actionMeta.action === "input-change") {
      setInputValue(newValue);
    }
  };

  const handleChangeLocation = (selectedOption: SingleValue<OptionType>) => {
    setLocationQuery(selectedOption?.value || null);
    setCurrentPage(1);
  };

  const selectValue =
    locationQuery === null
      ? null
      : options.find((option) => option.value === locationQuery) || null;

  return (
    <div className={css.wrapper}>
      <Select
        onInputChange={handleInputChange}
        onChange={handleChangeLocation}
        value={selectValue}
        options={inputValue.length >= 3 ? options : []}
        filterOption={() => true}
        placeholder={"Location"}
        maxMenuHeight={216}
        isClearable={true}
        components={{
          DropdownIndicator: DropdownIndicator as React.ComponentType<
            DropdownIndicatorProps<OptionType, false, GroupBase<OptionType>>
          >,
        }}
        formatOptionLabel={formatOptionLabel}
        noOptionsMessage={({ inputValue }) =>
          inputValue.length < 3
            ? "Enter at least 3 characters"
            : "No options found"
        }
        styles={{
          control: (baseStyles) => ({
            ...baseStyles,
            border: "1px solid transparent",
            width: "var(--select-width)",
            height: "var(--select-height)",
            marginTop: "var(--select-margin-top)",
            background: "var(--white-color)",
            borderRadius: "30px",
            fontSize: "var(--select-font-size)",
            outline: "none",
            boxShadow: "none",
            animation: "appearDown 1400ms ease 1",
            fontWeight: "500",
            lineHeight: "var(--select-line-height)",
            letterSpacing: "-0.03em",
            color: "var(--dark-color)",
            fontFamily: "Manrope",
            cursor: "text",
            transition: "border-color 0.3s ease",
            "&:hover": {
              borderColor: "var(--accent-color)",
            },
            "&:focus-within": {
              borderColor: "var(--accent-color)",
              outline: "none",
            },
          }),
          option: (baseStyles, state) => ({
            ...baseStyles,
            border: "none",
            fontSize: "var(--option-font-size)",
            fontWeight: "500",
            fontFamily: "Manrope",
            lineHeight: "1.25",
            background: "transparent",
            cursor: "pointer",
            color: state.isFocused
              ? "var(--accent-color)"
              : "var(--placeholder-color)",
          }),
          valueContainer: (baseStyles) => ({
            ...baseStyles,
            borderRadius: "30px",
            boxShadow: "0 4px 36px 0 rgba(0, 0, 0, 0.02)",
          }),
          menu: (baseStyles) => ({
            ...baseStyles,
            width: "var(--menu-width)",
            borderRadius: "15px",
          }),
        }}
      />
    </div>
  );
};

export default SearchLocation;
