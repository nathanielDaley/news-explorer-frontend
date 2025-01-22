import "./Preloader.css";

function Preloader() {
  return (
    <section className="preloader">
      <div className="preloader__spinner"></div>
      <div className="preloader__title">Searching for news...</div>
    </section>
  );
}

export default Preloader;
