import "./NewsCard.css";

function NewsCard({ newsArticle }) {
  const newsDate = new Date(newsArticle.publishedAt);
  const dateOptions = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = new Intl.DateTimeFormat("en-US", dateOptions).format(
    newsDate
  );

  return (
    <article className="news-card">
      <img
        src={
          newsArticle.urlToImage
            ? newsArticle.urlToImage
            : "https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2029&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        alt="article image"
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
