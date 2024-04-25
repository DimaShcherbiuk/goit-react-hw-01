import Profile from "../Profile/Profile";
import FriendList from "../FriendList/FriendList"
import userData from "../../userData.json";
import friends from "../../friends.json";
import css from "./App.module.css";

const App = () => {
  return (
    <div className={css.container}>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
        <FriendList friends={friends} />
    </div>
  );
};

export default App;
