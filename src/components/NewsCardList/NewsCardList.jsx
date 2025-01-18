import NewsCard from "../NewsCard/NewsCard";
import "./NewsCardList.css";

function NewsCardList({ newsArticles }) {
  return (
    <div className="news-card-list">
      <div className="news-card-list__card-list">
        {newsArticles.map((item) => (
          <NewsCard key={item._id} newsArticle={item}></NewsCard>
        ))}
      </div>
    </div>
  );
}

export default NewsCardList;
