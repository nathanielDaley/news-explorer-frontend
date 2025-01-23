import "./Main.css";

import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";
import MainNewsCardList from "../MainNewsCardList/MainNewsCardList";
import Preloader from "../Preloader/Preloader";

function Main({
  newsArticles,
  handleSubmitSearchForm,
  numArticlesToShow,
  handleShowMoreArticles,
  searched,
  isLoading,
}) {
  return (
    <main className="main">
      <SearchForm handleSubmitSearchForm={handleSubmitSearchForm}></SearchForm>
      <Preloader isLoading={isLoading}></Preloader>
      <MainNewsCardList
        newsArticles={newsArticles}
        numArticlesToShow={numArticlesToShow}
        handleShowMoreArticles={handleShowMoreArticles}
        searched={searched}
      ></MainNewsCardList>
      <About></About>
    </main>
  );
}

export default Main;
