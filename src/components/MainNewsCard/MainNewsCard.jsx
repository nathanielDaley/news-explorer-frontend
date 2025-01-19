import "./MainNewsCard.css";

import NewsCard from "../NewsCard/NewsCard.jsx";

import savedIcon from "../../assets/saved.svg";
import unsavedIcon from "../../assets/unsaved.svg";

function MainNewsCard({ newsArticle }) {
  return (
    <article className="main-news-card">
      <button type="button" className="main-news-card__save-button">
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
    </article>
  );
}

export default MainNewsCard;
