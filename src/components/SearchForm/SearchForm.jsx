import "./SearchForm.css";

import { useForm } from "../../hooks/useForm";

function SearchForm({ handleSubmitSearchForm }) {
  const { values, handleChange, setValues } = useForm({});

  const submitSearchForm = (event) => {
    event.preventDefault();
    handleSubmitSearchForm(values.term);
  };

  return (
    <section className="search-form">
      <div className="search-form__background-cover"></div>
      <form className="search-form__form">
        <h1 className="search-form__title">What's going on in the world?</h1>
        <h2 className="search-form__description">
          Find the latest news on any topic and save them in your personal
          account.
        </h2>
        <div className="search-form__input-container">
          <input
            type="text"
            className="search-form__input"
            id="search-form-input"
            name="term"
            placeholder="Enter topic"
            value={values.term || ""}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            onClick={submitSearchForm}
            className="search-form__button"
          >
            Search
          </button>
        </div>
      </form>
    </section>
  );
}

export default SearchForm;
