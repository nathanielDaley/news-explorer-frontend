import { useState, useEffect } from "react";
import MainNewsCard from "../MainNewsCard/MainNewsCard";
import "./MainNewsCardList.css";

function MainNewsCardList({ newsArticles }) {
  const [numArticlesToShow, setNumArticlesToShow] = useState(3);

  const showMoreArticles = () => {
    if (numArticlesToShow < newsArticles.length) {
      setNumArticlesToShow(numArticlesToShow + 3);
    }
  };

  let articlesNumber = 0;

  return (
    <section className="main-news-card-list">
      <h2 className="main-news-card-list__title">Search results</h2>
      <div className="main-news-card-list__card-list">
        {newsArticles.slice(0, numArticlesToShow).map((item, index) => (
          <MainNewsCard key={index} newsArticle={item}></MainNewsCard>
        ))}
      </div>
      <button
        type="button"
        onClick={showMoreArticles}
        className={`main-news-card-list__show-more-button ${
          numArticlesToShow > newsArticles.length
            ? "main-news-card-list__show-more-button_hidden"
            : ""
        }`}
      >
        Show more
      </button>
    </section>
  );
}

export default MainNewsCardList;
