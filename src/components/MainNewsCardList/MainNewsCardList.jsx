import { useState, useEffect } from "react";
import MainNewsCard from "../MainNewsCard/MainNewsCard";
import "./MainNewsCardList.css";

function MainNewsCardList({
  newsArticles,
  numArticlesToShow,
  handleShowMoreArticles,
  searched,
  handleSaveArticle,
  lastQuery,
}) {
  return (
    <section
      className={`main-news-card-list ${
        searched && newsArticles.length !== 0
          ? ""
          : "main-news-card-list_hidden"
      }`}
    >
      <h2 className="main-news-card-list__title">
        {newsArticles.length > 0 ? "Search results" : "Nothing Found"}
      </h2>
      <div className="main-news-card-list__card-list">
        {newsArticles.slice(0, numArticlesToShow).map((item, index) => (
          <MainNewsCard
            key={index}
            newsArticle={item}
            handleSaveArticle={handleSaveArticle}
            lastQuery={lastQuery}
          ></MainNewsCard>
        ))}
      </div>
      <button
        type="button"
        onClick={handleShowMoreArticles}
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
