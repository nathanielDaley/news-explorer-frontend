import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext, useEffect, useState } from "react";

import SavedNewsCardList from "../SavedNewsCardList/SavedNewsCardList";
import "./Profile.css";

function Profile({ handleRemovedSavedArticle }) {
  const { currentUser, userSavedNewsArticles, isLoggedIn } =
    useContext(CurrentUserContext);

  const [keywords, setKeywords] = useState([]);

  useEffect(() => {
    const newKeywords = new Set();

    userSavedNewsArticles.forEach((newsArticle) => {
      newKeywords.add(newsArticle.keyword);
    });

    setKeywords([...newKeywords]);
  }, [userSavedNewsArticles]);

  return (
    <main className="profile">
      <div className="profile__header">
        <h3 className="profile__title">Saved articles</h3>
        <h2 className="profile__information">
          {currentUser.name}, you have {userSavedNewsArticles?.length || 0}{" "}
          saved articles
        </h2>
        <p className="profile__keywords-paragraph">
          By keywords:{" "}
          <span className="profile__keywords">
            {keywords.length > 2
              ? `${keywords[0]}, ${keywords[1]}, and ${
                  keywords.length - 2
                } more`
              : keywords.join(", ")}
          </span>
        </p>
      </div>
      <SavedNewsCardList
        newsArticles={userSavedNewsArticles}
        handleRemovedSavedArticle={handleRemovedSavedArticle}
      ></SavedNewsCardList>
    </main>
  );
}

export default Profile;
