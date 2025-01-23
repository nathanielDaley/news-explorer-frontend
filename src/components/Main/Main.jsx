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
}) {
  return (
    <main className="main">
      <SearchForm handleSubmitSearchForm={handleSubmitSearchForm}></SearchForm>
      <Preloader></Preloader>
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
