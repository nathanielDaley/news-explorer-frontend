import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext, useEffect, useState } from "react";

import "./MainNewsCard.css";

import NewsCard from "../NewsCard/NewsCard.jsx";

import savedIcon from "../../assets/saved.svg";
import unsavedIcon from "../../assets/unsaved.svg";

function MainNewsCard({
  newsArticle,
  handleSaveArticle,
  lastQuery,
  newsArticles,
}) {
  const { userSavedNewsArticles, isLoggedIn } = useContext(CurrentUserContext);

  const [isSaved, setIsSaved] = useState(false);

  const handleSaveClick = (event) => {
    event.preventDefault();

    handleSaveArticle(newsArticle, lastQuery);
  };

  const checkIfSaved = () => {
    const isArticleSaved = userSavedNewsArticles?.some((savedNewsArticle) => {
      return savedNewsArticle.content === newsArticle.content;
    });

    setIsSaved(isArticleSaved);
  };

  useEffect(() => {
    checkIfSaved();
  }, [newsArticles, userSavedNewsArticles]);

  return (
    <article className="main-news-card">
      <a
        href={newsArticle.url}
        target="_blank"
        rel="noreferrer"
        className="main-news-card__card-link"
      >
        <button
          type="button"
          onClick={handleSaveClick}
          disabled={isLoggedIn && !isSaved ? "" : "disabled"}
          className="main-news-card__save-button"
        >
          {!isSaved && (
            <img
              src={unsavedIcon}
              alt="unsaved icon"
              className="main-news-card__unsaved-icon"
            />
          )}
          {isSaved && (
            <img
              src={savedIcon}
              alt="saved icon"
              className="main-news-card__saved-icon"
            />
          )}
        </button>
        {!isLoggedIn && (
          <label htmlFor="" className="main-news-card__save-button-description">
            Sign in to save articles
          </label>
        )}
        {<NewsCard newsArticle={newsArticle}></NewsCard>}
      </a>
    </article>
  );
}

export default MainNewsCard;
