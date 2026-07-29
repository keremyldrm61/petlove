import css from "./Message.module.css";

interface Props {
  imgUrl: string;
  name: string;
  birthday: string;
  comment: string;
}

const Message = ({ imgUrl, name, birthday, comment }: Props) => {
  return (
    <div className={css.messageContainer}>
      <div className={css.imgBox}>
        <img
          src={imgUrl}
          alt="Decoration avatar of message"
          width={32}
          height={32}
        />
      </div>
      <div className={css.contentBox}>
        <div className={css.nameBirthdayBox}>
          <p className={css.name}>{name}</p>
          <p className={css.birthday}>
            Birthday: <span>{birthday}</span>
          </p>
        </div>
        <p className={css.comment}>{comment}</p>
      </div>
    </div>
  );
};

export default Message;
