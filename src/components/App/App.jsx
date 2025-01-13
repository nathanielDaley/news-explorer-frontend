import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import background from "../../assets/search-background.jpg";

import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="app__content">
        <div className="app__container">
          <Header></Header>
          <SearchForm></SearchForm>
        </div>
      </div>
    </div>
  );
}

export default App;
