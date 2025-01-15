import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="app__content">
        <div className="app__container">
          <Header></Header>
          <SearchForm></SearchForm>
          <About></About>
        </div>
        <Footer></Footer>
      </div>
      <ModalWithForm></ModalWithForm>
    </div>
  );
}

export default App;
