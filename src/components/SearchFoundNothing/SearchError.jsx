import searchErrorImage from "../../assets/not-found.svg";

import "./SearchError.css";

function SearchError({ searchError }) {
  return (
    <section
      className={`search-error ${
        Object.keys(searchError).length !== 0 ? "" : "search-error_hidden"
      }`}
    >
      <img
        src={searchErrorImage}
        alt="frowny magnifying glass"
        className="search-error__image"
      />
      <h2 className="search-error__title">{searchError.title}</h2>
      <h3 className="search-error__description">{searchError.description}</h3>
    </section>
  );
}

export default SearchError;
