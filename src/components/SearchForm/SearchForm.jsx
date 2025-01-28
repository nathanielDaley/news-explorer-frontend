import "./SearchForm.css";

import { useForm } from "../../hooks/useForm";

function SearchForm({ handleSubmitSearchForm }) {
  const { values, setValues } = useForm({});

  const submitSearchForm = (event) => {
    event.preventDefault();
    handleSubmitSearchForm(values.query);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    const singleWord = value.replace(/\s/g, "").trim();

    setValues((previousData) => ({
      ...previousData,
      [name]: singleWord,
    }));
  };

  return (
    <section className="search-form">
      <div className="search-form__background-cover"></div>
      <form onSubmit={submitSearchForm} className="search-form__form">
        <h1 className="search-form__title">
          What&apos;s going on in the world?
        </h1>
        <h2 className="search-form__description">
          Find the latest news on any topic and save them in your personal
          account.
        </h2>
        <div className="search-form__input-container">
          <input
            type="text"
            className="search-form__input"
            id="search-form-input"
            name="query"
            placeholder="Enter topic"
            value={values.query || ""}
            onChange={handleInputChange}
            required
            onInvalid={(event) =>
              event.currentTarget.setCustomValidity("Please enter a keyword")
            }
          />
          <button type="submit" className="search-form__button">
            Search
          </button>
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
