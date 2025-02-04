import "./Main.css";

import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";
import MainNewsCardList from "../MainNewsCardList/MainNewsCardList";
import Preloader from "../Preloader/Preloader";
import SearchError from "../SearchFoundNothing/SearchError";

function Main({
  newsArticles,
  handleSubmitSearchForm,
  numArticlesToShow,
  handleShowMoreArticles,
  searched,
  isLoading,
  searchError,
  handleSaveArticle,
  lastQuery,
}) {
  return (
    <main className="main">
      <SearchForm handleSubmitSearchForm={handleSubmitSearchForm}></SearchForm>
      <Preloader isLoading={isLoading}></Preloader>
      <SearchError searchError={searchError}></SearchError>
      <MainNewsCardList
        newsArticles={newsArticles}
        numArticlesToShow={numArticlesToShow}
        handleShowMoreArticles={handleShowMoreArticles}
        searched={searched}
        handleSaveArticle={handleSaveArticle}
        lastQuery={lastQuery}
      ></MainNewsCardList>
      <About></About>
    </main>
  );
}

export default Main;
