import React from "react";

const CurrentUserContext = React.createContext({
  currentUser: {},
  userSavedNewsArticles: [],
  isLoggedIn: false,
});

export { CurrentUserContext };
