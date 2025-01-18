import NewsCard from "../NewsCard/NewsCard";
import "./NewsCardList.css";

function NewsCardList() {
  return (
    <section className="news-card-list">
      <h2 className="news-card-list__title">Search results</h2>
      <div className="news-card-list__card-list">
        <NewsCard></NewsCard>
        <NewsCard></NewsCard>
        <NewsCard></NewsCard>
      </div>
      <button className="news-card-list__show-more-button">Show more</button>
    </section>
  );
}

export default NewsCardList;
