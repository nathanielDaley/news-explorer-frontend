import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";

import "./MainNewsCard.css";

import NewsCard from "../NewsCard/NewsCard.jsx";

import savedIcon from "../../assets/saved.svg";
import unsavedIcon from "../../assets/unsaved.svg";

function MainNewsCard({ newsArticle, handleSaveArticle, lastQuery }) {
  const { currentUser, userSavedNewsArticles, isLoggedIn } =
    useContext(CurrentUserContext);

  const handleSaveClick = (event) => {
    event.preventDefault();

    handleSaveArticle(newsArticle, lastQuery);
  };

  return (
    <article className="main-news-card">
      <a
        href={newsArticle.url}
        target="_blank"
        className="main-news-card__card-link"
      >
        <button
          type="button"
          onClick={handleSaveClick}
          disabled={isLoggedIn ? "" : "disabled"}
          className="main-news-card__save-button"
        >
          <img
            src={unsavedIcon}
            alt="unsaved icon"
            className="main-news-card__unsaved-icon"
          />
          <img
            src={savedIcon}
            alt="saved icon"
            className="main-news-card__saved-icon main-news-card__icon_hidden"
          />
        </button>
        <label htmlFor="" className="main-news-card__save-button-description">
          Sign in to save articles
        </label>
        {<NewsCard newsArticle={newsArticle}></NewsCard>}
      </a>
    </article>
  );
}

export default MainNewsCard;
