import "./Preloader.css";

function Preloader({ isLoading }) {
  return (
    <section className={`preloader ${isLoading ? "" : "preloader_hidden"}`}>
      <div className="preloader__spinner"></div>
      <div className="preloader__title">Searching for news...</div>
    </section>
  );
}

export default Preloader;
