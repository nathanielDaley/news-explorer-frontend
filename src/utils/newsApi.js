import {
  newsApiKey,
  defaultNumberOfArticlesToRetrieve,
  deltaTimeToSearch,
} from "../utils/constants.js";
import { request } from "../utils/api.js";

const generateId = () => {
  var timestamp = ((new Date().getTime() / 1000) | 0).toString(16);
  return (
    timestamp +
    "xxxxxxxxxxxxxxxx"
      .replace(/[x]/g, function () {
        return ((Math.random() * 16) | 0).toString(16);
      })
      .toLowerCase()
  );
};

const newsApiBaseUrl =
  process.env.NODE_ENV === "production"
    ? "https://nomoreparties.co/news/v2/everything"
    : "https://newsapi.org/v2/everything";

const getNewsArticles = (query) => {
  return request(
    `${newsApiBaseUrl}?apiKey=${newsApiKey}&pageSize=${defaultNumberOfArticlesToRetrieve}&q=${query}&from=${deltaTimeToSearch}`
  );
};

const saveArticle = (article, keyword) => {
  const newArticle = article;
  newArticle.keyword = keyword;
  newArticle._id = generateId();

  return new Promise((resolve, reject) => {
    resolve(newArticle);
  });
};

export { getNewsArticles, saveArticle };
