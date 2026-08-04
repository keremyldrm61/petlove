import { Icon } from "../../../../shared/Icon";
import css from "./BirthdayInput.module.css";

interface BirthdayInputProps {
  birthDate: string | null;
  setBirthDate: (date: string) => void;
}

const BirthdayInput = ({ birthDate, setBirthDate }: BirthdayInputProps) => {
  // Gelecek tarih seçimini engellemek için bugün tarihini alıyoruz
  const maxDate = new Date().toISOString().split("T")[0];

  return (
    <div className={css.dateInputWrapper}>
      <input
        type="date"
        className={css.dateInput}
        value={birthDate || ""}
        max={maxDate}
        onChange={(e) => setBirthDate(e.target.value)}
      />
      <Icon
        id="icon-calendar"
        className={css.calendarIcon}
        width={18}
        height={18}
      />
    </div>
  );
};

export default BirthdayInput;
