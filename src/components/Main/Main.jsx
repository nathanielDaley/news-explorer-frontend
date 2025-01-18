import "./Main.css";

import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";
import NewsCardList from "../NewsCardList/NewsCardList";

function Main({ newsArticles }) {
  return (
    <main className="main">
      <SearchForm></SearchForm>
      <NewsCardList newsArticles={newsArticles}></NewsCardList>
      <About></About>
    </main>
  );
}

export default Main;
