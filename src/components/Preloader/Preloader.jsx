import "./Preloader.css";

function Preloader({ isLoading }) {
  return (
    <section className={`preloader ${isLoading ? "" : "preloader_hidden"}`}>
      <div className="preloader__spinner"></div>
      <h3 className="preloader__title">Searching for news...</h3>
    </section>
  );
}

export default Preloader;
