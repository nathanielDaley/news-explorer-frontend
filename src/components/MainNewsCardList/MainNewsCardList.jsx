import NewsCardList from "../NewsCardList/NewsCardList";
import "./MainNewsCardList.css";

function MainNewsCardList({ newsArticles }) {
  return (
    <section className="main-news-card-list">
      <h2 className="main-news-card-list__title">Search results</h2>
      <NewsCardList newsArticles={newsArticles}></NewsCardList>
      <button className="main-news-card-list__show-more-button">
        Show more
      </button>
    </section>
  );
}

export default MainNewsCardList;
