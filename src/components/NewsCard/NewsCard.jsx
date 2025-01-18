import "./NewsCard.css";

import savedIcon from "../../assets/saved.svg";
import unsavedIcon from "../../assets/unsaved.svg";

function NewsCard({ newsArticle }) {
  const newsDate = new Date(newsArticle.publishedAt);
  const dateOptions = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = new Intl.DateTimeFormat("en-US", dateOptions).format(
    newsDate
  );

  return (
    <article className="news-card">
      <button type="button" className="news-card__save-button">
        <img
          src={unsavedIcon}
          alt="unsaved icon"
          className="news-card__unsaved-icon"
        />
        <img
          src={savedIcon}
          alt="saved icon"
          className="news-card__saved-icon news-card__icon_hidden"
        />
      </button>
      <img
        src="https://techcrunch.com/wp-content/uploads/2023/08/bluesky-004.jpg?resize=1200,675"
        alt="Bluesky article image"
        className="news-card__image"
      />
      <div className="news-card__content">
        <div className="news-card__date">{formattedDate}</div>
        <div className="news-card__title">{newsArticle.title}</div>
        <div className="news-card__description">{newsArticle.description}</div>
        <div className="news-card__source">{newsArticle.source.name}</div>
      </div>
    </article>
  );
}

export default NewsCard;
