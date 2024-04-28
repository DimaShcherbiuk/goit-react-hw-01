import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.container}>
      <div className={css.boxinfo}>
        <img className={css.avatar} src={image} alt={name} width={270} />
        <p className={css.title}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.listitem}>
          <span>Followers</span>
          <b>
            <span>{stats.followers}</span>
          </b>
        </li>
        <li className={css.listitem}>
          <span>Views</span>
          <b>
            <span>{stats.views}</span>
          </b>
        </li>
        <li className={css.listitem}>
          <span>Likes</span>
          <b>
            <span>{stats.likes}</span>
          </b>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
