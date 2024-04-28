import css from "./FriendListItem.module.css";
import clsx from "clsx";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={css.itemBox}>
      <img src={avatar} alt={name} width="100" />
      <p className={css.friendName}>{name}</p>
      <p className={clsx(isOnline === true ? css.online : css.offline)}>
        {isOnline === true ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
