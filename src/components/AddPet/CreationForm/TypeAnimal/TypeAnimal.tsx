import React from "react";
import Select, { type SingleValue } from "react-select";
import { useNotices } from "../../../../hooks/useNotices";
import css from "./TypeAnimal.module.css";

interface TypeAnimalProps {
  petType: string | null;
  setPetType: (value: string | null) => void;
}

interface SpeciesOption {
  value: string;
  label: string;
}

const TypeAnimal: React.FC<TypeAnimalProps> = ({ petType, setPetType }) => {
  const { species } = useNotices() as { species: string[] };

  const speciesData: SpeciesOption[] = species
    ? species.map((item) => ({
        value: item,
        label: item.charAt(0).toUpperCase() + item.slice(1),
      }))
    : [];

  const handleByType = (newValue: SingleValue<SpeciesOption>) => {
    if (newValue) {
      setPetType(newValue.value);
    } else {
      setPetType(null);
    }
  };

  const selectValue =
    petType === null
      ? null
      : speciesData.find((option) => option.value === petType) || null;

  return (
    <div className={css.selectContainer}>
      <Select
        value={selectValue}
        onChange={handleByType}
        options={speciesData}
        placeholder="Type of pet"
        isClearable={true}
        classNamePrefix="pet-select"
      />
    </div>
  );
};

export default TypeAnimal;
