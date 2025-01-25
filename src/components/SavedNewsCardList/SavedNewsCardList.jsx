import SavedNewsCard from "../SavedNewsCard/SavedNewsCard";
import "./SavedNewsCardList.css";

function SavedNewsCardList({ newsArticles }) {
  return (
    <section className="saved-news-card-list">
      <div className="saved-news-card-list__card-list">
        {newsArticles?.map((item) => (
          <SavedNewsCard key={item._id} newsArticle={item}></SavedNewsCard>
        ))}
      </div>
    </section>
  );
}

export default SavedNewsCardList;
