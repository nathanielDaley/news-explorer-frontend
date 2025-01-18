import { useEffect, useState } from "react";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";

import "./App.css";

import { getNewsArticles } from "../../utils/newsApi";
import Profile from "../Profile/Profile";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [newsArticles, setNewsArticles] = useState([]);

  useEffect(() => {
    setNewsArticles(getNewsArticles());
  }, []);

  return (
    <div className="app">
      <div className="app__content">
        <div className="app__container">
          <Header></Header>
          <Main newsArticles={newsArticles}></Main>
          <Profile newsArticles={newsArticles}></Profile>
        </div>
        <Footer></Footer>
      </div>
      <LoginModal activeModal={activeModal}></LoginModal>
      <RegisterModal activeModal={activeModal}></RegisterModal>
    </div>
  );
}

export default App;
