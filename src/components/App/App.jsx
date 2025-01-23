import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";

import "./App.css";

import { getNewsArticles } from "../../utils/newsApi";
import Profile from "../Profile/Profile";

const NUM_ARTICLES_TO_SHOW = 3;

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [newsArticles, setNewsArticles] = useState([]);
  const [numArticlesToShow, setNumArticlesToShow] =
    useState(NUM_ARTICLES_TO_SHOW);
  const [searched, setSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const showLoginModalClick = (event) => {
    event.preventDefault();

    setActiveModal("login");
  };

  const showRegisterModalClick = (event) => {
    event.preventDefault();

    setActiveModal("register");
  };

  const updateNewsArticles = (query) => {
    setIsLoading(true);
    getNewsArticles(query)
      .then((data) => {
        setNewsArticles(data.articles);
        resetNumArticlesToShow();
        setSearched(true);
      })
      .catch(console.error)
      .finally(() => {
        setIsLoading(false);
      });
  };

  const showMoreArticles = () => {
    if (numArticlesToShow < newsArticles.length) {
      setNumArticlesToShow(numArticlesToShow + NUM_ARTICLES_TO_SHOW);
    }
  };

  const resetNumArticlesToShow = () => {
    setNumArticlesToShow(NUM_ARTICLES_TO_SHOW);
  };

  useEffect(() => {
    if (!activeModal) return; //stops the useEffect from continuing if there is no active modal

    // define functions inside useEffect to not lose the reference on rerendering
    const handleEscClose = (event) => {
      if (event.key === "Escape") {
        closeActiveModal();
      }
    };

    const handleModalOutsideClick = (event) => {
      if (event.target.classList.contains("modal-with-form_opened")) {
        closeActiveModal();
      }
    };

    document.addEventListener("keydown", handleEscClose);
    document.addEventListener("click", handleModalOutsideClick);

    return () => {
      //add a clean up function for removing the listener
      document.removeEventListener("keydown", handleEscClose);
      document.removeEventListener("click", handleModalOutsideClick);
    };
  }, [activeModal]);

  return (
    <div className="app">
      <div className="app__content">
        <div className="app__container">
          <Header handleLoginClick={showLoginModalClick}></Header>
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  newsArticles={newsArticles}
                  handleSubmitSearchForm={updateNewsArticles}
                  numArticlesToShow={numArticlesToShow}
                  handleShowMoreArticles={showMoreArticles}
                  searched={searched}
                  isLoading={isLoading}
                ></Main>
              }
            />
            <Route
              path="/profile"
              element={<Profile newsArticles={newsArticles}></Profile>}
            />
          </Routes>
        </div>
        <Footer></Footer>
      </div>
      <LoginModal
        activeModal={activeModal}
        handleCloseClick={closeActiveModal}
        handleRegisterClick={showRegisterModalClick}
      ></LoginModal>
      <RegisterModal
        activeModal={activeModal}
        handleCloseClick={closeActiveModal}
        handleLoginClick={showLoginModalClick}
      ></RegisterModal>
    </div>
  );
}

export default App;
