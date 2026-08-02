import React from "react";
import toast from "react-hot-toast";
import { Icon } from "../../../../shared/Icon";
import css from "./TextInput.module.css";

interface TextInputProps {
  setTextQuery: React.Dispatch<React.SetStateAction<string>>;
  textQuery: string;
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
}

const TextInput: React.FC<TextInputProps> = ({
  setTextQuery,
  textQuery,
  inputValue,
  setInputValue,
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      setTextQuery(inputValue);
    } else {
      toast("You can't put an empty field", {
        icon: "⚠️",
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleCancelSearch = () => {
    setInputValue("");
    setTextQuery("");
  };

  return (
    <form className={css.searchForm} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search"
        value={inputValue}
        onChange={handleInputChange}
        disabled={textQuery !== ""}
      />
      {inputValue !== "" && (
        <button
          className={css.cancelSearchBtn}
          type="button"
          onClick={handleCancelSearch}
        >
          <Icon id="icon-close" width={18} height={18} />
        </button>
      )}
      <button className={css.submitSearchBtn} type="submit">
        <Icon id="icon-search" width={18} height={18} />
      </button>
    </form>
  );
};

export default TextInput;
