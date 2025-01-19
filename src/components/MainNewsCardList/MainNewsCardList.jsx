import MainNewsCard from "../MainNewsCard/MainNewsCard";
import "./MainNewsCardList.css";

function MainNewsCardList({ newsArticles }) {
  return (
    <section className="main-news-card-list">
      <h2 className="main-news-card-list__title">Search results</h2>
      <div className="main-news-card-list__card-list">
        {newsArticles.map((item) => (
          <MainNewsCard key={item._id} newsArticle={item}></MainNewsCard>
        ))}
      </div>
      <button className="main-news-card-list__show-more-button">
        Show more
      </button>
    </section>
  );
}

export default MainNewsCardList;
