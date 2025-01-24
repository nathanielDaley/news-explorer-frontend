import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";

import SavedNewsCardList from "../SavedNewsCardList/SavedNewsCardList";
import "./Profile.css";

function Profile({ newsArticles }) {
  const { currentUser, isLoggedIn } = useContext(CurrentUserContext);

  return (
    <main className="profile">
      <div className="profile__header">
        <h3 className="profile__title">Saved articles</h3>
        <h2 className="profile__information">
          {currentUser.name}, you have 5 saved articles
        </h2>
        <p className="profile__keywords-paragraph">
          By keywords:{" "}
          <span className="profile__keywords">
            Nature, Yellowstone, and 2 other
          </span>
        </p>
      </div>
      <SavedNewsCardList newsArticles={newsArticles}></SavedNewsCardList>
    </main>
  );
}

export default Profile;
