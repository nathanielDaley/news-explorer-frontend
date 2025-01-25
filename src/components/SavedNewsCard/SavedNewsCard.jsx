import "./SavedNewsCard.css";

import NewsCard from "../NewsCard/NewsCard.jsx";

import deleteIcon from "../../assets/delete.svg";

function SavedNewsCard({ newsArticle, handleRemovedSavedArticle }) {
  const deleteArticleClick = (event) => {
    event.preventDefault();

    handleRemovedSavedArticle(newsArticle);
  };

  return (
    <article className="saved-news-card">
      <a
        href={newsArticle.url}
        target="_blank"
        className="saved-news-card__card-link"
      >
        <label className="saved-news-card__keyword">Nature</label>
        <button
          type="button"
          onClick={deleteArticleClick}
          className="saved-news-card__delete-button"
        >
          <img
            src={deleteIcon}
            alt="delete icon"
            className="saved-news-card__delete-icon"
          />
        </button>
        <label
          htmlFor=""
          className="saved-news-card__delete-button-description"
        >
          Remove from saved
        </label>
        {<NewsCard newsArticle={newsArticle}></NewsCard>}
      </a>
    </article>
  );
}

export default SavedNewsCard;
