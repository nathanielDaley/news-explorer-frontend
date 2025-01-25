import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import Profile from "../Profile/Profile";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.jsx";

import "./App.css";

import {
  deleteArticle,
  getNewsArticles,
  saveArticle,
} from "../../utils/newsApi";
import * as auth from "../../utils/auth";
import * as token from "../../utils/token";

import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";

const NUM_ARTICLES_TO_SHOW = 3;
const SEARCH_EMPTY_ERROR_TITLE = "Nothing found";
const SEARCH_EMPTY_ERROR_DESCRIPTION =
  "Sorry, but nothing matched your search terms.";
const SEARCH_DEFAULT_ERROR_TITLE = "Search Error";
const SEARCH_DEFAULT_ERROR_DESCRIPTION =
  "Sorry, something went wrong during the request. Please try again later.";

function App() {
  const navigate = useNavigate();

  const [activeModal, setActiveModal] = useState("");
  const [newsArticles, setNewsArticles] = useState([]);
  const [numArticlesToShow, setNumArticlesToShow] =
    useState(NUM_ARTICLES_TO_SHOW);
  const [searched, setSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [searchError, setSearchError] = useState({});
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userSavedNewsArticles, setUserSavedNewsArticles] = useState([]);
  const [lastQuery, setLastQuery] = useState("");

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
    setLastQuery(query);

    if (Object.keys(searchError).length !== 0) {
      setSearchError({});
    }

    getNewsArticles(query)
      .then((data) => {
        setNewsArticles(data.articles);

        if (data.articles.length === 0) {
          setSearchError({
            title: SEARCH_EMPTY_ERROR_TITLE,
            description: SEARCH_EMPTY_ERROR_DESCRIPTION,
          });
        }

        resetNumArticlesToShow();
        setSearched(true);
      })
      .catch((error) => {
        setSearchError({
          title: SEARCH_DEFAULT_ERROR_TITLE,
          description: SEARCH_DEFAULT_ERROR_DESCRIPTION,
        });
        console.error(error);
      })
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

  const handleLogin = ({ email, password }) => {
    auth
      .authorize(email, password)
      .then((data) => {
        token.setToken(data.token);

        auth.validateLogin(data.token).then((data) => {
          setCurrentUser(data.user);
          setIsLoggedIn(true);
          closeActiveModal();
          navigate("/profile");
        });
      })
      .catch(console.error);
  };

  const handleRegistration = ({ username, email, password }) => {
    auth.register(username, email, password).then((data) => {
      handleLogin({ email, password });
    });
  };

  const handleLogout = () => {
    setCurrentUser({});
    setIsLoggedIn(false);

    token.removeToken();
  };

  const handleSaveArticle = (newsArticle) => {
    saveArticle(newsArticle, lastQuery).then((data) => {
      updateUserSavedNewsArticles(data, "unshift");
    });
  };

  const handleRemovedSavedArticle = (newsArticle) => {
    deleteArticle(newsArticle).then(() => {
      updateUserSavedNewsArticles(newsArticle, "delete");
    });
  };

  const updateUserSavedNewsArticles = (newsArticle, method) => {
    const newNewsArticles = [...userSavedNewsArticles];

    if (method !== "delete") {
      newNewsArticles[method](newsArticle);
    } else {
      const index = newNewsArticles.findIndex(
        (data) => data._id === newsArticle._id
      );
      newNewsArticles.splice(index, 1);
    }

    setUserSavedNewsArticles(newNewsArticles);
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
      <CurrentUserContext.Provider
        value={{ currentUser, userSavedNewsArticles, isLoggedIn }}
      >
        <div className="app__content">
          <div className="app__container">
            <Header
              handleLoginClick={showLoginModalClick}
              handleLogoutClick={handleLogout}
            ></Header>
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
                    searchError={searchError}
                    handleSaveArticle={handleSaveArticle}
                    lastQuery={lastQuery}
                  ></Main>
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute isLoggedIn={isLoggedIn}>
                    <Profile
                      handleRemovedSavedArticle={handleRemovedSavedArticle}
                    ></Profile>
                  </ProtectedRoute>
                }
              />
            </Routes>
          </div>
          <Footer></Footer>
        </div>
        <LoginModal
          activeModal={activeModal}
          handleCloseClick={closeActiveModal}
          handleRegisterClick={showRegisterModalClick}
          handleSubmit={handleLogin}
        ></LoginModal>
        <RegisterModal
          activeModal={activeModal}
          handleCloseClick={closeActiveModal}
          handleLoginClick={showLoginModalClick}
          handleSubmit={handleRegistration}
        ></RegisterModal>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
