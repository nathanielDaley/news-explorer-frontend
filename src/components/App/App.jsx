import { useState } from "react";

import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";
import Footer from "../Footer/Footer";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";

import "./App.css";

function App() {
  const [activeModal, setActiveModal] = useState("");

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
      <LoginModal activeModal={activeModal}></LoginModal>
      <RegisterModal activeModal={activeModal}></RegisterModal>
    </div>
  );
}

export default App;
