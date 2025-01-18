import "./Main.css";

import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";
import MainNewsCardList from "../MainNewsCardList/MainNewsCardList";

function Main({ newsArticles }) {
  return (
    <main className="main">
      <SearchForm></SearchForm>
      <MainNewsCardList newsArticles={newsArticles}></MainNewsCardList>
      <About></About>
    </main>
  );
}

export default Main;
