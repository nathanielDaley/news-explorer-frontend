import "./Main.css";

import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";
import NewsCardList from "../NewsCardList/NewsCardList";

function Main() {
  return (
    <main className="main">
      <SearchForm></SearchForm>
      <NewsCardList></NewsCardList>
      <About></About>
    </main>
  );
}

export default Main;
