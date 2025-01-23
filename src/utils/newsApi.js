import {
  newsApiKey,
  defaultNumberOfArticlesToRetrieve,
  deltaTimeToSearch,
} from "../utils/constants.js";
import { request } from "../utils/api.js";

const getNewsArticles = (term) => {
  return request(
    `https://newsapi.org/v2/everything?apiKey=${newsApiKey}&pageSize=${defaultNumberOfArticlesToRetrieve}&q=${term}&from=${deltaTimeToSearch}`
  );
};

export { getNewsArticles };
