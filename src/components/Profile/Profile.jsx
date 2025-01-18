import NewsCardList from "../NewsCardList/NewsCardList";
import "./Profile.css";

function Profile({ newsArticles }) {
  return (
    <main className="profile">
      <div className="profile__header">
        <h3 className="profile__title">Saved articles</h3>
        <h2 className="profile__information">
          Elise, you have 5 saved articles
        </h2>
        <p className="profile__keywords-paragraph">
          By keywords:{" "}
          <span className="profile__keywords">
            Nature, Yellowstone, and 2 other
          </span>
        </p>
      </div>
      <NewsCardList newsArticles={newsArticles}></NewsCardList>
    </main>
  );
}

export default Profile;
