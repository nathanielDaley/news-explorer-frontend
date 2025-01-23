import {
  newsApiKey,
  defaultNumberOfArticlesToRetrieve,
  deltaTimeToSearch,
} from "../utils/constants.js";
import { request } from "../utils/api.js";

const getNewsArticles = (query) => {
  return request(
    `https://newsapi.org/v2/everything?apiKey=${newsApiKey}&pageSize=${defaultNumberOfArticlesToRetrieve}&q=${query}&from=${deltaTimeToSearch}`
  );
};

export { getNewsArticles };
