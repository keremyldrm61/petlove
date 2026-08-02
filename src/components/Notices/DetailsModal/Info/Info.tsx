import React from "react";
import { type NoticeDetails } from "../DetailsModal";
import css from "./Info.module.css";

interface InfoProps {
  notice: Pick<NoticeDetails, "name" | "birthday" | "sex" | "species">;
}

const Info: React.FC<InfoProps> = ({ notice }) => {
  const { name, birthday, sex, species } = notice;
  const date = new Date(birthday);

  const formattedDate = date
    .toLocaleDateString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .replace(/\//g, ".");

  const details = [
    { label: "Name", value: name },
    { label: "Birthday", value: formattedDate },
    { label: "Sex", value: sex },
    { label: "Species", value: species },
  ];

  return (
    <ul className={css.listInfo}>
      {details.map(({ label, value }) => (
        <li key={label}>
          <p>
            {label} <span>{value}</span>
          </p>
        </li>
      ))}
    </ul>
  );
};

export default Info;
