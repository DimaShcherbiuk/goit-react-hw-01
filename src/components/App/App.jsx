import Profile from "../Profile/Profile";
import userData from "../../userData.json";
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
    </div>
  );
};

export default App;
