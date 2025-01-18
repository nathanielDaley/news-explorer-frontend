import NewsCardList from "../NewsCardList/NewsCardList";
import "./SavedNewsCardList.css";

function SavedNewsCardList({ newsArticles }) {
  return (
    <section className="saved-news-card-list">
      <NewsCardList newsArticles={newsArticles}></NewsCardList>
    </section>
  );
}

export default SavedNewsCardList;
