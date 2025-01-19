import "./SavedNewsCard.css";

import NewsCard from "../NewsCard/NewsCard.jsx";

import deleteIcon from "../../assets/delete.svg";

function SavedNewsCard({ newsArticle }) {
  return (
    <article className="saved-news-card">
      <label className="saved-news-card__keyword">Nature</label>
      <button type="button" className="saved-news-card__delete-button">
        <img
          src={deleteIcon}
          alt="delete icon"
          className="saved-news-card__delete-icon"
        />
      </button>
      <label htmlFor="" className="saved-news-card__delete-button-description">
        Remove from saved
      </label>
      {<NewsCard newsArticle={newsArticle}></NewsCard>}
    </article>
  );
}

export default SavedNewsCard;
