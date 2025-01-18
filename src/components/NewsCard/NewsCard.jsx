import "./NewsCard.css";

import savedIcon from "../../assets/saved.svg";
import unsavedIcon from "../../assets/unsaved.svg";

function NewsCard() {
  return (
    <article className="news-card">
      <button type="button" className="news-card__save-button">
        <img
          src={unsavedIcon}
          alt="unsaved icon"
          className="news-card__unsaved-icon"
        />
        <img
          src={savedIcon}
          alt="saved icon"
          className="news-card__saved-icon news-card__icon_hidden"
        />
      </button>
      <img
        src="https://techcrunch.com/wp-content/uploads/2023/08/bluesky-004.jpg?resize=1200,675"
        alt="Bluesky article image"
        className="news-card__image"
      />
      <div className="news-card__content">
        <div className="news-card__date">November 4, 2020</div>
        <div className="news-card__title">
          Everyone Needs a Special 'Sit Spot' in Nature ar aw rwra rawraw rawr
          wa wr
        </div>
        <div className="news-card__description">
          Ever since I read Richard Louv's influential book, "Last Child in the
          Woods," the idea of having a special "sit spot" has stuck with me.
          This advice, which Louv attributes to nature educator Jon Young, is
          for both adults and children to find
          asdiopairoiaopwrtiojwtoijopietjoijt
        </div>
        <div className="news-article__source">TreeHugger</div>
      </div>
    </article>
  );
}

export default NewsCard;
