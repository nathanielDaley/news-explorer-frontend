import NewsCard from "../NewsCard/NewsCard";
import "./SavedNewsCardList.css";

function SavedNewsCardList({ newsArticles }) {
  return (
    <section className="saved-news-card-list">
      <div className="saved-news-card-list__card-list">
        {newsArticles.map((item) => (
          <NewsCard key={item._id} newsArticle={item}></NewsCard>
        ))}
      </div>
    </section>
  );
}

export default SavedNewsCardList;
